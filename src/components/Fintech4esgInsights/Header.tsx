import React from "react";
import logo from "@/assets/FINTECH4ESG Logo form_icon.svg";


export default function Header() {
  return (
    <header className="flex flex-col items-center mb-4">
        <img  src={logo} alt="logo fintech" className="w-32 h-32"/>
        <h1 className="text-5xl font-bold text-primary mb-2 text-center"><br />FinTech4ESG Insights</h1>
        <div className="text-center">
            <p className="text-2xl font-bold">Publications</p>
            <p className="mt-2 mb-2">
            Stay ahead with curated insights on Financial Inclusion, trends and innovation<br />
            that shape scoring & risk system for unbanked population.<br />
            <a href="https://fintech4esg.com" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">
                Visit fintech4esg.com for more
            </a>
            </p>
        </div>
    </header>
  );
}