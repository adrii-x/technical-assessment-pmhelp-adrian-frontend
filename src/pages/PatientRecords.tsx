import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, Eye, Calendar, User } from 'lucide-react';

const PatientRecords = () => {
  const medicalRecords = [
    {
      id: '1',
      title: 'Cardiology Consultation',
      doctor: 'Dr. Sarah Johnson',
      date: '2024-01-08',
      type: 'Consultation Report',
      summary: 'Routine cardiac check-up. Blood pressure and heart rate within normal ranges.',
      attachments: ['ecg-report.pdf', 'blood-test-results.pdf']
    },
    {
      id: '2',
      title: 'Blood Test Results',
      doctor: 'Dr. Michael Chen',
      date: '2024-01-03',
      type: 'Lab Results',
      summary: 'Complete blood count and metabolic panel. All values within normal limits.',
      attachments: ['lab-results-01-03.pdf']
    },
    {
      id: '3',
      title: 'Annual Physical Exam',
      doctor: 'Dr. Michael Chen',
      date: '2023-12-15',
      type: 'Physical Exam',
      summary: 'Comprehensive annual physical examination. Patient in good health.',
      attachments: ['physical-exam-report.pdf', 'vaccination-record.pdf']
    },
    {
      id: '4',
      title: 'Prescription Record',
      doctor: 'Dr. Sarah Johnson',
      date: '2023-12-10',
      type: 'Prescription',
      summary: 'Prescribed medication for blood pressure management.',
      attachments: ['prescription-12-10.pdf']
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Lab Results': return 'bg-blue-100 text-blue-800';
      case 'Consultation Report': return 'bg-green-100 text-green-800';
      case 'Physical Exam': return 'bg-purple-100 text-purple-800';
      case 'Prescription': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Medical Records</h1>
            <p className="text-muted-foreground">View and manage your medical history</p>
          </div>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export All
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Records</p>
                  <p className="text-2xl font-bold">{medicalRecords.length}</p>
                </div>
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Lab Results</p>
                  <p className="text-2xl font-bold">
                    {medicalRecords.filter(r => r.type === 'Lab Results').length}
                  </p>
                </div>
                <FileText className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Consultations</p>
                  <p className="text-2xl font-bold">
                    {medicalRecords.filter(r => r.type === 'Consultation Report').length}
                  </p>
                </div>
                <FileText className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Prescriptions</p>
                  <p className="text-2xl font-bold">
                    {medicalRecords.filter(r => r.type === 'Prescription').length}
                  </p>
                </div>
                <FileText className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Records List */}
        <Card>
          <CardHeader>
            <CardTitle>Your Medical Records</CardTitle>
            <CardDescription>Complete history of your medical documents</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {medicalRecords.map((record) => (
              <div key={record.id} className="p-4 border border-border rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{record.title}</h3>
                      <Badge className={getTypeColor(record.type)}>
                        {record.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {record.doctor}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {record.date}
                      </div>
                    </div>
                  </div>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-1 h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-1 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{record.summary}</p>
                
                {record.attachments.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Attachments:</p>
                    <div className="flex flex-wrap gap-2">
                      {record.attachments.map((attachment, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          <FileText className="mr-1 h-3 w-3" />
                          {attachment}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PatientRecords;