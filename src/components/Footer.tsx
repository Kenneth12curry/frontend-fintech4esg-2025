import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import fintech4esgLogo from "@/assets/FINTECH4ESG_Logos.svg"; 


export default function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();
  
  return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 ">
            <div>
              <img
                src={fintech4esgLogo}// Replace with your logo path
                alt="FinTech4ESG Logo"
                className="image mb-4 transform -translate-y-8" 
              />
             {/* <h3 className="text-lg font-semibold mb-4">FinTech4ESG Consulting</h3> */}
             {/*  <img
                src={footer1}// Replace with your logo path
                alt="FinTech4ESG Logo"
                className="h-20 mb-4 transform -translate-y-10"
                style={{filter: "brightness(0) invert(1)"}}
              /> */}
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white hover:font-bold transition-colors">
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-gray-300 hover:text-white hover:font-bold transition-colors">
                    {t("nav.about")}
                  </Link>
                </li>
               {/*  <li>
                  <Link to="/platform" className="text-gray-300 hover:text-white hover:font-bold transition-colors">
                    {t("nav.platform")}
                  </Link>
                </li> */}
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white hover:font-bold transition-colors">
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("footer.products")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="ready-cash" className="text-gray-300 hover:text-white hover:font-bold transition-colors">
                    {t("footer.education")}
                  </Link>
                </li>
                <li>
                  <Link to="/ready-score" className="text-gray-300 hover:text-white hover:font-bold transition-colors">
                    ReadyScore
                  </Link>
                </li>
                <li>
                  <Link to="/education" className="text-gray-300 hover:text-white hover:font-bold transition-colors">
                    ReadyPay
                  </Link>
                </li>
                <li>
                  <Link to="/loan-application" className="text-gray-300 hover:text-white hover:font-bold transition-colors">
                    {t("footer.loanApplication")}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("footer.solutions")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" style={{ color: '#fff', fontSize: 14 }} className='transform -translate-y-5'>
                      <FontAwesomeIcon icon={faLinkedinIn} /><span className="text-gray-300 hover:font-bold text-sm ms-3">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#fff', fontSize: 14 }}> 
                    <FontAwesomeIcon icon={faXTwitter} /><span className="text-gray-300 hover:font-bold text-sm ms-3">Ex Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#fff', fontSize: 14 }}>
                     <FontAwesomeIcon icon={faInstagram} /><span className="text-gray-300 hover:font-bold text-sm ms-3">Instagram</span>
                  </a>
                </li>
                 <li>
                  <Link to="/" style={{ color: '#fff', fontSize: 14 }}>
                     <span className="text-primary font-bold text-sm">FinTech4ESG Insights</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Carlson Capital Denmark */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <div style={{ marginBottom: 0, fontSize: 14, display: 'flex', alignItems: 'center' }}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 10, fontSize: 12 }} /> 
                      <span className="text-gray-300 hover:font-bold text-sm">Paris, France</span>
                  </div>
                </li>
                <li>
                  <div style={{ marginBottom: 0, fontSize: 14, display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faPhone} style={{ marginRight: 10, fontSize: 12 }} /> 
                     <span className="text-gray-300 hover:font-bold text-sm">+33 1 23 45 67 89</span>
                  </div>
                </li>
                <li>
                  <div style={{ fontSize: 14, display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 10, fontSize: 12 }} /> 
                     <span className="text-gray-300 hover:font-bold text-sm">contact@fintech4esg.com</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="h-px bg-gray-700 my-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} FinTech4ESG Consulting
              </p>
              <p className="text-gray-400 text-xs mt-1">
                All rights reserved.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-4">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t("footer.privacy")}
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t("footer.terms")}
              </Link>
              <Link to="/security" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t("footer.security")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
}