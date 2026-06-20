import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Yash Pandit',
};

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="terminal">
        <div className="terminal-bar">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
          <span className="terminal-title">yash@portfolio ~ </span>
        </div>
        <div className="terminal-body">
          <div>
            <span className="terminal-prompt">$ </span>
            <span className="terminal-command">cd /requested-page</span>
          </div>
          <div style={{ marginTop: '0.5rem', color: '#f97583' }}>
            bash: cd: /requested-page: No such file or directory
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <span className="terminal-prompt">$ </span>
            <span className="terminal-command">echo &quot;Looks like this page doesn&apos;t exist. Let me take you home.&quot;</span>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/" className="btn btn-primary">
              cd ~ (Go Home)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
