import aiAgentAlwaysAvailableToChat from '../assets/images/AI agent always available to chat.png';
import trackYourStackScore from '../assets/images/track your stack score.png';
import watchYourAiAgentWorkForYou from '../assets/images/watch your ai agent work for you.png';
import curlyBottomArrowBlue from '../assets/images/curly bottom arrow blue.png';
import curlyBottomArrowPurple from '../assets/images/curly bottom arrow purple.png';
import curlyTopArrowBlue from '../assets/images/curly top arrow blue.png';
import curlyTopArrowPurple from '../assets/images/curly top arrow purple.png';

const HowStackNILWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-[#181C2E] pt-[260px] md:pt-[350px]  px-4 md:px-16">
      {/* Title */}
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-[#00FFAB] text-[28px] md:text-[50px] font-bold font-montserrat"> How Stack NIL Works? </h2>
      </div>

      {/* Cards Container */}
      <div className="max-w-sm md:max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-9 items-center">
          
          {/* Card 1 - Connect Your Wearable */}
          <div className="relative">
            <div className="bg-[#3A8DFF29] rounded-[18px] md:rounded-[20px] py-4 px-3 md:py-8 md:px-4 hover:border-[#3A8DFF] hover:border-[2px] h-full">
              <div className="mb-6"> <img src={aiAgentAlwaysAvailableToChat} className="w-full h-auto rounded-lg"/> </div>
              <div className="text-center px-6 md:px-0">
                <h3 className="text-white text-[20px] md:text-[24px] font-bold font-montserrat mb-4">
                  Your AI Agent is always available to chat
                </h3>
                <p className="text-[#F4F6FA] text-[14px] md:text-[18px] font-montserrat leading-relaxed">
                  Sync your Apple Watch, WHOOP, Instagram, TikTok, and more to power your Stack Score.
                </p>
              </div>
            </div>
            
            {/* Arrow - Bottom Right */}
            <div className="hidden md:block absolute -bottom-12 -right-20 z-10">
              <img src={curlyBottomArrowBlue} className="w-[146px] h-16" />
            </div>
          </div>

          {/* Card 2 - Track Your Stack Score */}
          <div className="relative">
            <div className="bg-[#00FFAB29]  rounded-[18px] md:rounded-[20px] py-4 px-3 md:py-8 md:px-4 hover:border-[2px] hover:border-[#00FFAB] h-full">
              <div className="mb-6"> <img src={trackYourStackScore} alt="Track Your Stack Score" className="w-full h-auto rounded-lg" /></div>
              <div className="text-center px-3 md:px-0">
                <h3 className="text-white text-[20px] md:text-[24px] font-bold font-montserrat mb-4">
                  Track Your Stack Score & Performance
                </h3>
                <p className="text-[#F4F6FA] text-[14px] md:text-[18px] font-montserrat leading-relaxed">
                  Unlock real-time insights tracking your health, athletic stats, and social influence—all fused into your dynamic Stack Score.
                </p>
              </div>
            </div>
            
            {/* Arrow - Top Left */}
            <div className="hidden lg:block absolute -top-12 -left-20 z-10">
              <img src={curlyTopArrowBlue} className="w-[146px] h-[73px]" />
            </div>
            
            {/* Arrow - Bottom Right */}
            <div className="hidden lg:block absolute -bottom-12 -right-24 z-10">
              <img src={curlyBottomArrowPurple} className="w-[146px] h-[73px]" />
            </div>
          </div>

          {/* Card 3 - Watch Your AI Agent Work */}
          <div className="relative">
            <div className="bg-[#A259FF29]  rounded-[18px] md:rounded-[20px] py-4 px-3 md:py-8 md:px-4  hover:border-[2px] hover:border-[#A259FF] h-full">
              <div className="mb-6"> <img src={watchYourAiAgentWorkForYou} className="w-full h-auto rounded-lg" /> </div>
              <div className="text-center px-3 md:px-0">
                <h3 className="text-white text-[20px] md:text-[24px] font-bold font-montserrat mb-4">
                  Watch your AI Agent go to work for you
                </h3>
                <p className="text-[#F4F6FA] text-[14px] md:text-[18px] font-montserrat leading-relaxed">
                  Your AI Agent is hard at work behind the scenes, analyzing your profile to match you with perfect NIL deals!
                </p>
              </div>
            </div>
            
            {/* Arrow - Top Left */}
            <div className="hidden lg:block absolute -top-12 -left-20 z-10">
              <img src={curlyTopArrowPurple} className="w-[146px] h-[73px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowStackNILWorks;