import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import proven from "@/assets/images/home/proven.png";
import data_home from "@/assets/images/home/data_draven.png";
import sustainability_home from "@/assets/images/home/sustain.png";
import partner_home from "@/assets/images/home/partner.png";
import finance_home from "@/assets/images/home/finance_inclusion.png"; 
import ewallet_home from "@/assets/images/home/ewallet.png";
import p2p_home from "@/assets/images/home/P2P_Mgmt.png";
import african from "@/assets/images/home/african_population.png";
import years from "@/assets/images/home/25.png";
import living from "@/assets/images/home/living.png";
import unbanked from "@/assets/images/home/unbanked.png";
import active from "@/assets/images/home/active.png";
import off from "@/assets/images/home/off.png";
import phone from "@/assets/images/home/1.svg";
import EcosystemCarousel from "./EcosystemCaroussel";

                      

export default function HomeComponent() {
  const { t } = useTranslation();

  return (
    <>
      {/* Why Us */}
      <section className="py-16 bg-gray-60">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-20">
            {t("title.why")}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard
              icon={proven}
              title={t("title.proven")}
              text={t("description.proven")}
            />
            <FeatureCard
              icon={data_home}
              title={t("title.data")}
              text={t("description.data")}
            />
            <FeatureCard
              icon={sustainability_home}
              title={t("title.sustain")}
              text={t("description.sustain")} 
            />
            <FeatureCard
              icon={partner_home}
              title={t("title.partner")}
              text={t("description.partner")}
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
            {t("title.powering")}
          </h2>
          <p className="text-sm sm:text-base text-center">{t("subtitle.powering")}</p>
          <p className="text-sm sm:text-base text-center mb-20">
            {t("subtitle.powering1")}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              icon={finance_home}
              title={t("title.financialInclusion")}
              text={t("description.financialInclusion")}
              to="/readycash"
            />
            <ProductCard
              icon={ewallet_home}
              title={t("title.ewallet")}
              text={t("description.ewallet")}
              to="/readypay"
            />
            <ProductCard
              icon={p2p_home}
              title={t("title.P2P")}
              text={t("description.P2P")}
              to="/"
            />
          </div>
        </div>
      </section>

      <EcosystemCarousel />

      {/* Stats--> TakeAways */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-20">
            {t("title.takeAways")}
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              icon={african}
              value="+8.1B"
              label={t("title.african")}
            />
            <StatCard
              icon={years}
              value="33%"
              label={t("title.years")}
            />
            <StatCard
              icon={living}
              value="+40%"
              label={t("title.living")}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <StatCard2
              icon={active}
               value="+2.1B"
              label={t("title.active")}
            />
            <StatCard
              icon={unbanked}
               value="50%"
              label={t("title.unbanked")}
            />
            <StatCard
              icon={off}
              value="60%"
              label={t("title.off")}
            />
          </div>
        </div>
      </section>

      {/* CTA avec image */}
      <section className="py-4 sm:py-20 bg-gray-60">
        <div
          className="relative max-w-7xl mx-auto flex flex-col lg:flex-row mt-2 mb-2 sm:mt-10 sm:mb-10 px-2 sm:px-[90px]"
          style={{
            borderRadius: "48px",
            background: "",
            minHeight: 200,
            overflow: "visible",
            padding: "16px 0", // réduit au maximum
          }}
        >
          {/* Texte à gauche */}
          <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
            <h3 className="text-xs sm:text-2xl text-[#1f1f1f] mb-1 sm:mb-6 leading-snug sm:leading-tight">
              {t("title.need")}<br />
              {t("title.need1")}
            </h3>
            <a
              href="https://calendly.com/fintech4esg"
              className="inline-block text-sm sm:text-base text-white rounded-xl border bg-[#19af58] px-6 sm:px-8 py-2 sm:py-2.5 mt-2 sm:mt-4 transition hover:bg-primary hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              style={{ letterSpacing: "0.3px" }}
            >
              {t("title.demo")}
            </a>
          </div>

          {/* Image à droite en desktop */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-20 me-20" style={{ width: "25%", minWidth: 180 }}>
            <img
              src={phone}
              alt="Phone"
              className="w-full"
              loading="eager"
            />
          </div>

        
          {/* Image mobile centrée sous le bouton */}
            <div className="lg:hidden w-full flex justify-center mt-4">
              <img
                src={phone}
                alt="Phone"
                className="w-28 sm:w-40"
                loading="eager"
              />
            </div>
        </div>
      </section>

    </>
  );
}

// Feature card component avec animation améliorée
function FeatureCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
   <div className="bg-white rounded-xl shadow-lg p-4 border-t-4 border-purple-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-700
            max-w-xs mx-auto
            sm:p-6 sm:max-w-none">
  <img src={icon} alt={title} className="w-10 h-10 mb-2 object-contain sm:w-14 sm:h-14 sm:mb-4" loading="lazy" />
  <h3 className="font-semibold text-base mb-1 sm:text-lg sm:mb-2">{title}</h3>
  <p className="text-sm text-gray-600 mb-3 sm:text-base sm:mb-5">{text}</p>
</div>
  );
}

