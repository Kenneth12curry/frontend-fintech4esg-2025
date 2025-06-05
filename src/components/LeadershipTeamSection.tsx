import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamMember {
  role: string;
  name: string;
  photo?: string;
  details: string;
}

const teamMembers: TeamMember[] = [
  { role: 'CEO', name: 'Chief Executive Officer', details: 'Le CEO est responsable de la vision stratégique et de la direction générale de FinTech4ESG. Il a une vaste expérience dans le secteur financier et technologique, ayant dirigé plusieurs entreprises de premier plan dans le domaine de la finance inclusive.', photo: 'https://picsum.photos/seed/ceo/200/200' },
  { role: 'COO', name: 'Chief Operating Officer', details: 'Le COO supervise les opérations quotidiennes de l\'entreprise, garantissant l\'efficacité et l\'optimisation des processus. Son expertise en gestion de projet et en développement organisationnel est cruciale pour la croissance de FinTech4ESG.', photo: 'https://picsum.photos/seed/coo/200/200' },
  { role: 'CTO', name: 'Chief Technology Officer', details: 'Le CTO est le cerveau derrière nos solutions technologiques de pointe, y compris notre Finance Inclusive Suite. Il dirige les équipes de développement et d\'ingénierie, en se concentrant sur l\'innovation et la sécurité des plateformes.', photo: 'https://picsum.photos/seed/cto/200/200' },
  { role: 'Head of Marketing', name: 'Head of Marketing', details: 'Le Head of Marketing est en charge de toutes les stratégies de communication et de marque. Il développe des campagnes qui résonnent avec nos partenaires et clients, augmentant notre visibilité et notre impact sur le marché.', photo: 'https://picsum.photos/seed/marketing/200/200' },
  { role: 'Head of Scoring-Risk', name: 'Head of Scoring-Risk', details: 'Le Head of Scoring-Risk gère nos modèles d\'Al-Scoring et nos cadres de gestion des risques. Son travail est essentiel pour permettre des décisions financières plus intelligentes et sécurisées pour nos clients.', photo: 'https://picsum.photos/seed/scoring/200/200' },
  { role: 'Risk Management Director', name: 'Risk Management Director', details: 'Le Risk Management Director est responsable de l\'identification, de l\'évaluation et de la mitigation des risques financiers. Il assure la conformité réglementaire et la stabilité de nos opérations.', photo: 'https://picsum.photos/seed/risk/200/200' },
];

interface AdvisoryBoardMember {
  name: string;
  role: string;
}

const advisoryBoardMembers: AdvisoryBoardMember[] = [
  { name: 'Gabriel Sallah', role: 'Strategic Advisor' },
  { name: 'Hichem B.', role: 'Strategic Advisor' },
  { name: 'Board Member', role: 'Financial Officer' },
  { name: 'Board Member', role: 'Microfinance Specialist' },
];

const LeadershipTeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-6xl font-extrabold text-fintechDarkBlue mb-16 text-center">
          Leadership Team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => handleMemberClick(member)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-fintechDarkBlue">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-fintechMediumBlue text-xl font-semibold">Photo</span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-fintechMediumBlue mb-2">{member.role}</h3>
              <p className="text-fintechTextGray text-lg">{member.name}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedMember && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-10 max-w-lg w-full shadow-2xl relative"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button
                  className="absolute top-5 right-5 text-gray-500 hover:text-gray-900 text-3xl font-bold"
                  onClick={() => setSelectedMember(null)}
                >
                  &times;
                </button>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-2 border-fintechDarkBlue">
                  {selectedMember.photo ? (
                    <img src={selectedMember.photo} alt={selectedMember.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-fintechMediumBlue text-lg font-semibold">Photo</span>
                  )}
                </div>
                <h3 className="text-3xl font-bold text-fintechDarkBlue mb-3 text-center">{selectedMember.role}</h3>
                <p className="text-xl text-fintechMediumBlue mb-6 text-center">{selectedMember.name}</p>
                <p className="text-fintechTextGray leading-relaxed text-lg text-center">{selectedMember.details}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <h2 className="text-4xl font-bold text-fintechMediumBlue mb-10 text-center">
          Advisory Board
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisoryBoardMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100">
              <h3 className="text-xl font-semibold text-fintechMediumBlue mb-1">{member.name}</h3>
              <p className="text-fintechTextGray text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeamSection;