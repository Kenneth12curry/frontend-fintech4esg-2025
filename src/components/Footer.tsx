import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobeAsia,faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
import fintech4esgLogo from "@/assets/FINTECH4ESG_Logos.svg"; 


export default function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();
  
  return (
      <footer className="bg-gray-900 text-white py-6 sm:py-10 px-3 sm:px-4 text-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
            
            {/* Logo */}
            <div className="flex flex-row items-center justify-center">
              <img
                src={fintech4esgLogo}
                alt="FinTech4ESG Logo"
                className="w-24 sm:w-32 mb-2 sm:mb-4 transform translate-y-2 sm:translate-y-6 md:-translate-y-0"
              />
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t("footer.quickLinks")}</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-primary hover:font-bold transition-colors">
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" className="text-gray-300 hover:text-primary  hover:font-bold transition-colors">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-primary  hover:font-bold transition-colors">
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t("footer.products")}</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm">
                <li>
                  <Link to="/readycash" className="text-gray-300 hover:text-primary  hover:font-bold transition-colors">
                    {t("footer.education")}
                  </Link>
                </li>
                <li>
                  <Link to="/readyscore" className="text-gray-300 hover:text-primary  hover:font-bold transition-colors">
                    ReadyScore
                  </Link>
                </li>
                <li>
                  <Link to="/readypay" className="text-gray-300 hover:text-primary  hover:font-bold transition-colors">
                    ReadyPay
                  </Link>
                </li>
               {/*  <li>
                  <Link to="/" className="text-gray-300 hover:text-primary  hover:font-bold transition-colors">
                    {t("footer.loanApplication")}
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* Solutions / Réseaux sociaux */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t("footer.solutions")}</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <div className="flex justify-center gap-4">
                    <a href="/" style={{ color: '#fff', fontSize: 14 }}>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="/" style={{ color: '#fff', fontSize: 14 }}>
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="/" style={{ color: '#fff', fontSize: 14 }}>
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </li>
                <li>
                  <Link to="/" className="text-sm font-bold text-primary ">
                    FinTech4ESG Insights
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <div style={{ fontSize: 13 }}>
                    <FontAwesomeIcon icon={faGlobeAsia} className="mr-2 text-sm" />
                    <Link to="/contact"><span className="text-gray-300">{t("contact.Asia")}</span></Link>
                  </div>
                </li>
                <li>
                  <div style={{ fontSize: 13 }}>
                    <FontAwesomeIcon icon={faGlobeAfrica} className="mr-2 text-sm" />
                    <Link to="/contact"> <span className="text-gray-300">{t("contact.west")}</span></Link>
                  </div>
                </li>
                <li>
                  <div style={{ fontSize: 13 }}>
                    <FontAwesomeIcon icon={faGlobeAfrica} className="mr-2 text-sm" />
                    <Link to="/contact"> <span className="text-gray-300">{t("contact.central")}</span></Link>
                  </div>
                </li>
                {/* <li>
                  <div style={{ fontSize: 13 }}>
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-sm" />
                    <span className="text-gray-300">contact@fintech4esg.com</span>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-700 my-6 sm:my-8"></div>

          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col">
              <p className="text-gray-400 text-xs sm:text-sm">&copy; {currentYear} FinTech4ESG Consulting</p>
              <p className="text-gray-400 text-xs mt-1">All rights reserved.</p>
            </div>
            <div className="mt-3 md:mt-0 flex gap-3 sm:gap-4">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                {t("footer.terms")}
              </Link>
              <Link to="/security" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                {t("footer.security")}
              </Link>
            </div>
          </div>
        </div>
      </footer>

  );
}