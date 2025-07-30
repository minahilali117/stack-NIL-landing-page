import HeroSection from './components/hero'
import WorksSection from './components/how it works'
import FeaturesOverview from './components/features overview'
import IntelligentFeatures from './components/intelligent features'
import PhoneMockups from './components/phoneMockups'
import FAQ from './components/faq'
import Footer from './components/footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <WorksSection />
      <FeaturesOverview />
      <IntelligentFeatures />
      <PhoneMockups />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
