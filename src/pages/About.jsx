import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Globe, ShieldCheck, Heart, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { teamMembers, companyMilestones } from '../data/teamData';

export default function About() {
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
              backgroundImage: 'url(/about_hero.jpg)',
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

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '640px' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'rgba(255,255,255,0.75)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.75)' }}>Home</Link>
              <span style={{ color: 'var(--primary)', fontWeight: '700' }}>/</span>
              <span>About</span>
            </div>
            <h1 style={{ fontSize: '58px', fontWeight: '800', lineHeight: '1.08', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Our Story
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6' }}>
              Nine years of building precision agriculture technology, one field at a time.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div
              style={{
                background: 'var(--gray-100)',
                padding: '48px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(0,0,0,0.06)'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}
              >
                <Sprout size={28} color="var(--dark)" />
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '16px' }}>Our Mission</h3>
              <p style={{ fontSize: '17px', color: 'var(--gray-600)', lineHeight: '1.7' }}>
                To equip every farmer on earth with accessible, solar-powered field intelligence that eliminates water waste, prevents disease outbreaks, and increases agricultural sustainability.
              </p>
            </div>

            <div
              style={{
                background: 'var(--dark)',
                color: 'var(--white)',
                padding: '48px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}
              >
                <Globe size={28} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '16px' }}>Our Vision</h3>
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7' }}>
                A world where precision agriculture technology is standard across every farm, preserving 100 billion gallons of freshwater annually while feeding a growing global population.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{ padding: '100px 0', background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Guiding Principles</div>
            <h2 className="section-heading">Core Values Behind AgroBloom</h2>
            <p className="section-sub">
              Our engineering and agronomy teams operate with a relentless focus on field durability and farmer trust.
            </p>
          </div>

          <div className="card-grid-3">
            {[
              {
                icon: <ShieldCheck size={26} color="var(--dark)" />,
                title: "Rugged Reliability",
                desc: "We build hardware designed to survive hail, dust storms, extreme freeze, and 100% humidity without failing."
              },
              {
                icon: <Heart size={26} color="var(--dark)" />,
                title: "Grower-Centric Design",
                desc: "Every dashboard feature is built with input from real commercial growers to ensure intuitive simplicity."
              },
              {
                icon: <Award size={26} color="var(--dark)" />,
                title: "Scientific Precision",
                desc: "Our AI models are validated against lab soil tests and university field trials to maintain >94% predictive accuracy."
              }
            ].map((v, i) => (
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
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: '1.6' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Our Journey</div>
            <h2 className="section-heading">Milestones & Achievements</h2>
            <p className="section-sub">From a small robotics lab prototype to monitoring over 2.4 million acres.</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {companyMilestones.map((m, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'flex-start',
                  background: 'var(--gray-100)',
                  padding: '28px',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '4px solid var(--primary)'
                }}
              >
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: '800',
                    color: 'var(--dark)',
                    background: 'var(--primary)',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    lineHeight: '1'
                  }}
                >
                  {m.year}
                </span>
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '6px' }}>{m.title}</h4>
                  <p style={{ fontSize: '15px', color: 'var(--gray-600)' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section style={{ padding: '100px 0', background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Leadership</div>
            <h2 className="section-heading">Meet Our Team of Pioneers</h2>
            <p className="section-sub">
              Bringing together world-class experts in robotics, satellite telemetry, and commercial agronomy.
            </p>
          </div>

          <div className="card-grid-4">
            {teamMembers.map((m, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <img
                  src={m.image}
                  alt={m.name}
                  style={{ width: '100%', height: '240px', objectFit: 'cover' }}
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '19px', fontWeight: '800', marginBottom: '4px' }}>{m.name}</h3>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary-hover)', background: 'var(--dark)', padding: '4px 10px', borderRadius: '50px', display: 'inline-block', marginBottom: '12px' }}>
                    {m.role}
                  </span>
                  <p style={{ fontSize: '14px', color: 'var(--gray-600)', lineHeight: '1.5' }}>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-copy">
              <h2>Join the AgroBloom movement</h2>
              <p>Let's make your farm operations more sustainable and profitable.</p>
            </div>
            <div>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '18px 36px' }}>
                Contact Our Team <ArrowRight size={18} className="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
