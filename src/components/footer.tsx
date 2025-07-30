import React from 'react';
import stackLogo from '../assets/icons/stack logo.png';
import appleLogo from '../assets/icons/Apple logo.png';
import playstoreLogo from '../assets/icons/Playstore logo.png';
import instagramLogo from '../assets/icons/instagram.png';
import tiktokLogo from '../assets/icons/tiktok.png';
import twitterLogo from '../assets/icons/twitter.png';
import youtubeLogo from '../assets/icons/youtube.png';
import ButtonBody from '../assets/images/Button Body.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181C2E] md:pt-16 md:pb-5 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-[#00FFAB] text-[28px] md:text-[50px] font-bold font-montserrat md:mb-16">
            Start Building Your NIL Future Today
          </h2>
          
          <p className="text-white text-[16px] font-semibold md:text-[20px] font-montserrat md:mb-6">
            Download Stack NIL Now
          </p>
          
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button type="button" className="group relative inline-flex items-center justify-center bg-transparent border-0 outline-none ring-0 focus:outline-none focus:ring-0 active:outline-none active:ring-0 p-0 m-0 shadow-none">
              <img  src={ButtonBody} className="w-[220px] h-[80px] object-contain"/>
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="flex items-center gap-3">
                  <img src={appleLogo} className="w-[26px] h-[31.5px] md:w-[36px] md:h-[43px] " />
                  <div className="text-left">
                    <p className="text-[#F4F6FA] text-xs leading-none">Download on the</p>
                    <p className="text-white text-[26px] font-semibold leading-none">App Store</p>
                  </div>
                </div>
              </div>
            </button>
            
            {/* Google Play Store Button */}
            <button type="button" className="group relative inline-flex items-center justify-center bg-transparent border-0 outline-none ring-0 focus:outline-none focus:ring-0 active:outline-none active:ring-0 p-0 m-0 shadow-none">
              <img src={ButtonBody} className="w-[225px] h-[80px] object-contain" />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="flex items-center gap-2">
                  <img src={playstoreLogo} alt="Google Play Store" className=" w-[28px] h-[28px] md:w-[37.5px] md:h-[37px]" />
                  <div className="text-left">
                    <p className="text-[#F4F6FA] text-xs leading-none">GET IT ON</p>
                    <p className="text-white text-[24px] font-semibold leading-none">Google Play</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between md:pt-[120px] items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={stackLogo} className="w-[59px] h-[59px]" />
            <span className="text-white text-[41px] font-bold font-museo">STACK</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            <span
              className="hover:scale-110 transition-transform duration-200"
              aria-label="Instagram"
            >
              <img src={instagramLogo} alt="Instagram" className="w-6 h-6" />
            </span>
            <span
              className="hover:scale-110 transition-transform duration-200"
              aria-label="TikTok"
            >
              <img src={tiktokLogo} alt="TikTok" className="w-6 h-6" />
            </span>
            <span
              className="hover:scale-110 transition-transform duration-200"
              aria-label="Twitter"
            >
              <img src={twitterLogo} alt="Twitter" className="w-6 h-6" />
            </span>
            <span
              className="hover:scale-110 transition-transform duration-200"
              aria-label="YouTube"
            >
              <img src={youtubeLogo} alt="YouTube" className="w-6 h-6" />
            </span>
          </div>
        </div>
        <div className="border border-[#3A4158] md:mt-12"></div>
        {/* Copyright */}
        <div className="text-center mt-12">
          <p className="text-[#9CA3AF] text-sm font-montserrat">
            ©2025 Stack NIL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;