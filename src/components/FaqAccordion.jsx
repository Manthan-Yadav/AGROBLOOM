import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqsData } from '../data/faqsData';

export default function FaqAccordion({ items = faqsData }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              background: isOpen ? 'var(--gray-100)' : 'var(--white)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(15, 15, 15, 0.08)',
              overflow: 'hidden',
              transition: 'background 0.3s ease, border-color 0.3s ease'
            }}
          >
            <button
              onClick={() => toggle(idx)}
              style={{
                width: '100%',
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'left',
                gap: '16px',
                fontWeight: '700',
                fontSize: '18px',
                color: 'var(--dark)'
              }}
            >
              <span>{item.question}</span>
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: isOpen ? 'var(--dark)' : 'var(--gray-200)',
                  color: isOpen ? 'var(--primary)' : 'var(--dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.3s ease'
                }}
              >
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>

            {isOpen && (
              <div style={{ padding: '0 28px 24px', color: 'var(--gray-600)', fontSize: '16px', lineHeight: '1.6' }}>
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
