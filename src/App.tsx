import HeroSection from './components/hero'
import WorksSection from './components/how it works'
import FeaturesOverview from './components/features overview'
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <WorksSection />
      <FeaturesOverview />
    </div>
  )
}

export default App
