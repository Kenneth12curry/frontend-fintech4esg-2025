/* 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PrivacyPage from './pages/privacyPage'
import TermsOfServicePage from './pages/Terms'
import SecurityPolicyPage from './pages/Security'
import AboutUSPage from './pages/About-us'
import ProductsCashSuite from './pages/ReadyCashSuite'
import ReadyScore from './pages/ReadyScore'
import ReadyCashSuite from './pages/ReadyCashSuite'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import { BrowserRouter } from "react-router-dom";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Déclenche l'effet à chaque changement de route

  return null;
}




function App() {
  return (

    
      <Router>
        <Navbar />
        <div className="min-h-screen bg-gray-100">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/security" element={<SecurityPolicyPage />} />
              <Route path="/about-us" element={<AboutUSPage />} />
              <Route path="/ready-cash" element={<ReadyCashSuite />} />
              <Route path="/ready-score" element={<ReadyScore />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>

   
  )
}

export default App
 */

import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPage from "./pages/privacyPage";
import TermsOfServicePage from "./pages/Terms";
import SecurityPolicyPage from "./pages/Security";
import AboutUSPage from "./pages/About-us";
import ReadyCashSuite from "./pages/ReadyCashSuite";
import ReadyScore from "./pages/ReadyScore";
import SecurityLayer from "./components/SecuirtyLayer";
import Readypay from "./pages/ReadyPay";
import InsightsPage from "./pages/blog/insights";
import BlogPostPage from "./pages/blog/[slug]";


function ScrollToTop() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Ne rien faire si on est sur la page d'accueil
    if (pathname === "/") {
      return;
    }

    // Supprimer tout fragment d'URL pour éviter le défilement vers un ID
    if (pathname.includes("#")) {
      navigate(pathname.split("#")[0], { replace: true });
    }
    // Réinitialiser le défilement au haut de la page
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, navigate]);

  return null;
}


function App() {
  return (
    <BrowserRouter>
   
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/security" element={<SecurityPolicyPage />} />
            <Route path="/aboutus" element={<AboutUSPage />} />
            <Route path="/readycash" element={<ReadyCashSuite />} />
            <Route path="/readyscore" element={<ReadyScore />} />
            <Route path="/readypay" element={<Readypay />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;