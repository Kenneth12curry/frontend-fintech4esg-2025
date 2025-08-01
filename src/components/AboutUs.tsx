import { ShieldCheck, TrendingUp, Globe, Users, LucideIcon, Plus, Minus } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedComponent } from "@/components/ui/animated-component";


import franck from "@/assets/images/advisory/franck.jpeg";
import serge from "@/assets/images/advisory/serge2.png";
import hicham from "@/assets/images/advisory/hicham.jpeg";
import jjbwanga from "@/assets/images/advisory/JJ Bwanga resize 2.jpg"
import christian from "@/assets/images/advisory/Christian de BERAIL.jpeg"
import isabelle from "@/assets/images/advisory/ID_Isabelle Barres.jpg"
import gabriel from "@/assets/images/advisory/Gabriel_sallah.png"
import uffe_carlson from "@/assets/images/advisory/ID_Uffe Carlson_2.jpeg"

import OurBackgroundCaroussel from "./OurBackgroundCaroussel";

interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
  imgPlaceholder?: boolean;
  index?: number;
  linkedin?:string;
}

function TeamMember({ name, role, imgPlaceholder = true, index = 0, linkedin, image }: TeamMemberProps) {
  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
    >
      {imgPlaceholder && image ? (
        <motion.img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full mb-4 object-cover shadow-md"
          whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(124, 58, 237, 0.3)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      ) : imgPlaceholder ? (
        <motion.div 
          className="w-32 h-32 rounded-full bg-purple-200 flex items-center justify-center mb-4 shadow-md"
          whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(124, 58, 237, 0.3)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Users className="w-16 h-16 text-purple-800" />
        </motion.div>
      ) : null}

      <h3 className="text-lg font-medium text-neutral-900 font-heading">{name}</h3>
      <p className="text-sm text-neutral-500">{role}</p>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 mt-2"
        >
          <FaLinkedin size={20} />
        </a>
      )}
    </motion.div>
  );
}


interface ValueCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  backgroundImage: string;
}

