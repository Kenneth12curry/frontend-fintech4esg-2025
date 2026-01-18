import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";
import finzuuLogoHeader from "@/assets/FinZuu_Logo-V2/finzuu-brand-name.svg";

type NavigationLink = {
  name: string;
  to?: string;
  dropdown?: { label: string; to: string }[];
  dropdownId?: string;
};

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const isInsightsPage = location.pathname === "/insights";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigationLinks: NavigationLink[] = [
    { name: t("title.home"), to: "/" },
    { name: t("title.about"), to: "/aboutus" },
    {
      name: t("title.productsNav"),
      dropdownId: "produits",
      dropdown: [
        { label: "ReadyCash Suite", to: "/readycash" },
        { label: "ReadyScore", to: "/readyscore" },
        { label: "ReadyPay", to: "/readypay" },
      ],
    },
    { name: t("title.contactNav"), to: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="block absolute top-4 left-4 sm:static sm:transform-none">
              <img src={finzuuLogoHeader} alt="Finzuu" className="w-24 sm:w-32 h-auto" />
            </Link>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden flex items-center">
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

          {/* Right section (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-end items-center">
            {isInsightsPage ? (
              <div className="flex justify-end p-4 gap-2">
                <button className="bg-purple-300 px-4 py-1 rounded text-white font-bold">Dashboards</button>
                <button className="bg-[#19af58]  px-4 py-1 rounded text-white font-bold">Faker ID</button>
                {/*  <div className="ml-4 text-xs border border-dashed border-green-400 px-2 py-1 rounded">
                  Donne access à tous les platforms<br />de notre galaxies
                </div> */}
              </div>
            ) : (
              <>
                {navigationLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.name} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.dropdownId ? null : link.dropdownId ?? null
                          )
                        }
                        className="text-neutral-700 text-sm lg:text-base font-medium px-2 py-1 hover:text-primary"
                      >
                        {link.name}
                      </button>
                      {activeDropdown === link.dropdownId && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-xl p-2 z-50 text-center">
                          {link.dropdown.map((item, i) => (
                            <Link
                              key={i}
                              to={item.to}
                              className="block px-3 py-1 text-sm text-gray-700 hover:text-[#19af58]"
                              onClick={() => setActiveDropdown(null)}
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
                      className={`text-neutral-700 text-sm lg:text-base font-medium px-2 py-1 hover:text-primary ${location.pathname === link.to ? "text-primary" : ""
                        }`}
                      onMouseEnter={() => setActiveDropdown(null)}
                    >
                      {link.name}
                    </Link>
                  )
                )}

                {/* Langue */}
                <select
                  className="px-2 py-1 rounded border border-primary text-sm focus:outline-none appearance-none pr-8 relative m-5"
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                  value={i18n.language}
                >
                  <option value="en">🇬🇧 English</option>
                  <option value="fr">🇫🇷 Français</option>
                </select>

                {/* CTA */}
                <Link
                  to="/insights"
                  className="text-white text-sm lg:text-base px-4 py-2 rounded-xl transition bg-[#19af58] hover:bg-primary hover:text-white"
                >
                  {t("title.partners")}
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Drawer Mobile */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => {
              setIsMenuOpen(false);
              setActiveMobileDropdown(null);
            }}
          >
            <div
              className="fixed right-0 top-0 w-50 h-full bg-white shadow-xl p-4 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveMobileDropdown(null);
                  }}
                  className="text-2xl text-gray-600"
                >
                  &times;
                </button>
              </div>

              {isInsightsPage ? (
                <div className="mt-6 flex flex-col items-end gap-2">
                  <button className="bg-purple-300 px-4 py-1 rounded text-white font-bold w-fit">Dashboards</button>
                  <button className="bg-[#19af58] px-4 py-1 rounded text-white font-bold w-32">Faker ID</button>
                  {/* <div className="text-xs border border-dashed border-green-400 px-2 py-1 rounded text-right">
                        Donne access à tous les platforms<br />de notre galaxies
                    </div> */}
                </div>
              ) : (
                <nav className="mt-4 space-y-4">
                  {navigationLinks.map((link) =>
                    link.dropdown ? (
                      <div key={link.name}>
                        <button
                          onClick={() =>
                            setActiveMobileDropdown(
                              activeMobileDropdown === link.dropdownId ? null : link.dropdownId ?? null
                            )
                          }
                          className="w-full text-left text-base text-gray-700 font-semibold hover:text-primary"
                        >
                          {link.name}
                        </button>

                        {activeMobileDropdown === link.dropdownId && (
                          <div className="ml-4 mt-2 space-y-1 transition-all">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                className="block text-base text-gray-700 hover:text-[#19af58]"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveMobileDropdown(null);
                                }}
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
                        className="block text-gray-700 text-base hover:text-primary"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveMobileDropdown(null);
                        }}
                      >
                        {link.name}
                      </Link>
                    )
                  )}

                  {/* Language + Button */}
                  <select
                    className="mt-4 w-full border rounded px-3 py-2 text-base"
                    value={i18n.language}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                  >
                    <option value="en">🇬🇧 English</option>
                    <option value="fr">🇫🇷 Français</option>
                  </select>

                  <Link
                    to="/insights"
                    className="block text-center mt-4 bg-[#19af58] text-white py-2 rounded hover:bg-primary text-base p-4"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveMobileDropdown(null);
                    }}
                  >
                    {t("title.partners")}
                  </Link>
                </nav>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
