function DetailPanel({ watch, onMarkAsSold }) {
  if (!watch) return null

  const gain = (watch.salePrice ?? watch.marketValue) - watch.purchasePrice
  const gainPercent = ((gain / watch.purchasePrice) * 100).toFixed(1)
  const isPositive = gain >= 0

  const statusColors = {
    Holding: 'var(--status-holding)',
    Listed: 'var(--status-listed)',
    Sold: 'var(--status-sold)',
  }

  return (
    <div style={{
      flex: 1,
      height: '100%',
      overflowY: 'auto',
      padding: '28px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    }}>

      {/* Header */}
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>

        {/* Image */}
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: '#2a2a2a',
          border: '1px solid var(--border-subtle)',
          flexShrink: 0,
        }} />

        {/* Info */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '4px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                {watch.model} {watch.nickname}
              </h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--surface-overlay)',
                padding: '3px 8px',
                borderRadius: 'var(--radius-sm)',
              }}>
                {watch.reference}
              </span>
              <span style={{
                fontSize: '10px',
                fontWeight: 700,
                color: statusColors[watch.status],
                border: `1px solid ${statusColors[watch.status]}`,
                borderRadius: '3px',
                padding: '2px 6px',
                letterSpacing: '0.06em',
              }}>
                {watch.status.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {watch.status !== 'Sold' && (
              <button
                onClick={onMarkAsSold}
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--delta-negative)',
                  border: '1px solid var(--delta-negative)',
                  borderRadius: 'var(--radius-md)',
                  padding: '7px 16px',
                  fontSize: '12px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Mark Sold
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
      }}>
        {[
          { label: 'PURCHASED', value: `$${watch.purchasePrice.toLocaleString()}` },
          { label: watch.status === 'Sold' ? 'SALE PRICE' : 'MARKET', value: `$${(watch.salePrice ?? watch.marketValue).toLocaleString()}` },
          { label: 'UNREALIZED', value: `${isPositive ? '+' : ''}$${gain.toLocaleString()}`, isGain: true },
        ].map(({ label, value, isGain }) => (
          <div key={label} style={{
            backgroundColor: 'var(--surface-raised)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            <div style={{
              fontSize: '10px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-secondary)',
              letterSpacing: '0.08em',
            }}>
              {label}
            </div>
            <div style={{
              fontSize: '24px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: isGain
                ? isPositive ? 'var(--delta-positive)' : 'var(--delta-negative)'
                : 'var(--text-primary)',
            }}>
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Details */}
      <div style={{
        backgroundColor: 'var(--surface-raised)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
      }}>
        {[
          { label: 'Condition', value: watch.condition },
          { label: 'Purchase Date', value: watch.purchaseDate },
          { label: 'Delta', value: `${isPositive ? '+' : ''}${gainPercent}%` },
        ].map(({ label, value }, i, arr) => (
          <div key={label} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 20px',
            borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : 'none',
          }}>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{label}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{value}</span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default DetailPanel