import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Send, Check } from 'lucide-react';

export default function Footer({ onSubscribeToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    if (onSubscribeToast) {
      onSubscribeToast("Thank you for subscribing to AgroBloom updates!");
    }
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <Sprout size={24} color="#D9FF3F" />
              <span>AgroBloom</span>
            </Link>
            <p>
              Precision agriculture technology built to help growers farm smarter, conserve water, and maximize yields across every acre.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">𝕏</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services & Plans</Link>
            <Link to="/products">Products Catalog</Link>
            <Link to="/contact">Contact & Support</Link>
          </div>

          <div className="footer-col">
            <h4>Technology</h4>
            <Link to="/products?category=hardware">Smart Sensors</Link>
            <Link to="/products?category=software">AI Analytics Platform</Link>
            <Link to="/products?category=hardware">Soil Monitoring</Link>
            <Link to="/products?category=drones">Multispectral Drones</Link>
          </div>

          <div className="footer-col">
            <h4>Stay Connected</h4>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '12px' }}>
              Subscribe for agronomic tips, weather insights, and tech updates.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  padding: '12px 16px',
                  borderRadius: '50px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.06)',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  flex: 1
                }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: '12px 20px', borderRadius: '50px' }}
              >
                {subscribed ? <Check size={16} /> : <Send size={16} />}
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AgroBloom Inc. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#security">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
