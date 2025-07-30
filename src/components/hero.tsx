import stackLogo from '../assets/icons/stack logo.png';
import appStoreBlack from '../assets/images/App Store Black.png';
import playStoreBlack from '../assets/images/Google Play black.png';
import eclipse from '../assets/images/Ellipse.png';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#181C2E] md:px-[50px] md:pt-5 relative overflow-visible min-h-screen md:h-[80px] pb-[400px]">
      {/* Header */}
      <header className="bg-[#2A2F4399] px-2 md:px-[40px] py-4 md:py-[25px] rounded-[12px] md:rounded-[20px] border-[1px] border-[#3A3F53] relative z-20">
        <div className="max-w-sm md:max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-1"> <img src={stackLogo} className="w-8 h-8 md:w-[40px] md:h-[40px]" />
            <span className="text-white text-[22px] md:text-[28px] font-semibold font-museo">
              STACK
            </span>
          </div>
          
          <nav className="hidden md:flex  items-center space-x-9">
            <a
              href="#how-it-works" className="text-[#F4F6FA] font-montserrat text-[16px] md:text-[20px] hover:text-white transition-colors cursor-pointer"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('how-it-works'); if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              How It Works?
            </a>
            <a
              href="#features-overview" className="text-[#F4F6FA] text-[16px] font-montserrat  md:text-[20px] hover:text-white transition-colors cursor-pointer"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('features-overview'); if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Features
            </a>
            <a href="#FAQ" className="text-[#F4F6FA] text-[16px] font-montserrat  md:text-[20px] hover:text-white transition-colors cursor-pointer"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('FAQ'); if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              FAQs
            </a>
          </nav>
          
          <button className="bg-[#3A8DFF] hover:bg-blue-600 text-white px-6 py-[13px] rounded-[10px] font-montserrat font-bold text-[16px] md:text-[16px] transition-colors">
            GET THE APP
          </button>
        </div>
      </header>

      <div className="absolute top-0 left-1/2 right-5 transform -translate-x-1/2 -translate-y-[18%] z-5 pointer-events-none w-full flex justify-center">
        <img src={eclipse} className="w-full max-w-[1800px] h-[800px] md:h-[1050px] select-none" draggable="false" />
      </div>
      
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto md:px-[40px] relative z-10 min-h-screen flex items-start">
        <div className="max-w-sm md:max-w-[600px] mt-16">
          <h1 className="text-[34px] md:text-[70px] font-montserrat leading-[96px] font-bold mb-8 text-left">
            <span className="text-[#00FFAB]">Your Game</span> <br /> <span className="text-[#00FFAB]">Your Stack</span>
          </h1>
          
          <p className="text-[#F4F6FA] text-[16px] md:text-[24px] font-montserrat mb-12 leading-relaxed text-left">
            AI-powered tools to help student athletes track their performance, grow their brand, and unlock NIL opportunities — all in one app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start"> 
            {/* App Store and Play Store as Buttons */}
            <button type="button" className="bg-transparent border-0 outline-none p-0 m-0" style={{border: 'none', outline: 'none'}}>
              <img src={appStoreBlack} className="h-[80px] w-[220px] block" />
            </button>
            <button type="button" className="bg-transparent border-0 outline-none p-0 m-0" style={{border: 'none', outline: 'none'}}>
              <img src={playStoreBlack} className="h-[80px] w-[220px] block" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;