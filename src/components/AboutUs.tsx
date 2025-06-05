import { ShieldCheck, TrendingUp, Globe, Users, LucideIcon, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedComponent } from "@/components/ui/animated-component";

import OurBackgroundCaroussel from "./OurBackgroundCaroussel";

interface TeamMemberProps {
  name: string;
  role: string;
  imgPlaceholder?: boolean;
  index?: number;
}

function TeamMember({ name, role, imgPlaceholder = true, index = 0 }: TeamMemberProps) {
  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
    >
      {imgPlaceholder ? (
        <motion.div 
          className="w-32 h-32 rounded-full bg-purple-200 flex items-center justify-center mb-4 shadow-md"
          whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(124, 58, 237, 0.3)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Users className="w-16 h-16 text-purple-800" />
        </motion.div>
      ) : (
        <motion.img
          src="https://via.placeholder.com/128"
          alt={name}
          className="w-32 h-32 rounded-full mb-4 object-cover"
          whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(124, 58, 237, 0.3)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      )}
      <h3 className="text-lg font-medium text-neutral-900 font-heading">{name}</h3>
      <p className="text-sm text-neutral-500">{role}</p>
    </motion.div>
  );
}

interface ValueCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  backgroundImage: string;
}

function ValueCard({ name, description, icon: Icon, backgroundImage }: ValueCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="relative overflow-hidden rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-purple-600 transform cursor-pointer bg-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.35)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(100%)'
      }}
      whileHover={{ 
        scale: 1.03, 
        translateY: -5,
        boxShadow: "0 10px 25px rgba(124, 58, 237, 0.4)",
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2)), url(${backgroundImage})`,
        filter: 'grayscale(100%)'
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      layout
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15
      }}
    >
      <div className="flex justify-between items-start">
        <motion.div 
          className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-100 text-purple-600 mb-4 shadow-md relative z-10"
          style={{ boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.7)" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div
            animate={{ 
              scale: isExpanded ? [1, 1.2, 1] : 1,
            }}
            transition={{ 
              duration: 0.5,
              times: [0, 0.5, 1],
              ease: "easeInOut" 
            }}
          >
            <Icon className="h-6 w-6" />
          </motion.div>
        </motion.div>
        <motion.div 
          className="text-purple-600"
          animate={{ 
            rotate: isExpanded ? 180 : 0,
            scale: isExpanded ? [1, 1.3, 1] : 1,
          }}
          transition={{ 
            duration: 0.4,
            times: [0, 0.5, 1],
            ease: "easeInOut" 
          }}
        >
          {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
        </motion.div>
      </div>
      <motion.h3 
        className="text-lg font-semibold text-neutral-900 font-heading relative z-10"
        animate={{ 
          color: isExpanded ? "rgba(109, 40, 217, 1)" : "rgba(23, 23, 23, 1)" 
        }}
        transition={{ duration: 0.3 }}
        style={{ textShadow: "0px 0px 5px rgba(255, 255, 255, 0.9), 0px 0px 2px rgba(255, 255, 255, 1)" }}
      >
        {name}
      </motion.h3>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="relative z-10" style={{ textShadow: "0px 0px 4px rgba(255, 255, 255, 1), 0px 0px 2px rgba(255, 255, 255, 1)" }}>
              <p className="mt-2 text-base text-neutral-800 font-medium">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface TeamSectionProps {
  title: string;
  members: Array<{ name: string; role: string }>;
}

function TeamSection({ title, members }: TeamSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-12">
      <motion.div 
        className="flex justify-between items-center cursor-pointer bg-white rounded-xl p-4 shadow-sm"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01, boxShadow: "0 4px 20px rgba(124, 58, 237, 0.1)" }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <h3 className="text-2xl font-semibold text-primary font-heading">{title}</h3>
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
            className="bg-white rounded-b-xl shadow-md p-6 mt-1"
          >
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-5">
              {members.map((member, index) => (
                <TeamMember 
                  key={index} 
                  name={member.name} 
                  role={member.role} 
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutUs() {
  const { t } = useTranslation();
  
  type ValueType = {
    name: string;
    description: string;
    icon: LucideIcon;
    backgroundImage: string;
  };

  const values: ValueType[] = [
    {
      name: t("about.value.innovation.title"),
      description: t("about.value.innovation.description"),
      icon: TrendingUp,
      backgroundImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80",
    },
    {
      name: t("about.value.inclusion.title"),
      description: t("about.value.inclusion.description"),
      icon: Users,
      backgroundImage: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    },
    {
      name: t("about.value.integrity.title"),
      description: t("about.value.integrity.description"),
      icon: ShieldCheck,
      backgroundImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      name: t("about.value.impact.title"),
      description: t("about.value.impact.description"),
      icon: Globe,
      backgroundImage: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
  ];

  const managementTeam = [
    { name: "CEO", role: t("about.role.ceo") },
    { name: "CFO", role: t("about.role.cfo") },
    { name: "COO", role: t("about.role.coo") },
    { name: "CTO", role: t("about.role.cto") },
/*     { name: "Head of Research", role: t("about.role.research") }, */
    { name: "Head of Business", role: t("about.role.business") },
  ];

  const advisoryBoard = [
    { name: "Frank PELTIER", role: t("about.role.fp") },
    { name: "Isabelle BARRES", role: t("about.role.ib") },
    { name: "Serge ESSO", role: t("about.role.se") },
    { name: "Gabrielle SALLAH", role: t("about.role.gs") },
    { name: "Hichem BOUCHOUAREB", role: t("about.role.hb") },
  ];

  return (
    <section id="about" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedComponent animation="fadeIn" duration={0.4}>
            <div className="lg:text-center">
                <AnimatedComponent animation="slideUp" delay={0.05} duration={0.3}>
                  <h2 className="text-3xl text-primary font-semibold flex justify-start tracking-wide uppercase mb-6">
                    {t("about.title")}
                  </h2>
                </AnimatedComponent>

                <AnimatedComponent animation="slideUp" delay={0.1} duration={0.3}>
                  <p className="mt-2 text-3xl text-center leading-8 font-semibold tracking-tight text-neutral-900 sm:text-4xl font-heading">
                    {t("about.mission")}
                  </p>
                </AnimatedComponent>

                <AnimatedComponent animation="slideUp" delay={0.15} duration={0.3}>
                  <p className="mt-4 max-w-3xl text-xl text-neutral-500 lg:mx-auto mb-6">
                    {t("about.mission.description")}
                  </p>
                </AnimatedComponent>
            </div>
        </AnimatedComponent>

        <AnimatedComponent animation="fadeIn" delay={0.2} duration={0.4} className="mt-12">
          <AnimatedComponent animation="slideUp" delay={0.6} duration={0.5}>
                {/** sections Our Goals */}
                <h3 className="text-2xl font-semibold mb-6 text-center text-neutral-900 font-heading">
                    {t("about.goals")}
                </h3>
                {/* <p className="text-xl text-justify font-semibold leading-relaxed mb-2 md:text-left">
                    Powering Financial Institutions with Cutting-Edge Digital Solutions : 
                </p> */}
                <div className="">
              
                    <p className="mt-4 max-w-3xl text-xl text-neutral-500 text-center lg:mx-auto mb-6">
                        FinTech4ESG delivers innovative digital solutions for financial institutions, including microfinance, digital wallets, and power management. 
                        Its Finance Inclusive Suite offers savings and lending. Backed by award-winning data scientists, it enhances scoring decision-making, 
                        risk management, and growth through advanced analytics. Partner with FinTech4ESG to stay ahead.
                    </p>
              
                  {/* <p className="max-w-16xl text-xl text-neutral-500 text-justify mb-2">
                        Our in-house Finance Inclusive Suite is a game-changer, offering Saving & Lending for both individual and corporate clients, integrated business intelligence, and mobile money solutions. 
                    </p> */}
                  {/*   <p className="max-w-16xl text-xl text-neutral-500 text-justify mb-2">
                        Backed by our multi-award-winning Olympiad Data Scientist teams, we harness advanced analytics to transform unstructured data into actionable insights-empowering institutions to drive smarter decisions, optimized Al-Scoring & risk management, and increased revenue growth. 
                    </p> */}
                  {/*   <p className="max-w-16xl text-xl text-neutral-500 text-justify mb-2">
                        Partner with FinTech4ESG to redefine financial services and stay ahead in a rapidly evolving digital landscape. 
                    </p> */}
                </div>

                {/** sections How Are We ? */}
                <h3 className="text-neutral-900 text-2xl font-semibold mt-12 mb-6 text-center font-heading">
                  {t("about.HowWeAre")}
                </h3>
                {/* <p className="text-xl text-justify font-semibold leading-relaxed mb-2 md:text-left">
                        FinTech4ESG: Driving Global Innovation & Sustainability in Financial Services :
                    </p> */}
              
                <p className="mt-4 max-w-3xl text-xl text-neutral-500 text-center lg:mx-auto mb-6">
                    FinTech4ESG leverages 75+ years of global expertise to drive Digital Transformation 
                    in Financial Services. With proven success in FinTech and Financial Inclusion, 
                    it empowers institutions to scale, improve efficiency, and promote inclusive growth—unlocking 
                    new opportunities through innovative platforms and deep industry 
                    knowledge. Join us in transforming finance sustainably.
                </p>
                {/*      
                <p className="text-xl text-justify leading-relaxed mb-2">
                    With a track record of success in FinTech and Financial Inclusion, we empower institutions to innovate, scale, and thrive.
                </p>
                <p className="text-xl text-justify leading-relaxed mb-2">
                    Now, we are bringing our cutting-edge platforms and deep industry expertise to Financial Inclusion universe-unlocking new opportunities for financial institutions to expand access, enhance operational efficiency, and drive inclusive economic growth.
                </p>
                <p className="text-xl text-justify leading-relaxed">
                    Join us in shaping the future of finance through innovation and sustainability.
                </p> */}
                
              <h3 className="text-neutral-900 text-2xl font-semibold mt-12 mb-6 text-center font-heading">
                  {t("about.background")}
              </h3>
          </AnimatedComponent>
          <OurBackgroundCaroussel />
        </AnimatedComponent>

        <AnimatedComponent animation="fadeIn" delay={0.3} duration={0.4}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <TeamSection title={t("about.team")} members={managementTeam} />
            </motion.div>
        </AnimatedComponent>

        <AnimatedComponent animation="fadeIn" delay={0.4} duration={0.4}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <TeamSection title={t("about.board")} members={advisoryBoard} />
            </motion.div>
        </AnimatedComponent>

        <AnimatedComponent animation="fadeIn" delay={0.5} duration={0.4} className="mt-16">
            <h3 className="text-2xl font-semibold text-primary mb-8 font-heading">
              {t("about.values")}
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (index * 0.05), duration: 0.4 }}
                >
                  <ValueCard 
                    name={value.name} 
                    description={value.description} 
                    icon={value.icon}
                    backgroundImage={value.backgroundImage}
                  />
                </motion.div>
              ))}
            </div>
        </AnimatedComponent>
      </div>
    </section>
  );
}
