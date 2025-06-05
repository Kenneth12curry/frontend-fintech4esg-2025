import React from 'react';

const HowAreWeSection: React.FC = () => {
  const logos = [
    { src: 'https://placehold.co/150x60/d1d5db/374151/png?text=SOCIETE+GENERAL', alt: "Societe Generale" },
    { src: 'https://placehold.co/150x60/d1d5db/374151/png?text=Goldman+Sachs', alt: "Goldman Sachs" },
    { src: 'https://placehold.co/150x60/d1d5db/374151/png?text=BANK+OF+SINGAPORE', alt: "Bank of Singapore" },
    { src: 'https://placehold.co/150x60/d1d5db/374151/png?text=THOMSON+REUTERS', alt: "Thomson Reuters" },
    { src: 'https://placehold.co/150x60/d1d5db/374151/png?text=LEHMAN+BROTHERS', alt: "Lehman Brothers" },
    { src: 'https://placehold.co/150x60/d1d5db/374151/png?text=BNP+PARIBAS', alt: "BNP Paribas" },
    { src: 'https://placehold.co/150x60/d1d5db/374151/png?text=CARROUSEL', alt: "Carrousel" }, // Supposons que "Carrousel" soit aussi un logo d'entreprise ici
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-6xl text-primary mb-12 text-center md:text-left">
          How Are We
        </h1>

        <div className="mb-16">
          <p className="text-xl text-justify font-semibold leading-relaxed mb-8 md:text-left">
            FinTech4ESG: Driving Global Innovation & Sustainability in Financial Services :
          </p>
          <p className="text-xl text-justify leading-relaxed mb-6">
            Backed by 75+ years of collective expertise across Asia, the U.S, and Europe, the founders of FinTech4ESG are pioneering digital transformation in financial services.
          </p>
          <p className="text-xl text-justify leading-relaxed mb-6">
            With a track record of success in FinTech and Financial Inclusion, we empower institutions to innovate, scale, and thrive.
          </p>
          <p className="text-xl text-justify leading-relaxed mb-6">
            Now, we are bringing our cutting-edge platforms and deep industry expertise to Financial Inclusion universe-unlocking new opportunities for financial institutions to expand access, enhance operational efficiency, and drive inclusive economic growth.
          </p>
          <p className="text-xl text-justify leading-relaxed">
            Join us in shaping the future of finance through innovation and sustainability.
          </p>
        </div>

        <h2 className="text-4xl font-bold mb-10 text-center md:text-left text-fintechDarkBlue">
          Our Background
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 py-10 bg-white rounded-xl shadow-xl">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              // Pour l'effet "grisé" avant survol et couleur au survol, on utilise `filter grayscale`
              className="h-14 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowAreWeSection;