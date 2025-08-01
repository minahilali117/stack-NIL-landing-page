import Img from '../assets/images/image b4 FAQ.png';
import ImgMob from '../assets/images/image b4 faq mob.png';

const PhoneMockups: React.FC = () => (
  <div className="pt-[50px] md:pt-0 md:py-16 bg-[#181C2E]">
    {/* Desktop Image */}
    <img src={Img} className="hidden md:block w-full h-full object-cover object-center" />
    {/* Mobile Image */}
    <img src={ImgMob} className="block md:hidden w-full h-[180px] sm:h-[260px] object-cover object-center" />
  </div>
);

export default PhoneMockups;