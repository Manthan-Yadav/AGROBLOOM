import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, ShieldCheck, Zap, Droplet, Sun, Layers, LineChart, Award, CheckCircle2, TrendingUp, Cpu, Radio, Sparkles } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import TestimonialSlider from '../components/TestimonialSlider';
import FaqAccordion from '../components/FaqAccordion';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { productsData } from '../data/productsData';
import { servicesData } from '../data/servicesData';

export default function Home({ onToast }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const featuredProducts = productsData.slice(0, 3);

  return (
    <div style={{ paddingTop: '10px' }}>
      {/* HIGH-IMPACT VIBRANT HERO SECTION */}
      <section style={{ padding: '0 20px', marginBottom: '70px' }}>
        <div
          style={{
            position: 'relative',
            minHeight: '90vh',
            borderRadius: '36px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '160px 20px 100px',
            color: 'var(--white)',
            boxShadow: '0 30px 70px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          {/* High-Resolution Farm Background Image */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(/hero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              zIndex: 1,
              transform: 'scale(1.02)'
            }}
          />

          {/* Clean Neutral Dark Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, rgba(10,12,10,0.45) 0%, rgba(10,12,10,0.75) 100%)',
              zIndex: 2
            }}
          />

          {/* Floating Live Telemetry Badge — Left */}
          <div
            className="float-anim"
            style={{
              position: 'absolute',
              top: '22%',
              left: '5%',
              zIndex: 10,
              background: 'rgba(15, 18, 12, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '20px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
              maxWidth: '270px'
            }}
          >
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Droplet size={22} color="var(--primary)" />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Soil Telemetry Active
              </div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                74% Hydration <span style={{ fontSize: '11px', color: 'var(--dark)', background: 'var(--primary)', fontWeight: '700', padding: '2px 6px', borderRadius: '4px' }}>Optimal</span>
              </div>
            </div>
          </div>

          {/* Floating AI Analytics Badge — Right */}
          <div
            className="float-anim-delay"
            style={{
              position: 'absolute',
              bottom: '18%',
              right: '5%',
              zIndex: 10,
              background: 'rgba(15, 18, 12, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '20px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
              maxWidth: '280px'
            }}
          >
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={22} color="#48BB78" />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                AI Crop Diagnostics
              </div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: '#fff' }}>
                +18% Yield Projected
              </div>
            </div>
          </div>

          {/* Central Hero Content */}
          <div className="container" style={{ position: 'relative', zIndex: 10, textAlignment: 'center' }}>
            <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
              {/* Pulsing Live Telemetry Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 22px',
                  borderRadius: '50px',
                  background: 'rgba(15, 18, 12, 0.8)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '13px',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '28px',
                  color: 'var(--white)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                }}
              >
                <span className="pulse-dot"></span>
                <span>Real-Time Field Telemetry & AI Analytics</span>
              </div>

              {/* H1 Headline with Clean Accent */}
              <h1
                style={{
                  fontSize: '68px',
                  fontWeight: '800',
                  lineHeight: '1.08',
                  marginBottom: '24px',
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF',
                  textShadow: '0 4px 16px rgba(0,0,0,0.6)'
                }}
              >
                Grow Green, Farm Smarter, <br />
                <span style={{ color: 'var(--primary)' }}>Yield Better.</span>
              </h1>

              {/* Subtext */}
              <p
                style={{
                  fontSize: '20px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.65',
                  marginBottom: '42px',
                  maxWidth: '700px',
                  margin: '0 auto 42px',
                  textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                  fontWeight: '400'
                }}
              >
                AgroBloom empowers commercial Indian growers with solar-powered IoT telemetry sensors, satellite imagery, and edge AI diagnostics to save water and boost harvest yields across every acre.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link to="/products" className="btn btn-primary" style={{ padding: '18px 40px', fontSize: '16.5px' }}>
                  Explore Products Catalog <ArrowRight size={18} className="arrow" />
                </Link>
                <Link to="/services" className="btn btn-outline-white" style={{ padding: '18px 36px', fontSize: '16.5px' }}>
                  <Sparkles size={18} color="var(--primary)" /> Calculate ROI in ₹
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATED COUNTERS / STATS BANNER */}
      <section style={{ background: 'var(--dark-2)', color: 'var(--white)', padding: '70px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="card-grid-4">
            {[
              { label: "Acres Monitored Across India", target: 2400000, suffix: "+", icon: <Layers size={22} color="var(--primary)" /> },
              { label: "Borewell Water Conserved", target: 42, suffix: "%", icon: <Droplet size={22} color="var(--primary)" /> },
              { label: "Average Crop Yield Increase", target: 18, suffix: "%", icon: <TrendingUp size={22} color="var(--primary)" /> },
              { label: "Commercial Farm Operations", target: 1850, suffix: "+", icon: <ShieldCheck size={22} color="var(--primary)" /> }
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '28px 24px',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(217, 255, 63, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                <div style={{ display: 'inline-flex', marginBottom: '12px' }}>{stat.icon}</div>
                <div style={{ fontSize: '42px', fontWeight: '800', color: 'var(--primary)', marginBottom: '6px', letterSpacing: '-0.02em' }}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: '500' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about-preview" style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '16px' }}>
                Empowering Modern Agronomy
              </div>
              <h2 className="section-heading">Data-Driven Technology Built for Indian Agriculture</h2>
              <p style={{ fontSize: '17px', color: 'var(--gray-600)', lineHeight: '1.7', marginBottom: '24px' }}>
                Traditional farming relies on guesswork and reactive irrigation. AgroBloom equips farm managers with real-time root-zone telemetry, micro-climate insights, and predictive disease detection.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#48BB78" />
                  <span style={{ fontWeight: '600', fontSize: '16px' }}>Solar-powered telemetry nodes with 10-year lifespan</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#48BB78" />
                  <span style={{ fontWeight: '600', fontSize: '16px' }}>Edge AI computing for offline field automation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#48BB78" />
                  <span style={{ fontWeight: '600', fontSize: '16px' }}>Seamless integration with Jain Drip, Netafim & starter panels</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-dark">
                Learn About Our Mission <ArrowRight size={18} className="arrow" />
              </Link>
            </div>

            <div
              style={{
                background: 'var(--dark-2)',
                borderRadius: 'var(--radius-lg)',
                padding: '48px',
                color: 'var(--white)',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
                border: '1px solid rgba(217, 255, 63, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={24} color="var(--dark)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: '800' }}>Agritech Innovation Award 2025</h4>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Recognized by Indian Ag Council</p>
                </div>
              </div>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', fontStyle: 'italic' }}>
                "AgroBloom has defined a new gold standard for field telemetry and smart irrigation automation across commercial agriculture."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section style={{ padding: '100px 0', background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Our Core Solutions</div>
            <h2 className="section-heading">Integrated Precision Agriculture Stack</h2>
            <p className="section-sub">
              From automated valve switching to daily satellite crop vigor analysis, we deliver end-to-end intelligence.
            </p>
          </div>

          <div className="card-grid-2">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                style={{
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(15,15,15,0.08)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, boxShadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                <div>
                  {svc.image && (
                    <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                      <img
                        src={svc.image}
                        alt={svc.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div style={{ padding: '32px 32px 20px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--primary-hover)', background: 'var(--dark)', padding: '6px 12px', borderRadius: '50px', display: 'inline-block', marginBottom: '16px' }}>
                      {svc.badge}
                    </span>
                    <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px' }}>{svc.title}</h3>
                    <p style={{ fontSize: '16px', color: 'var(--gray-600)', lineHeight: '1.6', marginBottom: '20px' }}>
                      {svc.shortDesc}
                    </p>
                  </div>
                </div>
                <div style={{ padding: '0 32px 32px' }}>
                  <Link to="/services" style={{ fontWeight: '700', color: 'var(--dark)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Explore Solution Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Featured Products</div>
            <h2 className="section-heading">Cutting-Edge Hardware & Software</h2>
            <p className="section-sub">
              Engineered for extreme outdoor reliability and continuous real-time field data transmission.
            </p>
          </div>

          <div className="card-grid-3">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onSelect={(prod) => setSelectedProduct(prod)} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/products" className="btn btn-dark" style={{ padding: '16px 32px' }}>
              View All 6 Products & Devices <ArrowRight size={18} className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '100px 0', background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Grower Success Stories</div>
            <h2 className="section-heading">Trusted by Indian Growers</h2>
            <p className="section-sub">
              Hear how farm managers transformed their operations and saved millions of liters of water.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Frequently Asked Questions</div>
            <h2 className="section-heading">Have Questions? We Have Answers</h2>
            <p className="section-sub">
              Learn how AgroBloom connects, deploys, and operates in real field environments.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* CTA BANNER */}
      <section>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-copy">
              <h2>Ready to optimize your acreage?</h2>
              <p>Speak with an AgroBloom agronomist today to custom build your field telemetry setup.</p>
            </div>
            <div>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '18px 36px' }}>
                Schedule Field Consultation <ArrowRight size={18} className="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT DETAIL MODAL */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(msg) => {
          if (onToast) onToast(msg);
        }}
      />
    </div>
  );
}
