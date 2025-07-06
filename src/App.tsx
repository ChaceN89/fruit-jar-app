import { useFruits } from '@/context/FruitContext'

function App() {
  const { fruits, loading, error } = useFruits()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width  : '100%' }}>
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 1.5rem',
          backgroundColor: '#319795', // teal.500
          color: 'white',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ fontSize: '1.25rem' }}>🍓 Fruit Jar App</h1>
      </header>

      {/* Main Content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left: Fruit List */}
        <div
          style={{
            width: '60%',
            padding: '1rem',
            borderRight: '1px solid #e2e8f0', // gray.200
            overflowY: 'auto',
          }}
        >
          <h2 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Fruit List</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p style={{ color: 'red' }}>{error}</p>
          ) : (
            <>
        <p>{fruits.length} fruits loaded ✅</p>
<ul style={{ listStyle: 'none', padding: 0 }}>
  {fruits.map((fruit) => (
    <li
      key={fruit.id}
      style={{
        marginBottom: '0.5rem',
        padding: '0.5rem',
        border: '1px solid #e2e8f0',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span>{fruit.name} ({fruit.nutritions.calories} cal)</span>
      <button style={{ marginLeft: '1rem' }}>Add</button>
    </li>
  ))}
</ul>
              
              </>
          
          )}
        </div>

        {/* Right: Jar */}
        <div
          style={{
            width: '40%',
            padding: '1rem',
            overflowY: 'auto',
            backgroundColor: '#f9fafb', // gray.50
            borderLeft: '1px solid #e2e8f0',
          }}
        >
          <h2 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>🫙 My Jar</h2>
          <p>Selected fruits will appear here...</p>
        </div>
      </div>
    </div>
  )
}

export default App
