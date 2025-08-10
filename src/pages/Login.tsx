import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Chrome, Sun, Moon } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleGoogleLogin = () => {
    // Simulate login process
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-dashboard-bg flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-oxos-primary/30"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-oxos-secondary/30 rotate-45"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 border border-oxos-accent/30"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-oxos-primary/30 rotate-12"></div>
        <div className="absolute top-1/3 left-1/2 w-28 h-28 border border-oxos-secondary/30 -rotate-12"></div>
        <div className="absolute bottom-1/2 right-10 w-12 h-12 border border-oxos-accent/30 rotate-45"></div>
      </div>

      {/* Theme Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="absolute top-6 right-6 text-dashboard-text hover:bg-dashboard-border hover:text-oxos-primary transition-colors"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>

      <Card className="w-full max-w-md glass-card border-dashboard-border">
        <CardContent className="p-8">
          {/* OXOS Logo */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-oxos-primary rounded-2xl flex items-center justify-center mb-4">
              <span className="text-white font-bold text-2xl tracking-wider">OX</span>
            </div>
            <h1 className="text-4xl font-bold text-dashboard-text tracking-wider mb-2">OXOS</h1>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-dashboard-text mb-2">Dashboard Login</h2>
              <p className="text-dashboard-text-muted">
                Sign in to access your dashboard and streamline your workflow.
              </p>
            </div>

            {/* Google Login Button */}
            <Button
              onClick={handleGoogleLogin}
              className="w-full h-12 bg-oxos-primary hover:bg-oxos-primary-dark text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-oxos-primary/25"
            >
              <Chrome className="mr-3 h-5 w-5" />
              Login with Google
            </Button>

            {/* Additional Info */}
            <div className="text-center text-sm text-dashboard-text-muted">
              <p>Secure authentication powered by Google</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}