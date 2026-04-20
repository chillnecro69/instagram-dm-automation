export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
      color: 'white',
      fontFamily: 'system-ui'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', margin: 0 }}>AutoDM Pro</h1>
        <p style={{ fontSize: '1.5rem', margin: '1rem 0' }}>Instagram DM Automation</p>
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          padding: '1rem 2rem',
          borderRadius: '1rem',
          marginTop: '2rem'
        }}>
          ✨ Successfully Deployed!
        </div>
      </div>
    </div>
  )
}
