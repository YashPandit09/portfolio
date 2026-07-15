import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Yash Pandit`,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
  };
}

export default async function ProjectDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <div className="project-detail">
        <div className="project-detail-hero">
          <div className="container">
            <Link href="/#projects" className="back-link">← Back to Projects</Link>
            <h1>{project.title}</h1>
            <p className="tagline">{project.tagline}</p>
            <div className="project-detail-stack">
              {project.stack.map((t) => (
                <span key={t} className="skill-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="project-detail-section">
            <h2>The Problem</h2>
            <p>{project.problem}</p>
          </div>
          <div className="project-detail-section">
            <h2>The Approach</h2>
            <p>{project.approach}</p>
          </div>
          <div className="project-detail-section">
            <h2>The Outcome</h2>
            <p>{project.outcome}</p>
          </div>

          <div className="project-detail-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                View on GitHub
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
