import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function ProductFeatures() {
  const { t } = useTranslation();
  
  const products = [
    t("productfeatures.products.item1"),
    t("productfeatures.products.item2"),
    t("productfeatures.products.item3"),
    t("productfeatures.products.item4"),
    t("productfeatures.products.item5")
  ];

  const kycScoring = [
    t("productfeatures.kyc.item1"),
    t("productfeatures.kyc.item2"),
    t("productfeatures.kyc.item3"),
    t("productfeatures.kyc.item4"),
    t("productfeatures.kyc.item5")
  ];

  const dashboard = [
    t("productfeatures.dashboard.item1"),
    t("productfeatures.dashboard.item2"),
    t("productfeatures.dashboard.item3"),
    t("productfeatures.dashboard.item4"),
    t("productfeatures.dashboard.item5")
  ];

  return (
    <section id="features" className="pt-4 pb-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-secondary-600 font-semibold tracking-wide uppercase">{t("productfeatures.heading")}</h2>
          <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-neutral-900 sm:text-4xl font-heading">
            {t("productfeatures.title")}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-neutral-500 lg:mx-auto">
            {t("productfeatures.description")}
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-[#19af58]">
              <h3 className="text-lg font-medium text-neutral-900 mb-4 font-heading">{t("productfeatures.products.title")}</h3>
              <ul className="space-y-3">
                {products.map((product, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-neutral-600">{product}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-[#19af58]">
              <h3 className="text-lg font-medium text-neutral-900 mb-4 font-heading">{t("productfeatures.kyc.title")}</h3>
              <ul className="space-y-3">
                {kycScoring.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-[#19af58]">
              <h3 className="text-lg font-medium text-neutral-900 mb-4 font-heading">{t("productfeatures.dashboard.title")}</h3>
              <ul className="space-y-3">
                {dashboard.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="hover:bg-[#19af58] rounded-xl">
            <a href="https://calendly.com/fintech4esg">
              {t("productfeatures.cta")}
              <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