// Product card component avec animation améliorée
function ProductCard({ icon, title, text, to }: { icon: string; title: string; text: string, to:string }) {
  const { t } = useTranslation();
  return (
   <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-b-4 border-green-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-700 w-full max-w-xs sm:max-w-sm mx-auto">
      <img
        src={icon}
        alt={title}
        className="w-12 h-12 sm:w-16 sm:h-16 mb-4 object-contain text-primary"
        loading="lazy"
        style={{
          filter: "invert(62%) sepia(80%) saturate(1100%) hue-rotate(245deg) brightness(70%)",
        }}
      />
      <h3 className="font-semibold text-base sm:text-lg mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-5">{text}</p>
      <div className="flex justify-end">
        <Link to={to} className="text-primary font-semibold hover:underline hover:underline-offset-8">
          {t("title.learnMore")}<span className="ml-1">→</span>
        </Link>
      </div>
  </div>

  );
}

// --- StatCard dynamique ---
function StatCard({ icon, value, label, duration = 1500 }: { icon: string; value: string; label: string; duration?: number }) {
  // Extraction du nombre (ex: "+1,3B" => 1.3, "60%" => 60, "+40%" => 40)
  const parseTarget = (val: string) => {
    if (val.includes("B")) return 8.1; // pour "+1,3B"
    if (val.includes("M")) return 8.1; // adapte si tu as des millions
    return parseFloat(val.replace(/[^0-9.,]/g, "").replace(",", "."));
  };
  const target = parseTarget(value);
  const [count, setCount] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16); // 16ms par frame
    function animate() {
      start += increment;
      if (start < end) {
        setCount(start);
        ref.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        if (ref.current) cancelAnimationFrame(ref.current);
      }
    }
    animate();
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [target, duration]);

  // Format l'affichage selon le type de valeur
  const formatValue = () => {
    if (value.includes("B")) return "+" + count.toFixed(1).replace(".", ",") + "B";
    if (value.includes("%")) return Math.round(count) + "%";
    if (value.includes("$")) return "+" + Math.round(count) + "%";
    return Math.round(count);
  };

  return (
    <div className="flex items-center bg-white rounded-2xl shadow-lg px-3 py-4 border-b-4 border-[#a259e6] transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl
            sm:px-6 sm:py-8"
      style={{ minHeight: 140 }}> {/* minHeight encore plus réduit pour mobile */}
        <img
          src={icon}
          alt={label}
          className="w-10 h-10 mr-3 object-contain sm:w-16 sm:h-16 sm:mr-6" 
          loading="lazy"
          style={{
            filter: "invert(62%) sepia(80%) saturate(1200%) hue-rotate(245deg) brightness(80%)",
          }}
        />
        <div>
          <div className="text-xl font-bold mb-0.5 sm:text-3xl sm:mb-1" style={{ color: "#1db954" }}>{formatValue()}</div> {/* Texte de valeur encore plus petit pour mobile */}
          <div className="text-xs text-gray-700 font-medium sm:text-base">{label}</div> {/* Texte de label déjà petit, conservé */}
        </div>
    </div>
  );
}

function StatCard2({ icon, value, label, duration = 1500 }: { icon: string; value: string; label: string; duration?: number }) {
  // Extraction du nombre (ex: "+1,3B" => 1.3, "60%" => 60, "+40%" => 40)
  const parseTarget = (val: string) => {
    if (val.includes("B")) return 2.1; // pour "+1,3B"
    if (val.includes("M")) return 2.1; // adapte si tu as des millions
    return parseFloat(val.replace(/[^0-9.,]/g, "").replace(",", "."));
  };
  const target = parseTarget(value);
  const [count, setCount] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16); // 16ms par frame
    function animate() {
      start += increment;
      if (start < end) {
        setCount(start);
        ref.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        if (ref.current) cancelAnimationFrame(ref.current);
      }
    }
    animate();
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [target, duration]);

  // Format l'affichage selon le type de valeur
  const formatValue = () => {
    if (value.includes("B")) return "+" + count.toFixed(1).replace(".", ",") + "B";
    if (value.includes("%")) return Math.round(count) + "%";
    if (value.includes("$")) return "+" + Math.round(count) + "%";
    return Math.round(count);
  };

  return (
    <div className="flex items-center bg-white rounded-2xl shadow-lg px-3 py-4 border-b-4 border-[#a259e6] transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl
            sm:px-6 sm:py-8"
      style={{ minHeight: 140 }}> {/* minHeight encore plus réduit pour mobile */}
      <img
        src={icon}
        alt={label}
        className="w-10 h-10 mr-3 object-contain sm:w-16 sm:h-16 sm:mr-6" 
        loading="lazy"
        style={{
          filter: "invert(62%) sepia(80%) saturate(1200%) hue-rotate(245deg) brightness(80%)",
        }}
      />
      <div>
        <div className="text-xl font-bold mb-0.5 sm:text-3xl sm:mb-1" style={{ color: "#1db954" }}>{formatValue()}</div> {/* Texte de valeur encore plus petit pour mobile */}
        <div className="text-xs text-gray-700 font-medium sm:text-base">{label}</div> {/* Texte de label déjà petit, conservé */}
      </div>
    </div>
  );
}