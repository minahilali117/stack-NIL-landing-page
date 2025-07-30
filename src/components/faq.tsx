import React, { useState } from 'react';
import faqArrow from '../assets/icons/faq arrow.png';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0])); // First item expanded by default

  const faqData: FAQItem[] = [
    { question: "What is Stack NIL?", answer: "Stack NIL is a mobile app designed to help student athletes track their performance, grow their brand, and monetize their Name, Image, and Likeness (NIL) potential using AI-powered tools." },
    { question: "Who can use Stack NIL?", answer: "Stack NIL is designed for student athletes who want to build their brand and maximize their NIL opportunities. Whether you're just starting out or already have a following, Stack NIL helps you track your progress and connect with potential deals." },
    { question: "How does the Stack Score work?", answer: "Your Stack Score is a dynamic metric that combines your health data, athletic performance, and social influence into one comprehensive score. It's powered by data from your wearables, social media accounts, and performance tracking to give brands a complete picture of your potential." },
    { question: "Do I need a wearable device to use Stack NIL?", answer: "While wearable devices like Apple Watch and WHOOP enhance your Stack Score with health and fitness data, they're not required. You can still use Stack NIL to track your social media performance and connect with NIL opportunities." },
    { question: "Is Stack NIL free to use?", answer: "Stack NIL offers both free and premium features. You can get started with basic tracking and AI agent functionality for free, with premium features available for advanced analytics and priority deal matching." }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) { newSet.delete(index); } else {newSet.add(index);}
      return newSet;
    });
  };

  return (
    <section id="FAQ" className="bg-[#181C2E] py-12 px-4  md:px-[130px] scroll-mt-36 ">
      <div className=" max-w-sm md:max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8 ">
          <h2 className="text-[#00FFAB] text-[28px] md:text-[42px] lg:text-[50px] font-bold font-montserrat leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 ">
          {faqData.map((item, index) => (
            <div key={index} className="bg-[#1A1E29] rounded-[10px] border border-[#3A4158] overflow-hidden">
              <button className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-[#323751] transition-colors duration-200 bg-[#1A1E29] focus:outline-none focus:ring-0" onClick={() => toggleExpanded(index)} >
                <h3 className="text-white text-[18px] md:text-[18px] font-semibold font-montserrat pr-3 leading-snug">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 relative w-[24px] h-[24px] md:w-[28px] md:h-[28px] flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-[#3A8DFF1A] w-full h-full"></span>
                  <img src={faqArrow}  className={`w-[15px] h-[15px] md:w-[18px] md:h-[18px] transition-transform duration-300 relative z-10 ${ expandedItems.has(index) ? 'rotate-180' : 'rotate-0' }`}/>
                </div>
              </button>
              
              <div
                className={`bg-[#1A1E29] transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0' }`}>
                <div className="px-4 pb-4">
                  <p className="text-[#F4F6FA] text-[14px] md:text-[16px] font-montserrat leading-relaxed text-left">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;