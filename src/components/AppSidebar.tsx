import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  BarChart3, 
  DollarSign, 
  Target, 
  Wrench, 
  Cloud,
  LogOut,
  Briefcase
} from "lucide-react";

const mainItems = [
  { 
    title: "Sales and Product Performance", 
    url: "/dashboard", 
    icon: BarChart3,
    category: "Main Menu"
  },
  { 
    title: "Financials", 
    url: "/financials", 
    icon: DollarSign,
    category: "Main Menu"
  },
  { 
    title: "Marketing", 
    url: "/marketing", 
    icon: Target,
    category: "Main Menu"
  },
  { 
    title: "Engineering", 
    url: "/engineering", 
    icon: Wrench,
    category: "Main Menu"
  },
];

const generalItems = [
  { 
    title: "Project Management", 
    url: "/projects", 
    icon: Briefcase,
    category: "General"
  },
  { 
    title: "Engineering", 
    url: "/engineering-general", 
    icon: Wrench,
    category: "General"
  },
];

const accountItems = [
  { 
    title: "Cloud Services", 
    url: "/cloud", 
    icon: Cloud,
    category: "Account"
  },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  const NavItem = ({ item }: { item: typeof mainItems[0] }) => (
    <SidebarMenuItem>
      <SidebarMenuButton asChild className={isActive(item.url) ? "bg-oxos-primary text-white" : ""}>
        <NavLink 
          to={item.url} 
          className="flex items-center gap-3 hover:text-oxos-primary transition-colors"
        >
          <item.icon className="h-4 w-4" />
          {open && <span>{item.title}</span>}
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <Sidebar className="border-r border-dashboard-border">
      <SidebarContent className="bg-dashboard-bg">
        {/* OXOS Logo */}
        <div className="p-6 border-b border-dashboard-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-oxos-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OX</span>
            </div>
            {open && (
              <div>
                <h1 className="text-xl font-bold text-dashboard-text tracking-wider">OXOS</h1>
              </div>
            )}
          </div>
        </div>

        {/* Main Menu */}
        <SidebarGroup>
          {open && <SidebarGroupLabel className="text-dashboard-text-muted">Main Menu</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <NavItem key={item.url} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* General */}
        <SidebarGroup>
          {open && <SidebarGroupLabel className="text-dashboard-text-muted">General</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {generalItems.map((item) => (
                <NavItem key={item.url} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Account */}
        <SidebarGroup>
          {open && <SidebarGroupLabel className="text-dashboard-text-muted">Account</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <NavItem key={item.url} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout */}
        <div className="mt-auto p-4 border-t border-dashboard-border">
          <SidebarMenuButton asChild>
            <NavLink 
              to="/login" 
              className="flex items-center gap-3 text-dashboard-text-muted hover:text-oxos-error transition-colors"
            >
              <LogOut className="h-4 w-4" />
              {open && <span>Logout</span>}
            </NavLink>
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}