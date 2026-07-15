import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Projects — Yash Pandit',
  description:
    'A full list of projects by Yash Pandit — AI/ML, full-stack web, blockchain, and IoT, from concept to deployment.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div className="project-detail">
        <div className="project-detail-hero">
          <div className="container">
            <Link href="/#projects" className="back-link">← Back to Home</Link>
            <h1>All Projects</h1>
            <p className="tagline">End-to-end solutions across AI/ML, web, blockchain, and IoT.</p>
          </div>
        </div>

        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.slug} className="project-card">
                <div className="project-card-img">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={300}
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="project-card-placeholder">
                      <span className="placeholder-prompt">{'> '}{project.slug}</span>
                      <span className="placeholder-title">{project.title}</span>
                    </div>
                  )}
                  <span className="project-card-number">{project.number}</span>
                </div>
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p className="project-card-tagline">{project.tagline}</p>
                  <p>{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((t) => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-card-links">
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="link-github">
                        Live Demo ↗
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-github">
                        GitHub
                      </a>
                    )}
                    <Link href={`/projects/${project.slug}`} className="link-detail">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
