import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

export const alt = 'Yash Pandit — AI & Full-Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0A0E1A',
          backgroundImage:
            'radial-gradient(circle at 18% 22%, rgba(0,217,255,0.18), transparent 42%), radial-gradient(circle at 85% 78%, rgba(124,58,237,0.22), transparent 45%)',
          padding: '72px 80px',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', color: '#00D9FF', fontSize: 30 }}>
          {'> whoami'}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', color: '#8b95a7', fontSize: 34, marginBottom: 14 }}>
            Hi, I&apos;m
          </div>
          <div style={{ display: 'flex', color: '#E8EAED', fontSize: 96, fontWeight: 700, lineHeight: 1 }}>
            {SITE.name}
          </div>
          <div style={{ display: 'flex', color: '#00D9FF', fontSize: 46, marginTop: 20 }}>
            AI &amp; Full-Stack Developer
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#8b95a7',
            fontSize: 26,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 28,
          }}
        >
          <div style={{ display: 'flex' }}>B.Tech @ Universal AI University</div>
          <div style={{ display: 'flex', color: '#7C3AED' }}>{'<YP />'}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
