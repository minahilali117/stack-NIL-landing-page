import HeroSection from './components/hero'
import WorksSection from './components/how it works'
import FeaturesOverview from './components/features overview'
import IntelligentFeatures from './components/intelligent features'
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <WorksSection />
      <FeaturesOverview />
      <IntelligentFeatures />
    </div>
  )
}

export default App
