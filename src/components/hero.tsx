import stackLogo from '../assets/icons/stack logo.png';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#181C2E] md:px-12 relative overflow-hidden min-h-screen">
      {/* Header */}
      <header className="bg-[#2A2F4399] px-6 py-4 rounded-lg mt-4 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={stackLogo} className="w-8 h-8" />
            <span className="text-white text-xl font-bold font-museo">
              STACK
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              How It Works?
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              FAQs
            </a>
          </nav>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
            GET THE APP
          </button>
        </div>
      </header>

      {/* Ellipse background - repositioned to curve upwards */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
        {/* Main ellipse with gradient */}
        <div className="w-[1400px] h-[700px] rounded-full bg-gradient-to-b from-transparent via-[#3A8DFF]/10 to-[#00FFAB]/15"></div>
        {/* Border ellipse - only visible curved line at the bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1400px] h-[350px] rounded-b-full border-b-[3px] border-[#245588] overflow-hidden"></div>
      </div>
      
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 relative z-10 min-h-screen flex items-start">
        <div className="max-w-2xl mt-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-left">
            <span className="text-emerald-400">Your Game</span>
            <br />
            <span className="text-emerald-400">Your Stack</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed text-left">
            AI-powered tools to help student athletes track their performance, grow their brand, and unlock NIL opportunities — all in one app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <button className="flex items-center justify-center space-x-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg border border-gray-600 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </button>
            
            <button className="flex items-center justify-center space-x-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg border border-gray-600 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;