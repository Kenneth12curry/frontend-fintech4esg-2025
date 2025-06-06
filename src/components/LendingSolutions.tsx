import { 
  Check,
  LucideIcon,
  CreditCard,
  ShoppingCart,
  Store,
  Wallet,
  Clock,
  Smartphone,
  PiggyBank,
  Plus, Minus
} from "lucide-react";
import { AnimatedComponent } from "./ui/animated-component";
import { useTranslation } from "react-i18next";
import { HoverAnimationCard } from "@/components/ui/hover-animation-card";
import { motion,AnimatePresence } from "framer-motion";

import nanoLoan1 from "@/assets/images/products/NanoLoan/1-1_NanoLoan.jpg";
import nanoLoan2 from "@/assets/images/products/NanoLoan/1-2_NanoLoan.jpg";
import nanoLoan3 from "@/assets/images/products/NanoLoan/1-3_NanoLoan.jpg";
import nanoLoan4 from "@/assets/images/products/NanoLoan/1-4_NanoLoan_Thailland.jpg";
import nanoLoan5 from "@/assets/images/products/NanoLoan/1-5_NanoLoan.jpg";
import nanoLoan6 from "@/assets/images/products/NanoLoan/1-6_NanoLoan.jpg";
import nanoLoan7 from "@/assets/images/products/NanoLoan/1-7_NanoLoan.jpg";
import nanoLoan8 from "@/assets/images/products/NanoLoan/1-8_NanoLoan.jpg";
import nanoLoan9 from "@/assets/images/products/NanoLoan/1-9_NanoLoan.jpg";
import nanoLoan10 from "@/assets/images/products/NanoLoan/1-10_NanoLoan.jpg";

import macroLoan1 from "@/assets/images/products/MacroLoan/2-1_MacroLoan_SouthAmerica.jpg"
//import macroLoan2 from "@/assets/images/products/MacroLoan/2-2_MacroLoan.jpg"
//import macroLoan3 from "@/assets/images/products/MacroLoan/2-3_MacroLoan_Vietnam.jpg"
import macroLoan4 from "@/assets/images/products/MacroLoan/2-4_MacroLoan.jpg"
import macroLoan5 from "@/assets/images/products/MacroLoan/2-5_MacroLoan.jpg"
import macroLoan6 from "@/assets/images/products/MacroLoan/2-6_MacroLoan.jpg"
import macroLoan7 from "@/assets/images/products/MacroLoan/2-7_MacroLoan.jpg"


import readyToGo2 from "@/assets/images/products/ReadyToGo/3-2_ReadyToGo.jpg"
import readyToGo3 from "@/assets/images/products/ReadyToGo/3-3_ReadyToGo.jpg"
import readyToGo4 from "@/assets/images/products/ReadyToGo/3-4_ReadyToGo.jpg"

import Bnpl1 from "@/assets/images/products/BNPL/4-1_BNPL.jpg";

import mobile from "@/assets/images/products/Mobile/mobile.jpg";
import tel from "@/assets/images/products/Mobile/tel.png";

import merchant from  "@/assets/images/products/Merchant/merchant.jpg";



/** sections savingProducts */
import university from "@/assets/images/savingProducts/University/5-2_Saving_Education_Term Loan.png";
import wedding from "@/assets/images/savingProducts/wedding/5-1_Saving_Wedding_Term Loan.jpg";
import wedding1 from "@/assets/images/savingProducts/wedding/5-3_Saving_Wedding_Classic Loan.jpg";


