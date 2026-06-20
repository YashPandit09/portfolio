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
          ? { x: offset * 30, y: -Math.abs(offset) * 8 - 8, rotate: offset * 7, scale: 1 }
          : { x: offset * 8, y: 0, rotate: offset * 2.5, scale: 0.9 }
      }
      transition={{ type: 'spring', stiffness: 280, damping: 20, delay: open ? Math.abs(offset) * 0.04 : 0 }}
      style={{ zIndex: 20 - Math.round(Math.abs(offset) * 2) }}
    >
      {slug && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={skill}
          width={26}
          height={26}
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
    <div className="deck" aria-hidden="true">
      {skills.map((skill, i) => (
        <LogoCard key={skill} skill={skill} index={i} mid={mid} open={open} />
      ))}
    </div>
  );
}
