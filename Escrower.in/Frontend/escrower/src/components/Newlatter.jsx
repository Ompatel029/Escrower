import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, agreed });
  };

  return (
    <section className="bg-[#0a0a0a] py-15 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Card */}
        <div className="relative bg-[#ccff00]  rounded-3xl overflow-hidden">
          
          {/* Cyan/Blue Gradient Blob - Bottom Left */}
          <div 
            className="absolute bottom-0 left-0 w-1/2 h-2/3 opacity-60"
            style={{
              background: 'radial-gradient(ellipse at bottom left, #06b6d4 0%, #0891b2 30%, transparent 70%)',
              filter: 'blur(40px)'
            }}
          />
          
          {/* Additional cyan glow */}
          <div 
            className="absolute bottom-[-20%] left-[-10%] w-2/3 h-full opacity-50"
            style={{
              background: 'radial-gradient(ellipse at center, #22d3ee 0%, transparent 60%)',
              filter: 'blur(60px)'
            }}
          />

          {/* Content */}
          <div className="relative z-10 grid md:grid-cols-2 gap-12 p-10 sm:p-16 lg:p-20">
            
            {/* Left - Text */}
            <div>
              <span className="text-black/70 text-xs font-semibold tracking-widest uppercase mb-4 block">
                Newsletter Signup
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Subscribe for <br />
                the updates!
              </h2>
            </div>

            {/* Right - Form */}
            <div className="flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-black/30 py-3 text-black placeholder-black/60 focus:outline-none focus:border-black transition-colors duration-300 text-lg"
                    required
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-5 h-5 rounded border-2 border-black/50 bg-transparent checked:bg-black checked:border-black focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    required
                  />
                  <label htmlFor="privacy" className="text-black/80 text-sm cursor-pointer">
                    I agree to the{' '}
                    <a href="#" className="text-black underline hover:no-underline">
                      Privacy Policy
                    </a>.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-black/80 transition-colors duration-300 w-fit"
                >
                  Subscribe
                </button>

              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;