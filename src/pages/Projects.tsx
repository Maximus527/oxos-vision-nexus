import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { 
  MoreHorizontal, 
  TrendingUp, 
  Calendar, 
  BarChart3, 
  FileText,
  ShoppingCart
} from "lucide-react";

export default function Projects() {
  const projectBars = [
    { name: "MC2+", color: "bg-oxos-success", width: "25%", startMonth: 0 },
    { name: "X3", color: "bg-oxos-warning", width: "35%", startMonth: 3 },
    { name: "Platform", color: "bg-oxos-accent", width: "45%", startMonth: 6 },
    { name: "AI ARA", color: "bg-oxos-secondary", width: "55%", startMonth: 8 }
  ];

  const milestones = [
    {
      id: 1,
      name: "Milestone",
      progress: 0,
      checked: false
    },
    {
      id: 2,
      name: "Daily Meeting",
      progress: 20,
      checked: false
    },
    {
      id: 3,
      name: "Assembling UI Kit",
      progress: 80,
      checked: false
    }
  ];

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-dashboard-text mb-2">
              Project <span className="text-oxos-secondary">Management</span>
            </h1>
          </div>
        </div>

        {/* Project Plan Card */}
        <Card className="bg-dashboard-card border-dashboard-border">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-oxos-primary/20 rounded-lg flex items-center justify-center">
                  <FileText className="h-4 w-4 text-oxos-primary" />
                </div>
                <div>
                  <CardTitle className="text-dashboard-text text-lg">Project Plan</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-dashboard-text-muted">Over Past 12 Months</span>
                    <Badge variant="secondary" className="bg-dashboard-border text-dashboard-text-muted">
                      <Calendar className="h-3 w-3 mr-1" />
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-dashboard-text">83%</div>
                <div className="text-xs text-dashboard-text-muted">Complete</div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {/* Timeline Chart */}
            <div className="space-y-6">
              {/* Project Bars */}
              <div className="space-y-4">
                {projectBars.map((project, index) => (
                  <div key={project.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge 
                        className={`${project.color} text-white px-3 py-1 text-sm`}
                      >
                        {project.name}
                      </Badge>
                    </div>
                    <div className="relative h-8 bg-dashboard-border rounded-lg overflow-hidden">
                      <div 
                        className={`h-full ${project.color} rounded-lg`}
                        style={{ 
                          width: project.width,
                          marginLeft: `${(project.startMonth / 12) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Month Labels */}
              <div className="flex justify-between text-xs text-dashboard-text-muted border-t border-dashboard-border pt-4">
                {months.map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Schedule Card */}
          <Card className="bg-dashboard-card border-dashboard-border">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-oxos-primary/20 rounded-lg flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-oxos-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-dashboard-text text-lg">Schedule</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-dashboard-text-muted">Added Past 3 Months</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-dashboard-text">91</div>
                  <div className="text-xs text-dashboard-text-muted">Total Milestones</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-dashboard-border text-sm text-dashboard-text-muted">
                <div className="flex items-center gap-3">
                  <Checkbox />
                  <span>Milestone</span>
                </div>
                <div>Progress</div>
                <div></div>
              </div>

              {/* Milestones */}
              <div className="space-y-4 mt-4">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="grid grid-cols-3 gap-4 items-center py-2">
                    <div className="flex items-center gap-3">
                      <Checkbox checked={milestone.checked} />
                      <span className="text-sm text-dashboard-text">{milestone.name}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Progress 
                        value={milestone.progress} 
                        className="flex-1 h-2"
                      />
                      <span className="text-xs text-dashboard-text-muted w-8">{milestone.progress}%</span>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-dashboard-text-muted hover:text-dashboard-text">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Card */}
          <Card className="bg-dashboard-card border-dashboard-border">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-oxos-primary/20 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 text-oxos-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-dashboard-text text-lg">Performance</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-dashboard-text-muted">Over Past 6 Months</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-dashboard-text">31,184.38</div>
                  <div className="text-xs text-oxos-success flex items-center gap-1">
                    25 upward <TrendingUp className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              {/* Performance Chart Placeholder */}
              <div className="h-32 flex items-end justify-between gap-2">
                {Array.from({ length: 30 }, (_, i) => (
                  <div 
                    key={i}
                    className="bg-oxos-primary/30 rounded-t flex-1"
                    style={{ 
                      height: `${Math.random() * 80 + 20}%`,
                      background: i > 20 ? 'hsl(var(--oxos-primary))' : 'hsl(var(--oxos-primary) / 0.3)'
                    }}
                  />
                ))}
              </div>
              
              <div className="flex justify-between text-xs text-dashboard-text-muted mt-4 border-t border-dashboard-border pt-4">
                <span>30</span>
                <span>20</span>
                <span>10</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}