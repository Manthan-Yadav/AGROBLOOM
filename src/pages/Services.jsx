import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, BrainCircuit, Layers, Plane, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import RoiCalculator from '../components/RoiCalculator';
import { servicesData, pricingTiers } from '../data/servicesData';

export default function Services({ onToast }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Droplets':
        return <Droplets size={24} color="var(--dark)" />;
      case 'BrainCircuit':
        return <BrainCircuit size={24} color="var(--dark)" />;
      case 'Layers':
        return <Layers size={24} color="var(--dark)" />;
      case 'Plane':
        return <Plane size={24} color="var(--dark)" />;
      default:
        return <ShieldCheck size={24} color="var(--dark)" />;
    }
  };

  const handleSelectPlan = (tier) => {
    if (onToast) {
      onToast(`Selected ${tier.name} package. Redirecting to setup consultation...`);
    }
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
              backgroundImage: 'url(/services_hero.jpg)',
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
              <span>Services</span>
            </div>
            <h1 style={{ fontSize: '58px', fontWeight: '800', lineHeight: '1.08', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Services & Pricing
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6' }}>
              End-to-end agronomic services from initial soil profiling to automated valve actuation and satellite imagery subscriptions.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES SHOWCASE */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Solutions Portfolio</div>
            <h2 className="section-heading">How AgroBloom Transforms Your Farm</h2>
            <p className="section-sub">
              Customized precision hardware and software service packages built around your crop types.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {servicesData.map((svc, i) => (
              <div
                key={svc.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '50px',
                  alignItems: 'center',
                  background: 'var(--gray-100)',
                  padding: '48px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(0,0,0,0.06)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {getIcon(svc.icon)}
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--primary-hover)', background: 'var(--dark)', padding: '4px 12px', borderRadius: '50px' }}>
                      {svc.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '16px' }}>{svc.title}</h3>
                  <p style={{ fontSize: '16px', color: 'var(--gray-600)', lineHeight: '1.7', marginBottom: '24px' }}>
                    {svc.fullDesc}
                  </p>
                </div>

                <div style={{ background: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.08)' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: 'var(--dark)' }}>
                    Key Service Outcomes:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {svc.benefits.map((b, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Check size={18} color="#48BB78" />
                        <span style={{ fontSize: '15px', color: 'var(--dark)', fontWeight: '500' }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR SECTION */}
      <section style={{ padding: '100px 0', background: 'var(--dark)' }}>
        <div className="container">
          <RoiCalculator />
        </div>
      </section>

      {/* PRICING TIERS */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Flexible Plans</div>
            <h2 className="section-heading">Transparent Acreage Subscriptions</h2>
            <p className="section-sub">Choose the deployment tier that matches your farm scale and telemetry requirements.</p>
          </div>

          <div className="card-grid-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                style={{
                  background: tier.popular ? 'var(--dark)' : 'var(--gray-100)',
                  color: tier.popular ? 'var(--white)' : 'var(--dark)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '44px 36px',
                  border: tier.popular ? '2px solid var(--primary)' : '1px solid rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: tier.popular ? 'var(--shadow-lg)' : 'none'
                }}
              >
                <div>
                  {tier.popular && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-14px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'var(--primary)',
                        color: 'var(--dark)',
                        fontWeight: '800',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '6px 16px',
                        borderRadius: '50px'
                      }}
                    >
                      Most Popular
                    </span>
                  )}

                  <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '4px' }}>{tier.name}</h3>
                  <p style={{ fontSize: '14px', color: tier.popular ? 'rgba(255,255,255,0.6)' : 'var(--gray-600)', marginBottom: '24px' }}>
                    {tier.acres}
                  </p>

                  <div style={{ marginBottom: '28px' }}>
                    <span style={{ fontSize: '42px', fontWeight: '800' }}>{tier.price}</span>
                    <span style={{ fontSize: '15px', color: tier.popular ? 'rgba(255,255,255,0.6)' : 'var(--gray-600)' }}>
                      {tier.period}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px' }}>
                        <Check size={16} color={tier.popular ? 'var(--primary)' : '#48BB78'} />
                        <span style={{ opacity: 0.9 }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={() => handleSelectPlan(tier)}
                  className={`btn ${tier.popular ? 'btn-primary' : 'btn-dark'}`}
                  style={{ width: '100%' }}
                >
                  {tier.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-copy">
              <h2>Need custom farm deployment?</h2>
              <p>Contact our engineering sales team for multi-farm enterprise pricing.</p>
            </div>
            <div>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '18px 36px' }}>
                Talk to Sales <ArrowRight size={18} className="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
