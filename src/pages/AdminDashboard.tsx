import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Shield,
  Activity,
  FileText,
  Settings,
  UserCheck,
  AlertTriangle,
  Crown
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock system statistics
  const systemStats = {
    totalUsers: 1247,
    totalDoctors: 23,
    totalPatients: 1224,
    totalAppointments: 3456,
    monthlyAppointments: 234,
    activeSubscriptions: 892,
    systemUptime: '99.9%',
  };

  const recentUsers = [
    { id: '1', name: 'Dr. Emily Davis', email: 'emily@example.com', role: 'doctor', status: 'active', joinDate: '2024-09-20' },
    { id: '2', name: 'Michael Brown', email: 'michael@example.com', role: 'patient', status: 'active', joinDate: '2024-09-19' },
    { id: '3', name: 'Lisa Johnson', email: 'lisa@example.com', role: 'patient', status: 'pending', joinDate: '2024-09-18' },
  ];

  const systemAlerts = [
    { id: '1', type: 'warning', message: 'High appointment volume detected', time: '2 hours ago' },
    { id: '2', type: 'info', message: 'Monthly backup completed successfully', time: '6 hours ago' },
    { id: '3', type: 'error', message: 'Failed login attempts from IP 192.168.1.100', time: '1 day ago' },
  ];

  const subscriptionBreakdown = {
    free: 355,
    basic: 421,
    premium: 116,
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'error': return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-warning" />;
      default: return <Activity className="h-4 w-4 text-primary" />;
    }
  };

  const getAlertVariant = (type: string) => {
    switch (type) {
      case 'error': return 'destructive';
      case 'warning': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              System Administration
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome {user?.name} - Monitor and manage the MedPortal system
            </p>
          </div>
          <div className="mt-4 lg:mt-0 flex space-x-3">
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              System Settings
            </Button>
            <Button className="bg-gradient-primary">
              <Activity className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* System Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-2">
                {systemStats.totalDoctors} doctors, {systemStats.totalPatients.toLocaleString()} patients
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.totalAppointments.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-2">
                {systemStats.monthlyAppointments} this month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
              <Crown className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.activeSubscriptions}</div>
              <p className="text-xs text-muted-foreground mt-2">
                71% subscription rate
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
              <Shield className="h-4 w-4 text-accent-bright" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemStats.systemUptime}</div>
              <p className="text-xs text-muted-foreground mt-2">
                Excellent system health
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent User Registrations */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="h-5 w-5 text-primary" />
                <span>Recent User Registrations</span>
              </CardTitle>
              <CardDescription>Latest users who joined the platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentUsers.map((user) => (
                <div 
                  key={user.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-gradient-card border"
                >
                  <div className="space-y-1">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <p className="text-xs text-muted-foreground">Joined: {user.joinDate}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge variant="outline" className="capitalize">
                      {user.role}
                    </Badge>
                    <Badge 
                      variant={user.status === 'active' ? 'default' : 'secondary'}
                      className={user.status === 'active' ? 'bg-success' : ''}
                    >
                      {user.status}
                    </Badge>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                Manage All Users
              </Button>
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-accent-bright" />
                <span>System Alerts</span>
              </CardTitle>
              <CardDescription>Recent system events and notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {systemAlerts.map((alert) => (
                <div 
                  key={alert.id}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-card border"
                >
                  <div className="mt-0.5">
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                  <Badge variant={getAlertVariant(alert.type) as any}>
                    {alert.type}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Alerts
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Subscription Analytics */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-warning" />
              <span>Subscription Analytics</span>
            </CardTitle>
            <CardDescription>Breakdown of user subscription tiers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-gradient-card border">
                <Crown className="mx-auto h-8 w-8 text-gray-500 mb-3" />
                <div className="text-2xl font-bold">{subscriptionBreakdown.free}</div>
                <p className="text-sm text-muted-foreground">Free Users</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {((subscriptionBreakdown.free / systemStats.activeSubscriptions) * 100).toFixed(1)}%
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-card border">
                <Crown className="mx-auto h-8 w-8 text-primary mb-3" />
                <div className="text-2xl font-bold">{subscriptionBreakdown.basic}</div>
                <p className="text-sm text-muted-foreground">Basic Plan</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {((subscriptionBreakdown.basic / systemStats.activeSubscriptions) * 100).toFixed(1)}%
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-card border">
                <Crown className="mx-auto h-8 w-8 text-warning mb-3" />
                <div className="text-2xl font-bold">{subscriptionBreakdown.premium}</div>
                <p className="text-sm text-muted-foreground">Premium Plan</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {((subscriptionBreakdown.premium / systemStats.activeSubscriptions) * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Management Actions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>System Management</CardTitle>
            <CardDescription>Quick access to administrative functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Users className="h-6 w-6" />
                <span>User Management</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Calendar className="h-6 w-6" />
                <span>Appointment System</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <FileText className="h-6 w-6" />
                <span>Generate Reports</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Settings className="h-6 w-6" />
                <span>System Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminDashboard;