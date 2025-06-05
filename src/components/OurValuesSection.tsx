import React from 'react';
import { motion } from 'framer-motion';
// Importez les icônes de react-icons. Vous pouvez choisir d'autres icônes si celles-ci ne conviennent pas.
import { FiUserPlus, FiSmartphone, FiCreditCard } from 'react-icons/fi'; // Exemples d'icônes

const OurValuesSection: React.FC = () => {
  const boxVariants = {
    initial: {
      scale: 1,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      y: 0,
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section className="py-20 bg-fintechDarkBlue">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-6xl font-extrabold text-white mb-16 text-center">
          Our Values
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Box 1: Create Your Profile */}
          <motion.div
            className="bg-white rounded-3xl p-10 shadow-2xl flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 ease-out"
            variants={boxVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <div className="text-fintechDarkBlue text-6xl mb-8">
              <FiUserPlus /> {/* Icône pour "Create Your Profile" */}
            </div>
            <h3 className="text-3xl font-bold text-fintechMediumBlue mb-5">Create Your Profile</h3>
            <p className="text-fintechPurpleText leading-relaxed text-lg">
              Sign up with your basic information and verify your identity with valid ID and phone number.
            </p>
          </motion.div>

          {/* Box 2: Connect Mobile Money */}
          <motion.div
            className="bg-white rounded-3xl p-10 shadow-2xl flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 ease-out"
            variants={boxVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <div className="text-fintechDarkBlue text-6xl mb-8">
              <FiSmartphone /> {/* Icône pour "Connect Mobile Money" */}
            </div>
            <h3 className="text-3xl font-bold text-fintechMediumBlue mb-5">Connect Mobile Money</h3>
            <p className="text-fintechPurpleText leading-relaxed text-lg">
              Securely link your mobile money account to allow our Al to analyze your transaction patterns.
            </p>
          </motion.div>

          {/* Box 3: Receive Credit Score */}
          <motion.div
            className="bg-white rounded-3xl p-10 shadow-2xl flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 ease-out"
            variants={boxVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <div className="text-fintechDarkBlue text-6xl mb-8">
              <FiCreditCard /> {/* Icône pour "Receive Credit Score" */}
            </div>
            <h3 className="text-3xl font-bold text-fintechMediumBlue mb-5">Receive Credit Score</h3>
            <p className="text-fintechPurpleText leading-relaxed text-lg">
              Our algorithm analyzes your data and generates a personalized credit score and loan options.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;