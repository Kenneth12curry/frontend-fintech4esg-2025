import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, AlertTriangle, Shield, GavelIcon, Lock, Mail } from "lucide-react";
import { AnimatedComponent } from "@/components/ui/animated-component";
import { Link } from "react-router-dom";

export default function TermsOfServicePage() {
  return (
    <Layout className="bg-primary">
      <div className="container mx-auto py-12 px-4 max-w-5xl">
        <AnimatedComponent animation="fadeIn">
          <div className="text-center mb-10">
            <div className="inline-flex bg-primary/10 p-3 rounded-full mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-3">Terms of Service</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The legal agreement governing your use of ReadyCash and FinTech4ESG's services
            </p>
            <p className="text-sm text-muted-foreground mt-2">Last updated: April 5, 2025</p>
          </div>
        </AnimatedComponent>

        <Card className="mb-8 rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl">Introduction and Acceptance</CardTitle>
            <CardDescription>
              Please read these Terms of Service carefully before using our services
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              These Terms of Service ("Terms") govern your access to and use of the ReadyCash platform and related services (collectively, the "Services") provided by FinTech4ESG Consulting ("we," "us," or "our").
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our Services.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-800">
                  These Terms constitute a legally binding agreement between you and FinTech4ESG Consulting. If you are using our Services on behalf of a business or other entity, you represent that you have the authority to bind that entity to these Terms.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <AnimatedComponent animation="fadeIn" delay={0.1}>
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="eligibility">
              <AccordionTrigger className="text-lg font-medium">
                Eligibility and Registration
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2 pb-4">
                <p>
                  To use our Services, you must meet the following eligibility requirements:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must be at least 18 years old</li>
                  <li>You must have the legal capacity to enter into a binding contract</li>
                  <li>You must not be prohibited from using the Services under applicable laws</li>
                  <li>You must comply with any local regulatory requirements in your jurisdiction</li>
                </ul>
                <p className="mt-4">
                  To register for an account, you will need to provide accurate, current, and complete information as prompted by our registration process. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                </p>
                <p>
                  We reserve the right to suspend or terminate your account if any information provided during registration or thereafter proves to be inaccurate, incomplete, or not current, or if we believe, in our sole discretion, that your actions may compromise the security or integrity of our Services.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="services">
              <AccordionTrigger className="text-lg font-medium">
                Description of Services
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2 pb-4">
                <p>
                  Our Services provide a platform for digital financial transactions, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Digital wallet services for storing, sending, and receiving funds</li>
                  <li>Facilitating payments to merchants and service providers</li>
                  <li>Processing loan applications and managing loan accounts</li>
                  <li>Providing financial education and resources</li>
                  <li>Offering savings accounts and investment opportunities</li>
                  <li>Supporting offline and agent banking services</li>
                </ul>
                <p className="mt-4">
                  We strive to ensure our Services are available 24/7, but we do not guarantee uninterrupted access. Services may be temporarily unavailable for scheduled maintenance or unscheduled emergency maintenance, or due to other factors beyond our control.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our Services at any time without prior notice. We may also impose limits on certain features or restrict access to parts or all of the Services without notice or liability.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="acceptable-use">
              <AccordionTrigger className="text-lg font-medium">
                Acceptable Use and Conduct
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2 pb-4">
                <p>
                  When using our Services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Provide accurate and truthful information</li>
                  <li>Use the Services only for legitimate and lawful purposes</li>
                  <li>Respect the privacy and rights of others</li>
                  <li>Comply with any additional terms or policies we may establish</li>
                </ul>
                <p className="mt-4">
                  You agree not to use our Services to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-red-700">
                  <li>Engage in any illegal or fraudulent activity</li>
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Transmit any harmful code, malware, or other disruptive content</li>
                  <li>Interfere with the operation of our Services or servers</li>
                  <li>Circumvent any security features or access restrictions</li>
                  <li>Engage in money laundering, terrorist financing, or other financial crimes</li>
                  <li>Conduct transactions involving illegal goods or services</li>
                  <li>Impersonate any person or entity</li>
                  <li>Harass, abuse, or harm another person</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to investigate and take appropriate legal action against anyone who, in our sole discretion, violates these provisions, including without limitation, reporting you to law enforcement authorities.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fees">
              <AccordionTrigger className="text-lg font-medium">
                Fees and Payment Terms
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2 pb-4">
                <p>
                  We may charge fees for certain aspects of our Services. All fees are stated in your local currency and are exclusive of any applicable taxes unless otherwise stated.
                </p>
                <p>
                  Fee structures for specific services are outlined in our Fee Schedule, which is incorporated into these Terms by reference. We reserve the right to change our fees at any time upon notice to you, which may be provided through our Services, by email, or by posting to our website.
                </p>
                <p>
                  For transactions, fees may be deducted from the transaction amount or charged separately to your account. For recurring services, fees may be charged on a regular basis to the payment method associated with your account.
                </p>
                <p>
                  You are responsible for paying all fees and applicable taxes associated with your use of our Services. If we are unable to charge your designated payment method for any reason, we reserve the right to suspend or terminate your access to the Services until payment is received.
                </p>
                <div className="bg-primary/5 rounded-lg p-4 mt-4">
                  <h4 className="font-medium mb-2">Refund Policy</h4>
                  <p className="text-sm">
                    Transaction fees are generally non-refundable once a transaction has been processed. In the event of a disputed charge or technical error, please contact our support team within 30 days of the transaction. Refunds for subscription services will be processed according to the terms of the specific service plan.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ip-rights">
              <AccordionTrigger className="text-lg font-medium">
                Intellectual Property Rights
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2 pb-4">
                <p>
                  All content included in or made available through our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of FinTech4ESG Consulting or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our Services for their intended purposes, subject to your compliance with these Terms. This license does not include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any resale or commercial use of our Services or content</li>
                  <li>Any collection and use of any product listings, descriptions, or prices</li>
                  <li>Any derivative use of our Services or content</li>
                  <li>Any downloading or copying of account information for the benefit of another merchant</li>
                  <li>Any use of data mining, robots, or similar data gathering and extraction tools</li>
                </ul>
                <p className="mt-4">
                  You may not reproduce, duplicate, copy, sell, resell, or otherwise exploit any portion of our Services without our express written permission. You may not use any proprietary information or interfaces, or any of our content, in any way not expressly permitted by these Terms.
                </p>
                <p>
                  If you submit content to our Services (such as feedback, suggestions, or ideas), you grant us a worldwide, perpetual, irrevocable, royalty-free, and transferable license to use, reproduce, distribute, modify, adapt, create derivative works of, publicly perform, and publicly display that content in connection with our Services.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="privacy">
              <AccordionTrigger className="text-lg font-medium">
                Privacy and Data Protection
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2 pb-4">
                <p>
                  We take the privacy and security of your information seriously. Our collection and use of your personal information is governed by our <a href="/privacy" className="text-white hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference.
                </p>
                <p>
                  By using our Services, you consent to the collection, use, storage, and disclosure of your information as described in our Privacy Policy. You acknowledge that the Privacy Policy is a legally binding part of these Terms.
                </p>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information, but no method of transmission over the Internet or electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="limitations">
              <AccordionTrigger className="text-lg font-medium">
                Limitation of Liability
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2 pb-4">
                <p>
                  To the maximum extent permitted by applicable law, FinTech4ESG Consulting and its affiliates, officers, employees, agents, partners, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation damages for loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your access to or use of or inability to access or use the Services</li>
                  <li>Any conduct or content of any third party on the Services</li>
                  <li>Any content obtained from the Services</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                  <li>System failures or interruptions in the Services</li>
                  <li>Errors, inaccuracies, or omissions in the Services or content</li>
                </ul>
                <p className="mt-4">
                  In no event shall our total liability to you for all claims arising from or relating to these Terms or your use of the Services exceed the greater of (a) the total amount you paid to us for the Services during the twelve (12) months preceding the event giving rise to the liability, or (b) $100.
                </p>
                <p>
                  The limitations of liability in this section will apply even if we have been advised of the possibility of such damages and even if any remedy fails of its essential purpose.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-amber-800">
                      Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for certain types of damages. Accordingly, some of the above limitations and disclaimers may not apply to you. To the extent that we may not, as a matter of applicable law, disclaim any implied warranty or limit our liabilities, the scope and duration of such warranty and the extent of our liability shall be the minimum permitted under such applicable law.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="disclaimer">
              <AccordionTrigger className="text-lg font-medium">
                Disclaimer of Warranties
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2 pb-4">
                <p>
                  Your use of our Services is at your sole risk. The Services and all content delivered to you through the Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p>
                  We do not guarantee, represent, or warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use of the Services will be uninterrupted, timely, secure, or error-free</li>
                  <li>The results that may be obtained from the use of the Services will be accurate or reliable</li>
                  <li>Any errors in the Services will be corrected</li>
                  <li>The Services or the servers that make the Services available are free of viruses or other harmful components</li>
                  <li>The Services will meet your requirements or expectations</li>
                </ul>
                <p className="mt-4">
                  You expressly agree that your use of, or inability to use, the Services is at your sole risk. The Services and all products and services delivered to you through the Services are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties, or conditions of any kind, either express or implied.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="indemnification">
              <AccordionTrigger className="text-lg font-medium">
                Indemnification
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2 pb-4">
                <p>
                  You agree to indemnify, defend, and hold harmless FinTech4ESG Consulting and its affiliates, officers, directors, employees, agents, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party right, including without limitation any intellectual property right or privacy right</li>
                  <li>Your breach of any applicable law, rule, or regulation</li>
                  <li>Any claim that your content or use of the Services caused damage to a third party</li>
                  <li>Any transaction you conduct or attempt to conduct through the Services</li>
                  <li>Any information you submit through the Services</li>
                </ul>
                <p className="mt-4">
                  This indemnification obligation will survive the termination of these Terms and your use of the Services.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="termination">
              <AccordionTrigger className="text-lg font-medium">
                Term and Termination
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2 pb-4">
                <p>
                  These Terms shall remain in full force and effect while you use the Services or maintain an account with us.
                </p>
                <p>
                  You may terminate these Terms at any time by closing your account and discontinuing use of the Services. If you cease to use the Services without formally closing your account, your account may be deactivated due to prolonged inactivity after a specified period.
                </p>
                <p>
                  We may terminate or suspend your account and these Terms at any time, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
                </p>
                <p>
                  We may also:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify, suspend, or discontinue any part of the Services without notice or liability</li>
                  <li>Impose limits on certain features and services or restrict your access to parts or all of the Services</li>
                  <li>Take technical and legal steps to prevent you from accessing the Services if we believe you are creating risk or possible legal exposure for us</li>
                </ul>
                <p className="mt-4">
                  All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="governing-law">
              <AccordionTrigger className="text-lg font-medium">
                Governing Law and Dispute Resolution
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2 pb-4">
                <p>
                  These Terms and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of France, without giving effect to any choice or conflict of law provision or rule.
                </p>
                <p>
                  Any legal action or proceeding arising out of or related to these Terms or the Services shall be instituted exclusively in the courts located in Paris, France, and you irrevocably submit to the jurisdiction of such courts in any such action or proceeding.
                </p>
                <p>
                  Before initiating any formal legal proceeding, you agree to first try to resolve any dispute informally by contacting us at <a href="mailto:legal@fintech4esg.com" className="text-white hover:underline">legal@fintech4esg.com</a>. We will try to resolve the dispute by contacting you via email. If the dispute is not resolved within 30 days after contact, you or we may bring a formal proceeding.
                </p>
                <p>
                  Any dispute arising from these Terms or the Services will be resolved on an individual basis. Class actions, collective actions, and other representative actions are not permitted.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="misc">
              <AccordionTrigger className="text-lg font-medium">
                Miscellaneous Provisions
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2 pb-4">
                <div>
                  <h4 className="font-medium mb-2">Entire Agreement</h4>
                  <p className="text-sm">
                    These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference herein, constitute the entire agreement between you and us concerning your use of the Services.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Waiver</h4>
                  <p className="text-sm">
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision. The waiver of any such right or provision will be effective only if in writing and signed by our authorized representative.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Severability</h4>
                  <p className="text-sm">
                    If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Assignment</h4>
                  <p className="text-sm">
                    You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. Any attempt by you to assign or transfer these Terms without such consent will be null and void. We may freely assign or transfer these Terms without restriction.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Force Majeure</h4>
                  <p className="text-sm">
                    We will not be liable for any delay or failure to perform any obligation under these Terms where the delay or failure results from any cause beyond our reasonable control, including acts of God, labor disputes, or other industrial disturbances, electrical or power outages, utilities or telecommunications failures, earthquakes, storms, or other elements of nature, blockages, embargoes, riots, acts or orders of government, acts of terrorism, or war.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Notices</h4>
                  <p className="text-sm">
                    Any notices or other communications provided by us under these Terms, including those regarding modifications to these Terms, will be given by posting to the Services or by email to the address associated with your account.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">No Third-Party Beneficiaries</h4>
                  <p className="text-sm">
                    These Terms do not confer any third-party beneficiary rights on any person or entity.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AnimatedComponent>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            For additional information about our services, please see:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/privacy"
              className="flex items-center gap-2 hover:bg-primary rounded-xl bg-white p-2 text-neutre-500 hover:text-white"
            >
              <Shield className="h-4 w-4" />
              Privacy Policy
            </Link>
            <Link  to="/security"  className="flex items-center gap-2 hover:bg-primary rounded-xl bg-white p-2 text-neutre-500 hover:text-white" >
              <Lock className="h-4 w-4" />
              Security Policy
            </Link>
          </div>
        </div>

        <div className="bg-purple-300 p-6 rounded-xl mt-12">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Contact Us</h3>
            <p className="text-sm mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-white" />
                <a href="mailto:legal@fintech4esg.com" className="text-white hover:underline">
                  legal@fintech4esg.com
                </a>
              </div>
              <div className="flex items-center">
                <GavelIcon className="h-4 w-4 mr-2 text-green-600" />
                <span>FinTech4ESG Consulting, 41 rue du Fgb St Denis, 75010 Paris – France</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}