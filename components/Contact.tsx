'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';

declare global {
  interface Window {
    turnstile?: { reset: (widget?: string) => void };
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // Load the Cloudflare Turnstile script once (only when a site key is configured).
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    if (document.querySelector('script[data-turnstile]')) return;
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    script.dataset.turnstile = 'true';
    document.head.appendChild(script);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const honeypot = (form.elements.namedItem('company') as HTMLInputElement | null)?.value;
    if (honeypot) return; // spam bot

    const token = (form.elements.namedItem('cf-turnstile-response') as HTMLInputElement | null)?.value;

    setStatus('sending');
    setErrorMsg('');

    const payload = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      token,
      company: honeypot,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) throw new Error(data.error || 'Something went wrong.');

      setStatus('success');
      form.reset();
    } catch (err) {
      console.error(err);
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    } finally {
      window.turnstile?.reset();
    }

    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">{"// let's connect"}</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind or want to collaborate? Let&apos;s talk.</p>
        </div>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required placeholder="Tell me about your project..." />
            </div>
            {/* Honeypot — hidden from real users */}
            <input type="text" name="company" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            {/* Cloudflare Turnstile widget (renders only when a site key is configured) */}
            {TURNSTILE_SITE_KEY && (
              <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-theme="dark" />
            )}
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <div className="form-toast">✅ Message sent! I&apos;ll get back to you soon.</div>}
            {status === 'error' && <div className="form-toast" style={{ color: '#ef4444', borderColor: 'rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.1)' }}>{errorMsg || 'Something went wrong. Try emailing me directly.'}</div>}
          </form>

          <div className="contact-info">
            <a href="mailto:yash.pandit@universalai.in" className="contact-link">
              <div className="contact-link-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>yash.pandit@universalai.in</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/yashpandit09/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-link-icon">💼</div>
              <div>
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/yashpandit09</p>
              </div>
            </a>
            <a href="https://github.com/YashPandit09" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-link-icon">🐙</div>
              <div>
                <h4>GitHub</h4>
                <p>github.com/YashPandit09</p>
              </div>
            </a>
            <a
              href="/Yash_Pandit_Resume.pdf"
              download
              className="btn btn-outline"
              onClick={() => track('resume_download', { location: 'contact' })}
            >
              Download Resume ↓
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
