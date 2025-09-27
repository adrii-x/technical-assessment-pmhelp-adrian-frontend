import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Users, 
  Clock, 
  TrendingUp,
  Activity,
  FileText,
  User,
  CheckCircle
} from 'lucide-react';

const DoctorDashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data for doctor dashboard
  const todayAppointments = [
    {
      id: '1',
      patientName: 'John Smith',
      time: '09:00 AM',
      type: 'Consultation',
      status: 'confirmed',
    },
    {
      id: '2',
      patientName: 'Emma Wilson',
      time: '10:30 AM',
      type: 'Follow-up',
      status: 'confirmed',
    },
    {
      id: '3',
      patientName: 'Robert Johnson',
      time: '02:00 PM',
      type: 'Initial Consultation',
      status: 'pending',
    },
  ];

  const monthlyStats = {
    totalPatients: 45,
    totalSessions: 128,
    totalHours: 96,
    avgRating: 4.8,
  };

  const recentPatients = [
    { id: '1', name: 'Alice Brown', lastVisit: '2024-09-20', condition: 'Hypertension' },
    { id: '2', name: 'David Lee', lastVisit: '2024-09-18', condition: 'Diabetes Type 2' },
    { id: '3', name: 'Sarah Miller', lastVisit: '2024-09-15', condition: 'Annual Checkup' },
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Good morning, {user?.name}
            </h1>
            <p className="text-muted-foreground mt-1">
              You have {todayAppointments.length} appointments today
            </p>
          </div>
          <div className="mt-4 lg:mt-0 flex space-x-3">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Add Note
            </Button>
            <Button className="bg-gradient-primary">
              <Activity className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todayAppointments.length}</div>
              <p className="text-xs text-muted-foreground mt-2">
                Next at {todayAppointments[0]?.time}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{monthlyStats.totalPatients}</div>
              <p className="text-xs text-muted-foreground mt-2">
                This month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sessions</CardTitle>
              <Clock className="h-4 w-4 text-accent-bright" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{monthlyStats.totalSessions}</div>
              <p className="text-xs text-muted-foreground mt-2">
                {monthlyStats.totalHours} hours total
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rating</CardTitle>
              <TrendingUp className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{monthlyStats.avgRating}</div>
              <p className="text-xs text-muted-foreground mt-2">
                Average patient rating
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Schedule */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Today's Schedule</span>
              </CardTitle>
              <CardDescription>Your appointments for today</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {todayAppointments.map((appointment) => (
                <div 
                  key={appointment.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-gradient-card border"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{appointment.patientName}</p>
                      <p className="text-sm text-muted-foreground">{appointment.type}</p>
                      <p className="text-sm text-muted-foreground">{appointment.time}</p>
                    </div>
                  </div>
                  <div>
                    {appointment.status === 'confirmed' ? (
                      <Badge variant="default" className="bg-success">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Confirmed
                      </Badge>
                    ) : (
                      <Badge variant="secondary">
                        Pending
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View Full Schedule
              </Button>
            </CardContent>
          </Card>

          {/* Recent Patients */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-success" />
                <span>Recent Patients</span>
              </CardTitle>
              <CardDescription>Recently treated patients</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentPatients.map((patient) => (
                <div 
                  key={patient.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-gradient-card border"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 bg-success/10 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">{patient.condition}</p>
                      <p className="text-xs text-muted-foreground">Last visit: {patient.lastVisit}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Patients
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks for your practice</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <FileText className="h-6 w-6" />
                <span>Add Patient Note</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Calendar className="h-6 w-6" />
                <span>Schedule Follow-up</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Activity className="h-6 w-6" />
                <span>View Analytics</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Users className="h-6 w-6" />
                <span>Patient Management</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Performance Overview */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-warning" />
              <span>Monthly Performance</span>
            </CardTitle>
            <CardDescription>Your practice statistics for this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{monthlyStats.totalPatients}</div>
                <p className="text-sm text-muted-foreground">Patients Seen</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-success">{monthlyStats.totalSessions}</div>
                <p className="text-sm text-muted-foreground">Total Sessions</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-bright">{monthlyStats.totalHours}</div>
                <p className="text-sm text-muted-foreground">Hours Worked</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-warning">{monthlyStats.avgRating}</div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DoctorDashboard;