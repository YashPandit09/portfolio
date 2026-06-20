'use client';
import { motion, type Variants } from 'framer-motion';

type Tone = 'progress' | 'built' | 'hold';

const workingOn: { emoji: string; title: string; desc: string; status: string; tone: Tone }[] = [
  { emoji: '🧠', title: 'AI-Powered Product Intelligence', desc: 'Building an agentic pipeline that scrapes, analyzes, and benchmarks competitor products.', status: 'In Progress', tone: 'progress' },
  { emoji: '⚡', title: 'Blockchain Energy Protocol', desc: 'Decentralized microgrid with zk-proof privacy and RL-based dynamic pricing.', status: 'Built', tone: 'built' },
  { emoji: '🌾', title: 'Smart Farming Platform', desc: 'Krushi-Mitra AI with real-time NDVI monitoring and disease detection — partially built, currently on hold.', status: 'On Hold', tone: 'hold' },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function CurrentlyWorkingOn() {
  return (
    <section id="currently" className="currently-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">{"// what I'm up to"}</p>
          <h2 className="section-title">Currently Building</h2>
          <p className="section-subtitle">A snapshot of what I&apos;m building, what just shipped, and what&apos;s on hold</p>
        </div>

        <div className="currently-grid">
          {workingOn.map((item, i) => (
            <motion.div
              key={item.title}
              className="currently-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
            >
              <div className={`currently-status status-${item.tone}`}>
                <span className="status-dot" />
                <span className="status-text">{item.status}</span>
              </div>
              <div className="currently-icon">{item.emoji}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
