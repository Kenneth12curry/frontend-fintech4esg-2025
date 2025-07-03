import { Check, LucideIcon, Minus, Nfc, Plus, Smartphone, Store } from "lucide-react";
import { AnimatedComponent } from "./ui/animated-component";
import { HoverAnimationCard } from "./ui/hover-animation-card";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import EWalletSimulatorApp from "./EWalletSimulator_app";
import { useKeenSlider } from "keen-slider/react";
import { useCallback, useEffect, useRef, useState } from "react";

import carlo from "@/assets/images/ReadyScore/montecarlo/Montecarlo_formula2.webp";
import linearfunction from "@/assets/images/ReadyScore/linearFunction/LinearFunction.jpeg";
import linearfunction1 from "@/assets/images/ReadyScore/AI/LinearFunction_AI.jpeg"

/** SECTIONS IMAGES READYPAY */
import qrcode0 from "@/assets/images/ReadyPay/QRCode/1-1-QR Code POS.jpg";
import qrcode1 from "@/assets/images/ReadyPay/QRCode/1-2-QR Code POS.jpg";


import nfc0 from "@/assets/images/ReadyPay/NFC/2-1-NFC POS.jpg";
import nfc1 from "@/assets/images/ReadyPay/NFC/2-2-NFC P2P.jpg";
import ussd0 from "@/assets/images/ReadyPay/ussd/3-1-USSD-banking.jpg";
import ussd1 from "@/assets/images/ReadyPay/ussd/3-2-USSD-banking.jpg";
import ussd2 from "@/assets/images/ReadyPay/ussd/3-3-USSD-banking.jpg";

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
        <p className="mt-2 text-white font-medium">{description}</p>
        <p className="mt-1 text-sm text-white">{subtext}</p>
        <ul className="mt-4 space-y-2 text-white">
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


export default function EwalletPayment() {
    const { t } = useTranslation();

    const eWalletProducts = [
    {
      title: t("platform.ewallet.agent.title"),
      description: t("platform.ewallet.agent.description"),
      subtext: t("platform.ewallet.agent.subtext"),
      icon: Store,
      features: [
          t("platform.ewallet.agent.feature2"),
          t("platform.ewallet.agent.feature9"),
          t("platform.ewallet.agent.feature6"),
          t("platform.ewallet.agent.feature5"),
          t("platform.ewallet.agent.feature8"),
          t("platform.ewallet.agent.feature7"),
          t("platform.ewallet.agent.feature3"),
          t("platform.ewallet.agent.feature1"),
      ]
    },
    {
      title: t("platform.ewallet.client.title"),
      description: t("platform.ewallet.client.description"),
      subtext: t("platform.ewallet.client.subtext"),
      icon: Smartphone,
      features: [
        t("platform.ewallet.client.feature1"),
        t("platform.ewallet.client.feature5"),
        t("platform.ewallet.client.feature7"),
        t("platform.ewallet.client.feature2"),
        t("platform.ewallet.client.feature4"),
        t("platform.ewallet.client.feature6"),
        t("platform.ewallet.client.feature3"),
      ]
    }
    ];

    const qrcode=[qrcode0,qrcode1];
    const nfc=[nfc0,nfc1];
    const ussd=[ussd0,ussd1,ussd2];
    return (
        <>
            <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center">
               <AnimatedComponent animation="slideUp" delay={0.05} duration={0.3}>
                    <h2 className="text-2xl sm:text-3xl text-primary font-semibold flex justify-center sm:justify-start tracking-wide uppercase mb-6 text-center sm:text-left">{t("readyPay")}</h2>
              </AnimatedComponent>
               {/*  <h2 className="text-base text-secondary-600 font-semibold tracking-wide uppercase">{t("productewallets.heading")}</h2> */}
               <p className="mt-2 text-xl sm:text-3xl leading-7 sm:leading-8 font-semibold tracking-tight text-neutral-900 font-heading text-center sm:text-center">
                    {t("productewallets.title")}
              </p>
              <AnimatedComponent animation="slideUp" delay={0.15} duration={0.3}>
                  <p  className="max-w-3xl text-neutral-500 text-center lg:mx-auto mb-6 translate-y-5 text-base sm:text-lg md:text-xl lg:text-xl">
                      {t("ewallet.description")}
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
           
          {/* eWallet Products Section - Always visible */}
            <div className="bg-gradient-to-r from-purple-800 to-purple-800 backdrop-blur-lg p-4">
              <div className="mx-auto w-max text-white rounded-xl bg-[#19af58] border-none px-4 sm:px-8 py-1.5 sm:py-2.5 sm:mt-4 mt-2 transition">
                  <h4 className="text-base sm:text-xl font-medium">
                    {t("platform.tab.ewallet")}
                  </h4>
              </div>


                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-4">
                  {eWalletProducts.map((product, index) => (
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
            </div>
          {/** end eWallet Section */}

          <EWalletSimulatorApp />

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 ms-5 me-5 py-0 transform -translate-y-20">
              <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="">
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }} >
                      <TeamSection title={t("qrc")} members={qrcode}  />
                  </motion.div>
              </AnimatedComponent>
              <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="">
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }} >
                      <TeamSection title={t("nfc")} members={nfc}  />
                  </motion.div>
              </AnimatedComponent>
              <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.5} className="">
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }} >
                      <TeamSection title={t("ussd")} members={ussd}  />
                  </motion.div>
              </AnimatedComponent>
            </div>
        </>
    );
}