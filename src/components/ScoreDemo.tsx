import { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedProgressBar } from "@/components/ui/animated-progress-bar";
import { AnimatedComponent } from "@/components/ui/animated-component";
import { CountUp } from "@/components/ui/count-up";
import { 
  RefreshCw, 
  User, 
  AlertTriangle, 
  CheckCircle, 
  UserCheck, 
  PieChart,
  BarChart as BarChartIcon,
  LineChart,
  ShieldCheck,
  Clock,
  DollarSign,
  Users,
  Building,
  BarChart2,
  TrendingUp,
  Award,
  Zap,
  History
} from "lucide-react";
import { HoverAnimationCard } from "@/components/ui/hover-animation-card";

interface ScoreMetric {
  name: string;
  key: string;
  min: number;
  max: number;
  default: number;
  weight: number;
  icon: React.ElementType;
  description: string;
}

// Sample loan approval history data
const loanHistoryData = [
  { month: 'Jan', approvedLoans: 65, rejectedLoans: 35 },
  { month: 'Feb', approvedLoans: 68, rejectedLoans: 32 },
  { month: 'Mar', approvedLoans: 72, rejectedLoans: 28 },
  { month: 'Apr', approvedLoans: 78, rejectedLoans: 22 },
  { month: 'May', approvedLoans: 82, rejectedLoans: 18 },
  { month: 'Jun', approvedLoans: 86, rejectedLoans: 14 },
];

// Sample risk distribution data
const riskDistributionData = [
  { name: 'Very Low', value: 10, color: '#ef4444' },   // bg-red-500
  { name: 'Low', value: 20, color: '#fb923c' },        // bg-orange-400
  { name: 'Medium', value: 40, color: '#facc15' },     // bg-yellow-400
  { name: 'High', value: 60, color: '#86efac' },       // bg-green-300
  { name: 'Very High', value: 80, color: '#22c55e' },  // bg-green-500
];


