import React from "react";
import Header from "../../components/Fintech4esgInsights/Header";
import SubscribeForm from "../../components/Fintech4esgInsights/SubscribeForm";
import SocialLinks from "../../components/Fintech4esgInsights/SocialLinks";
import Archive from "../../components/Fintech4esgInsights/Archive";

export default function InsightsPage() {
  return (
     <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
            <SubscribeForm />

            <div className="flex justify-between items-center">
                <div className="text-primary font-semibold">Written by<br />FinTech4ESG</div>
                <SocialLinks />
            </div>

            <Archive />
      </div>
    </section>
  );
}