function ValueCard({
  name,
  description,
  icon: Icon,
  backgroundImage,
}: ValueCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-[#19af58] transform cursor-pointer bg-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.35)), `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(40%)",
      }}
      whileHover={{
        scale: 1.03,
        translateY: -5,
        boxShadow: "0 10px 25px rgba(124, 58, 237, 0.4)",
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2)), `,
        filter: "grayscale(40%)",
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      layout
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    >
      <div className="flex justify-between items-start">
        <motion.div
          className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-100 text-purple-800 mb-4 shadow-md relative z-10"
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
              ease: "easeInOut",
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
            ease: "easeInOut",
          }}
        >
          {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
        </motion.div>
      </div>

      <motion.h3
        className="text-lg font-semibold text-purple-800 font-heading relative z-10"
        animate={{
          color: isExpanded ? "rgba(109, 40, 217, 1)" : "rgba(23, 23, 23, 1)",
        }}
        transition={{ duration: 0.3 }}
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
            <div className="relative z-10">
              <p className="mt-2 text-base text-neutral-900 font-medium">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
interface TeamSectionProps {
  title: string;
  members: Array<{ name: string; role: string, linkedin:string, image?: string }>;

}

function TeamSection({ title, members}: TeamSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="">
      <motion.div 
        className="flex justify-between items-center cursor-pointer bg-white rounded-xl p-4 shadow-sm"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01, boxShadow: "0 4px 20px rgba(124, 58, 237, 0.1)" }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary font-heading">
          {title}
      </h3>
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
                  linkedin={member.linkedin}
                  image={member.image}
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
  { name: "Franck PELTIER", role: t("about.role.fp"), linkedin: "https://www.linkedin.com/in/franck-peltier-772ba528/", image: franck },
  { name: "Christian de BERAIL", role: t("about.role.cfo"), linkedin: "https://www.linkedin.com/in/cdeberail/", image: christian},
  { name: "JJ BWANGA", role: t("about.role.ceo"), linkedin: "https://www.linkedin.com/in/jjbwanga/",image: jjbwanga},
  { name: "Patrick MADENG", role: t("about.role.cto"), linkedin: "https://linkedin.com/in/patrick-madeng", image: "" },
  { name: "Uffe CARLSON", role: t("about.role.business"), linkedin: "https://linkedin.com/in/uffe-carlson", image: uffe_carlson },
];


  const advisoryBoard = [
    { name: "Isabelle BARRES", role: t("about.role.ib"), linkedin: "https://www.linkedin.com/in/isabelle-barres/", image: isabelle },
    { name: "Anthony KUME", role: t("about.role.ak"), linkedin: "https://www.linkedin.com/in/ak/", image: "" },
    { name: "Serge ESSO", role: t("about.role.se"),  linkedin: "https://www.linkedin.com/in/serge-esso-69856ab/", image: serge },
    { name: "Gabriel SALLAH", role: t("about.role.gs"),  linkedin: "https://www.linkedin.com/in/gabrielsallah/", image: gabriel },
    { name: "Hichem BOUCHOUAREB", role: t("about.role.hb"),  linkedin: "https://www.linkedin.com/in/bouchouareb/", image: hicham },
  ];

  return (
    <section id="about" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedComponent animation="fadeIn" duration={0.4}>
            <div className="lg:text-center">
                <AnimatedComponent animation="slideUp" delay={0.05} duration={0.3}>
                  <h2 className="text-2xl sm:text-3xl text-primary font-semibold flex justify-center sm:justify-start tracking-wide uppercase mb-6 text-center sm:text-left">
                      {t("about.title")}
                  </h2>

                </AnimatedComponent>

               {/*  <AnimatedComponent animation="slideUp" delay={0.1} duration={0.3}>
                  <p className="mt-2 text-3xl text-center leading-8 font-semibold tracking-tight text-neutral-900 sm:text-4xl font-heading">
                    {t("about.mission")}
                  </p>
                </AnimatedComponent> */}

               {/*  <AnimatedComponent animation="slideUp" delay={0.15} duration={0.3}>
                  <p className="mt-4 max-w-3xl text-xl text-neutral-500 lg:mx-auto mb-6">
                    {t("about.mission.description")}
                  </p>
                </AnimatedComponent> */}
            </div>
        </AnimatedComponent>

        <AnimatedComponent animation="fadeIn" delay={0.2} duration={0.4} className="mt-12">
          <AnimatedComponent animation="slideUp" delay={0.6} duration={0.5}>
                {/** sections Our Goals */}
               {/*  <h3 className="text-2xl font-semibold mb-6 text-center text-neutral-900 font-heading">
                    {t("about.goals")}
                </h3> */}
                {/* <p className="text-xl text-justify font-semibold leading-relaxed mb-2 md:text-left">
                    Powering Financial Institutions with Cutting-Edge Digital Solutions : 
                </p> */}

              
                <p className="max-w-3xl text-neutral-500 text-center lg:mx-auto mb-6 transform -translate-y-8 text-base sm:text-lg md:text-xl lg:text-xl">
                  {t('about.mission.description')}
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
                

                {/** sections How Are We ? */}
                <h3 className="text-neutral-900 text-2xl font-semibold mb-6 text-center font-heading transform -translate-y-7">
                  {t("about.HowWeAre")}
                </h3>
                {/* <p className="text-xl text-justify font-semibold leading-relaxed mb-2 md:text-left">
                        FinTech4ESG: Driving Global Innovation & Sustainability in Financial Services :
                    </p> */}
              
                <p className="max-w-3xl text-neutral-500 text-center lg:mx-auto mb-6 transform -translate-y-10 text-base sm:text-lg md:text-xl lg:text-xl">
                  {t('how.description')}
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
                
              <h3 className="text-neutral-900 text-2xl font-semibold mb-6 text-center font-heading ">
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
              <TeamSection title={t("about.team")} members={managementTeam}/>
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
            <h3 className="text-2xl font-semibold text-neutral-900 text-center mb-8 font-heading">
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
