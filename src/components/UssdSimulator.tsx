import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft,
  ChevronRight,
  Phone,
  X,
  Check,
  ArrowUpDown,
  Send
} from "lucide-react";

import { HoverAnimationCard } from "@/components/ui/hover-animation-card";
import { AnimatedComponent } from "@/components/ui/animated-component";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function UssdSimulator() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const isMobile = useIsMobile();
  const [screen, setScreen] = useState<string>("dialpad");
  const [previousScreen, setPreviousScreen] = useState<string>("");
  const [ussdCode, setUssdCode] = useState<string>("");
  const [ussdResponse, setUssdResponse] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [userInput, setUserInput] = useState<string>("");
  const [serviceFlow, setServiceFlow] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [displayHistory, setDisplayHistory] = useState<Array<{type: string, text: string}>>([]);
  const [balance, setBalance] = useState<number>(1250.75);
  const [menuStack, setMenuStack] = useState<string[]>([]);

 type MenuKey = string; // au lieu de 'main' | 'nanoLoan' | ...


  type Menu = {
  text: string;
  options?: Record<string, MenuKey>; // options mènent à d’autres menus ou actions
};

const menus: Record<MenuKey, Menu> = {
  main: {
    text: "Select your Product:\n\n1. Nano Loan\n2. Macro Loan\n3. ReadyToGo\n4. Buy Now Pay Later\n5. Saving classic\n6. Term Deposit",
    options: {
      "1": "nanoLoan",
      "2": "macroLoan",
      "3": "readyToGo"
    }
  },

  nanoLoan: {
    text: "Nano Loan:\n\n0. Back\n1. Loan Request\n2. Refund\n3. My Account",
    options: {
      "0": "main",
      "1": "nanoLoan.loanRequest",
      "2": "nanoLoan.refund",
      "3": "nanoLoan.myAccount"
    }
  },

  "nanoLoan.myAccount": {
    text: "ReadyCash Account:\n\n0. Back\n1. Loan balance\n2. Maximum loan\n3. History\n4. Unsubscribe",
    options: {
      "0": "nanoLoan",
      "1": "nanoLoan.balance",
      "2": "nanoLoan.maximumLoan",
      "3": "nanoLoan.history",
      "4": "nanoLoan.unsubscribe",
    }
  },

  "nanoLoan.loanRequest": { text: "Loan request submitted successfully." },
  "nanoLoan.refund": { text: "Refund processed." },
  "nanoLoan.balance": { text: "Your current balance is $75." },
  "nanoLoan.history": { text: "Loan history:\n1. $500\n2. $500" },
  "nanoLoan.maximumLoan": { text: "Maximun Loan:\n1. $100\n2. $100" },
  "nanoLoan.unsubscribe": { text: "Loan unsubscribe:\n1. 0\n2. 0" },

  macroLoan: {
    text: "Macro Loan:\n\n0. Back\n1. Loan Request\n2. Refund\n3. My Account",
    options: {
      "0": "main",
      "1": "macroLoan.viewRates",
      "2": "macroLoan.apply",
      "3": "macroLoan.myAccount"
    }
  },

  "macroLoan.myAccount": {
    text: "ReadyCash Account:\n\n0. Back\n1. Loan balance\n2. Maximum loan\n3. History\n4. Unsubscribe",
    options: {
      "0": "macroLoan",
      "1": "macroLoan.balance",
      "2": "macroLoan.maximumLoan",
      "3": "macroLoan.history",
      "4": "macroLoan.unsubscribe",
    }
  },


  "macroLoan.viewRates": { text: "Loan request submitted successfully." },
  "macroLoan.apply": { text: "Refund processed." },
  "macroLoan.balance": { text: "Your current balance is $550." },
  "macroLoan.history": { text: "Loan history:\n1. $700\n2. $700" },
  "macroLoan.maximumLoan": { text: "Maximun Loan:\n1. $1000\n2. $1000" },
  "macroLoan.unsubscribe": { text: "Loan unsubscribe:\n1. 0\n2. 0" },

  readyToGo: {
    text: "ReadyToGo:\n\n0. Back\n1. Loan Request\n2. Refund\n3. My Account",
    options: {
      "0": "main",
      "1": "readyToGo.eligibility",
      "2": "readyToGo.refund",
      "3": "readyToGo.myAccount"
    }
  },

  "readyToGo.myAccount": {
    text: "ReadyCash Account:\n\n0. Back\n1. Loan balance\n2. Maximum loan\n3. History\n4. Unsubscribe",
    options: {
      "0": "readyToGo",
      "1": "readyToGo.balance",
      "2": "readyToGo.maximumLoan",
      "3": "readyToGo.history",
      "4": "readyToGo.unsubscribe",
    }
  },

  "readyToGo.eligibility": { text: "Loan request submitted successfully." },
  "readyToGo.refund": { text: "Refund processed." },
  "readyToGo.balance": { text: "Your current balance is $700." },
  "readyToGo.history": { text: "Loan history:\n1. $880\n2. $880" },
  "readyToGo.maximumLoan": { text: "Maximun Loan:\n1. $1200\n2. $1200" },
  "readyToGo.unsubscribe": { text: "Loan unsubscribe:\n1. 0\n2. 0" }

};


  const handleSendUssd = () => {
  if (ussdCode === "*321#") {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDisplayHistory(prev => [...prev, { type: 'sent', text: ussdCode }]);
      setScreen("ussdMenu");
      setMenuStack(["main"]); // Start from the main menu
      const mainMenuText = t(menus["main"].text);
      setUssdResponse(mainMenuText);
    }, 1000);
  } else {
    setDisplayHistory(prev => [...prev, { type: 'sent', text: ussdCode }]);
    setDisplayHistory(prev => [...prev, { type: 'received', text: t("ussd.invalidCode") }]);
    setUssdCode("");
  }
  };

  const handleOptionSelect = (option: string) => {
  setSelectedOption(option);
  setLoading(true);
  setDisplayHistory(prev => [...prev, { type: 'sent', text: option }]);

  setTimeout(() => {
    setLoading(false);

    const currentMenuKey = menuStack[menuStack.length - 1];
    const currentMenu = menus[currentMenuKey];

    const nextKey = currentMenu?.options?.[option];

    if (!nextKey) {
      setUssdResponse("Please select 1, 2 or 3.");
      setDisplayHistory(prev => [...prev, { type: 'received', text: "Invalid option." }]);
      return;
    }

    if (option === "0") {
      const newStack = menuStack.length > 1 ? menuStack.slice(0, -1) : ["main"];
      setMenuStack(newStack);
      setUssdResponse(menus[newStack[newStack.length - 1]].text);
      setDisplayHistory(prev => [...prev, { type: 'received', text: menus[newStack[newStack.length - 1]].text }]);
      return;
    }

    const nextMenu = menus[nextKey];
    if (!nextMenu) {
      setUssdResponse("Unknown next step.");
      return;
    }

    if (nextMenu.options) {
      // It's a sub-menu
      setMenuStack(prev => [...prev, nextKey]);
    }

    setUssdResponse(nextMenu.text);
    setDisplayHistory(prev => [...prev, { type: 'received', text: nextMenu.text }]);
  }, 1000);
  };


  // Update the time every minute
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      };
      setDate(now.toLocaleDateString(language === 'ar' ? 'ar-EG' : undefined, options));
      setTime(now.toLocaleTimeString(language === 'ar' ? 'ar-EG' : undefined, {
        hour: '2-digit', 
        minute: '2-digit'
      }));
    };
    
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    
    return () => clearInterval(interval);
  }, [language]);

  const navigateTo = (newScreen: string) => {
    setPreviousScreen(screen);
    setScreen(newScreen);
  };

  const goBack = () => {
    if (previousScreen) {
      setScreen(previousScreen);
      setPreviousScreen("");
    } else {
      // Default to dialpad if no previous screen
      setScreen("dialpad");
    }
  };

  const handleNumberPress = (num: string) => {
    setUssdCode(prevCode => prevCode + num);
  };

  const handleBackspace = () => {
    setUssdCode(prevCode => prevCode.slice(0, -1));
  };

