// Maps a skill label to its Simple Icons slug (https://simpleicons.org).
// Logos are loaded from the Simple Icons CDN in their brand colour.
// Skills with no entry (e.g. "SQL", "REST APIs", "Embedded C") fall back to a
// text chip in the deck, and any slug that fails to load also falls back.
export const skillIcons: Record<string, string> = {
  Python: 'python',
  JavaScript: 'javascript',
  'C/C++': 'cplusplus',
  Solidity: 'solidity',
  TensorFlow: 'tensorflow',
  PyTorch: 'pytorch',
  'Scikit-learn': 'scikitlearn',
  Pandas: 'pandas',
  NumPy: 'numpy',
  OpenCV: 'opencv',
  'React.js': 'react',
  'Next.js': 'nextdotjs',
  HTML5: 'html5',
  CSS3: 'css',
  'Three.js': 'threedotjs',
  'Framer Motion': 'framer',
  Flask: 'flask',
  FastAPI: 'fastapi',
  'Node.js': 'nodedotjs',
  MongoDB: 'mongodb',
  PostgreSQL: 'postgresql',
  MySQL: 'mysql',
  Supabase: 'supabase',
  'MongoDB Atlas': 'mongodb',
  // AWS EC2: Simple Icons no longer hosts the Amazon/AWS logo — falls back to a text chip.
  Docker: 'docker',
  Vercel: 'vercel',
  Git: 'git',
  'GitHub Actions': 'githubactions',
  'Web3.js': 'web3dotjs',
  Arduino: 'arduino',
};
