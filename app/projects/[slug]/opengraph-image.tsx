import { ImageResponse } from 'next/og';
import { projects } from '@/data/projects';
import { SITE } from '@/lib/site';

export const alt = 'Project — Yash Pandit';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0D1117',
          backgroundImage:
            'radial-gradient(circle at 18% 20%, rgba(88,166,255,0.18), transparent 42%), radial-gradient(circle at 85% 80%, rgba(121,192,255,0.22), transparent 45%)',
          padding: '72px 80px',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', color: '#58A6FF', fontSize: 30 }}>
          {project ? `// project ${project.number}` : '// project'}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', color: '#F0F6FC', fontSize: 82, fontWeight: 700, lineHeight: 1.05 }}>
            {project ? project.title : 'Project'}
          </div>
          <div style={{ display: 'flex', color: '#58A6FF', fontSize: 40, marginTop: 18 }}>
            {project ? project.tagline : ''}
          </div>
          {project && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 30 }}>
              {project.stack.slice(0, 5).map((t) => (
                <div
                  key={t}
                  style={{
                    display: 'flex',
                    color: '#cbd3e0',
                    fontSize: 24,
                    border: '1px solid rgba(88,166,255,0.35)',
                    borderRadius: 8,
                    padding: '8px 16px',
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          )}
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
          <div style={{ display: 'flex' }}>{SITE.name}</div>
          <div style={{ display: 'flex', color: '#79C0FF' }}>{'<YP />'}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