export default function ScoreDemo() {
  const { t } = useTranslation();
  const [selectedClientType, setSelectedClientType] = useState<string>("individual");
  const [activeTab, setActiveTab] = useState("metrics");
  
  // Define the scoring categories/dimensions
  const metrics: ScoreMetric[] = [
    { 
      name: t("score.metric.income"), 
      key: "income", 
      min: 0, 
      max: 100, 
      default: 50, 
      weight: 1.5,
      icon: DollarSign,
      description: "Measures stability and consistency of income sources"
    },
    { 
      name: t("score.metric.saving"), 
      key: "saving", 
      min: 0, 
      max: 100, 
      default: 35, 
      weight: 1.2,
      icon: TrendingUp,
      description: "Evaluates saving habits and financial discipline"
    },
    { 
      name: t("score.metric.investment"), 
      key: "investment", 
      min: 0, 
      max: 100, 
      default: 20, 
      weight: 0.8,
      icon: PieChart,
      description: "Assesses existing investments and financial planning"
    },
    { 
      name: t("score.metric.mobile"), 
      key: "mobile", 
      min: 0, 
      max: 100, 
      default: 65, 
      weight: 1.0,
      icon: Zap,
      description: "Frequency and patterns of mobile money transactions"
    },
    { 
      name: t("score.metric.expenditure"), 
      key: "expenditure", 
      min: 0, 
      max: 100, 
      default: 45, 
      weight: 1.3,
      icon: BarChart2,
      description: "Analysis of spending habits and financial management"
    },
    { 
      name: t("score.metric.transaction"), 
      key: "transaction", 
      min: 0, 
      max: 100, 
      default: 55, 
      weight: 1.1,
      icon: History,
      description: "Consistency and reliability of previous transactions"
    },
  ];
  
  // Define client types with different default values
  const clientTypes = {
    individual: { 
      title: "Individual", 
      defaults: Object.fromEntries(metrics.map(m => [m.key, m.default])),
      icon: User
    },
    smallBusiness: {
      title: "Small Business",
      defaults: {
        income: 60,
        saving: 40,
        investment: 30,
        mobile: 70,
        expenditure: 55,
        transaction: 65
      },
      icon: Building
    },
    
  };
  
  // Define risk thresholds
  const riskLevels = [
    { min: 0, max: 20, level: t("score.risk.verylow"), color: "bg-red-500", textColor: "text-red-500", icon: AlertTriangle, recommendation: "Not eligible for standard loans" },
    { min: 20, max: 40, level: t("score.risk.low"), color: "bg-orange-400", textColor: "text-orange-400", icon: User, recommendation: "Eligible for small loans with higher interest" },
    { min: 40, max: 60, level: t("score.risk.medium"), color: "bg-yellow-400", textColor: "text-yellow-400", icon: UserCheck, recommendation: "Eligible for standard loans with competitive rates" },
    { min: 60, max: 80, level: t("score.risk.high"), color: "bg-green-300", textColor: "text-green-300", icon: CheckCircle, recommendation: "Eligible for premium loans with lowest rates" },
    { min: 80, max: 101, level: t("score.risk.Veryhigh"), color: "bg-green-500", textColor: "text-green-500", icon: CheckCircle, recommendation: "Eligible for all loans with top rates" },
  ];
  
  
  const [values, setValues] = useState<{[key: string]: number}>(
    clientTypes.individual.defaults
  );
  
  // Update values when client type changes
  useEffect(() => {
    if (selectedClientType === "individual") {
      setValues(clientTypes.individual.defaults);
    } else if (selectedClientType === "smallBusiness") {
      setValues(clientTypes.smallBusiness.defaults);
    }
  }, [selectedClientType]);
  
  // Calculate the weighted average score
  const calculateScore = () => {
    const totalWeight = metrics.reduce((sum, metric) => sum + metric.weight, 0);
    const weightedSum = metrics.reduce((sum, metric) => sum + (values[metric.key] * metric.weight), 0);
    return Math.round((weightedSum / totalWeight) * 100) / 100;
  };
  
  const finalScore = calculateScore();
  
  // Get the risk level based on the score
  const getRiskLevel = (score: number) => {
    return riskLevels.find(level => score >= level.min && score < level.max);
  };
  
  const currentRiskLevel = getRiskLevel(finalScore);
  
  // Format data for radar chart
  const radarData = metrics.map(metric => ({
    subject: metric.name,
    value: values[metric.key],
    fullMark: 100
  }));
  
  // Handle slider change for a specific metric
  const handleSliderChange = (value: number[], metricKey: string) => {
    setValues(prev => ({
      ...prev,
      [metricKey]: value[0]
    }));
  };
  
  // Reset all values to default
  const resetValues = () => {
    if (selectedClientType === "individual") {
      setValues(clientTypes.individual.defaults);
    } else if (selectedClientType === "smallBusiness") {
      setValues(clientTypes.smallBusiness.defaults);
    } 
  };

  // Sample data for potential loan amount calculation
  const calculatePotentialLoanAmount = () => {
    const baseAmount = 1000; // Base loan amount
    const scoreMultiplier = finalScore / 50; // Score affects loan amount
    return Math.round(baseAmount * scoreMultiplier);
  };

  const loanAmount = calculatePotentialLoanAmount();

  // Sample estimated interest rate based on score
  const calculateInterestRate = () => {
    if (finalScore >= 80) return 5.5;
    if (finalScore >= 60) return 8.5;
    if (finalScore >= 40) return 12.0;
    return 18.0;
  };

  const interestRate = calculateInterestRate();

  // Sample estimated repayment period in months
  const calculateRepaymentPeriod = () => {
    if (finalScore >= 80) return "6-24";
    if (finalScore >= 60) return "3-12";
    if (finalScore >= 40) return "1-6";
    return "1-3";
  };

  const repaymentPeriod = calculateRepaymentPeriod();

  return (
    <section id="score-demo" className="py-8 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-green-900 opacity-90"></div>
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        backgroundPosition: '0 0',
        backgroundSize: '60px 60px'
      }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedComponent animation="fadeIn" duration={0.7} className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-3">
            {t("score.title")}
          </h2>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto">
            Try our interactive credit scoring demo to see how our AI-powered algorithm evaluates risk profiles
            and makes lending decisions based on multiple data points.
          </p>
        </AnimatedComponent>

        <div className="flex grid-cols-1 lg:grid-cols-2 gap-4 mb-4 flex-row justify-center">
          {Object.entries(clientTypes).map(([key, client], index) => (
            <AnimatedComponent
              className="bg-primary rounded-xl"
              key={key}
              animation="slideUp"
              delay={0.1 + index * 0.1}
              duration={0.5}
            >
              <HoverAnimationCard
                hoverEffect="glow"
                className={`p-4 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedClientType === key
                    ? "bg-white bg-opacity-10 border-green-400 border-2"
                    : "bg-purple-800 bg-opacity-50 hover:bg-opacity-70"
                }`}
                onClick={() => setSelectedClientType(key)}
              >
                <div className="flex items-center">
                  <div
                    className={`rounded-full p-2 sm:p-3 mr-3 sm:mr-4 ${
                      selectedClientType === key
                        ? "bg-green-500 text-white"
                        : "bg-purple-700 text-purple-200"
                    }`}
                  >
                    <client.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">{client.title}</h3>
                    <p className="text-xs sm:text-sm text-purple-200">
                      {key === "individual"
                        ? "Personal financial profile"
                        : key === "smallBusiness"
                        ? "Business financial profile"
                        : "Agricultural financial profile"}
                    </p>
                  </div>
                </div>
              </HoverAnimationCard>
            </AnimatedComponent>
          ))}
        </div>


        <Tabs defaultValue="metrics" className="mb-4">
          <TabsList className="bg-purple-800 bg-opacity-40 mb-4 w-full justify-start">
            <TabsTrigger 
              value="metrics" 
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-purple-100 rounded-xl"
              onClick={() => setActiveTab("metrics")}
            >
              Client Metrics
            </TabsTrigger>
            <TabsTrigger 
              value="analysis" 
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-purple-100 rounded-xl"
              onClick={() => setActiveTab("analysis")}
            >
              Risk Analysis
            </TabsTrigger>
            <TabsTrigger 
              value="trends" 
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-purple-100 rounded-xl"
              onClick={() => setActiveTab("trends")}
            >
              Market Trends
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="metrics" className="m-0">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Client Scoring Metrics</h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={resetValues} 
                className="flex items-center gap-1 text-purple-100 border-purple-300 rounded-xl bg-primary hover:bg-[#19af58]"
              >
                <RefreshCw className="h-4 w-4 mr-1" /> {t("score.reset")}
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatedComponent animation="slideLeft" duration={0.5} className="flex flex-col space-y-6">
                {metrics.map((metric, index) => (
                  <AnimatedComponent key={metric.key} animation="fadeIn" delay={0.1 * index} duration={0.3}>
                    <div className="space-y-2 bg-white bg-opacity-10 p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="rounded-full bg-purple-700 p-1.5 mr-2">
                            <metric.icon className="h-4 w-4 text-green-400" />
                          </div>
                          <span className="text-purple-100 text-sm font-medium">{metric.name}</span>
                        </div>
                        <span className="text-green-400 font-semibold">{values[metric.key]}</span>
                      </div>
                      <Slider
                        defaultValue={[metric.default]}
                        min={metric.min}
                        max={metric.max}
                        step={1}
                        value={[values[metric.key]]}
                        onValueChange={(value) => handleSliderChange(value, metric.key)}
                        className="text-green-500"
                      />
                      <p className="text-xs text-purple-200 mt-1">{metric.description}</p>
                    </div>
                  </AnimatedComponent>
                ))}
              </AnimatedComponent>
              
              <div className="flex flex-col space-y-6">
                <AnimatedComponent animation="slideRight" duration={0.5} className="bg-white/20 rounded-xl p-4 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid stroke="rgba(255, 255, 255, 0.2)" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: "white", fontSize: 12 }} />
                      <Radar
                        name={t("score.profile")}
                        dataKey="value"
                        stroke="#10B981"
                        fill="#10B981"
                        fillOpacity={0.5}
                      />
                      <Tooltip
                        contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: 'none' }}
                        labelStyle={{ color: 'white' }}
                        itemStyle={{ color: '#10B981' }}
                      />
                      <Legend wrapperStyle={{ color: 'white' }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </AnimatedComponent>
                
                <AnimatedComponent animation="slideUp" duration={0.5} delay={0.2}>
                  <Card className="bg-opacity-20 backdrop-blur-lg rounded-xl border-purple-500/30 bg-white/20 p-6">
                    <div className="text-center mb-3">
                      <h4 className="text-lg font-medium text-white">{t("score.result")}</h4>
                      <div className="mt-4 mb-6">
                        <span className="text-6xl font-bold text-green-400">
                          {finalScore.toFixed(1)}
                        </span>
                        <span className="text-xl text-purple-200 ml-2">/ 100</span>
                      </div>
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Badge 
                          className={`${currentRiskLevel?.color} text-white px-4 py-1.5 text-base`}
                          variant="outline"
                        >
                          {currentRiskLevel?.level}
                        </Badge>
                      </motion.div>
                      <div className="mt-4 text-sm text-purple-100">
                        <div className="flex items-center justify-center gap-2">
                          {currentRiskLevel && <currentRiskLevel.icon className="h-5 w-5 text-green-400" />}
                          <span>{t("score.description")}</span>
                        </div>
                      </div>
                    </div>
                    
                    <AnimatedProgressBar
                      value={finalScore}
                      max={100}
                      className="h-3 mt-6 rounded-full overflow-hidden bg-purple-950"
                      color={currentRiskLevel?.color.replace('bg-', '')}
                      delay={0.5}
                      animationDuration={1.5}
                    />
                    
                    <div className="flex justify-between text-xs text-purple-300 mt-1">
                        <span>{t("score.risk.verylow")}</span>
                        <span>{t("score.risk.low")}</span>
                        <span>{t("score.risk.medium")}</span>
                        <span>{t("score.risk.high")}</span>
                        <span>{t("score.risk.Veryhigh")}</span>
                    </div>
                  </Card>
                </AnimatedComponent>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="analysis" className="m-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <AnimatedComponent animation="slideUp" delay={0.1} duration={0.5} className="lg:col-span-3">
                <Card className="bg-white/20 backdrop-blur-lg border-purple-500/30 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-4">Loan Eligibility Assessment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-purple-800 bg-opacity-40 p-4 flex flex-col items-center justify-center rounded-xl">
                      <DollarSign className="h-7 w-7 text-green-400 mb-2" />
                      <p className="text-sm text-purple-200 mb-1">Potential Loan Amount</p>
                      <p className="text-3xl font-bold text-white">${loanAmount}</p>
                    </div>
                    <div className="bg-purple-800 bg-opacity-40 p-4 flex flex-col items-center justify-center rounded-xl">
                      <TrendingUp className="h-7 w-7 text-green-400 mb-2" />
                      <p className="text-sm text-purple-200 mb-1">Est. Interest Rate</p>
                      <p className="text-3xl font-bold text-white">{interestRate}%</p>
                    </div>
                    <div className="bg-purple-800 bg-opacity-40  p-4 flex flex-col items-center justify-center rounded-xl">
                      <Clock className="h-7 w-7 text-green-400 mb-2" />
                      <p className="text-sm text-purple-200 mb-1">Repayment Period</p>
                      <p className="text-3xl font-bold text-white">{repaymentPeriod} <span className="text-sm text-purple-200">months</span></p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-xl border border-dashed border-purple-400">
                    <div className="flex items-start">
                      {currentRiskLevel && <currentRiskLevel.icon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />}
                      <div>
                        <h4 className="text-white font-medium">Recommendation:</h4>
                        <p className="text-purple-100">{currentRiskLevel?.recommendation}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedComponent>
              
              <AnimatedComponent animation="slideLeft" delay={0.2} duration={0.5} className="lg:col-span-2">
                <Card className="bg-white bg-opacity-10 backdrop-blur-lg border-purple-500/30 p-6 h-full">
                  <h3 className="text-lg font-bold text-white mb-4">Loan Approval History</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={loanHistoryData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="month" stroke="rgba(255,255,255,0.7)" />
                        <YAxis stroke="rgba(255,255,255,0.7)" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: 'none' }}
                          labelStyle={{ color: 'white' }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="approvedLoans" 
                          stackId="1" 
                          stroke="#10B981" 
                          fill="#10B981" 
                          name="Approved"
                        />
                        <Area 
                          type="monotone" 
                          dataKey="rejectedLoans" 
                          stackId="1" 
                          stroke="#EF4444" 
                          fill="#EF4444" 
                          name="Rejected"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </AnimatedComponent>
              
              <AnimatedComponent animation="slideRight" delay={0.3} duration={0.5}>
                <Card className="bg-white bg-opacity-10 backdrop-blur-lg border-purple-500/30 p-6 h-full">
                  <h3 className="text-lg font-bold text-white mb-4">Current Risk Performance</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {riskDistributionData.map((item) => (
                      <div key={item.name} className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm text-purple-100 w-24">{item.name}</span>
                        <div className="flex-1 bg-purple-800 bg-opacity-40 rounded-full h-2.5 mx-2">
                          <div className="h-2.5 rounded-full" style={{ width: `${item.value}%`, backgroundColor: item.color }}></div>
                        </div>
                        <span className="text-sm text-white">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-purple-700">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-purple-200">Platform Accuracy</p>
                        <p className="text-2xl font-bold text-white">93.5%</p>
                      </div>
                      <div>
                        <p className="text-sm text-purple-200">Default Reduction</p>
                        <p className="text-2xl font-bold text-white">-22%</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedComponent>
            </div>
          </TabsContent>
          
          <TabsContent value="trends" className="m-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AnimatedComponent animation="fadeIn" delay={0.1} duration={0.5} className="col-span-full">
                <Card className="bg-white/20 rounded-xl backdrop-blur-lg border-purple-500/30 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">ReadyCash AI Scoring Performance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-purple-800 bg-opacity-40 rounded-xl p-3 text-center">
                      <p className="text-sm text-purple-200">Client Profiles Processed</p>
                      <CountUp
                        start={0}
                        end={2856428}
                        duration={2.5}
                        suffix=""
                        className="text-2xl font-bold text-white"
                      />
                    </div>
                    <div className="bg-purple-800 bg-opacity-40 rounded-xl p-3 text-center">
                      <p className="text-sm text-purple-200">Loans Approved</p>
                      <CountUp
                        start={0}
                        end={1264050}
                        duration={2.5}
                        suffix=""
                        className="text-2xl font-bold text-white"
                      />
                    </div>
                    <div className="bg-purple-800 bg-opacity-40 rounded-xl p-3 text-center">
                      <p className="text-sm text-purple-200">Default Rate</p>
                      <CountUp
                        start={0}
                        end={3.2}
                        duration={2.5}
                        decimalPlaces={1}
                        suffix="%"
                        className="text-2xl font-bold text-white"
                      />
                    </div>
                    <div className="bg-purple-800 bg-opacity-40 rounded-xl p-3 text-center">
                      <p className="text-sm text-purple-200">Average Decision Time</p>
                      <CountUp
                        start={0}
                        end={2.5}
                        duration={2.5}
                        decimalPlaces={1}
                        suffix="s"
                        className="text-2xl font-bold text-white"
                      />
                    </div>
                  </div>
                  <p className="text-purple-100 text-sm">
                    Our AI scoring system has processed over 2,856 428 applications across multiple markets, 
                    consistently outperforming traditional credit scoring methods by reducing default rates by up to 22% 
                    while increasing approval rates for qualified borrowers.
                  </p>
                </Card>
              </AnimatedComponent>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}