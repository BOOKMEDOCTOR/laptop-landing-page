import React from 'react';
import './landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Devotional Store</h1>
        <p>Coming Soon: Your one-stop shop for all Hindu devotional products.</p>
      </header>
      <div className="image-container">
        <img src="path_to_your_image.jpg" alt="Devotional Products" />
      </div>
      <div className="subscription-form">
        <h2>Stay Updated!</h2>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Notify Me</button>
        </form>
      </div>
      <footer className="footer">
        <p>Follow us on:</p>
        <div className="social-media-links">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://twitter.com">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;