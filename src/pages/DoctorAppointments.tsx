import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Phone, FileText } from 'lucide-react';

const DoctorAppointments = () => {
  const todayAppointments = [
    {
      id: '1',
      patient: 'John Smith',
      time: '9:00 AM',
      duration: '30 min',
      type: 'Follow-up',
      status: 'confirmed',
      reason: 'Blood pressure check',
      phone: '+1 (555) 123-4567'
    },
    {
      id: '2',
      patient: 'Emily Johnson',
      time: '10:30 AM',
      duration: '45 min',
      type: 'Consultation',
      status: 'confirmed',
      reason: 'Chest pain evaluation',
      phone: '+1 (555) 234-5678'
    },
    {
      id: '3',
      patient: 'Michael Brown',
      time: '2:00 PM',
      duration: '30 min',
      type: 'Check-up',
      status: 'pending',
      reason: 'Annual physical',
      phone: '+1 (555) 345-6789'
    },
    {
      id: '4',
      patient: 'Sarah Davis',
      time: '3:30 PM',
      duration: '30 min',
      type: 'Follow-up',
      status: 'confirmed',
      reason: 'Medication review',
      phone: '+1 (555) 456-7890'
    }
  ];

  const upcomingAppointments = [
    {
      id: '5',
      patient: 'Robert Wilson',
      date: '2024-01-16',
      time: '9:30 AM',
      type: 'Consultation',
      reason: 'Heart palpitations'
    },
    {
      id: '6',
      patient: 'Lisa Anderson',
      date: '2024-01-16',
      time: '11:00 AM',
      type: 'Follow-up',
      reason: 'Post-surgery check'
    },
    {
      id: '7',
      patient: 'David Lee',
      date: '2024-01-17',
      time: '10:00 AM',
      type: 'Check-up',
      reason: 'Routine examination'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-emerald-100 text-emerald-800';
      case 'pending': return 'bg-amber-100 text-amber-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
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

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Appointments</h1>
          <p className="text-muted-foreground">Manage your patient appointments</p>
        </div>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Schedule - January 15, 2024
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayAppointments.map((appointment) => (
              <div key={appointment.id} className="p-4 border border-border rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-semibold text-lg">{appointment.time}</span>
                        <span className="text-sm text-muted-foreground">({appointment.duration})</span>
                      </div>
                      <Badge className={getStatusColor(appointment.status)}>
                        {appointment.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium text-lg">{appointment.patient}</span>
                      <Badge className={getTypeColor(appointment.type)} variant="secondary">
                        {appointment.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        {appointment.reason}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        {appointment.phone}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">View Chart</Button>
                    <Button size="sm">Start Visit</Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{appointment.patient}</span>
                    <Badge className={getTypeColor(appointment.type)} variant="secondary">
                      {appointment.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {appointment.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {appointment.reason}
                    </div>
                  </div>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">Reschedule</Button>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DoctorAppointments;