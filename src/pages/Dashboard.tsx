import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  BarChart3,
  Target,
  Zap,
  Activity,
  Shield,
  Clock
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      color: "oxos-success",
      description: "vs last month"
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "oxos-primary",
      description: "active sessions"
    },
    {
      title: "Conversion Rate",
      value: "12.5%",
      change: "+5.4%",
      trend: "up",
      icon: Target,
      color: "oxos-accent",
      description: "imaging scans"
    },
    {
      title: "Performance Score",
      value: "98.2%",
      change: "+2.1%",
      trend: "up",
      icon: Zap,
      color: "oxos-secondary",
      description: "system uptime"
    }
  ];

  const recentActivities = [
    { 
      action: "New user registration completed", 
      time: "2 minutes ago", 
      type: "success",
      user: "Dr. Amanda Rodriguez",
      department: "Radiology"
    },
    { 
      action: "High-priority imaging scan processed", 
      time: "8 minutes ago", 
      type: "info",
      user: "AI Processing Unit",
      department: "System"
    },
    { 
      action: "System backup completed successfully", 
      time: "1 hour ago", 
      type: "success",
      user: "Automated System",
      department: "Infrastructure"
    },
    { 
      action: "Database optimization cycle finished", 
      time: "2 hours ago", 
      type: "warning",
      user: "System Administrator",
      department: "Maintenance"
    },
    { 
      action: "Security scan completed - no threats", 
      time: "3 hours ago", 
      type: "success",
      user: "Security Engine",
      department: "Security"
    }
  ];

  const systemMetrics = [
    { 
      name: "API Performance", 
      status: "Optimal", 
      value: "99.9%", 
      color: "oxos-success",
      icon: Activity,
      description: "Response time: 45ms"
    },
    { 
      name: "Database Health", 
      status: "Excellent", 
      value: "98.5%", 
      color: "oxos-primary",
      icon: Shield,
      description: "Query efficiency: 98%"
    },
    { 
      name: "Image Processing", 
      status: "Active", 
      value: "95.2%", 
      color: "oxos-accent",
      icon: Clock,
      description: "Avg processing: 1.2s"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Enhanced Header */}
        <div className="flex items-center justify-between animate-slide-up">
          <div>
            <h1 className="text-display-md text-dashboard-text mb-3 text-heading">
              Sales and Product <span className="text-oxos-secondary">Performance</span>
            </h1>
            <p className="text-lg text-dashboard-text-muted text-body">
              Welcome back, Dr. Chen. Here's your medical imaging platform overview.
            </p>
          </div>
          <div className="text-right">
            <div className="text-mono text-sm text-dashboard-text-muted">Last updated</div>
            <div className="text-mono text-sm text-oxos-primary font-medium">Just now</div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={stat.title} 
              className={`professional-card hover-lift animate-slide-up animate-stagger-${index + 1}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <p className="text-sm text-dashboard-text-muted font-medium tracking-wide uppercase">
                      {stat.title}
                    </p>
                    <div className="space-y-1">
                      <p className="text-display-sm text-dashboard-text text-heading">
                        {stat.value}
                      </p>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-oxos-success" />
                        <span className="text-sm font-semibold text-oxos-success">
                          {stat.change}
                        </span>
                        <span className="text-xs text-dashboard-text-muted">
                          {stat.description}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-oxos-primary/20 to-oxos-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="h-6 w-6 text-oxos-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Revenue Chart */}
          <Card className="lg:col-span-2 professional-card animate-slide-up">
            <CardHeader className="pb-6">
              <CardTitle className="text-dashboard-text flex items-center gap-3 text-heading text-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-oxos-primary/20 to-oxos-secondary/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-oxos-primary" />
                </div>
                Revenue Analytics
                <Badge className="bg-oxos-success/20 text-oxos-success">Live</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-end justify-between gap-3 p-4 bg-gradient-to-t from-dashboard-bg/50 to-transparent rounded-lg">
                {Array.from({ length: 12 }, (_, i) => {
                  const height = Math.random() * 70 + 30;
                  return (
                    <div 
                      key={i}
                      className="relative group flex-1 transition-all duration-300 hover:scale-105"
                    >
                      <div
                        className="bg-gradient-to-t from-oxos-primary to-oxos-secondary rounded-t-lg transition-all duration-700 ease-out"
                        style={{ height: `${height}%` }}
                      />
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-dashboard-card px-2 py-1 rounded text-xs text-dashboard-text border border-dashboard-border">
                        ${(Math.random() * 10 + 5).toFixed(1)}k
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between text-xs text-dashboard-text-muted mt-6 font-mono">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
                  <span key={month} className="font-medium">{month}</span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Recent Activity */}
          <Card className="professional-card animate-slide-up animate-stagger-3">
            <CardHeader className="pb-6">
              <CardTitle className="text-dashboard-text text-heading text-xl">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-dashboard-bg/50 to-transparent border border-dashboard-border/50 hover:border-oxos-primary/30 transition-all group"
                >
                  <div className={`w-3 h-3 rounded-full mt-2 transition-all group-hover:scale-125 ${
                    activity.type === 'success' ? 'bg-oxos-success shadow-lg shadow-oxos-success/50' :
                    activity.type === 'warning' ? 'bg-oxos-warning shadow-lg shadow-oxos-warning/50' :
                    'bg-oxos-primary shadow-lg shadow-oxos-primary/50'
                  }`} />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm text-dashboard-text font-medium">
                      {activity.action}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-dashboard-text-muted">
                        {activity.user} • {activity.department}
                      </p>
                      <p className="text-xs text-dashboard-text-muted font-mono">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Enhanced System Status */}
        <Card className="professional-card animate-slide-up animate-stagger-4">
          <CardHeader className="pb-6">
            <CardTitle className="text-dashboard-text text-heading text-xl">
              System Health Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {systemMetrics.map((system, index) => (
                <div 
                  key={system.name} 
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-dashboard-bg/50 to-transparent border border-dashboard-border/50 hover:border-oxos-primary/30 transition-all group hover-lift"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-oxos-primary/20 to-oxos-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <system.icon className="h-6 w-6 text-oxos-primary" />
                    </div>
                  </div>
                  <Badge className="bg-oxos-success/20 text-oxos-success mb-3 font-medium">
                    {system.status}
                  </Badge>
                  <p className="text-display-sm font-bold text-dashboard-text text-heading mb-1">
                    {system.value}
                  </p>
                  <p className="text-sm text-dashboard-text font-medium mb-1">
                    {system.name}
                  </p>
                  <p className="text-xs text-dashboard-text-muted font-mono">
                    {system.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
