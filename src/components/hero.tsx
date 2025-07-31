import { useState } from 'react';
import stackLogo from '../assets/icons/stack logo.png';
import appStoreBlack from '../assets/images/App Store Black.png';
import playStoreBlack from '../assets/images/Google Play Black.png';
import eclipse from '../assets/images/Ellipse.png';
import eclipsemv from '../assets/images/Ellipse-mobile-view.png';
import PhoneMockups from '../assets/images/PhoneMockups-hero-mob-view.png';
import Cross from '../assets/icons/close side menu.png';

const HeroSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    closeMobileMenu();
  };

  return (
    <section className="bg-[#181C2E] pt-4 md:pt-5 relative overflow-visible max-h-[1050px] md:min-h-[90vh] md:h-[80px] md:pb-[100px]">
      {/* Header */}
      <div className='px-4 md:px-[50px]'>
        <header className="bg-[#2A2F4399] px-2 md:px-[40px] py-4 md:py-[25px] rounded-[12px] md:rounded-[20px] border-[1px] border-[#3A3F53] relative z-20">
          <div className="mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <img src={stackLogo} className="w-8 h-8 md:w-[40px] md:h-[40px]" />
              <span className="text-white text-[22px] md:text-[28px] font-semibold font-museo">
                STACK
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-9">
              <a
                href="#how-it-works" 
                className="text-[#F4F6FA] font-montserrat text-[16px] md:text-[20px] hover:text-white transition-colors cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  handleNavClick('how-it-works');
                }}
              >
                How It Works?
              </a>
              <a
                href="#features-overview" 
                className="text-[#F4F6FA] text-[16px] font-montserrat md:text-[20px] hover:text-white transition-colors cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  handleNavClick('features-overview');
                }}
              >
                Features
              </a>
              <a 
                href="#FAQ" 
                className="text-[#F4F6FA] text-[16px] font-montserrat md:text-[20px] hover:text-white transition-colors cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  handleNavClick('FAQ');
                }}
              >
                FAQs
              </a>
            </nav>
            
            {/* Desktop GET THE APP Button */}
            <button className="hidden md:block bg-[#3A8DFF] hover:bg-blue-600 text-white px-6 py-[13px] rounded-[10px] font-montserrat font-bold text-[16px] transition-colors">
              GET THE APP
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button 
              className="md:hidden flex flex-col justify-end items-end bg-[#2A2F4399] space-y-1 ml-auto"
              onClick={toggleMobileMenu}
            >
              <div className="w-4 h-0.5 bg-[#F4F6FA] rounded"></div>
              <div className="w-3 h-0.5 bg-[#F4F6FA] rounded"></div>
              <div className="w-2 h-0.5 bg-[#F4F6FA] rounded"></div>
            </button>
          </div>
        </header>

        {/* Mobile Side Menu Overlay */}
        <div className={`md:hidden fixed inset-0 z-50 transition-opacity duration-400 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-transparent" onClick={closeMobileMenu}></div>
          <div className={`absolute top-0 right-0 w-[calc(100vw-30px)] h-full bg-[#2A2F43] flex flex-col transition-transform duration-400 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}> 
              {/* Close Button */}
              <button 
                className="self-end mt-10 bg-transparent border-none px-6"
                onClick={closeMobileMenu}
              >
                <img src={Cross} alt="Close" width={16} height={16} style={{width: 16, height: 16}} />
              </button>
              
              {/* Menu Items */}
              <nav className="flex flex-col items-center space-y-8 mt-28">
                <a
                  href="#how-it-works"
                  className="text-[#F4F6FA] text-xl font-montserrat hover:text-gray-300 transition-colors"
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick('how-it-works');
                  }}
                >
                  How It Works?
                </a>
                <a
                  href="#features-overview"
                  className="text-[#F4F6FA] text-xl font-montserrat hover:text-gray-300 transition-colors"
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick('features-overview');
                  }}
                >
                  Features
                </a>
                <a
                  href="#FAQ"
                  className="text-[#F4F6FA] text-xl font-montserrat hover:text-gray-300 transition-colors"
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick('FAQ');
                  }}
                >
                  FAQs
                </a>
              </nav>

              {/* GET THE APP Button in Mobile Menu */}
              <div className="mt-auto mb-12 px-2">
                <button 
                  className="w-full bg-[#3A8DFF] hover:bg-blue-600 text-white py-3 md:py-4 rounded-[10px] font-montserrat font-bold text-[16px] md:text-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  GET THE APP
                </button>
              </div>
            </div>
          </div>
        

        <div className="absolute top-0 left-1/2 right-5 transform -translate-x-1/2 -translate-y-[18%] z-5 pointer-events-none w-full flex justify-center">
          {/* Mobile Ellipse */}
          <img src={eclipsemv} className="block md:hidden w-full max-w-full h-[1000px] select-none" draggable="false" />
          {/* Desktop Ellipse */}
          <img src={eclipse} className="hidden md:block w-full md:max-w-[1800px] md:h-[1050px] select-none" draggable="false" />
        </div>
        
        {/* Hero Content */}
        <div className="mx-auto md:px-[40px] relative z-10 min-h-screen flex items-start">
          <div className="max-w-sm md:max-w-[600px] mt-8 md:mt-16">
            <h1 className="text-[34px] md:text-[70px] font-montserrat leading-[46px] md:leading-[96px] font-bold mb-8 text-left">
              <span className="text-[#00FFAB]">Your Game</span> <br /> <span className="text-[#00FFAB]">Your Stack</span>
            </h1>
            
            <p className="text-[#F4F6FA] text-[16px] md:text-[24px] font-montserrat mb-6 md:mb-12 leading-relaxed text-left">
              AI-powered tools to help student athletes track their performance, grow their brand, and unlock NIL opportunities — all in one app.
            </p>
            <div className="flex flex-row w-full gap-3 md:w-auto md:px-0 md:gap-4 justify-between md:justify-start">
              {/* App Store and Play Store as Buttons */}
              <button type="button" className="flex-1 md:flex-none bg-transparent border-0 outline-none p-0 m-0" style={{border: 'none', outline: 'none'}}>
                <img src={appStoreBlack} className="h-[60px] w-full max-w-[164px] md:h-[80px] md:w-[220px] md:max-w-none block" />
              </button>
              <button type="button" className="flex-1 md:flex-none bg-transparent border-0 outline-none p-0 m-0" style={{border: 'none', outline: 'none'}}>
                <img src={playStoreBlack} className="h-[60px] w-full max-w-[154px] md:h-[80px] md:w-[210px] md:max-w-none block" />
              </button>
            </div>
          </div>
        </div>
      </div>  
      <div className="md:hidden relative w-full">
        <img src={PhoneMockups} className="h-auto w-full max-w-[400px] block absolute right-0 -bottom-[230px]" style={{marginRight: 0}} />
      </div>
    </section>
  );
};

export default HeroSection;