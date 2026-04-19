import { useState } from 'react'

const emptyForm = {
  model: '',
  reference: '',
  nickname: '',
  condition: 'Unworn',
  status: 'Holding',
  purchasePrice: '',
  marketValue: '',
  purchaseDate: '',
}

function AddWatchDrawer({ onAdd, onClose }) {
  const [form, setForm] = useState(emptyForm)

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  function handleSubmit() {
    if (!form.model || !form.purchasePrice || !form.marketValue) return

    const newWatch = {
      id: Date.now(),
      brand: 'Rolex',
      model: form.model,
      reference: form.reference,
      nickname: form.nickname,
      condition: form.condition,
      status: form.status,
      purchasePrice: Number(form.purchasePrice),
      marketValue: Number(form.marketValue),
      salePrice: null,
      purchaseDate: form.purchaseDate,
      image: null,
    }

    onAdd(newWatch)
    onClose()
  }

  const fields = [
    { label: 'Model', field: 'model', placeholder: 'e.g. Submariner' },
    { label: 'Reference', field: 'reference', placeholder: 'e.g. 124060' },
    { label: 'Nickname', field: 'nickname', placeholder: 'e.g. No-Date Sub' },
    { label: 'Purchase Price', field: 'purchasePrice', placeholder: '00.00' },
    { label: 'Market Value', field: 'marketValue', placeholder: '00.00' },
    { label: 'Purchase Date', field: 'purchaseDate', placeholder: 'YYYY-MM-DD' },
  ]

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

      {/* Drawer */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '360px',
        height: '100vh',
        backgroundColor: 'var(--surface-raised)',
        borderLeft: '1px solid var(--border-subtle)',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        gap: '24px',
        overflowY: 'auto',
      }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}>
            Add Watch
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

        {/* Fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {fields.map(({ label, field, placeholder }) => (
            <div key={field} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {label}
              </label>
              <input
                value={form[field]}
                onChange={e => handleChange(field, e.target.value)}
                placeholder={placeholder}
                style={{
                  backgroundColor: 'var(--surface-overlay)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px 12px',
                  color: 'var(--text-primary)',
                  fontSize: '13px',
                  fontFamily: 'var(--font-sans)',
                  outline: 'none',
                }}
              />
            </div>
          ))}

          {/* Condition select */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Condition
            </label>
            <select
              value={form.condition}
              onChange={e => handleChange('condition', e.target.value)}
              style={{
                backgroundColor: 'var(--surface-overlay)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 12px',
                color: 'var(--text-primary)',
                fontSize: '13px',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
              }}
            >
              {['Unworn', 'Excellent', 'Very Good', 'Good', 'Fair'].map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Status select */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Status
            </label>
            <select
              value={form.status}
              onChange={e => handleChange('status', e.target.value)}
              style={{
                backgroundColor: 'var(--surface-overlay)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 12px',
                color: 'var(--text-primary)',
                fontSize: '13px',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
              }}
            >
              {['Holding', 'Listed', 'Sold'].map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
          <button
            onClick={handleSubmit}
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
            Add Watch
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

export default AddWatchDrawer