/*   const handleSendUssd = () => {
    if (ussdCode === "*321#") {
      setLoading(true);
      // Simulate network delay
      setTimeout(() => {
        setLoading(false);
        setDisplayHistory([...displayHistory, {type: 'sent', text: ussdCode}]);
        setScreen("ussdMenu");
        setServiceFlow("main");
        setUssdResponse(
        t(
          "Select your Product:\n\n" +
          "1. Nano Loan\n" +
          "2. Macro Loan\n" +
          "3. ReadyToGo\n" +
          "4. Buy Now Pay Later\n" +
          "5. Term Deposit\n" +
          "6. Saving Classic"
        )
      );
      }, 1000);
    } else {
      // Show error for invalid code
      setDisplayHistory([...displayHistory, {type: 'sent', text: ussdCode}]);
      setDisplayHistory([...displayHistory, {type: 'received', text: t("ussd.invalidCode")}]);
      setUssdCode("");
    }
  }; */

  /* const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setLoading(true);
    
    // Add user selection to history
    setDisplayHistory([...displayHistory, {type: 'sent', text: option}]);
    
    // Process based on current service flow
    setTimeout(() => {
      setLoading(false);
      
      if (serviceFlow === "main") {
        switch(option) {
          case "1":
            setServiceFlow("checkBalance");
            const balanceMessage = t("ussd.balance").replace("%0", balance.toFixed(2));
            setUssdResponse(balanceMessage);
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: balanceMessage}]);
            break;
          case "2":
            setServiceFlow("sendMoney");
            setUssdResponse(t("ussd.sendMoneyPrompt"));
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.sendMoneyPrompt")}]);
            setUserInput("");
            break;
          case "3":
            setServiceFlow("buyAirtime");
            setUssdResponse(t("ussd.buyAirtimePrompt"));
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.buyAirtimePrompt")}]);
            setUserInput("");
            break;
          case "4":
            setServiceFlow("payBill");
            setUssdResponse(t("ussd.payBillOptions"));
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.payBillOptions")}]);
            break;
          case "5":
            setServiceFlow("savingsAccount");
            setUssdResponse(t("ussd.savingsOptions"));
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.savingsOptions")}]);
            break;
          default:
            setUssdResponse(t("ussd.invalidOption"));
            setDisplayHistory([...displayHistory, {type: 'received', text: t("ussd.invalidOption")}]);
            break;
        }
      } else if (serviceFlow === "sendMoney") {
        // Handle recipient input
        if (!userInput) {
          setUserInput(option);
          setUssdResponse(t("ussd.sendMoneyAmount"));
          setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.sendMoneyAmount")}]);
        } else {
          // Process amount and complete transaction
          const amount = parseFloat(option);
          if (!isNaN(amount) && amount > 0 && amount <= balance) {
            setBalance(prev => prev - amount);
            const sendMoneySuccessMsg = t("ussd.sendMoneySuccess").replace("%0", amount.toFixed(2)).replace("%1", userInput);
            setUssdResponse(sendMoneySuccessMsg);
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: sendMoneySuccessMsg}]);
            // Reset after transaction
            setUserInput("");
            setServiceFlow("main");
          } else {
            setUssdResponse(t("ussd.sendMoneyFailed"));
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.sendMoneyFailed")}]);
          }
        }
      } else if (serviceFlow === "buyAirtime") {
        // Handle phone number input
        if (!userInput) {
          setUserInput(option);
          setUssdResponse(t("ussd.buyAirtimeAmount"));
          setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.buyAirtimeAmount")}]);
        } else {
          // Process amount and complete purchase
          const amount = parseFloat(option);
          if (!isNaN(amount) && amount > 0 && amount <= balance) {
            setBalance(prev => prev - amount);
            const airtimeSuccessMsg = t("ussd.buyAirtimeSuccess").replace("%0", amount.toFixed(2)).replace("%1", userInput);
            setUssdResponse(airtimeSuccessMsg);
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: airtimeSuccessMsg}]);
            // Reset after transaction
            setUserInput("");
            setServiceFlow("main");
          } else {
            setUssdResponse(t("ussd.buyAirtimeFailed"));
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.buyAirtimeFailed")}]);
          }
        }
      } else if (serviceFlow === "payBill") {
        switch(option) {
          case "1": // Electricity
            setUssdResponse(t("ussd.electricityPrompt"));
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.electricityPrompt")}]);
            setServiceFlow("electricityBill");
            setUserInput("");
            break;
          case "2": // Water
            setUssdResponse(t("ussd.waterPrompt"));
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.waterPrompt")}]);
            setServiceFlow("waterBill");
            setUserInput("");
            break;
          case "0": // Back to main
            setUssdResponse(t("ussd.mainMenu"));
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.mainMenu")}]);
            setServiceFlow("main");
            break;
          default:
            setUssdResponse(t("ussd.invalidOption"));
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.invalidOption")}]);
            break;
        }
      } else if (serviceFlow === "savingsAccount") {
        switch(option) {
          case "1": // Check savings balance
            const savingsBalanceMsg = t("ussd.savingsBalance").replace("%0", "350.00");
            setUssdResponse(savingsBalanceMsg);
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: savingsBalanceMsg}]);
            break;
          case "2": // Deposit to savings
            setUssdResponse(t("ussd.savingsDepositPrompt"));
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.savingsDepositPrompt")}]);
            setServiceFlow("savingsDeposit");
            break;
          case "0": // Back to main
            setUssdResponse(t("ussd.mainMenu"));
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.mainMenu")}]);
            setServiceFlow("main");
            break;
          default:
            setUssdResponse(t("ussd.invalidOption"));
            setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.invalidOption")}]);
            break;
        }
      } else if (serviceFlow === "savingsDeposit") {
        const amount = parseFloat(option);
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
          setBalance(prev => prev - amount);
          const depositSuccessMsg = t("ussd.savingsDepositSuccess").replace("%0", amount.toFixed(2));
          setUssdResponse(depositSuccessMsg);
          setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: depositSuccessMsg}]);
          setServiceFlow("main");
        } else {
          setUssdResponse(t("ussd.savingsDepositFailed"));
          setDisplayHistory([...displayHistory, {type: 'sent', text: option}, {type: 'received', text: t("ussd.savingsDepositFailed")}]);
        }
      }
    }, 1000);
  }; */

  // Reset the session
  const handleEndSession = () => {
    setScreen("dialpad");
    setUssdCode("");
    setUssdResponse("");
    setServiceFlow("");
    setSelectedOption(null);
    setUserInput("");
    setDisplayHistory([]);
  };

  return (
    <section id="ussd-simulator" className="py-16 bg-gradient-to-b from-purple-900 to-purple-950">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedComponent animation="fadeIn" duration={0.7} className="text-center mb-8">
            <AnimatedComponent animation="slideUp" delay={0.1} duration={0.5}>
                <h2 className="text-xs sm:text-sm md:text-base text-green-300 font-semibold tracking-wide uppercase">
                {t("ussd.subtitle")}
                </h2>
            </AnimatedComponent>

            <AnimatedComponent animation="slideUp" delay={0.3} duration={0.5}>
                <p className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug font-bold tracking-tight text-white font-heading">
                {t("ussd.title")}
                </p>
            </AnimatedComponent>

            <AnimatedComponent animation="slideUp" delay={0.5} duration={0.5}>
                <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-purple-100 mx-auto">
                {t("ussd.description")}
                </p>
            </AnimatedComponent>
        </AnimatedComponent>


        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {/* Instructions */}
            <AnimatedComponent 
            animation="slideRight" 
            delay={0.3} 
            duration={0.6} 
            className="w-full sm:max-w-md border bg-white/20 rounded-xl"
            >
            <HoverAnimationCard 
                className="bg-white bg-opacity-10 backdrop-blur-md text-white p-4 sm:p-6 rounded-xl text-sm sm:text-base"
                hoverEffect="glow"
            >
                <h3 className="text-base sm:text-xl font-bold mb-4">
                {t("ussd.howToTitle")}
                </h3>

                <ol className="space-y-3 list-decimal pl-4 sm:pl-5">
                <li className="text-purple-100">{t("ussd.step1")}</li>
                <li className="text-purple-100">{t("ussd.step2")}</li>
                <li className="text-purple-100">{t("ussd.step3")}</li>
                <li className="text-purple-100">{t("ussd.step4")}</li>
                </ol>

                <div className="mt-5 sm:mt-6 p-3 sm:p-4 bg-purple-800 bg-opacity-50 rounded-lg text-xs sm:text-sm">
                <p className="text-green-300 font-medium">{t("ussd.codePrompt")}</p>
                <p className="text-base sm:text-xl font-bold mt-1 flex items-center">
                    <span className="text-white">*321#</span>
                    <motion.div 
                    className="ml-2 text-green-300"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                    <Send size={16} />
                    </motion.div>
                </p>
                </div>
            </HoverAnimationCard>
            </AnimatedComponent>


            {/* Feature Phone Simulator */}
            <AnimatedComponent animation="slideUp" delay={0.5} duration={0.7}>
                <div className="relative w-[200px] sm:w-[260px] h-[400px] sm:h-[520px]">
                    {/* Phone body */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-950 rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-700">
                    {/* Antenna */}
                    <div className="absolute -top-1 right-10 w-2 h-8 bg-blue-950 border border-blue-800 rounded-t-full"></div>
                    {/* Speaker */}
                    <div className="absolute top-4 w-full flex justify-center">
                        <div className="w-12 h-1.5 bg-gray-800 rounded-full"></div>
                    </div>
                    {/* Branding */}
                    <div className="absolute top-6 right-0 left-0 flex justify-center">
                        <div className="text-blue-300 text-[6px] sm:text-[8px] font-bold tracking-wide">ReadyCash MOBILE</div>
                    </div>

                    {/* Screen */}
                    <div className="absolute top-10 left-3 right-3 bottom-[120px] bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg overflow-hidden border border-gray-400 shadow-inner">
                        {/* Status bar */}
                        <div className="h-5 bg-gray-800 text-white text-[9px] sm:text-xs flex items-center justify-between px-2">
                        <div>{time}</div>
                        <div className="flex space-x-1">
                            <div className="w-2.5 h-2.5 rounded-sm border border-white"></div>
                            <div className="w-2.5 h-2.5 rounded-sm border border-white flex items-center justify-center">
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            </div>
                            <div className="w-2.5 h-2.5 rounded-sm border border-white"></div>
                        </div>
                        </div>

                        {/* Main display area */}
                        <div className="p-1.5 sm:p-2 h-[calc(100%-20px)] overflow-y-auto text-center bg-gray-100 text-gray-900 flex flex-col text-sm sm:text-base">
                        {screen === "dialpad" && (
                            <div className="flex flex-col h-full">
                            <div className="text-center mb-1 font-bold text-sm sm:text-base">ReadyCash USSD</div>
                            <div className="flex-1 flex flex-col justify-center items-center">
                                <input 
                                type="text" 
                                className="w-full p-1.5 sm:p-2 mb-3 text-center bg-white border border-gray-400 rounded font-mono text-base sm:text-lg"
                                value={ussdCode}
                                readOnly
                                />
                                <div className="font-medium text-[10px] sm:text-xs text-gray-700 mb-1.5">
                                {t("ussd.dialHint")}
                                </div>
                            </div>
                            </div>
                        )}

                        {screen === "ussdMenu" && (
                            <AnimatePresence mode="wait">
                            <motion.div 
                                key={ussdResponse}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="text-left font-mono p-1 text-sm sm:text-base"
                            >
                                {loading ? (
                                <div className="flex justify-center items-center h-10 sm:h-12">
                                    <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                    >
                                    <ArrowUpDown size={18} />
                                    </motion.div>
                                </div>
                                ) : (
                                <div className="whitespace-pre-line">{ussdResponse}</div>
                                )}
                            </motion.div>
                            </AnimatePresence>
                        )}
                        </div>
                    </div>

                    {/* Keypad */}
                    <div className="absolute bottom-0 left-0 right-0 h-[120px] sm:h-[140px] bg-gray-800 flex flex-col">
                        {screen === "dialpad" ? (
                        <div className="grid grid-cols-3 gap-1.5 p-2 sm:p-3 h-full">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((num) => (
                            <motion.button
                                key={num}
                                className="bg-gray-600 rounded-full text-white flex items-center justify-center text-sm sm:text-base font-semibold border border-gray-500 shadow-inner"
                                style={{ boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.5)" }}
                                whileTap={{ scale: 0.95, backgroundColor: "rgba(75, 85, 99, 1)" }}
                                onClick={() => handleNumberPress(num.toString())}
                            >
                                {num}
                            </motion.button>
                            ))}
                        </div>
                        ) : (
                        <div className="grid grid-cols-4 gap-1.5 p-2 sm:p-3 h-full">
                            {/* Navigation buttons for USSD menu */}
                            <motion.button 
                            className="bg-red-700 rounded-full text-white flex items-center justify-center text-sm sm:text-base font-semibold border border-red-800 shadow-inner"
                            style={{ boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleEndSession}
                            >
                            <X size={16} />
                            </motion.button>

                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((num) => (
                            <motion.button
                                key={num}
                                className="bg-gray-600 rounded-full text-white flex items-center justify-center text-sm sm:text-base font-semibold border border-gray-500 shadow-inner"
                                style={{ boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.5)" }}
                                whileTap={{ scale: 0.95, backgroundColor: "rgba(75, 85, 99, 1)" }}
                                onClick={() => handleOptionSelect(num.toString())}
                            >
                                {num}
                            </motion.button>
                            ))}
                        </div>
                        )}
                    </div>
                    </div>

                    {/* Action buttons */}
                    <div className="absolute -bottom-9 sm:-bottom-10 left-0 right-0 flex justify-center space-x-3 sm:space-x-4">
                    {screen === "dialpad" ? (
                        <>
                        <motion.button 
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-red-500 to-red-700 text-white flex items-center justify-center border border-red-900 shadow-md"
                            style={{ boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.5)" }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleBackspace}
                        >
                            <ChevronLeft size={16} />
                        </motion.button>
                        <motion.button 
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-green-500 to-green-700 text-white flex items-center justify-center border border-green-900 shadow-md"
                            style={{ boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.5)" }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleSendUssd}
                            disabled={ussdCode.length === 0}
                        >
                            <Send size={14} />
                        </motion.button>
                        </>
                    ) : (
                        <motion.button 
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-green-500 to-green-700 text-white flex items-center justify-center border border-green-900 shadow-md"
                        style={{ boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.5)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleOptionSelect("0")}
                        >
                        0
                        </motion.button>
                    )}
                    </div>
                </div>
            </AnimatedComponent>

          
          {/* Session history */}
         <AnimatedComponent
          animation="slideLeft"
          delay={0.7}
          duration={0.6}
          className="max-w-sm mt-6 md:mt-5 md:max-w-md bg-white/20 rounded-xl"
          >
            <HoverAnimationCard 
              className="bg-white bg-opacity-10 backdrop-blur-md text-white p-6 rounded-xl h-full"
              hoverEffect="glow"
            >
              <h3 className="text-xl font-bold mb-4">{t("ussd.sessionHistory")}</h3>
              <div className="h-[320px] overflow-y-auto pr-2">
                {displayHistory.length > 0 ? (
                  <div className="space-y-3">
                    {displayHistory.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className={`p-2 rounded ${
                          item.type === 'sent' 
                            ? 'bg-green-900 bg-opacity-50 ml-8 text-right' 
                            : 'bg-purple-800 bg-opacity-50 mr-8'
                        }`}
                      >
                        <div className="text-xs text-purple-300 mb-1">
                          {item.type === 'sent' ? t("ussd.userSent") : t("ussd.systemResponse")}
                        </div>
                        <div className="text-sm font-mono">
                           {item.text.split(':')[0]}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-purple-300 italic">
                    {t("ussd.noHistory")}
                  </div>
                )}
              </div>
              <div className="mt-4 text-sm text-purple-200">
                {t("ussd.benefitsTitle")}
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>{t("ussd.benefit1")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>{t("ussd.benefit2")}</span>
                  </li>
                </ul>
              </div>
            </HoverAnimationCard>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
}