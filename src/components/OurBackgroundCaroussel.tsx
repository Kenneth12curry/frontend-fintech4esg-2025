import BOAmerica from "@/assets/images/our_background/BankOfAmerica_logo.png"
import BOS from "@/assets/images/our_background/BankOfSinGapore_logo.png"
import BNP from "@/assets/images/our_background/BNPParibas_logo.png"
import Bourbon from "@/assets/images/our_background/Bourbon_logo.png"
import StandardChartered from "@/assets/images/our_background/StandardChartered_logo.png"
import Reuters from "@/assets/images/our_background/Reuters_logo.png"
import SunGard from "@/assets/images/our_background/SunGard_logo.png"
import Pwc from "@/assets/images/our_background/PwC_logo.png"
import FIS from "@/assets/images/our_background/FIS_logo.png"
import EY from "@/assets/images/our_background/EY_logo.png"
import Microsoft from "@/assets/images/our_background/Microsoft_logo.png"
import Credit_Monegaste from "@/assets/images/our_background/Credit Monegaste_logo.png"
import SG from "@/assets/images/our_background/SG_logo.png"
import GoldmanSachs from "@/assets/images/our_background/GoldmanSachs_logo.png"
//import { useTranslation } from "react-i18next";

export default function OurBackgroundCaroussel () {
    const logos = [BOAmerica,BOS,BNP,Bourbon,StandardChartered,Reuters,SunGard,Pwc,FIS,EY,Microsoft,Credit_Monegaste,SG,GoldmanSachs];
    //const { t } = useTranslation();
    return (
        <section className="py-8 bg-gray-50">
        <div
            className="mx-auto bg-white rounded-[32px] shadow-xl border-t-2 border-[#19af58] flex items-center justify-center overflow-hidden"
            style={{
            maxWidth: 1200,
            minHeight: 150,
            padding: "0 16px",
            }}>

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
                    style={{ height: 170, width: 170, objectFit: "contain", padding: "0 8px" }}
                    className="grayscale opacity-70 inline-block"
                    loading="lazy"
                    />
                ))}
            </div>
            {/* Animation CSS */}
           <style>{`
            @keyframes defilement {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
            }
        `}</style>
        </div>
        </section>
    );
} 