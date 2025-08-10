import { useState, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
          {/* Header */}
          <header className="h-16 flex items-center justify-between px-6 bg-dashboard-card border-b border-dashboard-border">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              
              {/* Search */}
              <div className="relative w-96 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dashboard-text-muted w-4 h-4" />
                <Input
                  placeholder="Search..."
                  className="pl-10 bg-dashboard-bg border-dashboard-border text-dashboard-text placeholder:text-dashboard-text-muted"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-dashboard-text hover:bg-dashboard-border hover:text-oxos-primary transition-colors"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="text-dashboard-text hover:bg-dashboard-border relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-oxos-primary rounded-full text-xs flex items-center justify-center text-white">
                  1
                </span>
              </Button>

              {/* Settings */}
              <Button variant="ghost" size="icon" className="text-dashboard-text hover:bg-dashboard-border">
                <Settings className="h-5 w-5" />
              </Button>

              {/* User Avatar */}
              <Avatar className="h-8 w-8">
                <AvatarImage src="/lovable-uploads/c8eaa1cf-8941-46cf-852c-7510072289d6.png" />
                <AvatarFallback className="bg-oxos-primary text-white">OX</AvatarFallback>
              </Avatar>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}