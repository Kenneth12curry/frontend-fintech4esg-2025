import fricell from "@/assets/images/ecosystem/Africell_Africa_logo.png";
import ecobank from "@/assets/images/ecosystem/EcoBank_Africa_logo.png";
import afriland from "@/assets/images/ecosystem/Afriland_logo.png";
import airtel from "@/assets/images/ecosystem/Airtel_Africa_logo.png";
import axis from "@/assets/images/ecosystem/Axis Bank_logo.png";
import bankAtlantique from "@/assets/images/ecosystem/Bank-Atlantique_Africa_logo.png";
import Bgfi from "@/assets/images/ecosystem/Bank-BGFI_logo.png";
import Bill from "@/assets/images/ecosystem/Bill-Melinda Gates Foundation_logo.png";
import Blue from "@/assets/images/ecosystem/BlueOrchard_logo.png";
import Bnp from "@/assets/images/ecosystem/BNPFoundation_logo.png";
import Calvert from "@/assets/images/ecosystem/Calvert Impact Capital_logo.png";
import Cdc from "@/assets/images/ecosystem/CDC Group_logo.png";
import cerise from "@/assets/images/ecosystem/Cerise SPTF_logo.png";
import Cgap from "@/assets/images/ecosystem/Cgap_logo.png";
import Finca from "@/assets/images/ecosystem/FINCA Impact Finance_logo.png";
import Grammeen from "@/assets/images/ecosystem/Grameen_logo.png";
import HDBank from "@/assets/images/ecosystem/HDBank_logo.png";
import Ifc from "@/assets/images/ecosystem/IFC_logo.png";
import Kinara from "@/assets/images/ecosystem/Kinara Capital_logo.png";
import LeapFrog from "@/assets/images/ecosystem/LeapFrog Investments_logo.png";
import Moov_africa from "@/assets/images/ecosystem/Moov_Africa_logo.png";
import Mtn from "@/assets/images/ecosystem/MTN_Africa_logo.png";
import Oik from "@/assets/images/ecosystem/Oikocredit_logo.png";
import orange from "@/assets/images/ecosystem/Orange_logo.png";
import Quona from "@/assets/images/ecosystem/Quona Capital_logo.png";
import Tri from "@/assets/images/ecosystem/Tri Indonesia_logo.png";
import Uba from "@/assets/images/ecosystem/UBA_Africa_logo.png";
import Viettel from "@/assets/images/ecosystem/Viettel_logo.png";
import VPBank from "@/assets/images/ecosystem/VPBank_logo.png";
import xl from "@/assets/images/ecosystem/xl axiata_logo.png";
import { useTranslation } from "react-i18next";


export default function EcosystemCarousel() {
  const logos = [
    orange, fricell, ecobank, afriland, airtel, axis, bankAtlantique, Bgfi, Bill, Blue, Calvert, Cdc, cerise,
    Cgap, Grammeen, HDBank, Finca, Kinara, LeapFrog, Moov_africa, Mtn, Oik, Quona, Tri, Uba, Viettel, VPBank, xl, Bnp, Ifc
  ];
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-60">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-20">
        {t("title.ecosystem")}
      </h2>
      <div
        className="mx-auto bg-white rounded-[32px] shadow-xl border-t-2 border-[#19af58] flex items-center justify-center overflow-hidden"
        style={{
          maxWidth: 1500,
          minHeight: 150,
          padding: "0 16px",
        }}
      >
        <div
          className="flex items-center gap-10 whitespace-nowrap"
          style={{
            animation: "defilement 40s linear infinite",
          }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`ecosystem-logo-${idx}`}
              className="grayscale opacity-70 inline-block h-[100px] sm:h-[170px] w-[100px] sm:w-[170px] object-contain px-2"
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes defilement {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>

  );
}
