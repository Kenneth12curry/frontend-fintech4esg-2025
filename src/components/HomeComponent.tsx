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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20">
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
          <h2 className="text-4xl font-bold text-center mb-4">
            {t("title.powering")}
          </h2>
          <p className="text-center">{t("subtitle.powering")}</p>
          <p className="text-center mb-20">{t("subtitle.powering1")}</p>
          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              icon={finance_home}
              title={t("title.financialInclusion")}
              text={t("description.financialInclusion")}
              to="/ready-cash"
            />
            <ProductCard
              icon={ewallet_home}
              title={t("title.ewallet")}
              text={t("description.ewallet")}
              to="/ready-pay"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20">
            {t("title.takeAways")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              icon={african}
              value="+1,4B"
              label={t("title.african")}
            />
            <StatCard
              icon={years}
              value="60%"
              label={t("title.years")}
            />
            <StatCard
              icon={living}
              value="+40%"
              label={t("title.living")}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <StatCard
              icon={active}
               value="50%"
              label={t("title.active")}
            />
            <StatCard
              icon={unbanked}
               value="60%"
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
      <section className="py-20 bg-white">
        <div
          className="relative max-w-7xl mx-auto flex flex-col lg:flex-row mt-10 mb-10"
          style={{
            /* border: "2px solid #19af58", */
            borderRadius: "48px",
            background: "#fff",
            minHeight: 280,
            padding: "48px 90px",
            overflow: "visible",
          }}
        >
          {/* Texte à gauche */}
          <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
            <h3 className="text-sm lg:text-2xl  text-[#1f1f1f] mb-6 leading-tight">
              {t("title.need")}<br />
              {t("title.need1")}
            </h3>
            <a
              href="https://calendly.com/fintech4esg"
              className="inline-block  text-sm  text-white rounded-xl border bg-primary px-8 py-2 mt-4 transition hover:bg-[#19af58] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              style={{ letterSpacing: "0.5px" }}
            >
              {t("title.demo")}
            </a>
          </div>
          {/* Image à droite, bien visible */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-20  me-20" style={{ width: "25%", minWidth: 180 }}>
            <img
              src={phone}
              alt="Phone"
              className="w-full"
              style={{
                width: "100% !important",
                maxWidth: "none",
              }}
              loading="eager"
            />
          </div>
          {/* Image en dessous sur mobile */}
          <div className="block lg:hidden mt-8 w-full d-flex justify-center ms-11">
            <img
              src={phone}
              alt="Phone"
              className="w-44"
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
    <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500  transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-700">
      <img src={icon} alt={title} className="w-14 h-14 mb-4 object-contain" loading="lazy" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

// Product card component avec animation améliorée
function ProductCard({ icon, title, text, to }: { icon: string; title: string; text: string, to:string }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-b-4 border-green-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-700">
      <img src={icon} alt={title} className="w-16 h-16 mb-4 object-contain text-primary" loading="lazy" 
      style={{
            filter: "invert(62%) sepia(80%) saturate(1100%) hue-rotate(245deg) brightness(70%)",
        }}/>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 mb-5">{text}</p>
      <div className="flex justify-end">
        <Link to={to} className="text-primary font-semibold hover:underline hover:underline-offset-8 ">{t("title.learnMore")}</Link>
      </div>
    </div>
  );
}

// --- StatCard dynamique ---
function StatCard({ icon, value, label, duration = 1500 }: { icon: string; value: string; label: string; duration?: number }) {
  // Extraction du nombre (ex: "+1,3B" => 1.3, "60%" => 60, "+40%" => 40)
  const parseTarget = (val: string) => {
    if (val.includes("B")) return 1.4; // pour "+1,3B"
    if (val.includes("M")) return 1.4; // adapte si tu as des millions
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
    <div className="flex items-center bg-white rounded-2xl shadow-lg px-6 py-8 border-b-4 border-[#a259e6] transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl"
      style={{ minHeight: 180 }}>
      <img
        src={icon}
        alt={label}
        className="w-16 h-16 mr-6 object-contain"
        loading="lazy"
        style={{
          filter: "invert(62%) sepia(80%) saturate(1200%) hue-rotate(245deg) brightness(80%)",
        }}
      />
      <div>
        <div className="text-3xl font-bold mb-1" style={{ color: "#1db954" }}>{formatValue()}</div>
        <div className="text-gray-700 text-base font-medium">{label}</div>
      </div>
    </div>
  );
}