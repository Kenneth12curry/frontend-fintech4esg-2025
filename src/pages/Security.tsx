import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShieldCheck,
  Lock,
  AlertTriangle,
  EyeOff,
  Server,
  Globe,
  UserCog,
  KeyRound,
  AlertCircle,
  Shield,
  FileText,
  Mail,
  BellRing,
  CheckSquare,
  RefreshCw,
} from "lucide-react";
import { AnimatedComponent } from "@/components/ui/animated-component";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SecurityPolicyPage() {
  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <Layout className="bg-primary">
      <div className="container mx-auto py-12 px-4 max-w-5xl">
        <AnimatedComponent animation="fadeIn">
          <div className="text-center mb-10">
            <div className="inline-flex bg-primary/10 p-3 rounded-full mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-3">Security Policy</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              How FinTech4esg protects your data and financial transactions
            </p>
            <p className="text-sm text-muted-foreground mt-2">Last updated: April 5, 2025</p>
          </div>
        </AnimatedComponent>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid grid-cols-1 md:grid-cols-4 mb-8 md:w-[600px] mx-auto bg-purple-400 text-white">
            <TabsTrigger value="overview" className="font-bold">Overview</TabsTrigger>
            <TabsTrigger value="data-security" className="font-bold">Data Security</TabsTrigger>
            <TabsTrigger value="transaction" className="font-bold">Transaction Security</TabsTrigger>
            <TabsTrigger value="user-practices" className="font-bold">Best Practices</TabsTrigger>
          </TabsList>

          <AnimatedComponent animation="fadeIn">
            <Card className="rounded-xl">
              <TabsContent value="overview" className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Security Commitment</CardTitle>
                  <CardDescription>
                    Our approach to protecting your information and transactions
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <p>
                    At FinTech4esg Consulting, the security of your information and financial transactions is our top priority. This Security Policy outlines the measures we take to protect your data, ensure secure transactions, and maintain the integrity of our ReadyCash platform.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-purple-300 rounded-xl">
                      <CardHeader className="pb-2">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-100 p-2 rounded-full mr-3">
                            <ShieldCheck className="h-4 w-4 text-blue-600" />
                          </div>
                          <CardTitle className="text-lg">Defense in Depth</CardTitle>
                        </div>
                        <CardDescription className="text-xs">
                          Multiple layers of security controls
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm pt-2">
                        <p>
                          We employ a multi-layered security approach that includes physical, technical, and administrative safeguards to protect against unauthorized access, breaches, and data loss.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-300 rounded-xl">
                      <CardHeader className="pb-2">
                        <div className="flex items-center mb-2">
                          <div className="bg-green-100 p-2 rounded-full mr-3">
                            <RefreshCw className="h-4 w-4 text-green-600" />
                          </div>
                          <CardTitle className="text-lg">Continuous Monitoring</CardTitle>
                        </div>
                        <CardDescription className="text-xs">
                          24/7 security surveillance
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm pt-2">
                        <p>
                          Our security team and automated systems continuously monitor for suspicious activities, potential vulnerabilities, and emerging threats to quickly identify and respond to security incidents.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-300 rounded-xl">
                      <CardHeader className="pb-2">
                        <div className="flex items-center mb-2">
                          <div className="bg-purple-100 p-2 rounded-full mr-3">
                            <CheckSquare className="h-4 w-4 text-purple-600" />
                          </div>
                          <CardTitle className="text-lg">Compliance</CardTitle>
                        </div>
                        <CardDescription className="text-xs">
                          Industry standards and regulations
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm pt-2">
                        <p>
                          We adhere to international security standards and financial regulations, including GDPR, PCI DSS, and relevant local financial regulations in all our operating countries.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-primary/5 p-5 rounded-lg mt-6 space-y-4">
                    <h3 className="font-medium">Our Security Principles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex items-start">
                        <ShieldCheck className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-sm">Privacy by Design</h4>
                          <p className="text-xs text-muted-foreground">
                            Security and privacy considerations are built into our products and systems from the ground up, not added as an afterthought.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ShieldCheck className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-sm">Least Privilege</h4>
                          <p className="text-xs text-muted-foreground">
                            Access to customer data is restricted to only those employees who need it to perform their job functions.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ShieldCheck className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-sm">Secure by Default</h4>
                          <p className="text-xs text-muted-foreground">
                            All our systems and services are configured with secure defaults requiring explicit actions to reduce security.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ShieldCheck className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-sm">Transparency</h4>
                          <p className="text-xs text-muted-foreground">
                            We believe in being open about our security practices and promptly notifying users of any security incidents that may affect them.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg">
                    <div className="flex items-start">
                      <BellRing className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Security Incident Reporting</h3>
                        <p className="text-sm">
                          If you suspect a security vulnerability or incident related to our services, please report it immediately to <a href="mailto:security@fintech4esg.com" className="text-primary hover:underline">security@fintech4esg.com</a>. We take all security reports seriously and will investigate promptly.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="data-security" className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Data Protection Measures</CardTitle>
                  <CardDescription>
                    How we secure your personal and financial information
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-purple-300 p-4 rounded-xl">
                        <div className="flex items-center mb-3">
                          <EyeOff className="h-5 w-5 mr-2 text-primary" />
                          <h3 className="font-medium">Encryption</h3>
                        </div>
                        <p className="text-sm mb-3">
                          All sensitive data is encrypted both in transit and at rest:
                        </p>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                          <li>TLS 1.3 encryption for all data in transit</li>
                          <li>AES-256 encryption for data at rest</li>
                          <li>End-to-end encryption for sensitive communications</li>
                          <li>Field-level encryption for payment details and PII</li>
                        </ul>
                      </div>

                      <div className="bg-purple-300 p-4 rounded-xl">
                        <div className="flex items-center mb-3">
                          <Server className="h-5 w-5 mr-2 text-primary" />
                          <h3 className="font-medium">Infrastructure Security</h3>
                        </div>
                        <p className="text-sm mb-3">
                          Our infrastructure is built with security at its core:
                        </p>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                          <li>Regular vulnerability scanning and penetration testing</li>
                          <li>Automated patch management for all systems</li>
                          <li>Network segmentation and firewalls</li>
                          <li>Redundant systems with automatic failover</li>
                          <li>Continuous security monitoring and alerting</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-purple-300 p-4 rounded-xl">
                        <div className="flex items-center mb-3">
                          <UserCog className="h-5 w-5 mr-2 text-primary" />
                          <h3 className="font-medium">Access Controls</h3>
                        </div>
                        <p className="text-sm mb-3">
                          We implement strict access controls to protect your data:
                        </p>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                          <li>Role-based access control (RBAC) for all systems</li>
                          <li>Multi-factor authentication for all staff members</li>
                          <li>Principle of least privilege for system access</li>
                          <li>Regular access reviews and permission audits</li>
                          <li>Automated alerts for suspicious access attempts</li>
                        </ul>
                      </div>

                      <div className="bg-purple-300 p-4 rounded-xl">
                        <div className="flex items-center mb-3">
                          <Globe className="h-5 w-5 mr-2 text-primary" />
                          <h3 className="font-medium">Secure Development</h3>
                        </div>
                        <p className="text-sm mb-3">
                          Security is integrated throughout our development process:
                        </p>
                        <ul className="space-y-1 text-sm list-disc pl-5">
                          <li>Secure software development lifecycle (S-SDLC)</li>
                          <li>Regular code reviews with security focus</li>
                          <li>Automated security testing in CI/CD pipeline</li>
                          <li>Third-party security audits and assessments</li>
                          <li>Security training for all development staff</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-5 rounded-lg mt-6">
                    <h3 className="font-medium mb-3 flex items-center">
                      <AlertCircle className="h-5 w-5 text-primary mr-2" />
                      Data Breach Response
                    </h3>
                    <p className="text-sm mb-3">
                      In the unlikely event of a data breach, we have a comprehensive response plan in place:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                      <li><span className="font-medium">Detection and Containment:</span> We use advanced monitoring tools to quickly detect and contain potential breaches.</li>
                      <li><span className="font-medium">Assessment:</span> Our security team assesses the nature and scope of the incident to understand affected data and users.</li>
                      <li><span className="font-medium">Notification:</span> We promptly notify affected users and relevant authorities as required by applicable laws and regulations.</li>
                      <li><span className="font-medium">Remediation:</span> We take immediate steps to address the root cause and strengthen our security measures to prevent similar incidents.</li>
                      <li><span className="font-medium">Post-Incident Review:</span> We conduct thorough reviews after any security incident to improve our security posture.</li>
                    </ol>
                  </div>

                  <div className="bg-purple-300 p-5 rounded-xl">
                    <h3 className="font-medium mb-3">Data Retention and Deletion</h3>
                    <p className="text-sm mb-3">
                      We have specific policies governing how long we keep your data and how we delete it:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>We retain data only as long as necessary for the purposes outlined in our Privacy Policy or as required by law.</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>When data is no longer needed, we securely delete it using industry-standard methods.</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>For storage media that is decommissioned, we use secure wiping or physical destruction methods to ensure data cannot be recovered.</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Upon account closure, we have specific processes to ensure all personal data is properly purged from our systems according to our retention schedule.</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="transaction" className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Transaction Security</CardTitle>
                  <CardDescription>
                    How we protect your financial transactions
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <p>
                    Financial transactions are the core of our platform, and we employ multiple security measures to ensure they remain secure, accurate, and protected against fraud.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-300 p-4 rounded-xl">
                      <div className="flex items-center mb-3">
                        <KeyRound className="h-5 w-5 mr-2 text-primary" />
                        <h3 className="font-medium">Authentication</h3>
                      </div>
                      <p className="text-sm mb-3">
                        We implement strong authentication to verify the identity of users:
                      </p>
                      <ul className="space-y-1 text-sm list-disc pl-5">
                        <li>Multi-factor authentication options for all accounts</li>
                        <li>Biometric authentication support on compatible devices</li>
                        <li>Risk-based authentication that adapts security levels based on context</li>
                        <li>Session management with automatic timeout of inactive sessions</li>
                        <li>Device recognition to identify and verify trusted devices</li>
                      </ul>
                    </div>

                    <div className="bg-purple-300 p-4 rounded-xl">
                      <div className="flex items-center mb-3">
                        <AlertTriangle className="h-5 w-5 mr-2 text-primary" />
                        <h3 className="font-medium">Fraud Prevention</h3>
                      </div>
                      <p className="text-sm mb-3">
                        We employ sophisticated systems to detect and prevent fraudulent activities:
                      </p>
                      <ul className="space-y-1 text-sm list-disc pl-5">
                        <li>Machine learning algorithms for fraud detection</li>
                        <li>Real-time transaction monitoring and scoring</li>
                        <li>Behavioral analytics to identify unusual patterns</li>
                        <li>Geographic location verification</li>
                        <li>Custom spend controls and transaction limits</li>
                        <li>Immediate alerts for suspicious activities</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-300 p-4 rounded-xl">
                      <div className="flex items-center mb-3">
                        <Shield className="h-5 w-5 mr-2 text-primary" />
                        <h3 className="font-medium">Transaction Integrity</h3>
                      </div>
                      <p className="text-sm mb-3">
                        We ensure the accuracy and reliability of all transactions:
                      </p>
                      <ul className="space-y-1 text-sm list-disc pl-5">
                        <li>End-to-end transaction validation and verification</li>
                        <li>Digital signatures to prevent tampering</li>
                        <li>Immutable transaction logs for auditing</li>
                        <li>Reconciliation processes to ensure transaction accuracy</li>
                        <li>Redundant processing systems to prevent data loss</li>
                      </ul>
                    </div>

                    <div className="bg-purple-300 p-4 rounded-xl">
                      <div className="flex items-center mb-3">
                        <Globe className="h-5 w-5 mr-2 text-primary" />
                        <h3 className="font-medium">Secure Integrations</h3>
                      </div>
                      <p className="text-sm mb-3">
                        Our connections with financial partners and third parties are secured:
                      </p>
                      <ul className="space-y-1 text-sm list-disc pl-5">
                        <li>Encrypted API connections with banking partners</li>
                        <li>Strict partner security requirements and vetting</li>
                        <li>Regular security audits of third-party integrations</li>
                        <li>Tokenization for payment processing</li>
                        <li>Secure key management for all integrations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-100 p-5 rounded-xl mt-6">
                    <h3 className="font-medium mb-3 flex items-center">
                      <AlertCircle className="h-5 w-5 text-primary mr-2" />
                      Regulatory Compliance
                    </h3>
                    <p className="text-sm mb-3">
                      We adhere to financial industry regulations and standards to ensure security and compliance:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-xl">
                        <h4 className="font-medium text-sm mb-1">Payment Card Industry Data Security Standard (PCI DSS)</h4>
                        <p className="text-xs text-muted-foreground">
                          We maintain PCI DSS compliance for handling payment card information, ensuring we meet the highest security standards for payment processing.
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-xl">
                        <h4 className="font-medium text-sm mb-1">Anti-Money Laundering (AML) Compliance</h4>
                        <p className="text-xs text-muted-foreground">
                          We implement robust AML procedures including customer due diligence, transaction monitoring, and suspicious activity reporting.
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-xl">
                        <h4 className="font-medium text-sm mb-1">Know Your Customer (KYC) Verification</h4>
                        <p className="text-xs text-muted-foreground">
                          Our KYC processes verify customer identities while protecting personal information, helping prevent fraud and identity theft.
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-xl">
                        <h4 className="font-medium text-sm mb-1">Local Financial Regulations</h4>
                        <p className="text-xs text-muted-foreground">
                          We comply with financial regulations in all countries where we operate, adapting our security measures to meet local requirements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mt-4">
                    <h3 className="font-medium">Transaction Types and Security Features</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Transaction Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Security Features
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Verification Method
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              Money Transfers
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              End-to-end encryption, anomaly detection
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              OTP, transaction PIN
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              Loan Disbursements
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              Multi-step approval, audit logs
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              Multi-factor authentication
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              Bill Payments
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              Payee verification, transaction limits
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              PIN or biometric, confirmation step
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              Mobile Money
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              Device binding, geo-verification
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              Mobile PIN, OTP via SMS
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              Agent Banking
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              Agent authentication, real-time alerts
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              Biometric verification, customer confirmation
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="user-practices" className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Security Best Practices</CardTitle>
                  <CardDescription>
                    Recommendations for keeping your account and information secure
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <p>
                    While we implement robust security measures on our end, account security is a shared responsibility. Follow these recommendations to enhance the security of your account and financial information:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-purple-300 p-5 rounded-xl">
                      <h3 className="font-medium mb-3 flex items-center">
                        <Lock className="h-5 w-5 text-primary mr-2" />
                        Account Security
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Use strong, unique passwords</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Create a strong password that is at least 12 characters long with a mix of letters, numbers, and symbols. Never reuse passwords across different accounts.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Enable multi-factor authentication (MFA)</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Add an extra layer of security by enabling MFA, which requires a verification code in addition to your password when signing in from new devices.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Regularly review account activity</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Frequently check your transaction history and account activity. Report any unauthorized transactions immediately.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Keep contact information updated</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Ensure your email address and phone number are current so we can reach you for security alerts or verification.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-300 p-5 rounded-xl">
                      <h3 className="font-medium mb-3 flex items-center">
                        <Globe className="h-5 w-5 text-primary mr-2" />
                        Safe Online Practices
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Verify website authenticity</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Always ensure you're on our official website by checking the URL (https://www.fintech4esg.com) and looking for the padlock icon in your browser.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Be cautious with public Wi-Fi</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Avoid accessing your financial accounts on public Wi-Fi networks. Use a secure, private connection or a VPN when managing financial information.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Keep your devices secure</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Install security updates for your devices and operating systems promptly. Use anti-virus software and keep it updated.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Log out when finished</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Always log out of your account when you're done, especially when using shared or public computers.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-300 p-5 rounded-xl">
                      <h3 className="font-medium mb-3 flex items-center">
                        <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                        Recognizing Threats
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Beware of phishing attempts</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              We will never ask for your password, PIN, or full card details via email or phone. Be suspicious of messages asking for this information.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Verify suspicious communications</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              If you receive a suspicious email, call, or message claiming to be from us, contact us directly through our official channels to verify.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Check for scam warning signs</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              Be cautious of offers that seem too good to be true, requests for urgent action, or unexpected communications about your account.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <ShieldCheck className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Report suspicious activity</span>
                            <p className="text-sm text-muted-foreground mt-1">
                              If you notice anything suspicious related to your account, report it to us immediately at <a href="mailto:security@fintech4esg.com" className="text-primary hover:underline">security@fintech4esg.com</a>.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-100 p-5 rounded-xl mt-6">
                    <h3 className="font-medium mb-3 flex items-center">
                      <Lock className="h-5 w-5 text-primary mr-2" />
                      Additional Security Features
                    </h3>
                    <p className="text-sm mb-4">
                      We offer several optional security features to enhance the protection of your account:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-xl">
                        <h4 className="font-medium text-sm mb-1">Transaction Notifications</h4>
                        <p className="text-xs text-muted-foreground">
                          Receive real-time alerts for all account activities via email or SMS to quickly identify unauthorized transactions.
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-xl">
                        <h4 className="font-medium text-sm mb-1">Spending Limits</h4>
                        <p className="text-xs text-muted-foreground">
                          Set daily or transaction-specific spending limits to protect against large unauthorized transfers.
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-xl">
                        <h4 className="font-medium text-sm mb-1">Trusted Device Management</h4>
                        <p className="text-xs text-muted-foreground">
                          View and manage the devices that have access to your account, with the ability to remove unknown devices.
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-xl">
                        <h4 className="font-medium text-sm mb-1">Login Notifications</h4>
                        <p className="text-xs text-muted-foreground">
                          Receive alerts when your account is accessed from a new device or location to quickly identify unauthorized access.
                        </p>
                      </div>
                    </div>
                 {/*    <div className="mt-4 text-center">
                      <Button variant="outline" className="gap-2 bg-primary hover:bg-purple-200 rounded-xl hover:text-black">
                        <Lock className="h-4 w-4" />
                        Manage Security Settings
                      </Button>
                    </div> */}
                  </div>
                </CardContent>
              </TabsContent>
            </Card>
          </AnimatedComponent>
        </Tabs>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            For additional information about our policies, please see:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
           <Link
              to="/privacy"
              className="flex items-center gap-2 hover:bg-primary rounded-xl bg-white p-2 text-neutre-500 hover:text-white"
            >
              <Shield className="h-4 w-4" />
              Privacy Policy
            </Link>
            <Link
             to="/terms"
              className="flex items-center gap-2 hover:bg-primary rounded-xl bg-white p-2 text-neutre-500 hover:text-white"
            >
              <FileText className="h-4 w-4" />
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="bg-purple-300 p-6 rounded-xl mt-12">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Security Contact</h3>
            <p className="text-sm mb-4">
              For security-related inquiries or to report potential security issues, please contact:
            </p>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-white" />
                <a href="mailto:security@fintech4esg.com" className="text-white hover:underline">
                  security@fintech4esg.com
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                For urgent security matters, please include "URGENT" in the subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}