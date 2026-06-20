export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">{'<YP />'}</span>
          <p className="footer-statement">
            Designing & engineering digital products at the intersection of AI, web, and blockchain.
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map(({ label, href }) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://github.com/YashPandit09" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/yashpandit09/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:yash.pandit@universalai.in">Email</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>Designed & developed by <span className="gradient-text">Yash Pandit</span> with ❤️</p>
        <p className="footer-copy">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
