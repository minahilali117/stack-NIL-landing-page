import featuresOverviewPhonesMockup from '../assets/images/features overview phones mockup.png';
import realTimeStackScore from '../assets/icons/real-time stack score.png';
import aiNilCoach from '../assets/icons/ai-nil coach.png';
import opportunityMatching from '../assets/icons/opportunity matching.png';
import healthAndPerformanceTracking from '../assets/icons/health and performance tracking.png';
import realTimeStackScoreHover from '../assets/icons/real-time stack score hover.png';
import aiNilCoachHover from '../assets/icons/ai-nil coach hover.png';
import opportunityMatchingHover from '../assets/icons/opportunity matching hover.png';
import healthAndPerformanceTrackingHover from '../assets/icons/health and performance tracking hover.png';

const AppFeaturesOverview: React.FC = () => {
  return (
    <section id="features-overview" className="bg-[#181C2E] py-16 md:py-[135px] md:pr-12">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-[#00FFAB] text-[28px] md:text-[50px] font-bold font-montserrat">
          App Features Overview
        </h2>
      </div>

      {/* Content Container */}
      <div className="max-w-sm md:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          
          {/* Left Side - Phone Mockups */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative flex items-end">
              {/* Circular Glow */}
              <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-[420px] h-[500px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(58,141,255,0.18) 0%, rgba(58,141,255,0.06) 80%, rgba(58,141,255,0) 100%)',
                  filter: 'blur(38px)'
                }}
              />
              <img src={featuresOverviewPhonesMockup} className="w-full max-w-[689px] h-[550px] relative z-10 mt-8" />
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            
            {/* Real-Time Stack Score */}
            <div className="bg-[#2A2F43] rounded-[18px] md:py-6 md:px-3 transition-colors duration-300 group hover:bg-[#3A8DFF] flex flex-col h-full">
              <div>
                <div className="flex justify-center mb-4">
                  <img src={realTimeStackScore} className="w-[60px] h-[60px] group-hover:hidden" />
                  <img src={realTimeStackScoreHover} className="w-[60px] h-[60px] hidden group-hover:block" />
                </div>
                <h3 className="text-white text-[18px] md:text-[24px] font-bold font-montserrat text-center mb-3">
                  Real-Time Stack Score
                </h3>
              </div>
              <div className="flex-grow"></div>
              <p className="text-[#F4F6FA] text-[14px] md:text-[16px] font-montserrat text-center leading-relaxed mb-0">
                Track your growth across health, performance, and social influence in one powerful score.
              </p>
            </div>

            {/* AI NIL Coach */}
            <div className="bg-[#2A2F47] rounded-[16px] md:py-6 md:px-3 transition-colors duration-300 group hover:bg-[#3A8DFF] flex flex-col h-full">
              <div>
                <div className="flex justify-center mb-8">
                  <img src={aiNilCoach} className="w-[60px] h-[60px] group-hover:hidden" />
                  <img src={aiNilCoachHover} className="w-[60px] h-[60px] hidden group-hover:block" />
                </div>
                <h3 className="text-white text-[18px] md:text-[24px] font-bold font-montserrat text-center ">
                  AI NIL Coach
                </h3>
              </div>
              <div className="flex-grow"></div>
              <p className="text-[#F4F6FA] text-[14px] md:text-[16px] font-montserrat text-center leading-relaxed mb-0">
                Get personalized, real-time NIL guidance from your AI-powered virtual agent.
              </p>
            </div>

            {/* Opportunity Matching */}
            <div className="bg-[#2A2F47] rounded-[16px] md:py-6 md:px-3 transition-colors duration-300 group hover:bg-[#3A8DFF] flex flex-col h-full">
              <div>
                <div className="flex justify-center mb-5">
                  <img src={opportunityMatching} className="w-[60px] h-[60px] group-hover:hidden" />
                  <img src={opportunityMatchingHover} className="w-[60px] h-[60px] hidden group-hover:block" />
                </div>
                <h3 className="text-white text-[18px] md:text-[24px] font-bold font-montserrat text-center mb-3">
                  Opportunity Matching
                </h3>
              </div>
              <div className="flex-grow"></div>
              <p className="text-[#F4F6FA] text-[14px] md:text-[16px] font-montserrat text-center leading-relaxed mb-0">
                Discover brand deals tailored to your sport, stats, and social media presence.
              </p>
            </div>

            {/* Health & Performance Tracking */}
            <div className="bg-[#2A2F47] rounded-[16px] md:py-6 md:px-3 transition-colors duration-300 group hover:bg-[#3A8DFF] flex flex-col h-full">
              <div>
                <div className="flex justify-center mb-5">
                  <img src={healthAndPerformanceTracking} className="w-[60px] h-[60px] group-hover:hidden" />
                  <img src={healthAndPerformanceTrackingHover} className="w-[60px] h-[60px] hidden group-hover:block" />
                </div>
                <h3 className="text-white text-[18px] md:text-[20px] font-bold font-montserrat text-center mb-3">
                  Health & Performance Tracking
                </h3>
              </div>
              <div className="flex-grow"></div>
              <p className="text-[#F4F6FA] text-[14px] md:text-[16px] font-montserrat text-center leading-relaxed mb-0">
                Sync wearables to monitor your recovery, consistency, and athletic progress.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeaturesOverview;