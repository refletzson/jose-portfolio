import './index.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import BackgroundPaths from './components/BackgroundPaths'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import Pricing from './components/sections/Pricing'
import Contact from './components/sections/Contact'

function App() {
  return (
    <>
      <BackgroundPaths />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </>
  )
}

export default App
