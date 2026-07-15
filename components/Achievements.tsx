'use client';
import { motion, type Variants } from 'framer-motion';

interface Item {
  /** Path to a logo in /public/logos (e.g. '/logos/bluestock.png'). Falls back to `fallback` emoji when absent. */
  logo?: string;
  fallback: string;
  title: string;
  subtitle: string;
  desc: string;
}

const experience: Item[] = [
  {
    logo: undefined, // TODO: '/logos/adlersden.png' — drop the logo file in public/logos
    fallback: '🤖',
    title: 'AI Intern',
    subtitle: 'Adlers Den · 3-month internship',
    desc: 'Worked on applied AI projects, building and integrating machine-learning features into real products.',
  },
  {
    logo: '/logos/bluestock.webp',
    fallback: '💼',
    title: 'Software Developer Intern',
    subtitle: 'Bluestock Fintech · May 2025 – Jul 2025',
    desc: 'Full-stack development, agile workflows, and production-ready feature delivery in the fintech space.',
  },
];

const certifications: Item[] = [
  {
    logo: '/logos/edx.png',
    fallback: '🎓',
    title: 'AI Chatbots without Programming',
    subtitle: 'edX',
    desc: 'Designing and deploying AI chatbots using no-code and low-code platforms.',
  },
  {
    logo: '/logos/edx.png',
    fallback: '☁️',
    title: 'Intro to Cloud Computing',
    subtitle: 'edX',
    desc: 'Foundational knowledge in cloud architecture, services, and deployment models.',
  },
  {
    logo: '/logos/edx.png',
    fallback: '🤖',
    title: 'AI for Everyone',
    subtitle: 'edX',
    desc: 'AI concepts, applications, and societal impact for non-technical stakeholders.',
  },
];

const achievements: Item[] = [
  {
    fallback: '🏫',
    title: 'House Captain & Scholastic Head',
    subtitle: 'School Leadership',
    desc: 'Led school house activities, managed academic events, and mentored junior students.',
  },
  {
    logo: '/logos/uai.png',
    fallback: '🚀',
    title: 'Head of Operations',
    subtitle: 'University Club',
    desc: 'Overseeing logistics and strategy for the university technical club, coordinating events and hackathons.',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

function Card({ item, i }: { item: Item; i: number }) {
  return (
    <motion.div
      className="achievement-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={i}
    >
      {item.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.logo} alt={item.subtitle} className="ach-logo" />
      ) : (
        <div className="achievement-icon">{item.fallback}</div>
      )}
      <h3>{item.title}</h3>
      <p className="subtitle">{item.subtitle}</p>
      <p>{item.desc}</p>
    </motion.div>
  );
}

const groups: { key: string; label: string; items: Item[] }[] = [
  { key: 'experience', label: 'Experience', items: experience },
  { key: 'certifications', label: 'Certifications', items: certifications },
  { key: 'achievements', label: 'Achievements', items: achievements },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="section-header">
          <p className="section-label">{'// milestones'}</p>
          <h2 className="section-title">Experience, Certifications & Achievements</h2>
          <p className="section-subtitle">Where I&apos;ve worked, what I&apos;ve earned, and where I&apos;ve led</p>
        </div>

        {groups.map((group) => (
          <div className="ach-group" key={group.key}>
            <h3 className="ach-group-title">{group.label}</h3>
            <div className="achievements-grid">
              {group.items.map((item, i) => (
                <Card key={item.title} item={item} i={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
