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
          background: 'linear-gradient(135deg, #58A6FF 0%, #79C0FF 100%)',
          color: '#0D1117',
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
