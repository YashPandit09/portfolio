import { ImageResponse } from 'next/og';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #00D9FF 0%, #7C3AED 100%)',
          color: '#0A0E1A',
          fontSize: 280,
          fontWeight: 800,
          fontFamily: 'monospace',
          letterSpacing: '-12px',
        }}
      >
        YP
      </div>
    ),
    { ...size }
  );
}
