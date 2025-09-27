import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Search, Crown, UserCheck, Shield, Mail, Phone, Calendar, Settings } from 'lucide-react';

const AdminUsers = () => {
  const users = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@email.com',
      role: 'patient',
      phone: '+1 (555) 123-4567',
      joinDate: '2023-08-15',
      lastActive: '2024-01-14',
      status: 'active',
      subscription: 'basic',
      appointmentsCount: 8
    },
    {
      id: '2',
      name: 'Dr. Sarah Johnson',
      email: 'dr.sarah@hospital.com',
      role: 'doctor',
      phone: '+1 (555) 234-5678',
      joinDate: '2023-06-10',
      lastActive: '2024-01-15',
      status: 'active',
      specialty: 'Cardiology',
      patientsCount: 142
    },
    {
      id: '3',
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      role: 'patient',
      phone: '+1 (555) 345-6789',
      joinDate: '2023-11-22',
      lastActive: '2024-01-12',
      status: 'active',
      subscription: 'premium',
      appointmentsCount: 15
    },
    {
      id: '4',
      name: 'Dr. Michael Chen',
      email: 'dr.chen@clinic.com',
      role: 'doctor',
      phone: '+1 (555) 456-7890',
      joinDate: '2023-09-05',
      lastActive: '2024-01-15',
      status: 'active',
      specialty: 'General Practice',
      patientsCount: 89
    },
    {
      id: '5',
      name: 'Admin User',
      email: 'admin@medportal.com',
      role: 'admin',
      phone: '+1 (555) 567-8901',
      joinDate: '2023-05-01',
      lastActive: '2024-01-15',
      status: 'active'
    },
    {
      id: '6',
      name: 'Robert Wilson',
      email: 'robert.wilson@email.com',
      role: 'patient',
      phone: '+1 (555) 678-9012',
      joinDate: '2024-01-10',
      lastActive: '2024-01-13',
      status: 'pending',
      subscription: 'free',
      appointmentsCount: 1
    }
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return Shield;
      case 'doctor': return UserCheck;
      case 'patient': return User;
      default: return User;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800';
      case 'doctor': return 'bg-blue-100 text-blue-800';
      case 'patient': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSubscriptionColor = (subscription: string) => {
    switch (subscription) {
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'basic': return 'bg-blue-100 text-blue-800';
      case 'free': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'active').length;
  const doctors = users.filter(u => u.role === 'doctor').length;
  const patients = users.filter(u => u.role === 'patient').length;

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">User Management</h1>
            <p className="text-muted-foreground">Manage all users in the system</p>
          </div>
          <Button>
            <User className="mr-2 h-4 w-4" />
            Add New User
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold">{totalUsers}</p>
                </div>
                <User className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold text-green-600">{activeUsers}</p>
                </div>
                <UserCheck className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Doctors</p>
                  <p className="text-2xl font-bold text-blue-600">{doctors}</p>
                </div>
                <UserCheck className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Patients</p>
                  <p className="text-2xl font-bold text-purple-600">{patients}</p>
                </div>
                <User className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Users List */}
        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
            <CardDescription>Search and manage system users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search users..." className="w-64" />
              </div>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="doctor">Doctor</SelectItem>
                  <SelectItem value="patient">Patient</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {users.map((user) => {
                const RoleIcon = getRoleIcon(user.role);
                return (
                  <div key={user.id} className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <RoleIcon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{user.name}</h3>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{user.email}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Badge className={getRoleColor(user.role)} variant="secondary">
                              {user.role}
                            </Badge>
                            <Badge className={getStatusColor(user.status)}>
                              {user.status}
                            </Badge>
                            {user.subscription && (
                              <Badge className={getSubscriptionColor(user.subscription)} variant="outline">
                                {user.subscription}
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Phone</p>
                            <p className="font-medium">{user.phone}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Joined</p>
                            <p className="font-medium">{user.joinDate}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Last Active</p>
                            <p className="font-medium">{user.lastActive}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">
                              {user.role === 'doctor' ? 'Patients' : user.role === 'patient' ? 'Appointments' : 'Role'}
                            </p>
                            <p className="font-medium">
                              {user.role === 'doctor' && user.patientsCount}
                              {user.role === 'patient' && user.appointmentsCount}
                              {user.role === 'admin' && 'System Admin'}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">
                          <Settings className="mr-1 h-4 w-4" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {user.status === 'active' ? (
                          <Button variant="destructive" size="sm">Suspend</Button>
                        ) : (
                          <Button variant="default" size="sm">Activate</Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminUsers;