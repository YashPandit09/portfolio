// Single source of truth for the site's public URL and identity.
// Domain not finalized yet — change SITE_URL in one place once decided
// (yashpandit.dev vs yashpandit.in). Everything else reads from here.
export const SITE_URL = 'https://yashpandit.dev';

export const SITE = {
  name: 'Yash Pandit',
  title: 'Yash Pandit — AI & Full-Stack Developer',
  description:
    'Portfolio of Yash Pandit — B.Tech AI/ML student at Universal AI University. Building production-ready AI products, full-stack web applications, and blockchain protocols.',
  email: 'yash.pandit@universalai.in',
  github: 'https://github.com/YashPandit09',
  linkedin: 'https://www.linkedin.com/in/yashpandit09/',
} as const;
