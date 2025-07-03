import { 
  Shield, 
  DollarSign, 
  BarChart4, 
  Check,
  Database,
  LucideIcon,
  CreditCard,
  ShoppingCart,
  Store,
  Wallet,
  Clock,
  Smartphone,
  PiggyBank
} from "lucide-react";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from "recharts";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AnimatedComponent } from "@/components/ui/animated-component";
import { HoverAnimationCard } from "@/components/ui/hover-animation-card";
import { AnimatedProgressBar } from "@/components/ui/animated-progress-bar";
import { CountUp } from "@/components/ui/count-up";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

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
        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 h-full"
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
        <p className="mt-2 text-primary-100 font-medium">{description}</p>
        <p className="mt-1 text-sm text-primary-200">{subtext}</p>
        <ul className="mt-4 space-y-2 text-primary-100">
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



export default function ProductsCash(){
    const { t } = useTranslation();
  
    const platformFeatures = [
        {
        title: t("platform.feature.scoring.title"),
        description: t("platform.feature.scoring.description"),
        icon: Database
        },
        {
        title: t("platform.feature.endtoend.title"),
        description: t("platform.feature.endtoend.description"),
        icon: BarChart4
        },
        {
        title: t("platform.feature.integration.title"),
        description: t("platform.feature.integration.description"),
        icon: Shield
        },
        {
        title: t("platform.feature.userfriendly.title"),
        description: t("platform.feature.userfriendly.description"),
        icon: DollarSign
        }
    ];
  
    const scoreData = [
        { subject: t("platform.score.income"), A: 85, fullMark: 100 },
        { subject: t("platform.score.saving"), A: 72, fullMark: 100 },
        { subject: t("platform.score.investment"), A: 68, fullMark: 100 },
        { subject: t("platform.score.mobile"), A: 90, fullMark: 100 },
        { subject: t("platform.score.expenditure"), A: 55, fullMark: 100 },
        { subject: t("platform.score.profit"), A: 78, fullMark: 100 },
    ];
    
    const clientSegmentation = [
        { level: 1, color: "bg-red-500", description: t("platform.segment.verylow") },
        { level: 2, color: "bg-orange-400", description: t("platform.segment.low") },
        { level: 3, color: "bg-yellow-400", description: t("platform.segment.medium") },
        { level: 4, color: "bg-green-300", description: t("platform.segment.good") },
        { level: 5, color: "bg-green-500", description: t("platform.segment.verygood") }
    ];
    
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
            <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center">
                <AnimatedComponent animation="slideUp" delay={0.05} duration={0.3}>
                    <h2 className="text-2xl sm:text-3xl text-primary font-semibold flex justify-center sm:justify-start tracking-wide uppercase mb-6 text-center sm:text-left">{t("readyCash")}</h2>
                </AnimatedComponent>
                <AnimatedComponent animation="slideUp" delay={0.15} duration={0.3}>
                    <p  className="max-w-3xl text-neutral-500 text-center lg:mx-auto mb-6 translate-y-5 text-base sm:text-lg md:text-xl lg:text-xl">
                        {t("readySuite.description")}
                    </p>
                </AnimatedComponent>
                {/*<p className="text-neutral-500 text-justify leading-relaxed mb-2 ms-2 me-2">
                    {t("readySuite.description1")}
                </p> */}
            </div>

            <section id="platform" className="pt-8 pb-4 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedComponent animation="fadeIn" duration={0.7} className="text-center mb-4">
                    {/* <AnimatedComponent animation="slideUp" delay={0.1} duration={0.5}>
                        <h2 className="text-base text-green-300 font-semibold tracking-wide uppercase">{t("platform.heading")}</h2>
                    </AnimatedComponent> */}
                    <AnimatedComponent animation="slideUp" delay={0.3} duration={0.5}>
                        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl leading-6 sm:leading-7 md:leading-8 font-bold tracking-tight text-white font-heading mt-2">
                            {t("platform.title")}
                        </p>
                    </AnimatedComponent>
                    <AnimatedComponent animation="slideUp" delay={0.5} duration={0.5}>
                        <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-purple-100 mx-auto">
                            {t("platform.description")}
                        </p>
                    </AnimatedComponent>
                    <AnimatedComponent animation="slideUp" delay={0.7} duration={0.5}>
                        <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-purple-100 mx-auto">
                        {t("platform.framework")}
                        </p>
                    </AnimatedComponent>
                    </AnimatedComponent>
                    
                    <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.8}>
                    <HoverAnimationCard
                        hoverEffect="border-glow"
                        className="bg-gradient-to-r from-purple-900/70 to-green-900/70 rounded-xl p-8 mb-4 backdrop-blur-lg border border-purple-500/20"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-8">
                            <AnimatedComponent animation="slideUp" delay={0.6} duration={0.5}>
                            <h3 className="text-base sm:text-base md:text-lg lg:text-2xl font-bold text-white mb-4 font-heading">
                                {t("platform.partnership.title")}
                            </h3>
                            <p className="text-sm sm:text-sm md:text-base lg:text-lg text-purple-100 mb-4">
                                {t("platform.partnership.description")}
                            </p>
                            </AnimatedComponent>
                            <ul className="space-y-3 mt-6">
                            {[1, 2, 3, 4,5].map((i) => (
                                <motion.li 
                                key={i} 
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + (i * 0.1), duration: 0.4 }}
                                viewport={{ once: true }}
                                >
                                <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm sm:text-sm md:text-base lg:text-lg text-purple-100">
                                    {t(`platform.partnership.benefit${i}`)}
                                </span>
                                </motion.li>
                            ))}
                            </ul>
                        </div>
                        <AnimatedComponent animation="fadeIn" delay={0.9} duration={0.7} className="md:col-span-4">
                            <div className="bg-purple-800/30 rounded-lg p-6 shadow-lg border border-purple-500/30">
                            <h4 className="text-base sm:text-base md:text-lg lg:text-xl text-white font-medium mb-3">
                                {t("platform.partnership.stats.title")}
                            </h4>
                            <div className="space-y-4">
                                <div>
                                <div className="flex justify-between">
                                    <span className="text-sm sm:text-sm md:text-base lg:text-lg text-purple-200">
                                        {t("platform.partnership.stats.growth")}
                                    </span>
                                    <span className="text-green-400 font-bold">
                                    <CountUp end={35} suffix="%" delay={1.1} duration={1.5} />
                                    </span>
                                </div>
                                <AnimatedProgressBar 
                                    value={35} 
                                    max={100} 
                                    delay={1.1}
                                    color="#10B981"
                                    className="bg-purple-950 h-2 mt-1 rounded-full"
                                />
                                </div>
                                <div>
                                <div className="flex justify-between">
                                    <span className="text-sm sm:text-sm md:text-base lg:text-lg text-purple-200">{t("platform.partnership.stats.default")}</span>
                                    <span className="text-green-400 font-bold">
                                    <CountUp end={-22} suffix="%" delay={1.3} duration={1.5} />
                                    </span>
                                </div>
                                <AnimatedProgressBar 
                                    value={22} 
                                    max={100}
                                    delay={1.3}
                                    color="#10B981"
                                    className="bg-purple-950 h-2 mt-1 rounded-full"
                                />
                                </div>
                                <div>
                                <div className="flex justify-between">
                                    <span className="text-sm sm:text-sm md:text-base lg:text-lg text-purple-200">{t("platform.partnership.stats.customer")}</span>
                                    <span className="text-green-400 font-bold">
                                    <CountUp end={41} suffix="%" delay={1.5} duration={1.5} />
                                    </span>
                                </div>
                                <AnimatedProgressBar 
                                    value={41} 
                                    max={100}
                                    delay={1.5}
                                    color="#10B981"
                                    className="bg-purple-950 h-2 mt-1 rounded-full"
                                />
                                </div>
                                <motion.div 
                                className="text-center mt-6"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                >
                                <a 
                                    href="https://calendly.com/fintech4esg" 
                                    className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-xs sm:text-sm md:text-base text-white font-medium py-2 px-6 rounded-xl hover:from-green-500 hover:to-green-400 transition duration-300 shadow-lg"
                                >
                                {t("platform.partnership.cta")}
                                </a>
                                </motion.div>
                            </div>
                            </div>
                        </AnimatedComponent>
                        </div>
                    </HoverAnimationCard>
                    </AnimatedComponent>

                    <AnimatedComponent animation="fadeIn" delay={0.3} duration={0.7} className="mt-4">
                    <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-4">
                        {platformFeatures.map((feature, index) => (
                        <HoverAnimationCard 
                            key={index} 
                            hoverEffect="scale" 
                            className="bg-white/10  backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 h-full"
                        >
                            <motion.div 
                            className="text-green-400 mb-4"
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}>

                            <feature.icon className="h-10 w-10" />
                            </motion.div>
                            <AnimatedComponent animation="slideUp" delay={0.3 + (index * 0.1)} duration={0.5}>
                            <h3 className="text-base sm:text-base md:text-lg lg:text-xl text-white font-medium mb-3">{feature.title}</h3>
                            <p className="text-sm sm:text-sm md:text-base lg:text-lg text-purple-100 mb-4">{feature.description}</p>
                            </AnimatedComponent>
                        </HoverAnimationCard>
                        ))}
                    </div>
                    </AnimatedComponent>

                    <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.8} className="mt-4">
                    <HoverAnimationCard
                        hoverEffect="border-glow"
                        className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
                    >
                        <AnimatedComponent animation="slideUp" delay={0.5} duration={0.5}>
                        <h3 className="text-base sm:text-base md:text-lg lg:text-xl text-white font-medium mb-2 font-heading">{t("platform.risk.title")}</h3>
                        </AnimatedComponent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatedComponent animation="fadeIn" delay={0.7} duration={0.8}>
                            <motion.div 
                            className="bg-white bg-opacity-10 rounded-lg p-5"
                            whileHover={{ boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)" }}
                            transition={{ duration: 0.3 }}
                            >
                            <ResponsiveContainer width="100%" height={300}>
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={scoreData}>
                                <PolarGrid stroke="rgba(255, 255, 255, 0.3)" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: "white" }} />
                                <Radar 
                                    name="Client Profile" 
                                    dataKey="A" 
                                    stroke="#10B981" 
                                    fill="#10B981" 
                                    fillOpacity={0.2}
                                    animationBegin={200}
                                    animationDuration={1500}
                                />
                                </RadarChart>
                            </ResponsiveContainer>
                            </motion.div>
                            <p className="text-sm sm:text-sm md:text-base lg:text-lg text-center text-purple-200 mt-4">
                            {t("platform.risk.description")}
                            </p>
                            <div className="flex justify-center">
                                <Button asChild size="lg"  className="mt-4 bg-gradient-to-r from-green-600 to-green-500 text-sm sm:text-sm md:text-base text-white font-medium py-2 px-6 rounded-xl hover:from-green-500 hover:to-green-400 transition duration-300 shadow-lg">
                                    <Link to="/readyscore">
                                        {t("score")}
                                        <svg className="ml-2 -mr-1 h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </Button>
                            </div>
                        </AnimatedComponent>
                        <AnimatedComponent animation="slideUp" delay={0.7} duration={0.7}>
                            <h4 className="text-base sm:text-base md:text-lg lg:text-xl text-white font-medium mb-5 font-heading">{t("platform.segment.title")}</h4>
                            <div className="space-y-4">
                            {clientSegmentation.map((segment, index) => (
                                <motion.div 
                                key={segment.level} 
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 5 }}
                                >
                                <motion.div 
                                    className={`w-8 h-8 rounded-full ${segment.color} flex items-center justify-center text-white font-bold mr-3`}
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    {segment.level}
                                </motion.div>
                                <div className="text-sm sm:text-sm md:text-base lg:text-lg text-purple-100">
                                    {segment.description}
                                </div>
                                </motion.div>
                            ))}
                            </div>
                        </AnimatedComponent>
                        </div>
                        
                        {/* Interactive Scoring Demo removed to prevent duplication */}
                    </HoverAnimationCard>
                    </AnimatedComponent>

                   
                </div>
            </section>
        </>
        
    );
}