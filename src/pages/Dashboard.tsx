import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  BarChart3,
  Target,
  Zap
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      color: "oxos-success"
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "oxos-primary"
    },
    {
      title: "Conversion Rate",
      value: "12.5%",
      change: "+5.4%",
      trend: "up",
      icon: Target,
      color: "oxos-accent"
    },
    {
      title: "Performance Score",
      value: "98.2%",
      change: "+2.1%",
      trend: "up",
      icon: Zap,
      color: "oxos-secondary"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-dashboard-text mb-2">
              Sales and Product <span className="text-oxos-secondary">Performance</span>
            </h1>
            <p className="text-dashboard-text-muted">
              Welcome back! Here's what's happening with your medical imaging platform.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-dashboard-card border-dashboard-border hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-dashboard-text-muted font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-dashboard-text mt-2">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <TrendingUp className={`h-4 w-4 text-${stat.color}`} />
                      <span className={`text-sm font-medium text-${stat.color}`}>{stat.change}</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 bg-${stat.color}/20 rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <Card className="lg:col-span-2 bg-dashboard-card border-dashboard-border">
            <CardHeader>
              <CardTitle className="text-dashboard-text flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-oxos-primary" />
                Revenue Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-end justify-between gap-2">
                {Array.from({ length: 12 }, (_, i) => (
                  <div 
                    key={i}
                    className="bg-gradient-to-t from-oxos-primary to-oxos-secondary rounded-t-lg flex-1"
                    style={{ height: `${Math.random() * 70 + 30}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-dashboard-text-muted mt-4">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-dashboard-card border-dashboard-border">
            <CardHeader>
              <CardTitle className="text-dashboard-text">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { action: "New user registration", time: "2 min ago", type: "success" },
                { action: "Image processing completed", time: "5 min ago", type: "info" },
                { action: "System backup finished", time: "1 hour ago", type: "success" },
                { action: "Database optimization", time: "2 hours ago", type: "warning" },
                { action: "Security scan completed", time: "3 hours ago", type: "success" }
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-dashboard-bg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-oxos-success' :
                    activity.type === 'warning' ? 'bg-oxos-warning' :
                    'bg-oxos-primary'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-dashboard-text">{activity.action}</p>
                    <p className="text-xs text-dashboard-text-muted">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card className="bg-dashboard-card border-dashboard-border">
          <CardHeader>
            <CardTitle className="text-dashboard-text">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "API Performance", status: "Optimal", value: "99.9%", color: "oxos-success" },
                { name: "Database Health", status: "Good", value: "98.5%", color: "oxos-primary" },
                { name: "Image Processing", status: "Active", value: "95.2%", color: "oxos-accent" }
              ].map((system) => (
                <div key={system.name} className="text-center p-4 rounded-lg bg-dashboard-bg">
                  <Badge className={`bg-${system.color}/20 text-${system.color} mb-2`}>
                    {system.status}
                  </Badge>
                  <p className="text-2xl font-bold text-dashboard-text">{system.value}</p>
                  <p className="text-sm text-dashboard-text-muted">{system.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}