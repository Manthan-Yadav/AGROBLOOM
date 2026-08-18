import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import FaqAccordion from '../components/FaqAccordion';

export default function Contact({ onToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    acreage: '100-500',
    inquiryType: 'hardware',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    if (onToast) {
      onToast(`Thank you, ${formData.name}! Your inquiry has been sent to our agronomy team.`);
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        acreage: '100-500',
        inquiryType: 'hardware',
        message: ''
      });
    }, 4000);
  };

  return (
    <div>
      {/* PAGE HERO WITH RICH BACKGROUND IMAGE */}
      <section style={{ padding: '0 20px', marginTop: '20px', marginBottom: '60px' }}>
        <div
          style={{
            position: 'relative',
            minHeight: '420px',
            borderRadius: '36px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '60px 50px',
            color: 'var(--white)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          {/* Background Image */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(/contact_hero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 45%',
              zIndex: 1,
              transform: 'scale(1.02)'
            }}
          />

          {/* Dark Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, rgba(10,12,10,0.2) 0%, rgba(10,12,10,0.85) 100%)',
              zIndex: 2
            }}
          />

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '660px' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'rgba(255,255,255,0.75)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.75)' }}>Home</Link>
              <span style={{ color: 'var(--primary)', fontWeight: '700' }}>/</span>
              <span>Contact</span>
            </div>
            <h1 style={{ fontSize: '58px', fontWeight: '800', lineHeight: '1.08', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Get In Touch
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6' }}>
              Whether you manage 10 acres or 5,000 acres, our technical specialists and agronomists are here to help you deploy.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section style={{ padding: '80px 0', background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="card-grid-3">
            {[
              {
                city: "Bengaluru, Karnataka (HQ)",
                address: "42 AgTech Park, Outer Ring Road, Bellandur, Bengaluru, KA 560103",
                email: "bengaluru@agrobloom.in",
                phone: "+91 98765 43210",
                tag: "India Headquarters"
              },
              {
                city: "Pune, Maharashtra",
                address: "Agri-Tech Zone, MIDC Industrial Area, Bhosari, Pune, MH 411026",
                email: "pune@agrobloom.in",
                phone: "+91 98123 45678",
                tag: "Western India Hub"
              },
              {
                city: "Chandigarh, Punjab",
                address: "Plot 18, Rajiv Gandhi IT Park, Sector 13, Chandigarh, PB 160101",
                email: "chandigarh@agrobloom.in",
                phone: "+91 97800 11223",
                tag: "North India Hub"
              }
            ].map((loc, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--white)',
                  padding: '36px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    background: 'var(--dark)',
                    color: 'var(--primary)',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    display: 'inline-block',
                    marginBottom: '16px'
                  }}
                >
                  {loc.tag}
                </span>

                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px' }}>{loc.city}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--gray-600)', fontSize: '14.5px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <MapPin size={18} color="var(--dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{loc.address}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Mail size={18} color="var(--dark)" style={{ flexShrink: 0 }} />
                    <a href={`mailto:${loc.email}`} style={{ color: 'var(--dark)', fontWeight: '600' }}>{loc.email}</a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Phone size={18} color="var(--dark)" style={{ flexShrink: 0 }} />
                    <a href={`tel:${loc.phone}`} style={{ color: 'var(--dark)', fontWeight: '600' }}>{loc.phone}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT FORM */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* Form */}
            <div
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-lg)',
                padding: '48px',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Send Us a Message</h2>
              <p style={{ fontSize: '16px', color: 'var(--gray-600)', marginBottom: '32px' }}>
                Fill out the form below and an assigned agronomic sales engineer will respond within 24 hours.
              </p>

              {submitted ? (
                <div
                  style={{
                    background: 'rgba(72, 187, 120, 0.12)',
                    border: '1.5px solid #48BB78',
                    padding: '32px',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center'
                  }}
                >
                  <CheckCircle2 size={48} color="#48BB78" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px', color: 'var(--dark)' }}>
                    Message Received!
                  </h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: '16px' }}>
                    Thank you for reaching out. A confirmation email has been sent to <strong>{formData.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Rajesh Patel"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          border: '1px solid var(--gray-300)',
                          fontSize: '15px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>
                        Farm / Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="rajesh@patelfarms.in"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          border: '1px solid var(--gray-300)',
                          fontSize: '15px',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 12345"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          border: '1px solid var(--gray-300)',
                          fontSize: '15px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>
                        Total Acreage
                      </label>
                      <select
                        name="acreage"
                        value={formData.acreage}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '12px',
                          border: '1px solid var(--gray-300)',
                          fontSize: '15px',
                          outline: 'none',
                          background: '#fff'
                        }}
                      >
                        <option value="under-100">&lt; 100 Acres</option>
                        <option value="100-500">100 - 500 Acres</option>
                        <option value="500-1500">500 - 1,500 Acres</option>
                        <option value="1500-5000">1,500 - 5,000 Acres</option>
                        <option value="5000+">5,000+ Acres</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>
                      Primary Inquiry Focus
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: '1px solid var(--gray-300)',
                        fontSize: '15px',
                        outline: 'none',
                        background: '#fff'
                      }}
                    >
                      <option value="hardware">Hardware Telemetry (AgroNode / Solenoids)</option>
                      <option value="software">AI Platform & Satellite Software</option>
                      <option value="drone">Multispectral Drone Survey</option>
                      <option value="support">Technical Support & Warranty</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>
                      How Can We Help Your Farm? *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your crop varieties (paddy, sugarcane, cotton, fruit orchards), soil profile, and borewell/drip setups..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: '1px solid var(--gray-300)',
                        fontSize: '15px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ padding: '16px 32px', marginTop: '8px' }}>
                    Submit Consultation Request <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar info */}
            <div>
              <div
                style={{
                  background: 'var(--dark)',
                  color: 'var(--white)',
                  padding: '40px',
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: '30px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <Clock size={24} color="var(--primary)" />
                  <h4 style={{ fontSize: '20px', fontWeight: '800' }}>Response Guarantee</h4>
                </div>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '20px' }}>
                  During kharif and rabi cropping seasons, our technical engineers provide 24/7 toll-free support for pump automation and sensor networks.
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', display: 'block' }}>Toll-Free Support Hotline</span>
                  <span style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary)' }}>+91 1800 123 4567</span>
                </div>
              </div>

              <div style={{ background: 'var(--gray-100)', padding: '36px', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px' }}>Agronomist On-Site Audits</h4>
                <p style={{ fontSize: '14px', color: 'var(--gray-600)', lineHeight: '1.6' }}>
                  We offer complimentary on-site drone survey demonstrations and sensor testing across Punjab, Maharashtra, Gujarat, Karnataka, and Telangana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '100px 0', background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Common Questions</div>
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </div>
  );
}
