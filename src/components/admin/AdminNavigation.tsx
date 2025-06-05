/* import { Link, useLocation } from "wouter";
import { 
  BarChart, 
  FileText, 
  FileCheck, 
  Settings, 
  Smartphone, 
  Users,
  Home,
  ChevronRight
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";

export default function AdminNavigation() {
  const [location] = useLocation();
  const { t } = useLanguage();
  
  const navItems = [
    { 
      name: t("admin.dashboard"), 
      href: "/admin", 
      icon: BarChart,
      active: location === "/admin"
    },
    { 
      name: t("admin.analytics"), 
      href: "/admin/analytics", 
      icon: BarChart,
      active: location === "/admin/analytics"
    },
    { 
      name: t("admin.applications"), 
      href: "/admin/applications", 
      icon: FileText,
      active: location === "/admin/applications"
    },
    { 
      name: t("admin.validation"), 
      href: "/admin/validation", 
      icon: FileCheck,
      active: location === "/admin/validation"
    },
    { 
      name: t("admin.loanSettings"), 
      href: "/admin/loan-settings", 
      icon: Settings,
      active: location === "/admin/loan-settings"
    },
    { 
      name: t("admin.mobileIntegration"), 
      href: "/admin/mobile-integration", 
      icon: Smartphone,
      active: location === "/admin/mobile-integration"
    },
    { 
      name: t("admin.users"), 
      href: "/admin/users", 
      icon: Users,
      active: location === "/admin/users"
    },
    { 
      name: t("admin.validationSettings"), 
      href: "/admin/validation-settings", 
      icon: Settings,
      active: location === "/admin/validation-settings"
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="flex items-center mb-4">
        <Home className="text-purple-600 mr-2" size={18} />
        <Link to="/" className="text-purple-600 hover:text-purple-800 text-sm">
          Home
        </Link>
        <ChevronRight className="mx-1 text-gray-400" size={16} />
        <span className="text-gray-700 font-medium text-sm">Admin Panel</span>
      </div>
      
      <nav>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  item.active 
                    ? "bg-purple-100 text-purple-800" 
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
} */