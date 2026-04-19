function PortfolioBar({ watches }) {
  const totalCost = watches.reduce((sum, w) => sum + w.purchasePrice, 0)
  const totalValue = watches.reduce((sum, w) => sum + (w.salePrice ?? w.marketValue), 0)
  const unrealizedGain = watches
    .filter(w => w.status !== 'Sold')
    .reduce((sum, w) => sum + (w.marketValue - w.purchasePrice), 0)
  const realizedGain = watches
    .filter(w => w.status === 'Sold')
    .reduce((sum, w) => sum + ((w.salePrice ?? 0) - w.purchasePrice), 0)
  const isUnrealizedPositive = unrealizedGain >= 0
  const isRealizedPositive = realizedGain >= 0
  const holdingCount = watches.filter(w => w.status !== 'Sold').length

  const stats = [
    {
      label: 'TOTAL INVESTED',
      value: `$${totalCost.toLocaleString()}`,
      sub: `${watches.length} watches`,
      isGain: false,
    },
    {
      label: 'MARKET VALUE',
      value: `$${totalValue.toLocaleString()}`,
      sub: 'Updated Today',
      isGain: false,
    },
    {
      label: 'UNREALIZED GAIN',
      value: `${isUnrealizedPositive ? '+' : ''}$${unrealizedGain.toLocaleString()}`,
      sub: `${holdingCount} open positions`,
      isGain: true,
      positive: isUnrealizedPositive,
    },
    {
      label: 'REALIZED GAIN',
      value: `${isRealizedPositive ? '+' : ''}$${realizedGain.toLocaleString()}`,
      sub: realizedGain === 0 ? 'No closed positions' : 'From sold watches',
      isGain: true,
      positive: isRealizedPositive,
    },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '12px',
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      {stats.map(({ label, value, sub, isGain, positive }) => (
        <div key={label} style={{
          backgroundColor: 'var(--surface-raised)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
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
            fontSize: '28px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 500,
            color: isGain
              ? positive ? 'var(--delta-positive)' : 'var(--delta-negative)'
              : 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}>
            {value}
          </div>
          <div style={{
            fontSize: '11px',
            color: 'var(--text-secondary)',
          }}>
            {sub}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PortfolioBar