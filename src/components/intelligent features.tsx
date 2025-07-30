import aiAgentAlwaysAvailableToChat from '../assets/icons/ai agent always available to chat.png';
import nilMatchmaking from '../assets/icons/NIL matchmaking.png';
import contentCreation from '../assets/icons/content creation.png';
import curlyBottomArrowBlue from '../assets/images/curly bottom arrow blue.png';
import curlyTopArrowBlue from '../assets/images/curly top arrow blue.png';

const IntelligentFeatures: React.FC = () => {
  return (
    <section className="bg-[#181C2E] md:pb-16 px-4 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-[#00FFAB] text-[28px] md:text-[50px] font-bold font-montserrat mb-6">
          Intelligent Features
        </h2>
        <p className="text-[#F4F6FA] text-[16px] md:text-[20px] font-montserrat md:max-w-5xl mx-auto leading-relaxed">
            Transform your digital experience by understanding your unique profile to deliver unique profile to deliver unparalleled assistance and opportunities
        </p>
      </div>

      <div className="max-w-sm md:max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-9 items-stretch">
          
          <div className="relative">
            <div className="bg-[#3A8DFF29] rounded-[18px] md:rounded-[20px] p-3 md:pt-10 md:pb-8 md:px-4 border-2 border-transparent hover:border-[#3A8DFF] h-full flex flex-col">
              <div className="md:mb-10 flex justify-center">
                <img src={aiAgentAlwaysAvailableToChat} className="w-12 h-12 md:w-[140px] md:h-[140px]" />
              </div>
              <div className="text-center flex-1 flex flex-col">
                    <h3 className="text-white text-[20px] md:text-[24px] font-bold font-montserrat md:mb-3">
                  Your AI Agent is always available to chat
                </h3>
                <p className="text-[#F4F6FA] text-[14px] md:text-[18px] font-montserrat leading-relaxed mb-2 flex-1">
                  Ask for information about a brand, what workouts you should be doing, or how to increase social media followers.
                </p>
                <div className="flex justify-center">
                  <button className="bg-transparent md:h-[50px] md:w-[165px] hover:border-[#3A8DFF] md:text-[16px] border-1 border-[#F4F6FA] text-[#F4F6FA] px-6 py-3 rounded-lg font-montserrat font-semibold transition-colors duration-300">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block absolute bottom-8 -right-20 z-10">
              <img src={curlyBottomArrowBlue} className="w-[146px] h-16 -scale-x-100 -rotate-[15deg]" />
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#00FFAB29] rounded-[18px] md:rounded-[20px] p-6 md:pt-10 md:pb-8 md:px-4 border-2 border-transparent hover:border-[#00FFAB] h-full flex flex-col">
              <div className="md:mb-10 flex justify-center">
                <img src={nilMatchmaking} className="w-12 h-12 md:w-[140px] md:h-[140px]" />
              </div>
              <div className="text-center flex-1 flex flex-col">
                    <h3 className="text-white text-[20px] md:text-[24px] font-bold font-montserrat md:mb-3">
                  NIL Matchmaking Services
                </h3>
                <p className="text-[#F4F6FA] text-[14px] md:text-[17px] font-montserrat leading-relaxed mb-2 flex-1">
                  our AI Agent learns your unique skills, interests, and style, then scouts and matches you with the most lucrative NIL deals tailored just for you!
                </p>
                <div className="flex justify-center">
                  <button className="bg-transparent hover:border-[#00FFAB] md:h-[50px] md:w-[165px] md:text-[16px] border-1 border-[#F4F6FA] text-[#F4F6FA] px-6 py-3 rounded-lg font-montserrat font-semibold transition-colors duration-300">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#A259FF29] rounded-[18px] md:rounded-[20px] p-6 md:pt-8 md:pb-7 md:px-5 border-2 border-transparent hover:border-[#A259FF] h-full flex flex-col">
              <div className="mb-6 flex justify-center">
                  <img src={contentCreation} className="w-12 h-12 md:w-[176px] md:h-[176px]" />
              </div>
              <div className="text-center flex-1 flex flex-col">
                    <h3 className="text-white text-[20px] md:text-[24px] font-bold font-montserrat md:mb-3">
                  Intelligent Content Creation
                </h3>
                <p className="text-[#F4F6FA] text-[14px] md:text-[18px] font-montserrat leading-relaxed mb-2 flex-1">
                  Partner with your AI Agent to craft stunning social media posts that amplify your brand deals and boost your star power!
                </p>
                <div className="flex justify-center">
                  <button className="bg-transparent hover:border-[#A259FF] md:h-[50px] md:w-[165px] md:text-[16px] border-1 border-[#F4F6FA] text-[#F4F6FA] px-6 py-3 rounded-lg font-montserrat font-bold transition-colors duration-300">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
            

            <div className="hidden lg:block absolute top-10 -left-24 z-10">
              <img src={curlyTopArrowBlue} className="w-[146px] h-[73px] -scale-x-100 rotate-[15deg]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentFeatures;