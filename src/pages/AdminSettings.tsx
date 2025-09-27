import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Bell, 
  Shield, 
  Database, 
  Mail, 
  CreditCard, 
  Users, 
  Clock,
  Save,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';

const AdminSettings = () => {
  const systemHealth = {
    status: 'healthy',
    uptime: '99.97%',
    lastBackup: '2024-01-15 03:30 AM',
    activeUsers: 1089,
    databaseSize: '2.4 GB'
  };

  const subscriptionTiers = [
    { name: 'Free', price: 0, appointmentLimit: 2, features: ['Basic scheduling', 'Email notifications'] },
    { name: 'Basic', price: 29, appointmentLimit: 5, features: ['Priority scheduling', 'SMS notifications', 'Medical records'] },
    { name: 'Premium', price: 79, appointmentLimit: -1, features: ['Unlimited appointments', 'Analytics', '24/7 support', 'API access'] }
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">System Settings</h1>
          <p className="text-muted-foreground">Manage platform configuration and settings</p>
        </div>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              System Health
            </CardTitle>
            <CardDescription>Monitor system status and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Status</span>
                </div>
                <Badge className="bg-green-100 text-green-800">Healthy</Badge>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Uptime</p>
                <p className="text-lg font-bold">{systemHealth.uptime}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Active Users</p>
                <p className="text-lg font-bold">{systemHealth.activeUsers.toLocaleString()}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Database Size</p>
                <p className="text-lg font-bold">{systemHealth.databaseSize}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Last Backup</p>
                <p className="text-sm font-medium">{systemHealth.lastBackup}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Status
              </Button>
              <Button variant="outline" size="sm">
                <Database className="mr-2 h-4 w-4" />
                Backup Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="platform-name">Platform Name</Label>
                <Input id="platform-name" defaultValue="MedPortal" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="support-email">Support Email</Label>
                <Input id="support-email" defaultValue="support@medportal.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-appointment-duration">Max Appointment Duration (minutes)</Label>
                <Input id="max-appointment-duration" type="number" defaultValue="120" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="maintenance-mode" />
                <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="user-registration" defaultChecked />
                <Label htmlFor="user-registration">Allow User Registration</Label>
              </div>
              <Button className="w-full">
                <Save className="mr-2 h-4 w-4" />
                Save General Settings
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="smtp-server">SMTP Server</Label>
                <Input id="smtp-server" defaultValue="smtp.medportal.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="smtp-port">SMTP Port</Label>
                <Input id="smtp-port" type="number" defaultValue="587" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="smtp-username">SMTP Username</Label>
                <Input id="smtp-username" defaultValue="noreply@medportal.com" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="email-notifications" defaultChecked />
                <Label htmlFor="email-notifications">Email Notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="sms-notifications" defaultChecked />
                <Label htmlFor="sms-notifications">SMS Notifications</Label>
              </div>
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Subscription Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Subscription Management
            </CardTitle>
            <CardDescription>Configure subscription tiers and pricing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {subscriptionTiers.map((tier) => (
                <div key={tier.name} className="p-4 border border-border rounded-lg">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold">{tier.name}</h3>
                    <div className="text-2xl font-bold">
                      ${tier.price}
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground">
                      Appointments: {tier.appointmentLimit === -1 ? 'Unlimited' : tier.appointmentLimit}
                    </p>
                    <div className="space-y-1">
                      {tier.features.map((feature, index) => (
                        <p key={index} className="text-xs text-muted-foreground">• {feature}</p>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Edit Tier
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Require 2FA for admin accounts</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>Session Timeout</Label>
                <p className="text-sm text-muted-foreground">Auto-logout after inactivity</p>
              </div>
              <div className="flex items-center gap-2">
                <Input className="w-20" defaultValue="60" />
                <span className="text-sm">minutes</span>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>Password Policy</Label>
                <p className="text-sm text-muted-foreground">Minimum password requirements</p>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>IP Whitelist</Label>
                <p className="text-sm text-muted-foreground">Restrict access by IP address</p>
              </div>
              <Switch />
            </div>
            <Button className="w-full">
              <Shield className="mr-2 h-4 w-4" />
              Save Security Settings
            </Button>
          </CardContent>
        </Card>

        {/* System Maintenance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              System Maintenance
            </CardTitle>
            <CardDescription>Dangerous operations - use with caution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <Database className="h-6 w-6 mb-2" />
                Database Cleanup
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <RefreshCw className="h-6 w-6 mb-2" />
                Clear Cache
              </Button>
              <Button variant="destructive" className="h-20 flex-col">
                <AlertTriangle className="h-6 w-6 mb-2" />
                Reset System
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminSettings;