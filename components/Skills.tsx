'use client';
import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { skillCategories, skillsJson, type SkillCategory } from '@/data/skills';
import SkillDeck from './SkillDeck';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

function SkillCard({ cat, i }: { cat: SkillCategory; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="skill-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={i}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
    >
      <div className="skill-card-icon">{cat.icon}</div>
      <h3>{cat.title}</h3>
      <p>{cat.description}</p>
      {/* Accessible plain list of the skills (the visual deck is aria-hidden). */}
      <ul className="sr-only">
        {cat.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <SkillDeck skills={cat.skills} open={open} />
    </motion.div>
  );
}

export default function Skills() {
  const jsonString = JSON.stringify(skillsJson, null, 2);

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-label">{'// what I work with'}</p>
          <h2 className="section-title">Skills & Tech Stack</h2>
          <p className="section-subtitle">Technologies I use to bring ideas to life — hover a category to deal the deck</p>
        </div>

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
              <span className="terminal-command">cat skills.json</span>
            </div>
            <pre style={{ marginTop: '0.8rem', whiteSpace: 'pre-wrap' }}>
              {jsonString.split('\n').map((line, i) => {
                const colored = line
                  .replace(/"([^"]+)":/g, '<key>"$1"</key>:')
                  .replace(/: "([^"]+)"/g, ': <val>"$1"</val>');
                return (
                  <div key={i} dangerouslySetInnerHTML={{
                    __html: colored
                      .replace(/<key>/g, '<span class="terminal-key">')
                      .replace(/<\/key>/g, '</span>')
                      .replace(/<val>/g, '<span class="terminal-value">')
                      .replace(/<\/val>/g, '</span>')
                      .replace(/[\[\]{}]/g, (m) => `<span class="terminal-bracket">${m}</span>`)
                  }} />
                );
              })}
            </pre>
          </div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
