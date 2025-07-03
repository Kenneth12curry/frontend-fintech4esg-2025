import React from "react";
import logo from "@/assets/FINTECH4ESG Logo form_icon.svg";


export default function Header() {
  return (
    <header className="flex flex-col items-center mb-4">
        <img src={logo} alt="logo fintech" className="w-24 h-24 md:w-28 md:h-28" />
        
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2 text-center transform -translate-y-3 md:-translate-y-5">
            <br />FinTech4ESG Insights
        </h1>
        
        <div className="text-center px-4">
            <p className="text-lg md:text-2xl font-bold transform -translate-y-3 md:-translate-y-5">Publications</p>
            
            <p className="mt-2 mb-2 text-sm md:text-base transform -translate-y-3 md:-translate-y-5">
            Stay ahead with curated insights on Financial Inclusion, trends and innovation<br />
            that shape scoring & risk system for unbanked population.<br />
            <a
                href="https://fintech4esg.com"
                className="underline text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit fintech4esg.com for more
            </a>
            </p>
        </div>
    </header>

  );
}