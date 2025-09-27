import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Search, Filter, FileText, Phone } from 'lucide-react';

const AdminAppointments = () => {
  const appointments = [
    {
      id: '1',
      patient: 'John Smith',
      doctor: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      time: '10:30 AM',
      duration: '30 min',
      type: 'Follow-up',
      status: 'confirmed',
      specialty: 'Cardiology',
      reason: 'Blood pressure check'
    },
    {
      id: '2',
      patient: 'Emily Davis',
      doctor: 'Dr. Michael Chen',
      date: '2024-01-15',
      time: '2:00 PM',
      duration: '45 min',
      type: 'Consultation',
      status: 'confirmed',
      specialty: 'General Practice',
      reason: 'Annual physical exam'
    },
    {
      id: '3',
      patient: 'Robert Wilson',
      doctor: 'Dr. Sarah Johnson',
      date: '2024-01-16',
      time: '9:30 AM',
      duration: '30 min',
      type: 'Consultation',
      status: 'pending',
      specialty: 'Cardiology',
      reason: 'Heart palpitations'
    },
    {
      id: '4',
      patient: 'Lisa Anderson',
      doctor: 'Dr. Michael Chen',
      date: '2024-01-16',
      time: '11:00 AM',
      duration: '30 min',
      type: 'Follow-up',
      status: 'confirmed',
      specialty: 'General Practice',
      reason: 'Post-surgery check'
    },
    {
      id: '5',
      patient: 'David Lee',
      doctor: 'Dr. Sarah Johnson',
      date: '2024-01-17',
      time: '10:00 AM',
      duration: '30 min',
      type: 'Check-up',
      status: 'cancelled',
      specialty: 'Cardiology',
      reason: 'Routine examination'
    },
    {
      id: '6',
      patient: 'Maria Garcia',
      doctor: 'Dr. Michael Chen',
      date: '2024-01-17',
      time: '3:30 PM',
      duration: '45 min',
      type: 'Consultation',
      status: 'completed',
      specialty: 'General Practice',
      reason: 'Chest pain evaluation'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Consultation': return 'bg-purple-100 text-purple-800';
      case 'Follow-up': return 'bg-blue-100 text-blue-800';
      case 'Check-up': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalAppointments = appointments.length;
  const confirmedAppointments = appointments.filter(a => a.status === 'confirmed').length;
  const pendingAppointments = appointments.filter(a => a.status === 'pending').length;
  const todayAppointments = appointments.filter(a => a.date === '2024-01-15').length;

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Appointment Management</h1>
            <p className="text-muted-foreground">Manage all appointments across the system</p>
          </div>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Appointment
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Appointments</p>
                  <p className="text-2xl font-bold">{totalAppointments}</p>
                </div>
                <Calendar className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Today's Appointments</p>
                  <p className="text-2xl font-bold text-blue-600">{todayAppointments}</p>
                </div>
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Confirmed</p>
                  <p className="text-2xl font-bold text-green-600">{confirmedAppointments}</p>
                </div>
                <User className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">{pendingAppointments}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Appointments List */}
        <Card>
          <CardHeader>
            <CardTitle>All Appointments</CardTitle>
            <CardDescription>Search and manage system appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search appointments..." className="w-64" />
              </div>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Doctors</SelectItem>
                  <SelectItem value="dr-johnson">Dr. Sarah Johnson</SelectItem>
                  <SelectItem value="dr-chen">Dr. Michael Chen</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>

            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="p-4 border border-border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="font-semibold">{appointment.date}</span>
                          <Clock className="h-4 w-4 text-muted-foreground ml-2" />
                          <span className="font-medium">{appointment.time}</span>
                          <span className="text-sm text-muted-foreground">({appointment.duration})</span>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                          <Badge className={getTypeColor(appointment.type)} variant="secondary">
                            {appointment.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Patient</p>
                          <p className="font-medium">{appointment.patient}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Doctor</p>
                          <p className="font-medium">{appointment.doctor}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Specialty</p>
                          <p className="font-medium">{appointment.specialty}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Reason</p>
                          <p className="font-medium">{appointment.reason}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-1 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      {appointment.status === 'pending' && (
                        <Button size="sm">Confirm</Button>
                      )}
                      {appointment.status === 'confirmed' && (
                        <Button variant="destructive" size="sm">Cancel</Button>
                      )}
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

export default AdminAppointments;