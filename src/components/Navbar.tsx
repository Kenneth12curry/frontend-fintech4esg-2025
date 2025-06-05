import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import i18n from "@/lib/i18n";
import fintech4esg from "@/assets/Header_FTE_MOTO.png"; 

type NavigationLink = {
  name: string;
  to?: string;
  dropdown?: { label: string; to: string }[]; 
  dropdownId?: string;
};

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks: NavigationLink[] = [
    { name: t("title.home"), to: "/" },
    { name: t("title.about"), to: "/about-us" },
    {name:  t("title.productsNav"), dropdownId: "produits", dropdown: [ { label: "ReadyCash Suite", to: "/ready-cash" },{ label: "ReadyScore", to: "/ready-score" },{ label: "ReadyPay", to: "/readypay" }]},
    // { name: t("title.productsNav"), dropdown: true, dropdownId: "tools" },
    { name: t("title.contactNav"), to: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo à gauche */}
          <div className="flex items-center">
           <img
              src={fintech4esg}
              alt="Fintech4esg"
              className="h-10 w-auto fixed"
            />
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              <div className="space-y-2">
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
              </div>
            </button>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center justify-end flex-1 space-x-6">
            {navigationLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  
                >
                  <button onClick={() =>
    setActiveDropdown(activeDropdown === link.dropdownId ? null : link.dropdownId ?? null)
  } className="text-neutral-00 font-medium px-2 py-1">
                    {link.name}
                  </button>

                  {activeDropdown === link.dropdownId && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-50">
                      {link.dropdown.map((item, i) => (
                        <Link
                          key={i}
                          to={item.to}
                          className="block px-3 py-1 text-sm text-gray-700 hover:text-[#19af58]"
                          onClick={() => setActiveDropdown(null)} // facultatif, pour fermer au clic
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.to || "/"}
                  className={`text-neutral-700 font-medium px-2 py-1 hover:text-primary ${
                    location.pathname === link.to ? "text-primary" : ""
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            {/* Language selector */}
            <select
              className="ml-2 px-2 py-1 rounded border border-gray-300 text-sm focus:outline-none appearance-none pr-8 relative"
              onChange={e => i18n.changeLanguage(e.target.value)}
              value={i18n.language}
              style={{ backgroundPosition: 'right 0.75rem center' }}
            >
              <option value="en">🇬🇧 English</option>
              <option value="fr">🇫🇷 Français</option>
            </select>

            {/* Fintech4esg With Us button */}
            <Link
              to="/partner"
              className="ml-2 bg-primary text-white px-4 py-2 rounded-xl transition hover:bg-[#19af58] hover:text-white"
            >
              {t("title.partners")}
            </Link>
        </div>


        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to || "#"}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <select
                  className="w-full px-2 py-1 rounded border border-gray-300"
                  onChange={e => i18n.changeLanguage(e.target.value)}
                  value={i18n.language}
                >
                  <option value="en">🇬🇧 English</option>
                  <option value="fr">🇫🇷 Français</option>
                </select>
                <Link
                  to="/partner"
                  className="block w-full text-center bg-primary hover:bg-[#19af58] text-white px-4 py-2 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("title.partners")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}