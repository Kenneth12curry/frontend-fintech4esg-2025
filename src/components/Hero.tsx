import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AnimatedComponent } from "@/components/ui/animated-component";

import smilling from "@/assets/images/hero/smilling-fintech4esg.png";
import banana from "@/assets/images/hero/banana.png";
import fruits from "@/assets/images/hero/fruits.png";
import diplome from "@/assets/images/hero/diplome.png";
import tel from "@/assets/images/hero/tel.png";
import home_banner from "@/assets/images/hero/Home_Banner_1-1_Farmer.jpg";
import home_banner1 from "@/assets/images/hero/Home_Banner_1-2_Africa.jpg";
//import home_banner2 from "@/assets/images/hero/Home_Banner_1-3_Vietnam.jpg";
import home_banner3 from "@/assets/images/hero/Home_Banner_1-4.jpg";
import home_banner5 from "@/assets/images/hero/Home_Banner_1-5.jpg";

import { useEffect, useRef, useState } from "react";

/** Partie images caroussel */
const images = [
  smilling,
  banana,
  fruits,
  diplome,
  tel,
  home_banner,
  home_banner1,
  home_banner3,
  home_banner5,
];

export default function Hero() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Défilement automatique
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 secondes

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="home" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left mt-10">
                  <AnimatedComponent animation="fadeIn" duration={0.7}>
                    <h1 className="text-4xl tracking-tight font-bold text-neutral-900 sm:text-5xl md:text-6xl font-heading">
                      <AnimatedComponent
                        animation="slideUp"
                        delay={0.2}
                        duration={0.7}
                      >
                        <span className="block">{t("hero.title")}</span>
                      </AnimatedComponent>
                      <AnimatedComponent
                        animation="slideUp"
                        delay={0.4}
                        duration={0.7}
                      >
                        <span className="block text-primary">
                          {t("hero.subtitle")}
                        </span>
                      </AnimatedComponent>
                    </h1>
                  </AnimatedComponent>

                  <AnimatedComponent
                    animation="slideUp"
                    delay={0.6}
                    duration={0.7}
                  >
                    <p className="mt-3 text-base text-neutral-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      {t("hero.description")}
                    </p>
                  </AnimatedComponent>

                  <AnimatedComponent
                    animation="slideUp"
                    delay={0.8}
                    duration={0.7}
                  >
                    <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <motion.div
                          className="rounded-md shadow"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <Button asChild size="lg" className="w-full  bg-[#19af58] rounded-xl hover:bg-primary hover:text-white">
                            <a href="https://calendly.com/fintech4esg">{t("title.demo")}</a>
                          </Button>
                        </motion.div>
                        {/* <motion.div 
                          className="mt-3 sm:mt-0 sm:ml-3"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <Button asChild variant="outline" size="lg" className="w-full">
                            <a href="#about">
                              {t("hero.cta")}
                            </a>
                          </Button>
                        </motion.div> */}
                      </div>
                    </div>
                  </AnimatedComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  <AnimatedComponent animation="fadeIn" delay={0.3} duration={1.0} className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Financial technology illustration"
          initial={{ scale: 1.0 }}
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        />
      </AnimatedComponent> */}
      <AnimatedComponent
        animation="fadeIn"
        delay={0.3}
        duration={1.0}
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-full flex items-center justify-center">
          {/* Image centrée */}
          <motion.img
            className="h-full w-full object-cover rounded-xl"
            src={images[currentImageIndex]}
            alt={`Carousel image ${currentImageIndex + 1}`}
            initial={{ scale: 1.0 }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
         
          {/* Indicateurs et flèches */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
            {/* Flèche gauche */}
          {/*   <button
              onClick={handlePrevImage}
              className="text-primary hover:text-primary/80 text-4xl font-medium transition-colors"
              aria-label="Image précédente"
              type="button"
            >
              &lt;
            </button> */}

            {/* Indicateurs (tirets) */}
            <div className="flex space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-300
          ${currentImageIndex === idx ? "bg-[#19af58] w-8" : "bg-[#e0d7f7] w-4"}
        `}
                  aria-label={`Voir l'image ${idx + 1}`}
                  type="button"
                />
              ))}
            </div>

            {/* Flèche droite */}
            {/* <button
              onClick={handleNextImage}
              className="text-primary hover:text-primary/80 text-4xl font-medium transition-colors"
              aria-label="Image suivante"
              type="button"
            >
              &gt;
            </button> */}
          </div>
        </div>
      </AnimatedComponent>
    </section>
  );
}
