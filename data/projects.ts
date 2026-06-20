export interface Project {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  githubUrl: string;
  demoUrl: string | null;
  image: string;
}

export const projects: Project[] = [
  {
    slug: 'krushi-mitra-ai',
    number: '01',
    title: 'Krushi-Mitra AI',
    tagline: 'Smart Farming Web App',
    description:
      'End-to-end ML deployment featuring yield prediction, NDVI crop health monitoring, and TensorFlow-powered AI Plant Doctor. Complete full-stack solution deployed on AWS.',
    problem:
      'Indian farmers lack affordable access to precision agriculture tools. Crop diseases often go undetected until it\'s too late, yield forecasting remains guesswork, and satellite-based monitoring is locked behind expensive enterprise software.',
    approach:
      'Built a three-module web platform: (1) a Random Forest yield predictor trained on historical crop data, (2) an NDVI vegetation health mapper consuming Sentinel-2 satellite imagery, and (3) a TensorFlow CNN plant disease classifier supporting 38 disease classes across 14 crop species.',
    outcome:
      'Deployed on AWS EC2 with Docker containerization. The disease detection module achieves 95%+ accuracy on the PlantVillage dataset. The platform provides actionable insights to farmers through an intuitive React dashboard.',
    stack: ['React.js', 'Flask', 'Python', 'TensorFlow', 'AWS EC2', 'Docker', 'MongoDB Atlas'],
    githubUrl: 'https://github.com/Shaunakrane914/Yield-Ai',
    demoUrl: null,
    image: '/projects/krushi-mitra.webp',
  },
  {
    slug: 'gridium-protocol',
    number: '02',
    title: 'Gridium Protocol',
    tagline: 'Decentralized AI-Powered Energy Microgrid',
    description:
      'Decentralized AI-powered energy microgrid for peer-to-peer electricity trading with zk-SNARK privacy and DDPG reinforcement learning price optimization.',
    problem:
      'Centralized energy grids suffer from inefficiency, lack of transparency, and inability to integrate distributed renewable sources. Consumers have no control over pricing or peer-to-peer energy exchange.',
    approach:
      'Designed a blockchain-based microgrid protocol: Solidity smart contracts with zk-SNARK proofs for privacy-preserving transactions, a PyTorch DDPG agent for real-time price optimization, and a React/Three.js dashboard for 3D grid visualization via WebSockets.',
    outcome:
      'Successfully simulated peer-to-peer energy trading with dynamic pricing. The RL agent converges to optimal pricing strategies within 500 episodes, and zk-proofs ensure transaction privacy without sacrificing auditability.',
    stack: ['Solidity', 'zk-SNARK', 'PyTorch', 'DDPG RL', 'React', 'Three.js', 'WebSockets'],
    githubUrl: 'https://github.com/YashPandit09/Live-Ai',
    demoUrl: null,
    image: '/projects/gridium-protocol.webp',
  },
  {
    slug: 'agentic-ai-misinformation',
    number: '03',
    title: 'Agentic AI Misinformation Detection',
    tagline: 'Financial Misinformation Detection System',
    description:
      'Agentic AI system that detects financial misinformation by cross-referencing news articles with real-time market data using multi-agent orchestration.',
    problem:
      'Financial misinformation spreads rapidly through news and social media, causing retail investors to make poor decisions. Manual fact-checking cannot keep pace with the volume of financial content published daily.',
    approach:
      'Engineered a multi-agent pipeline: (1) a scraping agent that collects financial news, (2) a TensorFlow NLP classifier that flags potentially misleading claims, (3) a verification agent that cross-references claims against live market data via APIs, and (4) a Gemini-powered synthesis agent that generates human-readable verdicts.',
    outcome:
      'The system processes hundreds of articles per hour and generates structured credibility reports. Deployed as a FastAPI service with a PostgreSQL (Supabase) backend and React frontend.',
    stack: ['Python', 'FastAPI', 'TensorFlow', 'Gemini API', 'PostgreSQL', 'Supabase', 'AWS'],
    githubUrl: 'https://github.com/Shaunakrane914/Misinformation',
    demoUrl: 'https://agenticai914.netlify.app/',
    image: '/projects/agentic-ai.webp',
  },
  {
    slug: 'kulswamini-ecommerce',
    number: '04',
    title: 'Kulswamini Grinding Works',
    tagline: 'E-Commerce Website for Real Client',
    description:
      'Responsive e-commerce website built for a real client business, improving their online visibility and customer accessibility with a dynamic product catalog.',
    problem:
      'Kulswamini Grinding Works, a local manufacturing business, had zero online presence. Potential customers could not discover products, compare specifications, or place inquiries digitally.',
    approach:
      'Designed and developed a fully responsive e-commerce platform with product catalog, category filtering, and inquiry system. Used React for the frontend with a MySQL-backed product database.',
    outcome:
      'Delivered a production website that increased the client\'s online visibility. The responsive design ensures accessibility across all devices, and the admin panel allows the client to manage products independently.',
    stack: ['React.js', 'HTML', 'CSS', 'MySQL', 'JavaScript'],
    githubUrl: 'https://github.com/YashPandit09/KGW',
    demoUrl: null,
    image: '/projects/kulswamini.webp',
  },
];
