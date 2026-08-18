import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, ShieldCheck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { productsData } from '../data/productsData';

export default function Products({ onToast }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = productsData.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              backgroundImage: 'url(/products_hero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
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
              <span>Products</span>
            </div>
            <h1 style={{ fontSize: '58px', fontWeight: '800', lineHeight: '1.08', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Products Catalog
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6' }}>
              Explore our line of solar telemetry nodes, edge computing gateways, multispectral drone payloads, and farm SaaS.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER & CATALOG */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          {/* Controls bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '48px',
              background: 'var(--gray-100)',
              padding: '16px 24px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(0,0,0,0.06)'
            }}
          >
            {/* Category Tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Products' },
                { id: 'hardware', label: 'Hardware Telemetry' },
                { id: 'software', label: 'AI Software & SaaS' },
                { id: 'drones', label: 'Multispectral Drones' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '50px',
                    fontSize: '14.5px',
                    fontWeight: '600',
                    background: activeCategory === tab.id ? 'var(--dark)' : 'transparent',
                    color: activeCategory === tab.id ? 'var(--primary)' : 'var(--dark)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div style={{ position: 'relative', width: '280px' }}>
              <Search
                size={18}
                color="var(--gray-400)"
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="text"
                placeholder="Search products or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 40px',
                  borderRadius: '50px',
                  border: '1px solid var(--gray-300)',
                  background: 'var(--white)',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="card-grid-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={(p) => setSelectedProduct(p)}
                />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>No products found</h3>
              <p style={{ color: 'var(--gray-600)' }}>Try adjusting your search query or switching categories.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="btn btn-outline"
                style={{ marginTop: '16px' }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--gray-100)', padding: '80px 0' }}>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-copy">
              <h2>Need a custom hardware bundle?</h2>
              <p>Our agronomists can configure custom sensor packages for your specific field geometry.</p>
            </div>
            <div>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '18px 36px' }}>
                Talk to Hardware Specialist <ArrowRight size={18} className="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
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
