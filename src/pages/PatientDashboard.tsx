import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  FileText, 
  UserCheck, 
  Crown, 
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const PatientDashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data for appointments
  const upcomingAppointments = [
    {
      id: '1',
      doctorName: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2024-10-15',
      time: '10:00 AM',
      status: 'confirmed',
    },
    {
      id: '2',
      doctorName: 'Dr. Michael Chen',
      specialty: 'General Practice',
      date: '2024-10-20',
      time: '2:30 PM',
      status: 'pending',
    },
  ];

  const recentRecords = [
    {
      id: '1',
      title: 'Annual Checkup',
      doctor: 'Dr. Sarah Johnson',
      date: '2024-09-15',
      type: 'Routine',
    },
    {
      id: '2',
      title: 'Blood Test Results',
      doctor: 'Dr. Michael Chen',
      date: '2024-09-10',
      type: 'Lab Results',
    },
  ];

  const subscription = user?.subscription;
  const progressPercentage = subscription 
    ? (subscription.appointmentsUsed / subscription.appointmentLimit) * 100 
    : 0;

  const getSubscriptionColor = (tier: string) => {
    switch (tier) {
      case 'premium': return 'bg-gradient-to-r from-amber-400 to-amber-600';
      case 'basic': return 'bg-gradient-to-r from-blue-400 to-blue-600';
      default: return 'bg-gradient-to-r from-gray-400 to-gray-600';
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Welcome back, {user?.name}
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your health appointments and records
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <Link to="/patient/book">
              <Button className="bg-gradient-primary">
                <UserCheck className="mr-2 h-4 w-4" />
                Book New Appointment
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Subscription Status */}
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subscription</CardTitle>
              <Crown className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Badge 
                  className={`${subscription ? getSubscriptionColor(subscription.tier) : 'bg-gray-500'} text-white capitalize`}
                >
                  {subscription?.tier || 'Free'}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {subscription?.tier === 'premium' 
                  ? 'Unlimited appointments' 
                  : `${subscription?.appointmentsUsed || 0}/${subscription?.appointmentLimit || 2} used`
                }
              </p>
            </CardContent>
          </Card>

          {/* Appointments This Month */}
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{subscription?.appointmentsUsed || 0}</div>
              <div className="mt-2">
                {subscription && subscription.tier !== 'premium' && (
                  <Progress value={progressPercentage} className="h-2" />
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {subscription?.tier === 'premium' 
                  ? 'Appointments booked' 
                  : `${subscription ? subscription.appointmentLimit - subscription.appointmentsUsed : 2} remaining`
                }
              </p>
            </CardContent>
          </Card>

          {/* Upcoming Appointments */}
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
              <Clock className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingAppointments.length}</div>
              <p className="text-xs text-muted-foreground mt-2">
                Next: {upcomingAppointments[0]?.date} at {upcomingAppointments[0]?.time}
              </p>
            </CardContent>
          </Card>

          {/* Medical Records */}
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Records</CardTitle>
              <FileText className="h-4 w-4 text-accent-bright" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{recentRecords.length}</div>
              <p className="text-xs text-muted-foreground mt-2">
                Recent documents available
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Appointments */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Upcoming Appointments</span>
              </CardTitle>
              <CardDescription>Your scheduled medical appointments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.length > 0 ? (
                <>
                  {upcomingAppointments.map((appointment) => (
                    <div 
                      key={appointment.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-gradient-card border"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{appointment.doctorName}</p>
                        <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                        <p className="text-sm text-muted-foreground">
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                      <div>
                        {appointment.status === 'confirmed' ? (
                          <Badge variant="default" className="bg-success">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Confirmed
                          </Badge>
                        ) : (
                          <Badge variant="secondary">
                            <AlertTriangle className="mr-1 h-3 w-3" />
                            Pending
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                  <Link to="/patient/appointments">
                    <Button variant="outline" className="w-full">
                      View All Appointments
                    </Button>
                  </Link>
                </>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <p className="text-muted-foreground mt-4">No upcoming appointments</p>
                  <Link to="/patient/book">
                    <Button className="mt-4 bg-gradient-primary">
                      Book Your First Appointment
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Records */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-accent-bright" />
                <span>Recent Medical Records</span>
              </CardTitle>
              <CardDescription>Your latest medical documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentRecords.length > 0 ? (
                <>
                  {recentRecords.map((record) => (
                    <div 
                      key={record.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-gradient-card border"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{record.title}</p>
                        <p className="text-sm text-muted-foreground">{record.doctor}</p>
                        <p className="text-xs text-muted-foreground">{record.date}</p>
                      </div>
                      <Badge variant="outline">{record.type}</Badge>
                    </div>
                  ))}
                  <Link to="/patient/records">
                    <Button variant="outline" className="w-full">
                      View All Records
                    </Button>
                  </Link>
                </>
              ) : (
                <div className="text-center py-8">
                  <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <p className="text-muted-foreground mt-4">No medical records yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you might want to perform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/patient/book">
                <Button variant="outline" className="w-full h-20 flex-col space-y-2">
                  <UserCheck className="h-6 w-6" />
                  <span>Book Appointment</span>
                </Button>
              </Link>
              <Link to="/patient/records">
                <Button variant="outline" className="w-full h-20 flex-col space-y-2">
                  <FileText className="h-6 w-6" />
                  <span>View Records</span>
                </Button>
              </Link>
              <Link to="/patient/appointments">
                <Button variant="outline" className="w-full h-20 flex-col space-y-2">
                  <Calendar className="h-6 w-6" />
                  <span>My Appointments</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PatientDashboard;