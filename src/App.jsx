import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Check } from 'lucide-react';

// Scroll to top on route change
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  return (
    <Router>
      <ScrollToTopOnNavigate />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home onToast={showToast} />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products onToast={showToast} />} />
            <Route path="/services" element={<Services onToast={showToast} />} />
            <Route path="/contact" element={<Contact onToast={showToast} />} />
            <Route path="*" element={<Home onToast={showToast} />} />
          </Routes>
        </main>

        <Footer onSubscribeToast={showToast} />
        <BackToTop />

        {/* Global Toast Notification */}
        <div className={`toast-notice ${toastMessage ? 'show' : ''}`}>
          <div className="toast-icon">
            <Check size={14} />
          </div>
          <span>{toastMessage}</span>
        </div>
      </div>
    </Router>
  );
}
