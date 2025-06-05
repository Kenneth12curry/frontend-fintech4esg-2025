import React, { useEffect } from 'react';

/* import ChatbotWidget from '@/components/ChatbotWidget'; */
import { useTranslation } from 'react-i18next'; 
import { Link, useLocation } from 'wouter';


interface LayoutProps {
  children: React.ReactNode;
  className?: string; // Ajout de la prop optionnelle
}

export function Layout({ children,className  }: LayoutProps) {
  const { t } = useTranslation(); 
  const currentYear = new Date().getFullYear();
  const [location] = useLocation();
  
  // Function to handle direct access to hash links
  const handleHashOnLoad = () => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const hash = window.location.hash;
      console.log("Hash detected:", hash);
      const targetElement = document.querySelector(hash);
      console.log("Target element exists:", !!targetElement);
      
      // If we're not on the homepage and the hash element doesn't exist on the current page
      if (location !== '/' && !targetElement) {
        console.log("Not on homepage, redirecting to homepage with hash:", hash);
        // Store the hash in sessionStorage before redirect
        sessionStorage.setItem('scrollToHash', hash);
        // Redirect to homepage with the hash
        window.location.href = '/' + hash;
        return true;
      } else if (targetElement) {
        // If the element exists, scroll to it with a longer delay for page rendering
        console.log("Element found, scrolling to:", hash);
        setTimeout(() => {
          console.log("Executing scroll to:", hash);
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 500); // Increased timeout to allow page to fully render
        return true;
      }
    } else if (sessionStorage.getItem('scrollToHash')) {
      // Check if we have a stored hash from a recent redirect
      const storedHash = sessionStorage.getItem('scrollToHash');
      console.log("Found stored hash:", storedHash);
      // Clear the stored hash to avoid infinite loops
      sessionStorage.removeItem('scrollToHash');
      
      // Find the element and scroll to it only if storedHash exists
      if (storedHash) {
        const targetElement = document.querySelector(storedHash);
        if (targetElement) {
          console.log("Found element for stored hash, scrolling to:", storedHash);
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }, 800); // Even longer timeout for redirected pages
          return true;
        }
      }
    }
    return false;
  };
  
  // Check for hash links on page load
  useEffect(() => {
    handleHashOnLoad();
  }, [location]);
  
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
  
      
      <main className={`flex-grow ${className}`}>
        {children}
      </main>
      
      {/* Chatbot widget will appear on all pages */}
      {/* <ChatbotWidget /> */}
    
     
    </div>
  );
}