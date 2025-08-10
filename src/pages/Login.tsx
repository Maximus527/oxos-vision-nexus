import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Chrome, Sun, Moon, Shield, Zap, Activity } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Simulate login process with professional feedback
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-dashboard-bg flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-oxos-primary/40 rounded-2xl rotate-12 animate-pulse-glow"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-oxos-secondary/40 rotate-45 rounded-xl"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 border-2 border-oxos-accent/40 rounded-lg"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-oxos-primary/40 rotate-12 rounded-2xl"></div>
        <div className="absolute top-1/3 left-1/2 w-28 h-28 border-2 border-oxos-secondary/40 -rotate-12 rounded-xl"></div>
        <div className="absolute bottom-1/2 right-10 w-12 h-12 border-2 border-oxos-accent/40 rotate-45 rounded-lg"></div>
        
        {/* Additional geometric shapes */}
        <div className="absolute top-1/4 left-20 w-6 h-6 bg-oxos-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-40 w-8 h-8 bg-oxos-secondary/20 rounded-full"></div>
        <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-oxos-accent/20 rounded-full"></div>
      </div>

      {/* Professional Theme Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="absolute top-6 right-6 text-dashboard-text hover:bg-dashboard-border/50 hover:text-oxos-primary transition-all duration-300 hover:scale-110 z-10"
      >
        {isDark ? (
          <Sun className="h-6 w-6 transition-transform duration-300 rotate-0" />
        ) : (
          <Moon className="h-6 w-6 transition-transform duration-300 rotate-180" />
        )}
      </Button>

      {/* Main Login Card */}
      <div className="w-full max-w-md animate-slide-up">
        <Card className="glass-card border-dashboard-border/50 shadow-professional-xl">
          <CardContent className="p-8">
            {/* OXOS Branding */}
            <div className="text-center mb-8">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-oxos-primary to-oxos-secondary rounded-3xl flex items-center justify-center mb-6 shadow-glow animate-pulse-glow">
                <span className="text-white font-bold text-3xl tracking-wider">OX</span>
              </div>
              <h1 className="text-display-md text-dashboard-text tracking-wider mb-3 text-heading">
                OXOS
              </h1>
              <p className="text-sm text-dashboard-text-muted font-medium">
                Medical Imaging Platform
              </p>
            </div>

            {/* Login Form */}
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-dashboard-text text-heading">
                  Dashboard Login
                </h2>
                <p className="text-dashboard-text-muted text-body">
                  Sign in to access your enterprise dashboard and streamline your medical imaging workflow.
                </p>
              </div>

              {/* Enhanced Google Login Button */}
              <Button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full h-14 bg-gradient-to-r from-oxos-primary to-oxos-primary-dark hover:from-oxos-primary-dark hover:to-oxos-primary text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-glow text-base btn-professional"
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Authenticating...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Chrome className="h-5 w-5" />
                    Login with Google
                  </div>
                )}
              </Button>

              {/* Security Features */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-dashboard-border/50">
                <div className="text-center">
                  <Shield className="h-6 w-6 text-oxos-success mx-auto mb-2" />
                  <p className="text-xs text-dashboard-text-muted font-medium">Secure</p>
                </div>
                <div className="text-center">
                  <Zap className="h-6 w-6 text-oxos-warning mx-auto mb-2" />
                  <p className="text-xs text-dashboard-text-muted font-medium">Fast</p>
                </div>
                <div className="text-center">
                  <Activity className="h-6 w-6 text-oxos-primary mx-auto mb-2" />
                  <p className="text-xs text-dashboard-text-muted font-medium">Reliable</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="text-center text-sm text-dashboard-text-muted space-y-1">
                <p className="font-medium">Enterprise-grade authentication powered by Google</p>
                <p className="text-xs">HIPAA compliant • SOC 2 certified • 99.9% uptime</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}