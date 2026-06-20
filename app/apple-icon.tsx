import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #58A6FF 0%, #79C0FF 100%)',
          color: '#0D1117',
          fontSize: 96,
          fontWeight: 800,
          fontFamily: 'monospace',
          letterSpacing: '-4px',
        }}
      >
        YP
      </div>
    ),
    { ...size }
  );
}
