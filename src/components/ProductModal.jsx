import React, { useState } from 'react';
import { X, CheckCircle2, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function ProductModal({ product, onClose, onRequestQuote }) {
  const [requested, setRequested] = useState(false);

  if (!product) return null;

  const handleQuoteClick = () => {
    setRequested(true);
    if (onRequestQuote) {
      onRequestQuote(`Quote requested for ${product.name}`);
    }
    setTimeout(() => {
      setRequested(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--white)',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '40px',
          position: 'relative',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--gray-200)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--gray-200)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--dark)',
            transition: 'all 0.2s ease'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {product.image && (
          <div style={{ width: '100%', height: '240px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '24px', position: 'relative' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}

        <div style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '50px', background: 'var(--primary)', fontWeight: '700', fontSize: '13px', marginBottom: '16px' }}>
          {product.category.toUpperCase()}
        </div>

        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '12px', color: 'var(--dark)' }}>
          {product.name}
        </h2>

        <p style={{ fontSize: '16px', color: 'var(--gray-600)', lineHeight: '1.6', marginBottom: '28px' }}>
          {product.description}
        </p>

        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '14px', color: 'var(--dark)' }}>
            Technical Specifications
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            {product.specs.map((spec, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--gray-100)',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                <span style={{ fontSize: '12px', color: 'var(--gray-600)', display: 'block', fontWeight: '500' }}>
                  {spec.label}
                </span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--dark)' }}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '14px', color: 'var(--dark)' }}>
            Key Features & Benefits
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {product.features.map((feat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="#48BB78" />
                <span style={{ fontSize: '15px', color: 'var(--dark)', fontWeight: '500' }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '24px',
            borderTop: '1px solid var(--gray-200)',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <span style={{ fontSize: '13px', color: 'var(--gray-600)' }}>Estimated Hardware Unit Price</span>
            <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--dark)' }}>{product.price}</div>
          </div>

          <button
            onClick={handleQuoteClick}
            className="btn btn-primary"
            style={{ padding: '16px 32px', fontSize: '16px' }}
          >
            {requested ? (
              <>
                <CheckCircle2 size={18} /> Added to Quote Request!
              </>
            ) : (
              <>
                <ShoppingBag size={18} /> Request Field Quote
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
