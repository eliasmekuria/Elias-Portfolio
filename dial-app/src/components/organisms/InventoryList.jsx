import WatchCard from '../molecules/WatchCard'

function InventoryList({ watches, selectedId, onSelect, onAddClick }) {
  return (
    <div style={{
      width: '400px',
      height: '100%',
      backgroundColor: 'var(--surface-base)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '16px',
      flexShrink: 0,
      overflowY: 'auto',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px 12px',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        <div style={{
          fontSize: '16px',
          fontWeight: 600,
          color: 'var(--text-primary)',
        }}>
          Inventory
        </div>
        <button
          onClick={onAddClick}
          style={{
            backgroundColor: 'var(--text-accent)',
            color: 'var(--neutral-950)',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            padding: '6px 12px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          + Add Watch
        </button>
      </div>

      {/* Watch rows */}
      <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {watches.map((watch) => (
          <WatchCard
            key={watch.id}
            watch={watch}
            isSelected={watch.id === selectedId}
            onClick={() => onSelect(watch.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default InventoryList