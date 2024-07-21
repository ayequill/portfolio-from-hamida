import './App.css'
import About from './components/About.jsx'
import HeroSection from './components/Hero.jsx'
import './components/NavBar.jsx'
import NavBar from './components/NavBar.jsx'
import Works from './components/Works.jsx'

function App() {
  return (
    <>
    <NavBar />
    <HeroSection />
    <Works />
    {/* <div class="elfsight-app-15429149-2614-4ee4-b451-493b151f462d" data-elfsight-app-lazy></div> */}
    <About />
    </>
  )
}

export default App