import { useState, useEffect, useCallback, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "@/styles/styles.css";


// Interface pour les props
/* interface TeamSectionProps {
  title: string;
  members: string[];
} */

/* function TeamSection({ title, members }: TeamSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);
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
 */

import { useMemo } from "react";

interface TeamSectionProps {
  title: string;
  members: string[];
  isOpenByDefault?: boolean;
}

function TeamSection({ title, members, isOpenByDefault = false }: TeamSectionProps) {
  const [isExpanded, setIsExpanded] = useState(isOpenByDefault);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Fonction de mélange mémorisée
  const shuffleArray = useCallback((array: string[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);

  // Mélanger les images une seule fois au montage si la section est ouverte
  const initialShuffledImages = useMemo(() => {
    return isOpenByDefault && members.length > 0 ? shuffleArray(members) : [];
  }, [members, shuffleArray, isOpenByDefault]);

  useEffect(() => {
    setShuffledImages(initialShuffledImages);
  }, [initialShuffledImages]);

  // Configuration du slider
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 16,
      },
      created(slider) {
        intervalRef.current = setInterval(() => {
          slider.next();
        }, 3000);
      },
      destroyed() {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      },
    },
    [
      // Plugin pour gérer mouseover/mouseout
      (slider) => {
        const pause = () => {
          if (intervalRef.current) clearInterval(intervalRef.current);
        };
        const resume = () => {
          intervalRef.current = setInterval(() => slider.next(), 3000);
        };
        slider.container.addEventListener("mouseover", pause);
        slider.container.addEventListener("mouseout", resume);
        slider.on("destroyed", () => {
          slider.container.removeEventListener("mouseover", pause);
          slider.container.removeEventListener("mouseout", resume);
        });
      },
    ]
  );

  // Gestion de l'ouverture/fermeture
  const toggleExpanded = useCallback(() => {
    setIsExpanded((prev) => {
      if (!prev && members.length > 0) {
        setShuffledImages(shuffleArray(members));
      } else if (prev) {
        setShuffledImages([]);
      }
      return !prev;
    });
  }, [members, shuffleArray]);

  // Variantes d'animation simplifiées
  const sectionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.4 } },
  };

  return (
    <div className="mt-12">
      <motion.div
        className="flex justify-between items-center cursor-pointer bg-white rounded-xl p-2 shadow-sm"
        onClick={toggleExpanded}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleExpanded();
          }
        }}
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
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-white rounded-xl shadow-md p-2 mt-1 overflow-hidden"
          >
            {shuffledImages.length > 0 ? (
              <div ref={sliderRef} className="keen-slider">
                {shuffledImages.map((imageUrl, index) => (
                  <motion.div
                    key={`${imageUrl}-${index}`}
                    className="keen-slider__slide rounded-xl overflow-hidden shadow-lg"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <img
                      src={imageUrl}
                      alt={`Membre de l'équipe ${index + 1}`}
                      className="w-full h-64 object-cover rounded-xl"
                      onError={(e) => {
                        e.currentTarget.src = "/fallback-image.jpg";
                      }}
                      loading={index === 0 ? "eager" : "lazy"}
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



interface ProductCardProps {
  title: string;
  description: string;
  subtext: string;
  icon: LucideIcon;
  features: string[];
  delay?: number;
}

function ProductCard({ title, description, subtext, icon: Icon, features, delay = 0 }: ProductCardProps) {
  return (
    <AnimatedComponent animation="fadeIn" delay={delay} duration={0.5}>
      <HoverAnimationCard 
        hoverEffect="lift" 
        className="bg-white/20 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 h-full"
      >
        <motion.div 
          className="text-green-400 mb-4"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Icon className="h-10 w-10" />
        </motion.div>
        <h3 className="text-lg font-medium text-white font-heading">{title}</h3>
        <p className="mt-2 text-primary-100 font-medium text-white">{description}</p>
        <p className="mt-1 text-sm text-primary-200 text-white">{subtext}</p>
        <ul className="mt-4 space-y-2 text-primary-100 text-white">
          {features.map((feature, idx) => (
            <motion.li 
              key={idx} 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.1 * idx, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </HoverAnimationCard>
    </AnimatedComponent>
  );
}

export default function LendingSolutions(){
    const { t } = useTranslation();

    const lendingProducts = [
        {
        title: t("platform.lending.nano.title"),
        description: t("platform.lending.nano.description"),
        subtext: t("platform.lending.nano.subtext"),
        icon: Wallet,
        features: [
            t("platform.lending.nano.feature1"),
            t("platform.lending.nano.feature2"),
            t("platform.lending.nano.feature3")
        ]
        },
        {
        title: t("platform.lending.macro.title"),
        description: t("platform.lending.nano.description"),
        subtext: t("platform.lending.macro.subtext"),
        icon: Wallet,
        features: [
            t("platform.lending.nano.feature1"),
            t("platform.lending.nano.feature2"),
            t("platform.lending.nano.feature3")
        ]
        },
        {
        title: t("platform.lending.term.title"),
        description: t("platform.lending.term.description"),
        subtext: t("platform.lending.term.subtext"),
        icon: CreditCard,
        features: [
            t("platform.lending.term.feature1"),
            t("platform.lending.term.feature2"),
            t("platform.lending.term.feature3")
        ]
        },
    ];

    const lendingProducts1 =[  
        {
            title: t("platform.lending.bnpl.title"),
            description: t("platform.lending.bnpl.description"),
            subtext: t("platform.lending.bnpl.subtext"),
            icon: ShoppingCart,
            features: [
                t("platform.lending.bnpl.feature1"),
                t("platform.lending.bnpl.feature2"),
                t("platform.lending.bnpl.feature3")
            ]
        },
        {
            title: t("platform.lending.merchant.title"),
            description: t("platform.lending.merchant.description"),
            subtext: t("platform.lending.merchant.subtext"),
            icon: Store,
            features: [
                t("platform.lending.merchant.feature1"),
                t("platform.lending.merchant.feature2"),
                t("platform.lending.merchant.feature3")
            ]
        },

        {
            title: t("platform.lending.merchant.title"),
            description: t("platform.lending.merchant.description"),
            subtext: t("platform.lending.merchant.subtext"),
            icon: Store,
            features: [
                t("platform.lending.merchant.feature1"),
                t("platform.lending.merchant.feature2"),
                t("platform.lending.merchant.feature3")
            ]
        }
    ];

    const eWalletProducts = [
        {
        title: t("platform.ewallet.agent.title"),
        description: t("platform.ewallet.agent.description"),
        subtext: t("platform.ewallet.agent.subtext"),
        icon: Store,
        features: [
            t("platform.ewallet.agent.feature1"),
            t("platform.ewallet.agent.feature2"),
            t("platform.ewallet.agent.feature3"),
            t("platform.ewallet.agent.feature4"),
            t("platform.ewallet.agent.feature5"),
            t("platform.ewallet.agent.feature6"),
            t("platform.ewallet.agent.feature7"),
            t("platform.ewallet.agent.feature8")
        ]
        },
        {
        title: t("platform.ewallet.client.title"),
        description: t("platform.ewallet.client.description"),
        subtext: t("platform.ewallet.client.subtext"),
        icon: Smartphone,
        features: [
            t("platform.ewallet.client.feature1"),
            t("platform.ewallet.client.feature2"),
            t("platform.ewallet.client.feature3"),
            t("platform.ewallet.client.feature4"),
            t("platform.ewallet.client.feature5"),
            t("platform.ewallet.client.feature6")
        ]
        }
    ];

    const savingProducts = [
        {
        title: t("platform.saving.classic.title"),
        description: t("platform.saving.classic.description"),
        subtext: t("platform.saving.classic.subtext"),
        icon: PiggyBank,
        features: [
            t("platform.saving.classic.feature1"),
            t("platform.saving.classic.feature2"),
            t("platform.saving.classic.feature3")
        ]
        },
        {
        title: t("platform.saving.term.title"),
        description: t("platform.saving.term.description"),
        subtext: t("platform.saving.term.subtext"),
        icon: Clock,
        features: [
            t("platform.saving.term.feature1"),
            t("platform.saving.term.feature2"),
            t("platform.saving.term.feature3")
        ]
        }
    ];

    const nanoLoan=[nanoLoan1,nanoLoan2,nanoLoan3,nanoLoan4,nanoLoan5,nanoLoan6,nanoLoan7,nanoLoan7,nanoLoan8,nanoLoan9,nanoLoan10];
    const macroLoan=[macroLoan1,macroLoan4,macroLoan5,macroLoan6,macroLoan7];
    const readyToGo=[readyToGo2,readyToGo3,readyToGo4];
    const BNPL=[Bnpl1];
    const Mobile =[mobile,tel];
    const Merchant=[merchant];
    const savingProductsUniversity=[university];
    const savingProductsWedding=[wedding,wedding1];

    return (
        <>
            <AnimatedComponent animation="fadeIn" delay={0.05} duration={0.3} className="mt-4">
                <div className="bg-gradient-to-r from-purple-800 to-purple-800 backdrop-blur-lg p-4">
                    <h3 className="text-xl font-bold text-white mb-2 font-heading text-center">{t("platform.products.title")}</h3>
                    
                    <div className="w-full">
                    {/* Lending Products Section - Always visible */}
                    <div className="mb-4">
                        <div className="bg-[#19af58] text-white text-center py-2 px-4 rounded-xl mb-7 max-w-xs mx-auto">
                            <h4 className="text-xl font-medium">{t("platform.tab.lending")}</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                            {lendingProducts.map((product, index) => (
                                <ProductCard 
                                key={index}
                                title={product.title}
                                description={product.description}
                                subtext={product.subtext}
                                icon={product.icon}
                                features={product.features}
                                delay={0.1 * index}
                                />
                            ))}
                            <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="transform -translate-y-12">
                                <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }} >
                                    <TeamSection title={t("nano.business")} members={nanoLoan} />
                                </motion.div>
                            </AnimatedComponent>
                            <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="transform -translate-y-12">
                                <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }} >
                                    <TeamSection title={t("macro.business")} members={macroLoan} />
                                </motion.div>
                            </AnimatedComponent>
                            <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="transform -translate-y-12">
                                <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }} >
                                    <TeamSection title={t("readyToGO")}  members={readyToGo}  />
                                </motion.div>
                            </AnimatedComponent>
                        </div>

                        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 transform -translate-y-7">
                            {lendingProducts1.map((product, index) => (
                                <ProductCard 
                                key={index}
                                title={product.title}
                                description={product.description}
                                subtext={product.subtext}
                                icon={product.icon}
                                features={product.features}
                                delay={0.1 * index}
                                />
                            ))}
                            <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="transform -translate-y-12">
                                <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }} >
                                    <TeamSection title={t("BNPL")} members={BNPL} />
                                </motion.div>
                            </AnimatedComponent>
                            <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="transform -translate-y-12">
                                <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }} >
                                    <TeamSection title={t("about.team")} members={Mobile} />
                                </motion.div>
                            </AnimatedComponent>
                            <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="transform -translate-y-12">
                                <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }} >
                                    <TeamSection title={t("merchant")}  members={Merchant}  />
                                </motion.div>
                            </AnimatedComponent>

                        </div>

                    </div>
                    
                    {/* Saving Products Section - Always visible */}
                    <div className="mb-4">
                        <div className="bg-[#19af58] text-white text-center py-2 px-4 rounded-xl max-w-xs mx-auto transform -translate-y-8">
                        <h4 className="text-xl font-medium">{t("platform.tab.saving")}</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                            {savingProducts.map((product, index) => (
                                <ProductCard 
                                key={index}
                                title={product.title}
                                description={product.description}
                                subtext={product.subtext}
                                icon={product.icon}
                                features={product.features}
                                delay={0.1 * index}
                                />
                            ))}
                        </div>

                        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                                <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="transform -translate-y-9">
                                <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }} >
                                    <TeamSection title={t("saving.classic")} members={savingProductsUniversity} />
                                </motion.div>
                            </AnimatedComponent>
                                <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="transform -translate-y-9">
                                    <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }} >
                                        <TeamSection title={t("saving.planning")} members={macroLoan} />
                                    </motion.div>
                                </AnimatedComponent>
                                <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="transform -translate-y-9">
                                <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }} >
                                    <TeamSection title={t("saving.terms")}  members={savingProductsWedding}  />
                                </motion.div>
                            </AnimatedComponent>
                        </div>
                        
                    </div>

                    </div>
                </div>
            </AnimatedComponent>
        </>
    );
}