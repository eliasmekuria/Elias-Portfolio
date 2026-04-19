import { useState } from 'react'

function MarkAsSoldModal({ watch, onConfirm, onClose }) {
  const [salePrice, setSalePrice] = useState(watch.marketValue)

  const gain = salePrice - watch.purchasePrice
  const isPositive = gain >= 0

  return (
    <>
      {/* Scrim */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 10,
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        backgroundColor: 'var(--surface-raised)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-subtle)',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        gap: '20px',
      }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}>
            Mark as Sold
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              fontSize: '20px',
              cursor: 'pointer',
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        {/* Watch name */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>
            {watch.model}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
            {watch.reference}
          </div>
        </div>

        {/* Sale price input */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{
            fontSize: '11px',
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>
            Sale Price
          </label>
          <input
            type="number"
            value={salePrice}
            onChange={e => setSalePrice(Number(e.target.value))}
            style={{
              backgroundColor: 'var(--surface-overlay)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              padding: '10px 12px',
              color: 'var(--text-primary)',
              fontSize: '13px',
              fontFamily: 'var(--font-mono)',
              outline: 'none',
            }}
          />
        </div>

        {/* Summary card */}
        <div style={{
          backgroundColor: 'var(--surface-overlay)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {[
            { label: 'Purchased', value: `$${watch.purchasePrice.toLocaleString()}` },
            { label: 'Sale Price', value: `$${Number(salePrice).toLocaleString()}` },
            { label: 'Realized Gain', value: `${isPositive ? '+' : ''}$${gain.toLocaleString()}`, isGain: true },
          ].map(({ label, value, isGain }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{label}</span>
              <span style={{
                fontSize: '13px',
                fontFamily: 'var(--font-mono)',
                color: isGain
                  ? isPositive ? 'var(--delta-positive)' : 'var(--delta-negative)'
                  : 'var(--text-primary)',
              }}>
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button
            onClick={() => onConfirm(salePrice)}
            style={{
              backgroundColor: 'var(--text-accent)',
              color: 'var(--neutral-950)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              padding: '12px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Confirm Sale
          </button>
          <button
            onClick={onClose}
            style={{
              backgroundColor: 'transparent',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '12px',
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>

      </div>
    </>
  )
}

export default MarkAsSoldModal