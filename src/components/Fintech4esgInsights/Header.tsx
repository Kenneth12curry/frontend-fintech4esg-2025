import React from "react";
import logo from "@/assets/FINTECH4ESG Logo form_icon.svg";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();
    return (
        <header className="flex flex-col items-center mb-2">
            <img src={logo} alt="logo fintech" className="w-24 h-24 md:w-28 md:h-28" />
            
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2 text-center transform -translate-y-3 md:-translate-y-5">
                <br /> {t("header.insights.title")}
            </h1>
            
            <div className="text-center px-4">
                <p className="text-lg md:text-2xl font-semibold transform -translate-y-3 md:-translate-y-5">NewsLetters</p>
                
                <p className="mt-2 mb-2 text-sm md:text-base transform -translate-y-3 md:-translate-y-5">
                {t("header.insights")}<br />
                {t("header.insights1")}<br />
                {/*  <span>{t("header.visit")} </span>
                    <a
                        href="https://fintech4esg.com"
                        className="underline-none text-[#19af58] hover:text-primary font-semibold"
                        target="_blank"
                        rel="noopener noreferrer">
                        www.fintech4esg.com 
                    </a>
                    <span>  {t("header.visit1")}</span> */}
                </p>
            </div>
        </header>

    );
}