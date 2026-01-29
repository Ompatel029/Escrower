import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What it takes to create an image?",
      answer: "All things starts with a homepage — Get inspired without breaking your wallet with premium Figma and Sketch templates. Capitalize hanging fruit to identify a ballpark value added activity to beta test. Podcasting operational — change management inside of workflows and operations."
    },
    {
      question: "What's the standard image size?",
      answer: "We support multiple image sizes including 1024x1024, 1024x1792, and 1792x1024 pixels. You can choose the aspect ratio that best fits your needs for social media, print, or web use."
    },
    {
      question: "Payment methods",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and cryptocurrency payments including Bitcoin and Ethereum for your convenience."
    },
    {
      question: "Help and support",
      answer: "Our dedicated support team is available 24/7 via live chat, email, or phone. We also offer comprehensive documentation, video tutorials, and a community forum for quick answers."
    },
    {
      question: "Can I create multiple images at once?",
      answer: "Yes! Our batch generation feature allows you to create up to 10 images simultaneously. Simply enter multiple prompts separated by commas or upload a CSV file for bulk generation."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            AI image generator <br />
            <span className="text-white">FAQs</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-800 last:border-b-0"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                  openIndex === index ? 'text-[#a3ff00]' : 'text-white group-hover:text-gray-300'
                }`}>
                  {faq.question}
                </span>
                
                {/* Plus/Minus Icon */}
                <span className={`flex-shrink-0 ml-4 text-2xl font-light transition-all duration-300 ${
                  openIndex === index ? 'text-[#a3ff00] rotate-0' : 'text-white rotate-0'
                }`}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;