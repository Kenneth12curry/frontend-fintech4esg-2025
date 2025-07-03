import { AnimatedComponent } from "./ui/animated-component";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Minus, Plus } from "lucide-react";
import ScoreDemo from "./ScoreDemo"; 

import carlo from "@/assets/images/ReadyScore/montecarlo/Montecarlo_formula2.webp";
import carlo1 from "@/assets/images/ReadyScore/montecarlo/1-4-AI_MonteCarlo.png";
import carlo2 from "@/assets/images/ReadyScore/montecarlo/3-1-Montecarlo_formula.avif";
import carlo3 from "@/assets/images/ReadyScore/montecarlo/3-2-Montecarlo_formula.webp";
import carlo4 from "@/assets/images/ReadyScore/montecarlo/3-3-Montecarlo_formula.jpg";
import carlo5 from "@/assets/images/ReadyScore/montecarlo/3-4-Montecarlo_formula.jpg";
import carlo6 from "@/assets/images/ReadyScore/montecarlo/Montecarlo_formula2.webp";


import linearfunction from "@/assets/images/ReadyScore/linearFunction/LinearFunction.jpeg";
import linearfunction2 from "@/assets/images/ReadyScore/linearFunction/2-1-LinearFunction.jpeg";
import linearfunctio3 from "@/assets/images/ReadyScore/linearFunction/2-2-LinearFunction.jpeg";
import linearfunction4 from "@/assets/images/ReadyScore/linearFunction/2-3-LinearRegFunction.png";
import linearfunction5 from "@/assets/images/ReadyScore/linearFunction/2-4-LinearRegFunction.png";


import ai from "@/assets/images/ReadyScore/AI/LinearFunction_AI.jpeg"
import ai1 from "@/assets/images/ReadyScore/AI/1-1_AI_LinearFunction.jpeg"
import ai2 from "@/assets/images/ReadyScore/AI/1-2-AI_LinearFunction.jpeg"
import ai3 from "@/assets/images/ReadyScore/AI/1-3-AI_LinearFunction.jpg"


interface TeamSectionProps {
  title: string;
  members: string[];
}

function TeamSection({ title, members }: TeamSectionProps) {
const [isExpanded, setIsExpanded] = useState(true); // Changé de false à true
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Référence pour l'intervalle

  // Fonction de mélange mémorisée
  const shuffleArray = useCallback((array: string[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);

  // Configuration du slider avec défilement automatique
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1, // Une seule image visible à la fois
      spacing: 16,
    },
    created(slider) {
      // Lancer le défilement automatique
      intervalRef.current = setInterval(() => {
        slider.next();
      }, 3000); // Change d'image toutes les 3 secondes

      // Pause au survol
      slider.container.addEventListener("mouseover", () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      });

      // Reprise après survol
      slider.container.addEventListener("mouseout", () => {
        intervalRef.current = setInterval(() => {
          slider.next();
        }, 3000);
      });
    },
    destroyed() {
      // Nettoyer l'intervalle
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    },
  });

  useEffect(() => {
    let isMounted = true;

    // Mélanger les images uniquement si la section est ouverte et si members contient des données
    if (isExpanded && members.length > 0) {
      const shuffled = shuffleArray(members);
      if (isMounted) {
        setShuffledImages(shuffled);
      }
    } else if (!isExpanded) {
      // Réinitialiser les images quand la section est fermée pour éviter les incohérences
      if (isMounted) {
        setShuffledImages([]);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [isExpanded, members, shuffleArray]);

  return (
    <div className="mt-12">
      <motion.div
        className="flex justify-between items-center cursor-pointer bg-white rounded-xl p-2 shadow-sm border-spacing-8"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01, boxShadow: "0 4px 20px rgba(124, 58, 237, 0.1)" }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <h3 className="font-semibold text-primary font-heading">{title}</h3>
        <motion.div
          className="text-purple-600"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? <Minus size={24} /> : <Plus size={24} />}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-md p-2 mt-1"
          >
            {shuffledImages.length > 0 ? (
              <div ref={sliderRef} className="keen-slider overflow-hidden">
                {shuffledImages.map((imageUrl, index) => (
                  <motion.div
                    key={`${imageUrl}-${index}`}
                    className="keen-slider__slide rounded-xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, x: 100 }} // Glissement depuis la droite
                    animate={{ opacity: 1, x: 0 }} // Image centrée
                    exit={{ opacity: 0, x: -100 }} // Glissement vers la gauche
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <img
                      src={imageUrl}
                      alt={`Membre de l'équipe ${index + 1}`}
                      className="w-full h-64 object-cover rounded-xl"
                      onError={(e) => {
                        e.currentTarget.src = "/fallback-image.jpg";
                      }}
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500">
                Aucune image disponible
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default function ProductsScore(){

    const { t } = useTranslation();

    const monteCarlo=[carlo,carlo1,carlo2,carlo3,carlo4,carlo4,carlo5,carlo6];
    const Ai=[ai,ai1,ai2,ai3]
    const linear=[linearfunction,linearfunction2,linearfunctio3,linearfunction4,linearfunction5];

    return(
        <>
            
            <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center">
                <AnimatedComponent animation="slideUp" delay={0.05} duration={0.3}>
                    <h2 className="text-2xl sm:text-3xl text-primary font-semibold flex justify-center sm:justify-start tracking-wide uppercase mb-6 text-center sm:text-left">{t("readyScore")}</h2>
                </AnimatedComponent>
                <AnimatedComponent animation="slideUp" delay={0.15} duration={0.3}>
                    <p  className="max-w-3xl text-neutral-500 text-center lg:mx-auto mb-6 translate-y-5 text-base sm:text-lg md:text-xl lg:text-xl">
                        {t("readyScore.description")}
                    </p>
                </AnimatedComponent>
                <div className="mt-12">
                    <div className="flex justify-center ">
                      <a
                        href="https://calendly.com/fintech4esg"
                        className="inline-block text-sm sm:text-base text-white rounded-xl border bg-[#19af58] px-6 sm:px-8 py-2 sm:py-2.5 transition hover:bg-primary hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ letterSpacing: "0.3px" }}
                      >
                        {t("title.demo")}
                      </a>
                    </div>
                </div>
            </div>
           
            <section className="bg-gradient-to-br from-purple-900 via-purple-900 to-purple-900 opacity-90">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3 ms-5 me-5 py-5">
                    <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="">
                        <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }} >
                            <TeamSection title={t("monteCarlo")} members={monteCarlo}  />
                        </motion.div>
                    </AnimatedComponent>
                    <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="">
                        <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }} >
                            <TeamSection title={t("AI")} members={Ai}  />
                        </motion.div>
                    </AnimatedComponent>
                    <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="">
                        <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }} >
                            <TeamSection title={t("Linear")} members={linear}  />
                        </motion.div>
                    </AnimatedComponent>
                </div>
            </section>
            <ScoreDemo />
        </>
    );
}