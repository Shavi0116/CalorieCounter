import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NutriTrack. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
