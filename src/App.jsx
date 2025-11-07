import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Contact from './components/Contact'
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
    <Pricing />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
  ); 
}

export default App
