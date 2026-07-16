import Hero from './components/Hero'
import Mission from './components/Mission'
import Features from './components/Features'
import ReleaseDate from './components/ReleaseDate'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <main>
        <Hero />
        <Mission />
        <Features />
        <ReleaseDate />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
