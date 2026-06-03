"use client";

import { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "Is Atithi Homes a perfect choice for a Luxury stay in Guwahati?",
    answer: "Yes, it is. At Atithi Homes, we offer the best and seamless experience in our exclusive and luxury-friendly packages for a better and soothing stay."
  },
  {
    question: "What makes Atithi Homes different from a standard hotel in Guwahati?",
    answer: "Unlike other hotels, Atithi’s hotel in Guwahati is known for its premium facilities, reliable amenities, and comfortable pricing. Also, additional features and care are making it ideal for a comfortable local homestay."
  },
  {
    question: "Is the property suitable for a corporate business stay in Guwahati?",
    answer: "Yes, any corporate meeting you are about to attend in Guwahati, Atithi Home’s has always kept it ready to deliver a comfortable accommodation near VIP Road Guwahati."
  },
  {
    question: "How close is the property to major local roadways and transit points?",
    answer: "Accessibility is not a major concern at Atithi Homes. Travellers who seek a comfortable accommodation near VIP Road Guwahati, or the railway station, can get easier access. They have convenient options here."
  },
  {
    question: "Do you offer budget accommodation in Guwahati for families and students?",
    answer: "Yes, we do. The Atithi Homes is quite popular for its premium yet highly budget accommodation in Guwahati. Also, we are focused on delivering the best experience in student accommodation and family stay in Guwahati."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#1E3A8A] font-bold uppercase tracking-[0.2em] text-xs mb-4">
            <FaQuestionCircle className="text-lg" /> Common Questions
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight">
            Frequently Asked <span className="text-[#1E3A8A]">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-3xl overflow-hidden transition-all duration-300 border ${isOpen ? 'border-[#1E3A8A] shadow-xl' : 'border-gray-100 shadow-sm hover:border-gray-200'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-[#1E3A8A]' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#1E3A8A] text-white rotate-180' : 'bg-gray-50 text-gray-400'}`}>
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-8 pb-8 text-gray-600 leading-relaxed text-lg border-t border-gray-50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
           <p className="text-gray-500 font-medium">Still have questions? Feel free to contact us directly!</p>
        </div>
      </div>
    </section>
  );
}
