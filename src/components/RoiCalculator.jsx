import React, { useState } from 'react';
import { Calculator, Droplets, TrendingUp, Check } from 'lucide-react';

export default function RoiCalculator() {
  const [acres, setAcres] = useState(500);
  const [cropType, setCropType] = useState('grain');
  const [waterCost, setWaterCost] = useState(9500);

  // Agronomic calculation logic for Indian farming context
  const cropMultipliers = {
    grain: { yieldBoost: 0.14, waterSaveRatio: 0.35, valPerAcre: 52000 },
    vineyard: { yieldBoost: 0.18, waterSaveRatio: 0.42, valPerAcre: 240000 },
    vegetable: { yieldBoost: 0.16, waterSaveRatio: 0.38, valPerAcre: 180000 },
    cotton: { yieldBoost: 0.15, waterSaveRatio: 0.36, valPerAcre: 76000 }
  };

  const crop = cropMultipliers[cropType] || cropMultipliers.grain;
  const annualWaterSavings = Math.round(acres * waterCost * crop.waterSaveRatio);
  const annualYieldGain = Math.round(acres * crop.valPerAcre * crop.yieldBoost);
  const totalAnnualSavings = annualWaterSavings + annualYieldGain;

  // Estimated hardware/service investment
  const estimatedCost = Math.round(acres * 1100 + 95000);
  const paybackMonths = Math.max(1, Math.round((estimatedCost / totalAnnualSavings) * 12 * 10) / 10);

  return (
    <div
      style={{
        background: 'var(--dark-2)',
        color: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        padding: '50px 40px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'var(--shadow-lg)'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div className="eyebrow on-dark" style={{ marginBottom: '12px' }}>
          <Calculator size={14} color="var(--primary)" /> Interactive ROI Estimator
        </div>
        <h3 style={{ fontSize: '32px', fontWeight: '800' }}>Calculate Your Farm Savings</h3>
        <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '16px', marginTop: '8px' }}>
          See how much water and money AgroBloom smart telemetry can save on your field in Indian Rupees.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <label style={{ fontSize: '14px', fontWeight: '600', display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Total Farm Acreage</span>
              <span style={{ color: 'var(--primary)', fontWeight: '700' }}>{acres.toLocaleString()} Acres</span>
            </label>
            <input
              type="range"
              min="50"
              max="5000"
              step="50"
              value={acres}
              onChange={(e) => setAcres(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: 'var(--primary)',
                cursor: 'pointer'
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: '14px', fontWeight: '600', display: 'block', marginBottom: '8px' }}>
              Primary Crop Classification
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { id: 'grain', name: 'Grain & Wheat / Rice' },
                { id: 'vineyard', name: 'Fruit Orchards & Grapes' },
                { id: 'vegetable', name: 'High-Value Vegetables' },
                { id: 'cotton', name: 'Cotton & Sugarcane' }
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCropType(c.id)}
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    border: cropType === c.id ? '2px solid var(--primary)' : '1px solid rgba(255,255,255,0.15)',
                    background: cropType === c.id ? 'rgba(217, 255, 63, 0.12)' : 'rgba(255,255,255,0.04)',
                    color: cropType === c.id ? 'var(--primary)' : 'rgba(255,255,255,0.8)',
                    fontWeight: cropType === c.id ? '700' : '500',
                    fontSize: '13.5px',
                    textAlign: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label style={{ fontSize: '14px', fontWeight: '600', display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Avg Annual Water/Pumping Cost per Acre</span>
              <span style={{ color: 'var(--primary)', fontWeight: '700' }}>₹{waterCost.toLocaleString()}/Acre</span>
            </label>
            <input
              type="range"
              min="3000"
              max="30000"
              step="500"
              value={waterCost}
              onChange={(e) => setWaterCost(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: 'var(--primary)',
                cursor: 'pointer'
              }}
            />
          </div>
        </div>

        {/* Results Output */}
        <div
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--radius-md)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <h4 style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>
              Estimated Annual Economic Benefit (₹)
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '12px' }}>
                <Droplets size={20} color="var(--primary)" style={{ marginBottom: '8px' }} />
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', display: 'block' }}>Water Cost Reduction</span>
                <span style={{ fontSize: '22px', fontWeight: '800', color: '#fff' }}>₹{annualWaterSavings.toLocaleString()}</span>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '12px' }}>
                <TrendingUp size={20} color="var(--primary)" style={{ marginBottom: '8px' }} />
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', display: 'block' }}>Yield Value Boost</span>
                <span style={{ fontSize: '22px', fontWeight: '800', color: '#fff' }}>₹{annualYieldGain.toLocaleString()}</span>
              </div>
            </div>

            <div style={{ background: 'rgba(217, 255, 63, 0.15)', border: '1px solid var(--primary)', padding: '20px', borderRadius: '14px', textAlign: 'center' }}>
              <span style={{ fontSize: '13px', color: 'var(--white)', display: 'block', fontWeight: '500' }}>
                Combined Total Annual Return
              </span>
              <span style={{ fontSize: '34px', fontWeight: '800', color: 'var(--primary)', display: 'block', margin: '4px 0' }}>
                ₹{totalAnnualSavings.toLocaleString()} / yr
              </span>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
                Estimated System Payback Period: <strong style={{ color: '#fff' }}>{paybackMonths} Months</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
