import { useState, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Bell, Settings, Sun, Moon } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set dark mode by default for OXOS theme
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen flex w-full bg-dashboard-bg">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Professional Header */}
          <header className="h-16 flex items-center justify-between px-6 bg-dashboard-card/80 backdrop-blur-lg border-b border-dashboard-border/50 sticky top-0 z-50">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-dashboard-text hover:bg-dashboard-border/50 transition-colors" />
              
              {/* Enhanced Search */}
              <div className="relative w-96 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dashboard-text-muted w-4 h-4" />
                <Input
                  placeholder="Search anything..."
                  className="pl-10 bg-dashboard-bg/50 border-dashboard-border/50 text-dashboard-text placeholder:text-dashboard-text-muted focus:ring-2 focus:ring-oxos-primary/50 focus:border-oxos-primary transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Theme Toggle with Enhanced Animation */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-dashboard-text hover:bg-dashboard-border/50 hover:text-oxos-primary transition-all duration-300 hover:scale-105"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 transition-transform duration-300 rotate-0" />
                ) : (
                  <Moon className="h-5 w-5 transition-transform duration-300 rotate-180" />
                )}
              </Button>

              {/* Enhanced Notifications */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-dashboard-text hover:bg-dashboard-border/50 relative hover:scale-105 transition-all duration-300"
              >
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-oxos-primary text-white text-xs flex items-center justify-center animate-pulse-glow">
                  3
                </Badge>
              </Button>

              {/* Settings */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-dashboard-text hover:bg-dashboard-border/50 hover:text-oxos-primary transition-all duration-300 hover:scale-105"
              >
                <Settings className="h-5 w-5 transition-transform duration-300 hover:rotate-90" />
              </Button>

              {/* Enhanced User Avatar */}
              <div className="flex items-center gap-3 pl-3 border-l border-dashboard-border/50">
                <div className="text-right hidden sm:block">
                  <div className="text-sm font-medium text-dashboard-text">Dr. Sarah Chen</div>
                  <div className="text-xs text-dashboard-text-muted">Lead Radiologist</div>
                </div>
                <Avatar className="h-9 w-9 border-2 border-oxos-primary/20 hover:border-oxos-primary/50 transition-colors">
                  <AvatarImage src="/api/placeholder/36/36" />
                  <AvatarFallback className="bg-oxos-primary text-white font-semibold">SC</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Main Content with Animations */}
          <main className="flex-1 p-6 animate-fade-in">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}