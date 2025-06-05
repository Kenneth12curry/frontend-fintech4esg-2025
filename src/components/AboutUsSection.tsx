import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-fintechLightGray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-6xl text-primary text-fintechDarkBlue mb-12 text-center md:text-left">
          About Us 
        </h1>

        <div className="mb-16">
          <h2 className="text-4xl text-primary text-fintechMediumBlue mb-8 text-center md:text-left">
            Our Goals 
          </h2>
          <p className="text-xl text-justify font-semibold leading-relaxed mb-6">
            Powering Financial Institutions with Cutting-Edge Digital Solutions : 
          </p>
          <p className="text-xl text-justify leading-relaxed mb-6">
            At FinTech4ESG, we specialize in delivering innovative digital solutions designed to elevate financial institutions.
            Our expertise spans microfinance, digital wallets & payment systems, and peers to peers' power management solutions, ensuring seamless financial operations and enhanced customer experiences. 
          </p>
          <p className="text-xl text-justify leading-relaxed mb-6">
            Our in-house Finance Inclusive Suite is a game-changer, offering Saving & Lending for both individual and corporate clients, integrated business intelligence, and mobile money solutions. 
          </p>
          <p className="text-xl text-justify leading-relaxed mb-6">
            Backed by our multi-award-winning Olympiad Data Scientist teams, we harness advanced analytics to transform unstructured data into actionable insights-empowering institutions to drive smarter decisions, optimized Al-Scoring & risk management, and increased revenue growth. 
          </p>
          <p className="text-xl text-justify leading-relaxed">
            Partner with FinTech4ESG to redefine financial services and stay ahead in a rapidly evolving digital landscape. [
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;