import { Check, LucideIcon, Smartphone, Store } from "lucide-react";
import { AnimatedComponent } from "./ui/animated-component";
import { HoverAnimationCard } from "./ui/hover-animation-card";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import EWalletSimulatorApp from "./EwalletSimulator";

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




export default function EwalletPayment() {
    const { t } = useTranslation();

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
    return (
        <>
            <div className="lg:text-center mb-12">
                <h2 className="text-base text-secondary-600 font-semibold tracking-wide uppercase">{t("productewallets.heading")}</h2>
                <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-neutral-900 sm:text-4xl font-heading">
                    {t("productewallets.title")}
                </p>
                <p className="mt-4 max-w-2xl text-xl text-neutral-500 lg:mx-auto">
                    {t("productewallets.description")}
                </p>
            </div>
          {/* eWallet Products Section - Always visible */}
            <div className="bg-gradient-to-r from-purple-800 to-purple-800 backdrop-blur-lg p-4">
                <div className="bg-purple-600 text-white text-center py-2 px-4 rounded-xl mb-2 max-w-xs mx-auto">
                  <h4 className="text-xl font-medium">{t("platform.tab.ewallet")}</h4>
                </div>
                
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
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
        </>
    );
}