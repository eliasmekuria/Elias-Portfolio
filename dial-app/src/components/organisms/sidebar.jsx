function Sidebar() {
  return (
    <aside style={{
      width: '200px',
      height: '100vh',
      backgroundColor: 'var(--surface-raised)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      padding: '28px 16px',
      gap: '40px',
      flexShrink: 0,
    }}>

      {/* Wordmark */}
      <div style={{
        fontFamily: 'Georgia, serif',
        fontSize: '22px',
        color: 'var(--text-primary)',
        letterSpacing: '0.02em',
        paddingLeft: '12px',
      }}>
        Di<em style={{ color: 'var(--text-accent)' }}>al</em>
      </div>

      {/* Nav */}
      <nav style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
      }}>
        {['Inventory', 'Market', 'Comps'].map((item) => (
          <div key={item} style={{
            padding: '10px 12px',
            borderRadius: 'var(--radius-md)',
            color: item === 'Inventory' ? 'var(--text-primary)' : 'var(--text-secondary)',
            backgroundColor: item === 'Inventory' ? 'var(--surface-overlay)' : 'transparent',
            fontSize: '14px',
            fontWeight: item === 'Inventory' ? 500 : 400,
            cursor: 'pointer',
            letterSpacing: '0.01em',
          }}>
            {item}
          </div>
        ))}
      </nav>

    </aside>
  )
}

export default Sidebar