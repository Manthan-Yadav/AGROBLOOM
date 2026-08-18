import React from 'react';
import { Star, ArrowUpRight, Cpu, Radio, ShieldCheck, HardDrive } from 'lucide-react';

export default function ProductCard({ product, onSelect }) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'hardware':
        return <Cpu size={18} color="var(--dark)" />;
      case 'software':
        return <HardDrive size={18} color="var(--dark)" />;
      case 'drones':
        return <Radio size={18} color="var(--dark)" />;
      default:
        return <ShieldCheck size={18} color="var(--dark)" />;
    }
  };

  return (
    <div
      style={{
        background: 'var(--white)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(15, 15, 15, 0.08)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.35s var(--ease), box-shadow 0.35s var(--ease), border-color 0.35s ease',
        boxShadow: 'var(--shadow-md)',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(15, 15, 15, 0.12)';
        e.currentTarget.style.borderColor = 'rgba(15, 15, 15, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.borderColor = 'rgba(15, 15, 15, 0.08)';
      }}
    >
      <div>
        {/* Product Image Header */}
        {product.image && (
          <div style={{ width: '100%', height: '210px', overflow: 'hidden', position: 'relative', background: 'var(--gray-100)' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />

            {/* Badge overlay */}
            {product.badge && (
              <span
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  fontSize: '11.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '6px 14px',
                  borderRadius: '50px',
                  background: 'var(--dark)',
                  color: 'var(--primary)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}
              >
                {product.badge}
              </span>
            )}
          </div>
        )}

        <div style={{ padding: '28px 28px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                background: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {getCategoryIcon(product.category)}
            </div>
            <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--gray-600)', letterSpacing: '0.05em' }}>
              {product.category}
            </span>
          </div>

          <h3 style={{ fontSize: '21px', fontWeight: '800', marginBottom: '8px', color: 'var(--dark)' }}>
            {product.name}
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              <Star size={15} fill="#FFB800" color="#FFB800" />
              <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--dark)' }}>{product.rating}</span>
            </div>
            <span style={{ fontSize: '13px', color: 'var(--gray-600)' }}>({product.reviews} reviews)</span>
          </div>

          <p style={{ fontSize: '14.5px', color: 'var(--gray-600)', lineHeight: '1.6', marginBottom: '10px' }}>
            {product.shortDesc}
          </p>
        </div>
      </div>

      <div
        style={{
          padding: '20px 28px 28px',
          borderTop: '1px solid var(--gray-200)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <span style={{ fontSize: '12px', color: 'var(--gray-600)', display: 'block' }}>Pricing starting at</span>
          <span style={{ fontSize: '22px', fontWeight: '800', color: 'var(--dark)' }}>{product.price}</span>
        </div>

        <button
          onClick={() => onSelect(product)}
          className="btn btn-outline"
          style={{ padding: '10px 18px', fontSize: '14px' }}
        >
          View Specs <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
}
