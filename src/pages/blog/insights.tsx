import React from "react";
import Header from "../../components/Fintech4esgInsights/Header";
import SubscribeForm from "../../components/Fintech4esgInsights/SubscribeForm";
import SocialLinks from "../../components/Fintech4esgInsights/SocialLinks";
import Archive from "../../components/Fintech4esgInsights/Archive";

export default function InsightsPage() {
  return (
    <section className="py-16 bg-neutral-100 bg-cover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
            <SubscribeForm />

            <div className="flex justify-between items-center">
                <div className="font-semibold text-sm md:text-base">
                  <span className="text-primary">Written by</span><br />
                  <span className="text-[#19af58]">FinTech4ESG</span>
                </div>
                <SocialLinks />
            </div>

            <Archive />
      </div>
    </section>
  );
}