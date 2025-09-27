import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Users, Calendar, DollarSign, TrendingUp, Clock, UserCheck, Heart } from 'lucide-react';

const AdminAnalytics = () => {
  const systemMetrics = {
    totalUsers: 1247,
    activeUsers: 1089,
    totalAppointments: 5842,
    revenue: 324500,
    avgSatisfaction: 4.7
  };

  const monthlyData = [
    { month: 'Sep', users: 1089, appointments: 524, revenue: 26200 },
    { month: 'Oct', users: 1134, appointments: 582, revenue: 29100 },
    { month: 'Nov', users: 1178, appointments: 561, revenue: 28050 },
    { month: 'Dec', users: 1205, appointments: 648, revenue: 32400 },
    { month: 'Jan', users: 1247, appointments: 692, revenue: 34600 }
  ];

  const userDistribution = [
    { role: 'Patients', count: 1089, percentage: 87.3, color: 'bg-blue-500' },
    { role: 'Doctors', count: 142, percentage: 11.4, color: 'bg-green-500' },
    { role: 'Admins', count: 16, percentage: 1.3, color: 'bg-purple-500' }
  ];

  const appointmentStats = [
    { status: 'Completed', count: 4234, percentage: 72.5, color: 'bg-green-500' },
    { status: 'Confirmed', count: 1024, percentage: 17.5, color: 'bg-blue-500' },
    { status: 'Pending', count: 384, percentage: 6.6, color: 'bg-yellow-500' },
    { status: 'Cancelled', count: 200, percentage: 3.4, color: 'bg-red-500' }
  ];

  const topDoctors = [
    { name: 'Dr. Sarah Johnson', specialty: 'Cardiology', appointments: 248, rating: 4.9 },
    { name: 'Dr. Michael Chen', specialty: 'General Practice', appointments: 189, rating: 4.8 },
    { name: 'Dr. Emily Davis', specialty: 'Pediatrics', appointments: 167, rating: 4.9 },
    { name: 'Dr. Robert Wilson', specialty: 'Orthopedics', appointments: 143, rating: 4.7 },
    { name: 'Dr. Lisa Anderson', specialty: 'Dermatology', appointments: 128, rating: 4.8 }
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">System Analytics</h1>
          <p className="text-muted-foreground">Comprehensive overview of platform performance</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold">{systemMetrics.totalUsers.toLocaleString()}</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.2% from last month
                  </p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold">{systemMetrics.activeUsers.toLocaleString()}</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +5.4% from last month
                  </p>
                </div>
                <UserCheck className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Appointments</p>
                  <p className="text-2xl font-bold">{systemMetrics.totalAppointments.toLocaleString()}</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.8% from last month
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                  <p className="text-2xl font-bold">${systemMetrics.revenue.toLocaleString()}</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +15.3% from last month
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-emerald-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Satisfaction</p>
                  <p className="text-2xl font-bold">{systemMetrics.avgSatisfaction}</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +0.2 from last month
                  </p>
                </div>
                <Heart className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Monthly Trends
            </CardTitle>
            <CardDescription>Track platform growth over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={data.month} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-6">
                    <div className="w-16 text-sm font-medium">{data.month} 2024</div>
                    <div className="flex gap-12">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Users</p>
                        <p className="text-xl font-bold text-blue-600">{data.users.toLocaleString()}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Appointments</p>
                        <p className="text-xl font-bold text-green-600">{data.appointments}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Revenue</p>
                        <p className="text-xl font-bold text-emerald-600">${data.revenue.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {index > 0 && (
                      <div className="flex items-center text-green-600 text-sm">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        Growth
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>User Distribution</CardTitle>
              <CardDescription>Breakdown by user roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userDistribution.map((user) => (
                  <div key={user.role}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{user.role}</span>
                      <span className="text-sm text-muted-foreground">{user.count} ({user.percentage}%)</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className={`${user.color} h-2 rounded-full`}
                        style={{ width: `${user.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Appointment Status */}
          <Card>
            <CardHeader>
              <CardTitle>Appointment Status</CardTitle>
              <CardDescription>Distribution of appointment statuses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointmentStats.map((stat) => (
                  <div key={stat.status}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{stat.status}</span>
                      <span className="text-sm text-muted-foreground">{stat.count} ({stat.percentage}%)</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className={`${stat.color} h-2 rounded-full`}
                        style={{ width: `${stat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Performing Doctors */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Doctors</CardTitle>
            <CardDescription>Doctors with highest appointment volumes and ratings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topDoctors.map((doctor, index) => (
                <div key={doctor.name} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">#{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{doctor.name}</h3>
                      <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Appointments</p>
                      <p className="text-xl font-bold">{doctor.appointments}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Rating</p>
                      <p className="text-xl font-bold text-yellow-600">{doctor.rating}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminAnalytics;