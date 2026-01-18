import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Shield, ShieldAlert, ShieldCheck, FileText, Mail, Users, Building, Lock, Eye } from "lucide-react";
import { AnimatedComponent } from "@/components/ui/animated-component";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <Layout className="bg-primary">
      <div className="container mx-auto py-12 px-4 max-w-5xl">
        <AnimatedComponent animation="fadeIn">
          <div className="text-center mb-10">
            <div className="inline-flex bg-primary/10 p-3 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              How FinTech4ESG Consulting protects and manages your personal information
            </p>
            <p className="text-sm text-muted-foreground mt-2">Last updated: April 5, 2025</p>
          </div>
        </AnimatedComponent>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid grid-cols-1 md:grid-cols-4 mb-8 md:w-[600px] mx-auto bg-purple-400 text-white rounded-xl">
            <TabsTrigger value="overview" className="font-bold">Overview</TabsTrigger>
            <TabsTrigger value="collection" className="font-bold">Data Collection</TabsTrigger>
            <TabsTrigger value="usage" className="font-bold">Data Usage</TabsTrigger>
            <TabsTrigger value="rights" className="font-bold">Your Rights</TabsTrigger>
          </TabsList>

          <AnimatedComponent animation="fadeIn">
            <Card className="rounded-xl">
              <TabsContent value="overview" className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Privacy Policy Overview</CardTitle>
                  <CardDescription>
                    A summary of how we handle your information
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <p>
                    This Privacy Policy describes how FinTech4ESG Consulting ("we", "us", or "our") collects, uses, and shares your personal information
                    when you use our ReadyCash platform and related services (the "Services").
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-300 p-4 rounded-xl">
                      <div className="flex items-center mb-3">
                        <Shield className="h-5 w-5 mr-2 text-primary" />
                        <h3 className="font-medium">Our Privacy Principles</h3>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>We collect only data that is necessary for providing our services</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>We implement strong security measures to protect your information</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>We never sell your personal data to third parties</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>We honor your right to access, correct, and delete your data</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-300 p-4 rounded-xl">
                      <div className="flex items-center mb-3">
                        <ShieldAlert className="h-5 w-5 mr-2 text-primary" />
                        <h3 className="font-medium">Key Points to Know</h3>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>We process financial data to enable transactions and prevent fraud</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>We share data with service providers who help operate our platform</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>We comply with regulatory requirements in all jurisdictions we operate</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>You can control your marketing preferences at any time</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-5 rounded-lg mt-6">
                    <h3 className="font-medium mb-2 flex items-center">
                      <Eye className="h-5 w-5 text-primary mr-2" />
                      Policy Changes and Updates
                    </h3>
                    <p className="text-sm">
                      We may update this Privacy Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. When we post changes to this Privacy Policy, we will revise the "Last Updated" date at the top of this Privacy Policy. If we make significant changes, we will notify you through the Service or by other means, such as email. We encourage you to review our Privacy Policy periodically.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-3">Questions?</h3>
                    <p>
                      If you have any questions about this Privacy Policy, please contact our Data Protection Officer at:
                    </p>
                    <div className="flex items-center mt-2">
                      <Mail className="h-4 w-4 mr-2 text-primary" />
                      <a href="mailto:privacy@fintech4esg.com" className="text-primary hover:underline">
                        privacy@fintech4esg.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="collection" className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Information We Collect</CardTitle>
                  <CardDescription>
                    The types of information we collect and how we obtain it
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Personal Information</h3>
                      <p className="mb-4">
                        When you register for and use our Services, we collect the following categories of personal information:
                      </p>

                      <div className="space-y-4">
                        <div className="bg-purple-300 p-4 rounded-xl">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Users className="h-4 w-4 text-primary mr-2" />
                            Identity and Contact Information
                          </h4>
                          <ul className="space-y-1 text-sm pl-6 list-disc">
                            <li>Full name and preferred name</li>
                            <li>Email address and phone number</li>
                            <li>Mailing or physical address</li>
                            <li>Government-issued identification (where required for verification)</li>
                            <li>Date of birth</li>
                          </ul>
                        </div>

                        <div className="bg-purple-300 p-4 rounded-xl">
                          <h4 className="font-medium mb-2 flex items-center">
                            <Building className="h-4 w-4 text-primary mr-2" />
                            Financial Information
                          </h4>
                          <ul className="space-y-1 text-sm pl-6 list-disc">
                            <li>Bank account information</li>
                            <li>Transaction history</li>
                            <li>Payment details (such as mobile money accounts)</li>
                            <li>Credit information (when you apply for loans)</li>
                            <li>Business information (for business accounts)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3">Automatically Collected Information</h3>
                      <p className="mb-4">
                        When you access or use our Services, we automatically collect certain information, including:
                      </p>

                      <div className="space-y-4">
                        <div className="bg-purple-300 p-4 rounded-xl">
                          <h4 className="font-medium mb-2 flex items-center">
                            <FileText className="h-4 w-4 text-primary mr-2" />
                            Device and Usage Information
                          </h4>
                          <ul className="space-y-1 text-sm pl-6 list-disc">
                            <li>Device type, operating system, and browser type</li>
                            <li>IP address and approximate location based on IP address</li>
                            <li>Mobile device identifiers (such as your mobile device ID, model, and manufacturer)</li>
                            <li>Pages or features of our Services that you access, time spent, and other interaction data</li>
                            <li>Error logs and performance data</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3">Information from Third Parties</h3>
                      <p className="mb-4">
                        We may also collect information about you from third-party sources, including:
                      </p>

                      <ul className="space-y-1 pl-6 list-disc">
                        <li>Identity verification services</li>
                        <li>Credit bureaus and financial institutions</li>
                        <li>Public databases and governmental agencies</li>
                        <li>Business partners and service providers who help us operate our Services</li>
                        <li>Social media platforms (if you choose to connect your account)</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 p-5 rounded-lg mt-6">
                      <h3 className="font-medium mb-2 flex items-center">
                        <ShieldCheck className="h-5 w-5 text-primary mr-2" />
                        Cookies and Similar Technologies
                      </h3>
                      <p className="text-sm mb-3">
                        We use cookies and similar tracking technologies to track activity on our Services and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                      </p>
                      <p className="text-sm">
                        You can control cookies through your browser settings and other tools. For more detailed information about our use of cookies, please see our <a href="#" className="text-primary hover:underline">Cookie Policy</a>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="usage" className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
                  <CardDescription>
                    The purposes for which we process your personal data
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <p>
                    We use your personal information for the following purposes:
                  </p>

                  <div className="space-y-5 mt-4">
                    <div className="bg-purple-300 p-4 rounded-xl">
                      <h3 className="font-medium mb-2">Providing and Improving Our Services</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To process transactions and send related information</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To maintain your account and provide customer support</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To improve, personalize, and expand our Services</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To identify and fix bugs and service errors</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-300 p-4 rounded-xl">
                      <h3 className="font-medium mb-2">Risk Management and Security</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To verify your identity and prevent fraud</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To monitor for suspicious or fraudulent activity</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To ensure compliance with our terms and policies</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To protect our rights, property, and safety</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-300 p-4 rounded-xl">
                      <h3 className="font-medium mb-2">Communication and Marketing</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To send administrative messages about your account</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To send you marketing communications (with your consent)</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To respond to your comments, questions, and support requests</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To send you surveys and feedback requests</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-300 p-4 rounded-xl">
                      <h3 className="font-medium mb-2">Legal and Regulatory Compliance</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To comply with applicable laws and regulations</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To fulfill our KYC (Know Your Customer) and AML (Anti-Money Laundering) obligations</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To respond to legal requests and prevent harm</span>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>To establish, exercise, or defend legal claims</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-5 rounded-lg mt-6">
                    <h3 className="font-medium mb-2 flex items-center">
                      <Lock className="h-5 w-5 text-primary mr-2" />
                      Information Sharing
                    </h3>
                    <p className="text-sm mb-3">
                      We may share your personal information with the following categories of third parties:
                    </p>
                    <ul className="space-y-1 text-sm pl-6 list-disc">
                      <li>Service providers who help us operate our platform</li>
                      <li>Financial institutions and payment processors to complete transactions</li>
                      <li>Identity verification and fraud prevention services</li>
                      <li>Professional advisors, such as lawyers, auditors, and insurers</li>
                      <li>Regulatory authorities and government agencies, when required by law</li>
                      <li>Business partners, with your consent or as needed to provide services you've requested</li>
                    </ul>
                    <p className="text-sm mt-3">
                      We do not sell or rent your personal information to third parties for marketing purposes. We may share anonymous, aggregated information that does not identify you with third parties for industry analysis, demographic profiling, and other purposes.
                    </p>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="rights" className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Your Privacy Rights</CardTitle>
                  <CardDescription>
                    How you can control your personal information
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information. These may include the right to:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-purple-300 p-4 rounded-xl">
                      <h4 className="font-medium mb-2">Access and Portability</h4>
                      <p className="text-sm">
                        You have the right to request a copy of the personal information we hold about you and to receive your information in a structured, commonly used format.
                      </p>
                    </div>
                    
                    <div className="bg-purple-300 p-4 rounded-xl">
                      <h4 className="font-medium mb-2">Correction</h4>
                      <p className="text-sm">
                        You can request that we correct any inaccurate or incomplete personal information we hold about you.
                      </p>
                    </div>
                    
                    <div className="bg-purple-300 p-4 rounded-xl">
                      <h4 className="font-medium mb-2">Deletion</h4>
                      <p className="text-sm">
                        You can request that we delete your personal information, subject to certain legal exceptions.
                      </p>
                    </div>
                    
                    <div className="bg-purple-300 p-4 rounded-xl">
                      <h4 className="font-medium mb-2">Restriction and Objection</h4>
                      <p className="text-sm">
                        You can request that we restrict the processing of your information or object to certain processing activities.
                      </p>
                    </div>
                    
                    <div className="bg-purple-300 p-4 rounded-xl">
                      <h4 className="font-medium mb-2">Withdrawal of Consent</h4>
                      <p className="text-sm">
                        You can withdraw your consent at any time where we rely on consent to process your personal information.
                      </p>
                    </div>
                    
                    <div className="bg-purple-300 p-4 rounded-xl">
                      <h4 className="font-medium mb-2">Complaint</h4>
                      <p className="text-sm">
                        You have the right to lodge a complaint with a supervisory authority if you believe our processing of your personal information violates applicable law.
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-5 rounded-lg mt-6">
                    <h3 className="font-medium mb-3 flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      How to Exercise Your Rights
                    </h3>
                    <p className="text-sm mb-4">
                      To exercise your privacy rights, you can:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Log into your account settings to access, update, or delete certain information</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Contact our Data Protection Officer at <a href="mailto:privacy@fintech4esg.com" className="text-primary hover:underline">privacy@fintech4esg.com</a></span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Submit a request through our <a href="#" className="text-primary hover:underline">Privacy Request Form</a></span>
                      </li>
                    </ul>
                    <p className="text-sm mt-4">
                      We will respond to your request within 30 days. We may need to verify your identity before responding to your request. In some cases, we may deny your request if permitted by law, in which case we will explain the reason for denial.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-3">Data Retention</h3>
                    <p className="text-sm">
                      We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When determining how long to keep your information, we consider the nature and sensitivity of the data, potential risks of unauthorized disclosure, the purposes for which we process the data, and applicable legal requirements.
                    </p>
                    <p className="text-sm mt-2">
                      When we no longer need your personal information, we will securely delete or anonymize it. In some circumstances, we may anonymize your personal information (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-3">Children's Privacy</h3>
                    <p className="text-sm">
                      Our Services are not intended for children under the age of 18. We do not knowingly collect or solicit personal information from children under 18. If you are under 18, please do not attempt to register for our Services or send any personal information about yourself to us. If we learn that we have collected personal information from a child under 18, we will delete that information as quickly as possible. If you believe that a child under 18 may have provided us with personal information, please contact us at <a href="mailto:privacy@fintech4esg.com" className="text-primary hover:underline">privacy@fintech4esg.com</a>.
                    </p>
                  </div>
                </CardContent>
              </TabsContent>
            </Card>
          </AnimatedComponent>
        </Tabs>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            For additional information about how we protect your information, please see our:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/terms"  className="flex items-center gap-2 hover:bg-primary rounded-xl bg-white p-2 text-neutre-500 hover:text-white">
              <FileText className="h-4 w-4" />
              Terms of Service
            </Link>
            <Link to="/security"  className="flex items-center gap-2 hover:bg-primary rounded-xl bg-white p-2 text-neutre-500 hover:text-white" >
              <ShieldCheck className="h-4 w-4" />
              Security Policy
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}