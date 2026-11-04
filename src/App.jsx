import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Estimator from './components/Estimator.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-slate-100">
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Estimator />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
