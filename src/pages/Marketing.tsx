import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal, TrendingUp, Users, Calendar } from "lucide-react";

export default function Marketing() {
  const users = [
    {
      id: 1,
      name: "Megan",
      role: "Administrator",
      email: "megan.lawrence@oxos.com",
      phone: "025-531-4412",
      avatar: "/api/placeholder/32/32",
      progress: 85,
      checked: true
    },
    {
      id: 2,
      name: "Rebecca",
      role: "Marketing",
      email: "rebecca.clark@oxos.com",
      phone: "025-546-4358",
      avatar: "/api/placeholder/32/32",
      progress: 72,
      checked: false
    },
    {
      id: 3,
      name: "David",
      role: "Product Design",
      email: "nick.gigic@oxos.com",
      phone: "(316) 555-0116",
      avatar: "/api/placeholder/32/32",
      progress: 91,
      checked: false
    }
  ];

  const ProgressChart = ({ progress }: { progress: number }) => (
    <div className="w-24 h-8 flex items-center">
      <div className="w-full bg-dashboard-border rounded-full h-1.5">
        <div 
          className="h-1.5 rounded-full bg-oxos-primary"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-dashboard-text mb-2">
              Marketing <span className="text-oxos-secondary">Performance</span>
            </h1>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-dashboard-text">91</div>
            <div className="text-sm text-dashboard-text-muted">Total Users</div>
          </div>
        </div>

        {/* Users Table Card */}
        <Card className="bg-dashboard-card border-dashboard-border">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-oxos-primary/20 rounded-lg flex items-center justify-center">
                  <Users className="h-4 w-4 text-oxos-primary" />
                </div>
                <div>
                  <CardTitle className="text-dashboard-text text-lg">Users</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-dashboard-text-muted">Added Past 3 Months</span>
                    <Badge variant="secondary" className="bg-dashboard-border text-dashboard-text-muted">
                      <Calendar className="h-3 w-3 mr-1" />
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-dashboard-text">91</div>
                <div className="text-xs text-dashboard-text-muted">Total Users</div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 pb-4 border-b border-dashboard-border text-sm text-dashboard-text-muted">
              <div className="flex items-center gap-3">
                <Checkbox />
                <span>Name</span>
              </div>
              <div>Email</div>
              <div>Phone No</div>
              <div>Progress</div>
              <div></div>
              <div></div>
            </div>

            {/* Table Rows */}
            <div className="space-y-4 mt-4">
              {users.map((user) => (
                <div 
                  key={user.id}
                  className={`grid grid-cols-6 gap-4 items-center py-3 rounded-lg hover:bg-dashboard-border/50 transition-colors ${
                    user.checked ? 'bg-oxos-primary/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Checkbox checked={user.checked} />
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="bg-oxos-primary text-white text-xs">
                        {user.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-dashboard-text">{user.name}</div>
                      <div className="text-xs text-dashboard-text-muted">{user.role}</div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-dashboard-text">{user.email}</div>
                  <div className="text-sm text-dashboard-text">{user.phone}</div>
                  
                  <div className="flex items-center gap-2">
                    <ProgressChart progress={user.progress} />
                    <span className="text-xs text-dashboard-text-muted">{user.progress}%</span>
                  </div>
                  
                  <div>
                    <TrendingUp className="h-4 w-4 text-oxos-success" />
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
      </div>
    </DashboardLayout>
  );
}