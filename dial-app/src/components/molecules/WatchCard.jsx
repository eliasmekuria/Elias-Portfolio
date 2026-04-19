function WatchCard({ watch, isSelected, onClick }) {
  const gain = (watch.salePrice ?? watch.marketValue) - watch.purchasePrice
  const isPositive = gain >= 0

  const statusColors = {
    Holding: 'var(--status-holding)',
    Listed: 'var(--status-listed)',
    Sold: 'var(--status-sold)',
  }

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px',
        borderRadius: 'var(--radius-md)',
        backgroundColor: isSelected ? 'var(--surface-overlay)' : 'transparent',
        border: `1px solid ${isSelected ? 'var(--border-default)' : 'transparent'}`,
        cursor: 'pointer',
      }}
    >
      {/* Thumbnail */}
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: 'var(--radius-sm)',
        backgroundColor: 'var(--surface-overlay)',
        flexShrink: 0,
      }} />

     {/* Info */}
<div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
    <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)' }}>
      {watch.model} {watch.nickname}
    </span>
    <span style={{
      fontSize: '9px',
      fontWeight: 700,
      color: statusColors[watch.status],
      border: `1px solid ${statusColors[watch.status]}`,
      borderRadius: '3px',
      padding: '1px 4px',
      letterSpacing: '0.06em',
      flexShrink: 0,
    }}>
      {watch.status.toUpperCase()}
    </span>
  </div>
  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
    {watch.reference}
  </div>
</div>

      {/* P&L + chevron */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
        <span style={{
          fontSize: '12px',
          fontFamily: 'var(--font-mono)',
          color: isPositive ? 'var(--delta-positive)' : 'var(--delta-negative)',
        }}>
          {isPositive ? '+' : ''}${gain.toLocaleString()}
        </span>
        <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>›</span>
      </div>

    </div>
  )
}

export default WatchCard