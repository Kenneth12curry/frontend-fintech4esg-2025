/* import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";
import { Redirect, Route, Link, RouteComponentProps } from "wouter";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

type ProtectedRouteProps = {
  path: string;
  component?: React.ComponentType<any>;
  children?: (params: any) => React.ReactNode;
};

export function ProtectedRoute({ path, component, children }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const Component = component;

  const renderContent = (params: any) => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      );
    }

    if (!user) {
      return <Redirect to="/auth" />;
    }

    if (children) {
      return children(params);
    }

    return Component ? <Component {...params} /> : null;
  };

  return (
    <Route path={path}>
      {(params) => renderContent(params)}
    </Route>
  );
}

export function AdminProtectedRoute({ path, component, children }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const Component = component;

  const renderContent = (params: any) => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      );
    }

    if (!user) {
      return <Redirect to="/auth" />;
    }

    if (user.role !== "admin") {
      return (
        <div className="flex items-center justify-center min-h-screen flex-col">
          <Alert variant="destructive" className="max-w-md">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Access Denied</AlertTitle>
            <AlertDescription>
              You do not have permission to access this area. Only administrators can view this page.
            </AlertDescription>
          </Alert>
          <div className="mt-4">
            <Link 
              to="/" 
              className="text-purple-600 hover:text-purple-800 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      );
    }

    if (children) {
      return children(params);
    }

    return Component ? <Component {...params} /> : null;
  };

  return (
    <Route path={path}>
      {(params) => renderContent(params)}
    </Route>
  );
} */