export interface SkillCategory {
  icon: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: '⌨️',
    title: 'Languages',
    description: 'Core programming languages across paradigms',
    skills: ['Python', 'JavaScript', 'C/C++', 'SQL', 'Solidity'],
  },
  {
    icon: '🧠',
    title: 'AI / ML',
    description: 'Machine learning frameworks and tools',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV'],
  },
  {
    icon: '🌐',
    title: 'Web Frontend',
    description: 'Modern frontend technologies and frameworks',
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Three.js', 'Framer Motion'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    description: 'Server-side frameworks and APIs',
    skills: ['Flask', 'FastAPI', 'Node.js', 'REST APIs', 'WebSockets'],
  },
  {
    icon: '🗄️',
    title: 'Database',
    description: 'Structured and unstructured data management',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'MongoDB Atlas'],
  },
  {
    icon: '☁️',
    title: 'Cloud / DevOps',
    description: 'Deployment, containerization, and cloud services',
    skills: ['AWS EC2', 'Docker', 'Vercel', 'Git', 'GitHub Actions'],
  },
  {
    icon: '🔗',
    title: 'Blockchain',
    description: 'Decentralized applications and smart contracts',
    skills: ['Solidity', 'zk-SNARKs', 'Smart Contracts', 'Web3.js'],
  },
  {
    icon: '📡',
    title: 'IoT',
    description: 'Hardware programming and embedded systems',
    skills: ['Arduino', 'IR Sensors', 'Relay Modules', 'Embedded C'],
  },
];

export const skillsJson = {
  name: 'Yash Pandit',
  role: 'AI & Full-Stack Developer',
  languages: ['Python', 'JavaScript', 'C/C++', 'SQL', 'Solidity'],
  ai_ml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
  frontend: ['React.js', 'Next.js', 'Three.js', 'HTML5', 'CSS3'],
  backend: ['Flask', 'FastAPI', 'Node.js', 'REST APIs'],
  databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase'],
  cloud: ['AWS EC2', 'Docker', 'Vercel', 'Git'],
  blockchain: ['Solidity', 'zk-SNARKs', 'Smart Contracts'],
  iot: ['Arduino', 'IR Sensors', 'Embedded C'],
};
