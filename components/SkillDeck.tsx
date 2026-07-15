'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillIcons } from '@/data/skillIcons';

function LogoCard({ skill, index, mid, open }: { skill: string; index: number; mid: number; open: boolean }) {
  const [failed, setFailed] = useState(false);
  const slug = skillIcons[skill];
  const offset = index - mid;

  return (
    <motion.div
      className="deck-card"
      initial={false}
      animate={
        open
          ? { x: offset * 44, y: -Math.abs(offset) * 10 - 14, rotate: offset * 6, scale: 1.05 }
          : { x: offset * 16, y: 0, rotate: offset * 3, scale: 1 }
      }
      whileHover={{ scale: 1.18, y: open ? -Math.abs(offset) * 10 - 30 : -16 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20, delay: open ? Math.abs(offset) * 0.04 : 0 }}
      style={{ zIndex: 20 - Math.round(Math.abs(offset) * 2) }}
    >
      <span className="deck-tooltip">{skill}</span>
      {slug && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={skill}
          width={34}
          height={34}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="deck-card-fallback">{skill}</span>
      )}
    </motion.div>
  );
}

export default function SkillDeck({ skills, open }: { skills: string[]; open: boolean }) {
  const mid = (skills.length - 1) / 2;
  return (
    <div className="deck">
      {skills.map((skill, i) => (
        <LogoCard key={skill} skill={skill} index={i} mid={mid} open={open} />
      ))}
    </div>
  );
}
