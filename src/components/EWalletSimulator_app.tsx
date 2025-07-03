import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCurrency } from "@/hooks/use-currency"; 
import { motion, AnimatePresence } from "framer-motion";
import { 
  Smartphone, 
  Home, 
  CreditCard, 
  ArrowRightLeft, 
  Receipt, 
  Settings, 
  X,
  ChevronLeft,
  Send,
  Wallet,
  QrCode,
  DollarSign,
  Plus,
  PiggyBank,
  RefreshCcw,
  ArrowRight,
  Store,
  Check,
  Calculator,
  Landmark,
  CreditCard as CardIcon,
  Coins,
  BadgeDollarSign
} from "lucide-react";

import { HoverAnimationCard } from "@/components/ui/hover-animation-card";
import { AnimatedComponent } from "@/components/ui/animated-component";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";

export default function EWalletSimulatorApp() {
  const { t, i18n } = useTranslation();
  const { format, formatLocal, symbol } = useCurrency();
  const isMobile = useIsMobile();
  const [screen, setScreen] = useState<string>("home");
  const [previousScreen, setPreviousScreen] = useState<string>("home");
  const [activeTab, setActiveTab] = useState<string>("agent");
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>(3250.75);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [clickedButton, setClickedButton] = useState<string | null>(null);
  
  // Update the time every minute
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      };
      setDate(now.toLocaleDateString(undefined, options));
      setTime(now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }));
    };
    
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  const navigateTo = (screenName: string) => {
    setPreviousScreen(screen);
    setScreen(screenName);
  };
  
  const goBack = () => {
    setScreen(previousScreen);
    setPreviousScreen("home");
  };
  
  const showSuccessNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
  
  const handleTopUp = () => {
    setBalance(prev => prev + 100);
    showSuccessNotification();
  };
  
  const handleTransfer = () => {
    if (balance >= 50) {
      setBalance(prev => prev - 50);
    }
    showSuccessNotification();
  };

  type TransactionBase = {
    id: number;
    amount: number;
    date: string;
  };

  type ReceivedTransaction = TransactionBase & {
    type: "received";
    from: string;
  };

  type SentTransaction = TransactionBase & {
    type: "sent";
    to: string;
  };

  type TopUpTransaction = TransactionBase & {
    type: "topup";
    method: string;
  };

  type RoundupTransaction = TransactionBase & {
    type: "roundup";
    to: string;
  };

  type Transaction = ReceivedTransaction | SentTransaction | TopUpTransaction | RoundupTransaction;

  const transactions: Transaction[] = [
    { 
      id: 1, 
      type: "received", 
      amount: 450.00, 
      from: "Kwame Nkrumah", 
      date: "Today, 10:30 AM" 
    },
    { 
      id: 2, 
      type: "sent", 
      amount: 175.50, 
      to: "Makola Market Vendor", 
      date: "Yesterday, 3:15 PM" 
    },
    { 
      id: 3, 
      type: "topup", 
      amount: 1000.00, 
      method: "MTN Mobile Money", 
      date: "May 3, 2:00 PM" 
    },
    { 
      id: 4, 
      type: "sent", 
      amount: 350.00, 
      to: "ECG Prepaid Meter", 
      date: "May 2, 11:45 AM" 
    },
    { 
      id: 5, 
      type: "received", 
      amount: 2000.00, 
      from: "ReadyCash Loan", 
      date: "Apr 28, 9:30 AM" 
    },
    { 
      id: 6, 
      type: "roundup", 
      amount: 5.25, 
      to: "Savings", 
      date: "Apr 27, 4:12 PM" 
    },
    { 
      id: 7, 
      type: "topup", 
      amount: 500.00, 
      method: "M-Pesa", 
      date: "Apr 25, 10:17 AM" 
    }
  ];
  
  const navigationIcons = [
    { icon: Home, name: "home", label: "Home" },
    { icon: CreditCard, name: "payment", label: "Pay" },
    { icon: PiggyBank, name: "savings", label: "Save" },
    { icon: Landmark, name: "loans", label: "Borrow" },
    { icon: Receipt, name: "history", label: "History" }
  ];
  
  const renderHeader = () => (
    <div className="flex justify-between items-center mt-3 p-4 border-b border-gray-200">
      {screen !== "home" ? (
        <button 
          onClick={goBack}
          className="text-blue-500 flex items-center mt-2"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
        </button>
      ) : (
        <div className="text-xs text-gray-500 mt-2">{date}</div>
      )}
      
      {/* Titre centré */}
      <div className="absolute text-purple-700 mt-3 font-bold left-0 right-0 flex justify-center pointer-events-none">
        <div className="font-medium select-none">
          {screen === "home" ? (
            <span className="text-purple-700 font-bold tracking-wide">ReadyApp</span>
          ) : screen === "payment" ? "Pay & Send"
            : screen === "transfer" ? "Transfer Money"
            : screen === "history" ? "Transaction History"
            : screen === "settings" ? "Settings"
            : screen === "qrcode" ? "My QR Code"
            : screen === "topup" ? "Top Up Wallet"
            : screen === "savings" ? "Savings Products"
            : screen === "loans" ? "Loans & Credit"
            : screen === "roundup" ? "Round Up Savings"
            : "ReadyCash"}
        </div>
      </div>

      {/* <div className="text-xs text-gray-500">{time}</div> */}
      {screen === "home" ? (
        <button 
          onClick={() => navigateTo("settings")} 
          disabled
          className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-sm mt-2"
          >
          {/* Picture option */}
            {/* <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full object-cover" /> */}  
          {/* Initial option */}
          JJ
        </button>
      ) : (
        <div className="text-xs text-gray-500 mt-2">{time}</div>
      )}


    </div>
  );
  
  const renderFooter = () => (
    <div className="flex justify-between items-center p-2 border-t border-gray-200 bg-white">
      {navigationIcons.map((nav) => (
        <button 
          key={nav.name}
          onClick={() => navigateTo(nav.name)}
          className={`flex flex-col items-center p-1 ${screen === nav.name ? 'text-purple-600' : 'text-gray-500'}`}
        >
          <nav.icon className="w-5 h-5 mb-1" />
          <span className="text-xs">{nav.label}</span>
        </button>
      ))}
    </div>
  );
  
  const renderHomeScreen = () => (
    <div className="flex flex-col h-full">
      {/* Balance Card */}
      <div className="p-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl m-4">
        <div className="text-sm mb-1 opacity-80">{t("ewallet.simulator.balance.title") || "Your Balance"}</div>
        <div className="text-2xl font-bold mb-2">{formatLocal(balance)}</div>
        <div className="flex space-x-2">
          <Button 
            size="sm" 
            className="text-xs bg-white bg-opacity-40 hover:bg-opacity-60"
            onClick={() => navigateTo("topup")}
          >
            <Plus className="w-3 h-3 mr-1 text-white stroke-[3.5]" />
            {t("ewallet.simulator.balance.topup") || "Top Up"}
          </Button>
          <Button 
            size="sm" 
            className="text-xs bg-white bg-opacity-40 hover:bg-opacity-60"
            onClick={() => navigateTo("transfer")}
          >
            <Send className="w-3 h-3 mr-1 text-white stroke-[3.5]" />
            {t("ewallet.simulator.balance.send") || "Send Money"}
          </Button>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-2 px-4 mb-4">
        <button 
          onClick={() => navigateTo("qrcode")}
          className="flex flex-col items-center p-2 bg-gray-100 rounded-xl"
        >
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-1">
            <QrCode className="w-5 h-5 text-purple-600" />
          </div>
          <span className="text-xs text-center">{t("ewallet.simulator.actions.qrcode") || "Scan QR Code"}</span>
        </button>
        
        <button 
          onClick={() => navigateTo("payment")}
          className="flex flex-col items-center p-2 bg-gray-100 rounded-xl"
        >
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-1">
            <DollarSign className="w-5 h-5 text-purple-600" />
          </div>
          <span className="text-xs text-center">{t("ewallet.simulator.actions.pay") || "Pay Bills"}</span>
        </button>
        
        <button 
          onClick={() => navigateTo("roundup")}
          className="flex flex-col items-center p-2 bg-gray-100 rounded-xl"
        >
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-1">
            <PiggyBank className="w-5 h-5 text-purple-600" />
          </div>
          <span className="text-xs text-center">{t("ewallet.simulator.actions.roundup") || "Round-Up Savings"}</span>
        </button>
      </div>
      
      {/* Recent Transactions */}
      <div className="flex-1 px-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-medium">Recent Transactions</div>
          <button 
            onClick={() => navigateTo("history")}
            className="text-purple-600 text-sm flex items-center"
          >
            View All
            <ArrowRight className="w-3 h-3 ml-1" />
          </button>
        </div>
        
        <div className="space-y-2">
          {transactions.slice(0, 3).map((tx) => (
            <div key={tx.id} className="flex justify-between items-center p-2 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                  tx.type === 'received' ? 'bg-green-100 text-green-600' : 
                  tx.type === 'sent' ? 'bg-red-100 text-red-600' :
                  tx.type === 'topup' ? 'bg-blue-100 text-blue-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {tx.type === 'received' ? '+' : 
                   tx.type === 'sent' ? '-' :
                   tx.type === 'topup' ? '+' :
                   'R'}
                </div>
                <div>
                  <div className="text-sm font-medium">
                    {tx.type === 'received' ? `From ${tx.from}` : 
                     tx.type === 'sent' ? `To ${tx.to}` :
                     tx.type === 'topup' ? `Top up via ${tx.method}` :
                     `Round UP to Savings`}
                  </div>
                  <div className="text-xs text-gray-500">{tx.date}</div>
                </div>
              </div>
              <div className={`font-medium ${
                tx.type === 'received' || tx.type === 'topup' ? 'text-green-600' : 
                tx.type === 'sent' ? 'text-red-600' :
                'text-purple-600'
              }`}>
                {tx.type === 'received' || tx.type === 'topup' ? '+' : '-'}{formatLocal(tx.amount)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  const renderQRCodeScreen = () => (
    <div className="flex flex-col items-center p-4">
      <div className="text-center mb-4">
        <div className="text-lg font-medium mb-1">{t("ewallet.simulator.qrcode.scan")}</div>
        <div className="text-sm text-gray-500">{t("ewallet.simulator.qrcode.description")}</div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        {/* Simulated QR Code */}
        <div className="w-48 h-48 mx-auto bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9InFyIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzAwMCIgLz48cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzAwMCIgLz48cmVjdCB4PSIwIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIiAvPjxyZWN0IHg9IjEwIiB5PSIwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmYiIC8+PC9wYXR0ZXJuPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI3FyKSIvPjwvc3ZnPg==')] bg-center"></div>
        <div className="text-center mt-2 font-medium text-sm">
          ReadyCash: {activeTab === "agent" ? "Agent #12345" : "User #67890"}
        </div>
      </div>
      
      <div className="text-sm text-center text-gray-500 mb-4">
        {t("ewallet.simulator.qrcode.instruction") || "Scan this QR code to receive payments or share your wallet details."}
      </div>
      
      <Button 
        className="w-full rounded-xl px-4 py-2 text-white font-medium transition-colors duration-300 bg-[#c68cff] hover:bg-[#19af58]"
        onClick={goBack}
      >
        {t("ewallet.simulator.qrcode.done") || "Done"}
      </Button>
    </div>
  );
  
  const renderTransferScreen = () => (
    <div className="p-4">
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="text-sm text-gray-500 mb-1">{t("ewallet.simulator.transfer.available") || "Available Balance"}</div>
        <div className="text-xl font-bold mb-4">{formatLocal(balance)}</div>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-500 block mb-1">{t("ewallet.simulator.transfer.recipient") || "Recipient"}</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder={t("ewallet.simulator.transfer.recipient_placeholder") || "Enter recipient name"}
              defaultValue="Kwame Nkrumah"
            />
          </div>
          
          <div>
            <label className="text-sm text-gray-500 block mb-1">{t("ewallet.simulator.transfer.amount") || "Amount"}</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">{symbol}</span>
              <input 
                type="number" 
                className="w-full pl-8 p-2 border border-gray-300 rounded-md"
                placeholder="0.00"
                defaultValue="250"
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm text-gray-500 block mb-1">{t("ewallet.simulator.transfer.note") || "Note"}</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder={t("ewallet.simulator.transfer.note_placeholder") || "e.g. For groceries"}
              defaultValue={t("ewallet.simulator.transfer.note_example") || "Groceries"}
            />
          </div>
        </div>
      </div>
      
      <Button 
        className="w-full rounded-xl px-4 py-2 text-white font-medium transition-colors duration-300 bg-[#c68cff] hover:bg-[#19af58]"
        onClick={handleTransfer}
      >
        {t("ewallet.simulator.transfer.send") || "Send"}
      </Button>
    </div>
  );
  
  const renderTopUpScreen = () => (
    <div className="p-4">
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="text-sm text-gray-500 mb-1">{t("ewallet.simulator.topup.current") || "Current Balance"}</div>
        <div className="text-xl font-bold mb-4">{formatLocal(balance)}</div>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-500 block mb-1">{t("ewallet.simulator.topup.method") || "Top-Up Method"}</label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option value="mobile">{t("ewallet.simulator.topup.mobile_money") || "Mobile Money"}</option>
              <option value="bank">{t("ewallet.simulator.topup.bank") || "Bank Transfer"}</option>
              <option value="card">{t("ewallet.simulator.topup.card") || "Card Payment"}</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm text-gray-500 block mb-1">{t("ewallet.simulator.topup.amount") || "Amount"}</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">{symbol}</span>
              <input 
                type="number" 
                className="w-full pl-8 p-2 border border-gray-300 rounded-md"
                placeholder="0.00"
                defaultValue="500"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Button 
        className="w-full rounded-xl px-4 py-2 text-white font-medium transition-colors duration-300 bg-[#c68cff] hover:bg-[#19af58]"
        onClick={handleTopUp}
      >
        {t("ewallet.simulator.topup.confirm") || "Confirm Top-Up"}
      </Button>
    </div>
  );
  
  const renderHistoryScreen = () => (
    <div className="p-4">
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex justify-between items-center p-3 bg-white shadow-sm rounded-xl">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                tx.type === 'received' ? 'bg-green-100 text-green-600' : 
                tx.type === 'sent' ? 'bg-red-100 text-red-600' :
                tx.type === 'topup' ? 'bg-blue-100 text-blue-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                {tx.type === 'received' ? '+' : 
                 tx.type === 'sent' ? '-' :
                 tx.type === 'topup' ? '+' :
                 'R'}
              </div>
              <div>
                <div className="font-medium">
                  {tx.type === 'received' ? `From ${tx.from}` : 
                   tx.type === 'sent' ? `To ${tx.to}` :
                   tx.type === 'topup' ? `Top up via ${tx.method}` :
                   `Round UP to Savings`}
                </div>
                <div className="text-xs text-gray-500">{tx.date}</div>
              </div>
            </div>
            <div className={`font-medium ${
              tx.type === 'received' || tx.type === 'topup' ? 'text-green-600' : 
              tx.type === 'sent' ? 'text-red-600' :
              'text-purple-600'
            }`}>
              {tx.type === 'received' || tx.type === 'topup' ? '+' : '-'}{formatLocal(tx.amount)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  // Savings screen with education layaway, flexible savings, and digital chama
  const renderSavingsScreen = () => (
    <div className="p-4">
      <div className="space-y-4">
        {/* Flexible Savings */}
        <div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
          }}
        >
          <div className="bg-gradient-to-r from-green-500 to-green-700 p-3 text-white">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-green-400 bg-opacity-30 rounded-full">
                <PiggyBank className="h-5 w-5" />
              </div>
              <span className="font-medium">Flexible Savings</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="mb-3">
                <div className="text-sm text-gray-500 mb-1">Interest Rate</div>
                <div className="text-lg font-medium">3.2% <span className="text-sm font-normal text-gray-500">per annum</span></div>
              </div>
              <button className="rounded-xl px-3 py-2 text-sm font-medium text-white bg-[#c68cff] hover:bg-[#19af58] transition-colors">
                Apply
              </button>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-1">Minimum Deposit</div>
              <div className="text-lg font-medium">{formatLocal(10)}</div>
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Easy access savings with no withdrawal limits. Deposit anytime from your eWallet.
            </div>
          </div>
        </div>

        {/* Flexible Wedding Plan */}
        <div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
          }}
        >
          <div className="bg-gradient-to-r from-green-500 to-green-700 p-3 text-white">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-green-400 bg-opacity-30 rounded-full">
                <PiggyBank className="h-5 w-5" />
              </div>
              <span className="font-medium">Flexible Wedding Plan</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="mb-3">
                <div className="text-sm text-gray-500 mb-1">Interest Rate</div>
                <div className="text-lg font-medium">3.2% <span className="text-sm font-normal text-gray-500">per annum</span></div>
              </div>
              <button className="rounded-xl px-3 py-2 text-sm font-medium text-white bg-[#c68cff] hover:bg-[#19af58] transition-colors">
                Apply
              </button>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-1">Minimum Deposit</div>
              <div className="text-lg font-medium">{formatLocal(10)}</div>
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Build the wedding of your dreams with flexible deposits and no withdrawal constraints, ensuring financial peace of mind.
            </div>
          </div>
        </div>

        {/* Flexible Car Plan */}
        <div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
          }}
        >
          <div className="bg-gradient-to-r from-green-500 to-green-700 p-3 text-white">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-green-400 bg-opacity-30 rounded-full">
                <PiggyBank className="h-5 w-5" />
              </div>
              <span className="font-medium">Flexible Car Plan</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="mb-3">
                <div className="text-sm text-gray-500 mb-1">Interest Rate</div>
                <div className="text-lg font-medium">5% <span className="text-sm font-normal text-gray-500">per annum</span></div>
              </div>
              <button className="rounded-xl px-3 py-2 text-sm font-medium text-white bg-[#c68cff] hover:bg-[#19af58] transition-colors">
                Apply
              </button>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-1">Minimum Deposit</div>
              <div className="text-lg font-medium">{formatLocal(100)}</div>
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Achieve car ownership with flexible contributions and earn interest while maintaining access to your funds.
            </div>
          </div>
        </div>

        {/* EduSave Harvard */}
        <div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
          }}
        >
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-3 text-white">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-purple-400 bg-opacity-30 rounded-full">
                <BadgeDollarSign className="h-5 w-5" />
              </div>
              <span className="font-medium">EduSave Harvard</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="mb-3">
                <div className="text-sm text-gray-500 mb-1">Interest Rate</div>
                <div className="text-lg font-medium">5.5% <span className="text-sm font-normal text-gray-500">per annum</span></div>
              </div>
              <button className="rounded-xl px-3 py-2 text-sm font-medium text-white bg-[#c68cff] hover:bg-[#19af58] transition-colors">
                Apply
              </button>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-1">Minimum Deposit</div>
              <div className="text-lg font-medium">{formatLocal(50)}</div>
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Save for your child's education with scheduled payments and early withdrawal penalties to encourage discipline.
            </div>
          </div>
        </div>

        {/* Roof on the Top */}
        <div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
          }}
        >
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-3 text-white">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-purple-400 bg-opacity-30 rounded-full">
                <BadgeDollarSign className="h-5 w-5" />
              </div>
              <span className="font-medium">Roof on the Top</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="mb-3">
                <div className="text-sm text-gray-500 mb-1">Interest Rate</div>
                <div className="text-lg font-medium">5.5% <span className="text-sm font-normal text-gray-500">per annum</span></div>
              </div>
              <button className="rounded-xl px-3 py-2 text-sm font-medium text-white bg-[#c68cff] hover:bg-[#19af58] transition-colors">
                Apply
              </button>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-1">Minimum Deposit</div>
              <div className="text-lg font-medium">{formatLocal(50)}</div>
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Save for your future house with schedule payments and early withdrawal penalities to encourage discipline.
            </div>
          </div>
        </div>
        
        {/* Digital Chama 
        <div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
          }}
        >
          <div className="bg-gradient-to-r from-green-500 to-green-700 p-3 text-white">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-green-400 bg-opacity-30 rounded-full">
                <RefreshCcw className="h-5 w-5" />
              </div>
              <span className="font-medium">Digital Chama Group</span>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-1">Groups Active</div>
              <div className="text-lg font-medium">2 <span className="text-sm font-normal text-gray-500">groups</span></div>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-1">Next Rotation</div>
              <div className="text-lg font-medium">7 <span className="text-sm font-normal text-gray-500">days</span></div>
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Join or create a digital rotating savings group with trusted partners for better discipline and accountability.
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
  
  // Loans screen with emergency loans, business loans, and pay-as-you-go utilities
  const renderLoansScreen = () => (
    <div className="p-4">
      <div className="space-y-4">
        {/* Nano Loan */}
        <div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
          }}
        >
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-3 text-white">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-purple-400 bg-opacity-30 rounded-full">
                <Wallet className="h-5 w-5" />
              </div>
              <span className="font-medium">Emergency NanoLoan</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div>
                <div className="text-sm text-gray-500 mb-1">Available Limit</div>
                <div className="text-lg font-medium">{formatLocal(50)}</div>
              </div>
              <button className="rounded-xl px-3 py-2 text-sm font-medium text-white bg-[#c68cff] hover:bg-[#19af58] transition-colors">
                Apply
              </button>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-1">Monthly Interest</div>
              <div className="text-lg font-medium">7% <span className="text-sm font-normal text-gray-500">flat rate</span></div>
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Quick cash for emergencies with instant disbursement to your eWallet. No collateral for established customers.
            </div>
          </div>
        </div>

        {/* Micro Loan */}
        <div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
          }}
        >
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-3 text-white">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-purple-400 bg-opacity-30 rounded-full">
                <Wallet className="h-5 w-5" />
              </div>
              <span className="font-medium">Emergency MicroLoan</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div>
                <div className="text-sm text-gray-500 mb-1">Available Limit</div>
                <div className="text-lg font-medium">{formatLocal(250)}</div>
              </div>
              <button className="rounded-xl px-3 py-2 text-sm font-medium text-white bg-[#c68cff] hover:bg-[#19af58] transition-colors">
                Apply
              </button>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-1">Monthly Interest</div>
              <div className="text-lg font-medium">7% <span className="text-sm font-normal text-gray-500">flat rate</span></div>
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Quick cash for emergencies with instant disbursement to your eWallet. No collateral for established customers.
            </div>
          </div>
        </div>
        
        {/* ReadyToGo */}
        <div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
          }}
        >
          <div className="bg-gradient-to-r from-green-500 to-green-700 p-3 text-white">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-green-400 bg-opacity-30 rounded-full">
                <Store className="h-5 w-5" />
              </div>
              <span className="font-medium">ReadyToGo Loan</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div>
                <div className="text-sm text-gray-500 mb-1">Maximum Amount</div>
                <div className="text-lg font-medium">{formatLocal(1500)}</div>
              </div>
              <button className="rounded-xl px-3 py-2 text-sm font-medium text-white bg-[#c68cff] hover:bg-[#19af58] transition-colors">
                Apply
              </button>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-1">Repayment Period</div>
              <div className="text-lg font-medium">1-x <span className="text-sm font-normal text-gray-500">months</span></div>
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Business financing with flexible repayment schedules aligned with your business cash flow.
            </div>
          </div>
        </div>

        {/* Merchant Financing */}
        <div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
          }}
        >
          <div className="bg-gradient-to-r from-green-500 to-green-700 p-3 text-white">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-green-400 bg-opacity-30 rounded-full">
                <Store className="h-5 w-5" />
              </div>
              <span className="font-medium"> Merchant Financing Loan</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div>
                <div className="text-sm text-gray-500 mb-1">Maximum Amount</div>
                <div className="text-lg font-medium">{formatLocal(2500)}</div>
              </div>
              <button className="rounded-xl px-3 py-2 text-sm font-medium text-white bg-[#c68cff] hover:bg-[#19af58] transition-colors">
                Apply
              </button>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-1">Repayment Period</div>
              <div className="text-lg font-medium">1-x <span className="text-sm font-normal text-gray-500">months</span></div>
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Business financing with flexible repayment schedules aligned with your business cash flow.
            </div>
          </div>
        </div>
        
        {/* Pay-As-You-Go Loan 
        <div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
          }}
        >
          <div className="bg-gradient-to-r from-green-500 to-green-700 p-3 text-white">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-green-400 bg-opacity-30 rounded-full">
                <Coins className="h-5 w-5" />
              </div>
              <span className="font-medium">Pay-As-You-Go Utilities</span>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-1">Appliances Available</div>
              <div className="text-lg font-medium">Solar Systems, Cookers</div>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 mb-1">Unlock Method</div>
              <div className="text-lg font-medium">Mobile Payments</div>
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Access essential home appliances with small, regular payments automatically deducted from your eWallet.
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
  
  const renderRoundUpScreen = () => (
    <div className="p-4">
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-3">
            <PiggyBank className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-lg font-medium mb-1">{t("ewallet.simulator.roundup.title")}</h3>
          <p className="text-sm text-gray-500 mb-4">{t("ewallet.simulator.roundup.description")}</p>
        </div>
        
        <div className="space-y-4 mb-4">
          <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
            <div className="text-sm">{t("ewallet.simulator.roundup.status")}</div>
            <div className="text-sm font-medium text-green-600">{t("ewallet.simulator.roundup.active")}</div>
          </div>
          
          <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
            <div className="text-sm">{t("ewallet.simulator.roundup.saved")}</div>
            <div className="text-sm font-medium">{formatLocal(42.75)}</div>
          </div>
          
          <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
            <div className="text-sm">{t("ewallet.simulator.roundup.transactions")}</div>
            <div className="text-sm font-medium">15</div>
          </div>
        </div>
        
        <div className="flex space-x-2 text-sm">
          <Button 
           
            size="sm"
            className="flex-1 rounded-xl bg-[#19af58] hover:bg-primary"
            onClick={goBack}
          >
            {t("ewallet.simulator.roundup.configure") || "Configure"}
          </Button>
          <Button 
            variant="default" 
            size="sm"
            className="flex-1 rounded-xl hover:bg-[#19af58]"
            onClick={goBack}
          >
            <RefreshCcw className="w-3 h-3 mr-1" />
            {t("ewallet.simulator.roundup.refresh") || "Refresh"}
          </Button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h4 className="font-medium text-sm mb-2">{t("ewallet.simulator.roundup.how_title") || "How it works"}</h4>
        <p className="text-xs text-gray-500 mb-2">{t("ewallet.simulator.roundup.how_description_1") || "Each time you spend, we round up your payment to the nearest dollar and save the difference."}</p>
        <p className="text-xs text-gray-500">{t("ewallet.simulator.roundup.how_description_2") || "It's a simple and automatic way to grow your savings."}</p>
      </div>
    </div>
  );
  
  // the t(ewallet.simulator.settings) should dynamically recover the variables from the translation file but it doesn't work
  // so I hardcoded the strings here
  const renderSettingsScreen = () => (
    <div className="p-4">
      <div className="space-y-4">
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="text-sm font-medium">{t("ewallet.simulator.settings.account") || "Account"}</div>
          </div>
          {["profile", "security", "notifications", "linked_accounts"].map((item) => (
            <div key={item} className="flex justify-between items-center p-4 border-b border-gray-100">
              <div className="text-sm">{t(`ewallet.simulator.settings.${item}`) || item}</div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="text-sm font-medium">{t("ewallet.simulator.settings.preferences") || "Preferences"}</div>
          </div>
          {["language", "currency", "theme", "biometrics"].map((item) => (
            <div key={item} className="flex justify-between items-center p-4 border-b border-gray-100">
              <div className="text-sm">{t(`ewallet.simulator.settings.${item}`) || item}</div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="text-sm font-medium">{t("ewallet.simulator.settings.support") || "Support"}</div>
          </div>
          {["help", "contact", "about"].map((item) => (
            <div key={item} className="flex justify-between items-center p-4 border-b border-gray-100">
              <div className="text-sm">{t(`ewallet.simulator.settings.${item}`) || item}</div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>
        
        <Button variant="destructive" className="w-full rounded-2xl">
          {t("ewallet.simulator.settings.logout") || "Log out"}
        </Button>
      </div>
    </div>
  );
  
  const renderPaymentScreen = () => (
    <div className="p-4">
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="text-center mb-4">
          <div className="text-lg font-medium">Scan to Pay</div>
          <div className="text-sm text-gray-500">Use QR code to complete your payment</div>
        </div>
        
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 mb-4 flex items-center justify-center">
          <div className="text-center">
            <QrCode className="w-10 h-10 text-gray-400 mx-auto mb-2" />
            <div className="text-sm text-gray-500">Point camera at merchant QR code</div>
          </div>
        </div>
        
        <div className="text-center">
          <button
            className="flex-1 rounded-xl px-4 py-2 text-white font-medium transition-colors duration-300 bg-[#c68cff] hover:bg-[#19af58]"
            onClick={() => navigateTo("qrcode")}
          >
            Show My QR
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h4 className="font-medium text-sm mb-2">Manual Payment</h4>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-500 block mb-1">Merchant ID</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-xl"
              placeholder="Enter merchant ID"
            />
          </div>
          
          <div>
            <label className="text-sm text-gray-500 block mb-1">Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">{symbol}</span>
              <input 
                type="number" 
                className="w-full pl-8 p-2 border border-gray-300 rounded-xl"
                placeholder="0.00"
              />
            </div>
          </div>
          
          <Button 
            className="w-full rounded-xl px-4 py-2 text-white font-medium transition-colors duration-300 bg-[#c68cff] hover:bg-[#19af58]"
            onClick={handleTransfer}
          >
            Buy Now Pay Later
          </Button>
        </div>
      </div>
    </div>
  );
  
  const renderScreen = () => {
    switch (screen) {
      case "home":
        return renderHomeScreen();
      case "payment":
        return renderPaymentScreen();
      case "transfer":
        return renderTransferScreen();
      case "history":
        return renderHistoryScreen();
      case "settings":
        return renderSettingsScreen();
      case "qrcode":
        return renderQRCodeScreen();
      case "topup":
        return renderTopUpScreen();
      case "roundup":
        return renderRoundUpScreen();
      case "savings":
        return renderSavingsScreen();
      case "loans":
        return renderLoansScreen();
      default:
        return renderHomeScreen();
    }
  };
  
  const deviceWidth = isMobile ? "w-full max-w-[360px]" : "w-[330px]";
  
  return (
    <section id="ewallet-simulator" className="py-16 bg-gradient-to-r from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10">
         <AnimatedComponent animation="slideUp" delay={0.3} duration={0.6} className="w-full max-w-md">
            <Tabs 
              defaultValue="agent" 
              className="w-full "
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-1 mb-8 rounded-xl border-none bg-purple-800 p-2">
                  <TabsTrigger value="agent" className="rounded-xl font-bold">Agent/Merchant Account</TabsTrigger>
              </TabsList>

              
              <TabsContent value="agent" className="mt-0">
                <HoverAnimationCard
                  hoverEffect="lift"
                  className="bg-white p-6 shadow-lg rounded-xl"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Store className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {t("simulator.title1")}
                      </h3>
                      <p className="text-gray-600">
                        {t("simulator.subtitle")}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <motion.li 
                      key={1} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-purple-600 mr-2 mt-0.5 flex-shrink-0">•</div>
                      <span className="text-sm">{t("simulator.agent")}</span>
                    </motion.li>
                    <motion.li 
                      key={2} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-purple-600 mr-2 mt-0.5 flex-shrink-0">•</div>
                      <span className="text-sm">{t("simulator.agent1")}</span>
                    </motion.li>
                    <motion.li 
                      key={3} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-purple-600 mr-2 mt-0.5 flex-shrink-0">•</div>
                      <span className="text-sm">{t("simulator.agent2")}</span>
                    </motion.li>
                    <motion.li 
                      key={4} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-purple-600 mr-2 mt-0.5 flex-shrink-0">•</div>
                      <span className="text-sm">{t("simulator.agent3")}</span>
                    </motion.li>
                  </ul>
                </HoverAnimationCard>
              </TabsContent>
            </Tabs>
          </AnimatedComponent>
          
          {/* Mobile Device Simulator */}
          <AnimatedComponent animation="slideUp" delay={0.5} duration={0.6} className="flex justify-center">
            <div 
              className={`${deviceWidth} h-[600px] bg-gray-100 rounded-[36px] border-[14px] border-gray-900 overflow-hidden relative shadow-xl`}
            >
              {/* Status Bar */}
              <div className="bg-gray-900 h-6 w-32 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-xl z-10"></div>
              
              {/* App Content */}
              <div className="flex flex-col h-full bg-gray-50">
                {renderHeader()}
                <div className="flex-1 overflow-y-auto">
                  {renderScreen()}
                </div>
                {renderFooter()}
              </div>
              
              {/* Notification */}
              <AnimatePresence>
                {showNotification && (
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    className="absolute top-8 left-4 right-4 bg-white rounded-lg shadow-lg p-3 flex items-center z-20"
                  >
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Transaction Successful</div>
                      <div className="text-xs text-gray-500">Payment processed instantly</div>
                    </div>
                    <button onClick={() => setShowNotification(false)}>
                      <X className="h-4 w-4 text-gray-400" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatedComponent>

          <AnimatedComponent animation="slideUp" delay={0.3} duration={0.6} className="w-full max-w-md">
            <Tabs 
              defaultValue="agent" 
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-1 mb-8 rounded-xl border-none bg-purple-800 p-2">
                  <TabsTrigger value="agent" className="rounded-xl font-bold">Client Account</TabsTrigger>
              </TabsList>

              
              <TabsContent value="agent" className="mt-0">
                <HoverAnimationCard
                  hoverEffect="lift"
                  className="bg-white p-6 shadow-lg rounded-xl"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Smartphone className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {t("client.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("client.subtitle")}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <motion.li 
                      key={1} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-purple-600 mr-2 mt-0.5 flex-shrink-0">•</div>
                      <span className="text-sm">{t("simulator.client")}</span>
                    </motion.li>
                    <motion.li 
                      key={2} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-purple-600 mr-2 mt-0.5 flex-shrink-0">•</div>
                      <span className="text-sm">{t("simulator.client1")}</span>
                    </motion.li>
                    <motion.li 
                      key={3} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-purple-600 mr-2 mt-0.5 flex-shrink-0">•</div>
                      <span className="text-sm">{t("simulator.client2")}</span>
                    </motion.li>
                    <motion.li 
                      key={4} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-purple-600 mr-2 mt-0.5 flex-shrink-0">•</div>
                      <span className="text-sm">{t("simulator.client3")}</span>
                    </motion.li>
                  </ul>
                </HoverAnimationCard>
              </TabsContent>
            </Tabs>
          </AnimatedComponent>
        </div>
        
        <div className="mt-12 text-center">
          {/* <AnimatedComponent animation="fadeIn" delay={0.7} duration={0.5}>
            <p className="text-gray-500 max-w-2xl mx-auto mb-6">
              ReadyCash eWallet can be customized and white-labeled for your organization's specific needs, with seamless integration into existing mobile apps or as a standalone solution.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Request a Demo
            </a>
          </AnimatedComponent> */}
        </div>
      </div>
    </section>
  );
}