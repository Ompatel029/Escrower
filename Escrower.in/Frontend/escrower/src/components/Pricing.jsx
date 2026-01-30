import React, { useState } from 'react';
import './Pricing.css';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newlatter';
import MovingText from '../components/MovingText';
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      period: '',
      features: [
        '10,000 Monthly Word Limit',
        'Cloud storage',
        'Free templates',
        '5GB bandwidth',
        '10 downloads'
      ],
      highlighted: false,
      buttonText: 'Start Free Trial',
      buttonVariant: 'outline'
    },
    {
      name: 'Pro',
      price: isYearly ? '$440' : '$44',
      period: isYearly ? 'Per Year (Save 20%)' : 'Per Month',
      features: [
        '10,000 Monthly Word Limit',
        'Cloud storage',
        'Free templates',
        '5GB bandwidth',
        '10 downloads'
      ],
      highlighted: true,
      buttonText: 'Get Started',
      buttonVariant: 'solid'
    },
    {
      name: 'Unlimited',
      price: isYearly ? '$480' : '$48',
      period: isYearly ? 'Per Year' : 'Per Month',
      features: [
        '10,000 Monthly Word Limit',
        'Cloud storage',
        'Free templates',
        '5GB bandwidth',
        '10 downloads'
      ],
      highlighted: false,
      buttonText: 'Get Started',
      buttonVariant: 'outline'
    }
  ];

  return (
    <>
      <div className="pricing-section">
        <div className="pricing-bg-overlay"></div>

        <div className="pricing-container">
          <div className="pricing-header">
            <h1>Pricing</h1>

            <div className="toggle-wrapper">
              <span className={!isYearly ? 'active' : ''}>Pay Monthly</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isYearly}
                  onChange={() => setIsYearly(!isYearly)}
                />
                <span className="slider"></span>
              </label>
              <span className={isYearly ? 'active' : ''}>Pay Yearly</span>
            </div>
          </div>

          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.highlighted ? 'highlighted-card' : ''}`}
              >
                <div className="card-header">
                  <span className="plan-name">{plan.name}</span>
                  <div className="price-tag">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>

                <ul className="features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`btn-pricing ${plan.buttonVariant}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      <FAQ />
      <Newsletter />
    </>
  );
};

export default Pricing;
