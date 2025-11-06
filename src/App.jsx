import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-softblack)] text-white overflow-hidden">
    <NavBar />
    <Hero />
    <About />
    <Features />
    <Pricing />
    <Testimonials />
    <Footer />
  </div>
  ); 
}

export default App
