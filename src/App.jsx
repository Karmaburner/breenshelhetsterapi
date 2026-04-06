import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Studio from './components/Studio'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F5EDE0]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Studio />
        <Services />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
