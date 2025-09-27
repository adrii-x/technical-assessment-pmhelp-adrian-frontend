import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Search, Phone, Calendar, FileText, Heart } from 'lucide-react';

const DoctorPatients = () => {
  const patients = [
    {
      id: '1',
      name: 'John Smith',
      age: 45,
      gender: 'Male',
      phone: '+1 (555) 123-4567',
      email: 'john.smith@email.com',
      lastVisit: '2024-01-08',
      nextAppointment: '2024-01-22',
      condition: 'Hypertension',
      status: 'Active',
      riskLevel: 'Medium'
    },
    {
      id: '2',
      name: 'Emily Johnson',
      age: 32,
      gender: 'Female',
      phone: '+1 (555) 234-5678',
      email: 'emily.johnson@email.com',
      lastVisit: '2024-01-10',
      nextAppointment: null,
      condition: 'Chest Pain Evaluation',
      status: 'Under Treatment',
      riskLevel: 'High'
    },
    {
      id: '3',
      name: 'Michael Brown',
      age: 28,
      gender: 'Male',
      phone: '+1 (555) 345-6789',
      email: 'michael.brown@email.com',
      lastVisit: '2023-12-15',
      nextAppointment: '2024-01-15',
      condition: 'Annual Physical',
      status: 'Healthy',
      riskLevel: 'Low'
    },
    {
      id: '4',
      name: 'Sarah Davis',
      age: 52,
      gender: 'Female',
      phone: '+1 (555) 456-7890',
      email: 'sarah.davis@email.com',
      lastVisit: '2024-01-05',
      nextAppointment: '2024-01-15',
      condition: 'Diabetes Management',
      status: 'Stable',
      riskLevel: 'Medium'
    },
    {
      id: '5',
      name: 'Robert Wilson',
      age: 60,
      gender: 'Male',
      phone: '+1 (555) 567-8901',
      email: 'robert.wilson@email.com',
      lastVisit: '2024-01-12',
      nextAppointment: '2024-01-16',
      condition: 'Heart Palpitations',
      status: 'Monitoring',
      riskLevel: 'High'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Under Treatment': return 'bg-orange-100 text-orange-800';
      case 'Healthy': return 'bg-blue-100 text-blue-800';
      case 'Stable': return 'bg-purple-100 text-purple-800';
      case 'Monitoring': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Patients</h1>
            <p className="text-muted-foreground">Manage your patient roster</p>
          </div>
          <Button>
            <User className="mr-2 h-4 w-4" />
            Add New Patient
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Patients</p>
                  <p className="text-2xl font-bold">{patients.length}</p>
                </div>
                <User className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">High Risk</p>
                  <p className="text-2xl font-bold text-red-600">
                    {patients.filter(p => p.riskLevel === 'High').length}
                  </p>
                </div>
                <Heart className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Treatment</p>
                  <p className="text-2xl font-bold">
                    {patients.filter(p => p.status === 'Under Treatment').length}
                  </p>
                </div>
                <FileText className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Upcoming Visits</p>
                  <p className="text-2xl font-bold">
                    {patients.filter(p => p.nextAppointment).length}
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardHeader>
            <CardTitle>Patient List</CardTitle>
            <CardDescription>Search and manage your patients</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-6">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search patients..." className="max-w-sm" />
            </div>

            <div className="space-y-4">
              {patients.map((patient) => (
                <div key={patient.id} className="p-4 border border-border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-lg font-semibold text-primary">
                            {patient.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{patient.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {patient.age} years • {patient.gender}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getStatusColor(patient.status)}>
                            {patient.status}
                          </Badge>
                          <Badge className={getRiskColor(patient.riskLevel)}>
                            {patient.riskLevel} Risk
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Condition</p>
                          <p className="font-medium">{patient.condition}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Last Visit</p>
                          <p className="font-medium">{patient.lastVisit}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Next Appointment</p>
                          <p className="font-medium">
                            {patient.nextAppointment || 'Not scheduled'}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Contact</p>
                          <p className="font-medium">{patient.phone}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-1 h-4 w-4" />
                        View Chart
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="mr-1 h-4 w-4" />
                        Schedule
                      </Button>
                      <Button variant="outline" size="sm">
                        <Phone className="mr-1 h-4 w-4" />
                        Contact
                      </Button>
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

export default DoctorPatients;