import appStoreBlack from '../assets/images/App Store Black.png';
import playStoreBlack from '../assets/images/Google Play Black.png';
import eclipse from '../assets/images/Ellipse.png';
import eclipsemv from '../assets/images/Ellipse-mobile-view.png';
import PhoneMockups from '../assets/images/PhoneMockups-hero-mob-view.png';
import Header from './header';

const HeroSection: React.FC = () => {
  const handleNavClick = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#181C2E] pt-4 md:pt-24 relative overflow-visible max-h-[1050px] md:min-h-[90vh] md:h-[80px] md:pb-[100px]">
      {/* Header */}
      <Header onNavClick={handleNavClick} />

      <div className="absolute top-0 left-1/2 right-5 transform -translate-x-1/2 -translate-y-[18%] z-5 pointer-events-none w-full flex justify-center">
        {/* Mobile Ellipse */}
        <img src={eclipsemv} className="block md:hidden w-full max-w-full h-[1000px] select-none" draggable="false" />
        {/* Desktop Ellipse */}
        <img src={eclipse} className="hidden md:block w-full md:max-w-[1800px] md:h-[1050px] select-none" draggable="false" />
      </div>
      
      {/* Hero Content */}
      <div className="pl-4 md:pl-[50px] md:pr-0">
        <div className="mx-auto md:pl-[40px] relative z-10 min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.25fr] gap-8 md:gap-1 items-center md:items-start min-h-screen">
            {/* Left Column - Text content */}
            <div className="order-1 md:order-1 mt-8 md:mt-[100px]">
              <h1 className="text-[34px] md:text-[70px] font-montserrat leading-[46px] md:leading-[90px] font-bold mb-8 md:mb-6 text-left">
                <span className="text-[#00FFAB]">Your Game</span> <br /> <span className="text-[#00FFAB]">Your Stack</span>
              </h1>
              
              <p className="text-[#F4F6FA] text-[16px] md:text-[24px] font-montserrat mb-6 md:mb-8 leading-relaxed text-left">
                AI-powered tools to help student athletes track their performance, grow their brand, and unlock NIL opportunities — all in one app.
              </p>
              <div className="flex flex-row w-full gap-3 md:w-auto md:px-0 md:gap-6 justify-between md:justify-start">
                {/* App Store and Play Store as Buttons */}
                <button type="button" className="flex-1 md:flex-none bg-transparent border-0 outline-none p-0 m-0" style={{border: 'none', outline: 'none'}}>
                  <img src={appStoreBlack} className="h-[60px] w-full max-w-[164px] md:h-[80px] md:w-[220px] md:max-w-none block" />
                </button>
                <button type="button" className="flex-1 md:flex-none bg-transparent border-0 outline-none p-0 m-0" style={{border: 'none', outline: 'none'}}>
                  <img src={playStoreBlack} className="h-[60px] w-full max-w-[154px] md:h-[80px] md:w-[210px] md:max-w-none block" />
                </button>
              </div>
            </div>
            
            {/* Right Column - Phone mockups */}
            <div className="order-2 md:order-2 flex justify-end items-center md:items-start md:ml-auto md:mt-[70px]">
              <img src={PhoneMockups} className="h-auto w-full max-w-[400px] md:max-w-[850px] block md:animate-slide-up"  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;