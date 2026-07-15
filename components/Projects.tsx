'use client';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">{"// what I've built"}</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">End-to-end solutions from concept to deployment</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              className="project-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
