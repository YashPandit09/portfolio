import { NextResponse } from 'next/server';

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
  token?: string;
  company?: string; // honeypot — real users never fill this
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

async function verifyTurnstile(token: string, ip?: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured (e.g. local dev) — skip verification

  const form = new URLSearchParams();
  form.append('secret', secret);
  form.append('response', token);
  if (ip) form.append('remoteip', ip);

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: form,
  });
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

export async function POST(req: Request) {
  let body: ContactBody;
  try {
    body = (await req.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot — pretend success so bots don't retry.
  if (body.company) return NextResponse.json({ ok: true });

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Please fill in all fields.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  // Cloudflare Turnstile — only enforced when a secret key is configured.
  if (process.env.TURNSTILE_SECRET_KEY) {
    if (!body.token) {
      return NextResponse.json({ error: 'Please complete the captcha.' }, { status: 400 });
    }
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
    const passed = await verifyTurnstile(body.token, ip);
    if (!passed) {
      return NextResponse.json({ error: 'Captcha verification failed. Please try again.' }, { status: 400 });
    }
  }

  // Delivery via EmailJS REST API (server-side requires the private key / accessToken).
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    console.error('Contact form: EmailJS env vars are not fully configured.');
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
  }

  const emailRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey,
      template_params: { from_name: name, from_email: email, message },
    }),
  });

  if (!emailRes.ok) {
    const detail = await emailRes.text();
    console.error('Contact form: EmailJS send failed', emailRes.status, detail);
    return NextResponse.json({ error: 'Failed to send message. Please email me directly.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
