import { useState } from 'react';
import stackLogo from '../assets/icons/stack logo.png';
import Cross from '../assets/icons/close side menu.png';

interface HeaderProps {
  onNavClick: (elementId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (elementId: string) => {
    onNavClick(elementId);
    closeMobileMenu();
  };

  return (
    <>
      <div className='fixed top-4 left-4 right-4 md:left-[50px] md:right-[50px] z-50'>
        <header className="bg-[#2A2F43CC] backdrop-blur-sm px-2 md:px-[40px] py-4 md:py-[25px] rounded-[12px] md:rounded-[20px] border-[1px] border-[#3A3F53] relative z-20">
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
          <div className={`absolute top-0 right-0 w-full h-[445px] bg-[#2A2F43] flex flex-col transition-transform duration-400 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}> 
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
      </div>
    </>
  );
};

export default Header;
