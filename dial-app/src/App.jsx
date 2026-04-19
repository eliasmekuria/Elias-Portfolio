import { useState } from 'react'
import { watches as initialWatches } from './data/watches'
import Sidebar from './components/organisms/Sidebar'
import InventoryList from './components/organisms/InventoryList'
import DetailPanel from './components/organisms/DetailPanel'
import PortfolioBar from './components/organisms/PortfolioBar'
import AddWatchDrawer from './components/organisms/AddWatchDrawer'
import MarkAsSoldModal from './components/organisms/MarkAsSoldModal'

function App() {
  const [watches, setWatches] = useState(initialWatches)
  const [selectedId, setSelectedId] = useState(1)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [soldModalOpen, setSoldModalOpen] = useState(false)

  const selectedWatch = watches.find(w => w.id === selectedId)

  function handleAddWatch(newWatch) {
    setWatches(prev => [...prev, newWatch])
    setSelectedId(newWatch.id)
  }

  function handleConfirmSale(salePrice) {
    setWatches(prev => prev.map(w =>
      w.id === selectedId
        ? { ...w, status: 'Sold', salePrice }
        : w
    ))
    setSoldModalOpen(false)
  }

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: 'var(--surface-base)',
    }}>
      <Sidebar />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <PortfolioBar watches={watches} />

        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          <InventoryList
            watches={watches}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onAddClick={() => setDrawerOpen(true)}
          />
          <DetailPanel
            watch={selectedWatch}
            onMarkAsSold={() => setSoldModalOpen(true)}
          />
        </div>
      </div>

      {drawerOpen && (
        <AddWatchDrawer
          onAdd={handleAddWatch}
          onClose={() => setDrawerOpen(false)}
        />
      )}

      {soldModalOpen && selectedWatch && (
        <MarkAsSoldModal
          watch={selectedWatch}
          onConfirm={handleConfirmSale}
          onClose={() => setSoldModalOpen(false)}
        />
      )}

    </div>
  )
}

export default App