import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Users, Calendar, Clock, TrendingUp, Heart } from 'lucide-react';

const DoctorAnalytics = () => {
  const monthlyData = [
    { month: 'Sep', patients: 45, appointments: 52, hours: 96 },
    { month: 'Oct', patients: 52, appointments: 61, hours: 108 },
    { month: 'Nov', patients: 48, appointments: 56, hours: 102 },
    { month: 'Dec', patients: 58, appointments: 68, hours: 118 },
    { month: 'Jan', patients: 62, appointments: 74, hours: 128 }
  ];

  const specialtyStats = [
    { specialty: 'Cardiology', count: 145, percentage: 45 },
    { specialty: 'General Practice', count: 98, percentage: 30 },
    { specialty: 'Consultation', count: 52, percentage: 16 },
    { specialty: 'Follow-up', count: 29, percentage: 9 }
  ];

  const patientSatisfaction = {
    overall: 4.8,
    reviews: 127,
    ratings: [
      { stars: 5, count: 98 },
      { stars: 4, count: 23 },
      { stars: 3, count: 4 },
      { stars: 2, count: 2 },
      { stars: 1, count: 0 }
    ]
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Practice Analytics</h1>
          <p className="text-muted-foreground">Track your practice performance and patient outcomes</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Patients</p>
                  <p className="text-2xl font-bold">248</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% from last month
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
                  <p className="text-sm font-medium text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold">74</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8% from last month
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Hours Worked</p>
                  <p className="text-2xl font-bold">128</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +5% from last month
                  </p>
                </div>
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Satisfaction</p>
                  <p className="text-2xl font-bold">{patientSatisfaction.overall}</p>
                  <p className="text-xs text-muted-foreground">
                    {patientSatisfaction.reviews} reviews
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
            <CardDescription>Track your practice growth over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={data.month} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-sm font-medium">{data.month} 2024</div>
                    <div className="flex gap-8">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Patients</p>
                        <p className="text-xl font-bold text-blue-600">{data.patients}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Appointments</p>
                        <p className="text-xl font-bold text-green-600">{data.appointments}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Hours</p>
                        <p className="text-xl font-bold text-purple-600">{data.hours}</p>
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
          {/* Specialty Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Appointment Types</CardTitle>
              <CardDescription>Breakdown by specialty and type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {specialtyStats.map((stat) => (
                  <div key={stat.specialty}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{stat.specialty}</span>
                      <span className="text-sm text-muted-foreground">{stat.count} ({stat.percentage}%)</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${stat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Patient Satisfaction */}
          <Card>
            <CardHeader>
              <CardTitle>Patient Satisfaction</CardTitle>
              <CardDescription>Reviews and ratings from patients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">{patientSatisfaction.overall}</div>
                  <div className="text-sm text-muted-foreground">out of 5.0</div>
                  <div className="text-sm text-muted-foreground">{patientSatisfaction.reviews} total reviews</div>
                </div>
                
                <div className="space-y-2">
                  {patientSatisfaction.ratings.map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-2">
                      <span className="text-sm w-8">{rating.stars}★</span>
                      <div className="flex-1 bg-secondary rounded-full h-2">
                        <div 
                          className="bg-yellow-500 h-2 rounded-full" 
                          style={{ width: `${(rating.count / patientSatisfaction.reviews) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground w-8">{rating.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DoctorAnalytics;