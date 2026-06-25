import Header from './components/Header'
import Hero from './components/Hero'
import JaynesWay from './components/JaynesWay'
import SouthwestLocations from './components/SouthwestLocations'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div style={{ position: 'relative', width: '100%' }}>
        <Header />
        <Hero />
      </div>
      <JaynesWay />
      <SouthwestLocations />
      <Footer />
    </>
  )
}

export default App
