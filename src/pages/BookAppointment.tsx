import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar, Clock, User, AlertTriangle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookAppointment: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [reason, setReason] = useState('');
  const [isBooking, setIsBooking] = useState(false);

  // Mock doctors data
  const doctors = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      rating: 4.9,
      experience: '15 years',
      availableSlots: ['09:00', '10:30', '14:00', '15:30'],
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'General Practice',
      rating: 4.7,
      experience: '12 years',
      availableSlots: ['08:30', '11:00', '13:30', '16:00'],
    },
    {
      id: '3',
      name: 'Dr. Emily Davis',
      specialty: 'Dermatology',
      rating: 4.8,
      experience: '10 years',
      availableSlots: ['09:30', '11:30', '14:30', '16:30'],
    },
  ];

  const subscription = user?.subscription;
  const canBook = subscription ? subscription.appointmentsUsed < subscription.appointmentLimit : false;
  const isAtLimit = subscription?.tier !== 'premium' && !canBook;

  const selectedDoctorData = doctors.find(d => d.id === selectedDoctor);

  const handleBooking = async () => {
    if (!selectedDoctor || !selectedDate || !selectedTime || !reason.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (isAtLimit) {
      toast({
        title: "Subscription Limit Reached",
        description: "You've reached your monthly appointment limit. Please upgrade your subscription.",
        variant: "destructive",
      });
      return;
    }

    setIsBooking(true);

    // Simulate booking API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Appointment Booked!",
        description: `Your appointment with ${selectedDoctorData?.name} has been confirmed for ${selectedDate} at ${selectedTime}.`,
        variant: "default",
      });

      // Reset form
      setSelectedDoctor('');
      setSelectedDate('');
      setSelectedTime('');
      setReason('');
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was an error booking your appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <Layout>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Book New Appointment</h1>
          <p className="text-muted-foreground mt-1">
            Schedule an appointment with one of our healthcare professionals
          </p>
        </div>

        {/* Subscription Status Alert */}
        {isAtLimit && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              You've reached your monthly appointment limit ({subscription?.appointmentLimit} appointments). 
              Please upgrade your subscription to book more appointments.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Doctor Selection */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>Select Doctor</span>
                </CardTitle>
                <CardDescription>Choose your preferred healthcare provider</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {doctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedDoctor === doctor.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedDoctor(doctor.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{doctor.name}</h3>
                          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                          <p className="text-xs text-muted-foreground">{doctor.experience} experience</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">★ {doctor.rating}</Badge>
                          {selectedDoctor === doctor.id && (
                            <CheckCircle className="h-5 w-5 text-success mt-2" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Date & Time Selection */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Date & Time</span>
                </CardTitle>
                <CardDescription>Select your preferred appointment slot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Appointment Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      disabled={!selectedDoctor}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Available Times</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedDoctorData?.availableSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          className={selectedTime === time ? "bg-gradient-primary" : ""}
                          onClick={() => setSelectedTime(time)}
                          disabled={!selectedDate}
                        >
                          <Clock className="mr-1 h-3 w-3" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Details */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Appointment Details</CardTitle>
                <CardDescription>Provide information about your visit</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Visit *</Label>
                  <Textarea
                    id="reason"
                    placeholder="Please describe the reason for your appointment..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            {/* Subscription Info */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Your Subscription</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Plan:</span>
                    <Badge className="capitalize">{subscription?.tier || 'Free'}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Used this month:</span>
                    <span className="text-sm font-medium">
                      {subscription?.appointmentsUsed || 0}/{subscription?.appointmentLimit || 2}
                    </span>
                  </div>
                  {subscription?.tier !== 'premium' && (
                    <div className="text-xs text-muted-foreground">
                      Remaining: {(subscription?.appointmentLimit || 2) - (subscription?.appointmentsUsed || 0)} appointments
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Booking Summary */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Doctor:</span>
                    <p className="font-medium">{selectedDoctorData?.name || 'Not selected'}</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Specialty:</span>
                    <p className="font-medium">{selectedDoctorData?.specialty || '-'}</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Date:</span>
                    <p className="font-medium">{selectedDate || 'Not selected'}</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Time:</span>
                    <p className="font-medium">{selectedTime || 'Not selected'}</p>
                  </div>
                </div>

                <Button
                  onClick={handleBooking}
                  disabled={!selectedDoctor || !selectedDate || !selectedTime || !reason.trim() || isAtLimit || isBooking}
                  className="w-full bg-gradient-primary"
                >
                  {isBooking ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Booking...
                    </>
                  ) : (
                    'Book Appointment'
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookAppointment;