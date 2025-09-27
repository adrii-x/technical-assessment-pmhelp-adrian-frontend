# Medportal - Healthcare Management Platform

A comprehensive healthcare management system built with modern web technologies to streamline medical operations and enhance patient care.

## 🌐 Live Demo

**Vercel Deployment:** [https://technical-assessment-pmhelp-adrian-pi.vercel.app/login](https://technical-assessment-pmhelp-adrian-pi.vercel.app/login)

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://technical-assessment-pmhelp-adrian-pi.vercel.app/login)


## 🏥 Features

### Patient Management
- **Patient Dashboard**: Centralized view of patient information and health metrics
- **Appointment Booking**: Intuitive scheduling system with calendar integration
- **Medical Records**: Secure digital health records with search and filtering
- **Appointment History**: Complete timeline of past and upcoming appointments

### Doctor Portal
- **Doctor Dashboard**: Real-time overview of daily schedule and patient load
- **Patient Management**: Access to complete patient profiles and medical histories
- **Appointment Scheduling**: Efficient appointment management with conflict detection
- **Analytics**: Performance metrics and patient care insights

### Administrative Features
- **Admin Dashboard**: Comprehensive system overview with key performance indicators
- **User Management**: Role-based access control for patients, doctors, and staff
- **System Analytics**: Detailed reporting on appointments, user activity, and system performance
- **Settings Management**: System configuration and customization options

### Security & Authentication
- **Role-based Access Control**: Secure authentication system with patient, doctor, and admin roles
- **Protected Routes**: Ensures users can only access authorized sections
- **Session Management**: Secure login/logout with persistent sessions

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom component library built on Radix UI primitives
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: React Router DOM for client-side navigation
- **Form Handling**: React Hook Form with Zod validation
- **Date Management**: date-fns for date utilities
- **Icons**: Lucide React for consistent iconography
- **Notifications**: Sonner for toast notifications
- **Charts**: Recharts for data visualization
- **Theme**: next-themes for dark/light mode support

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI component library
│   ├── Layout.tsx      # Main application layout
│   └── ProtectedRoute.tsx # Route protection wrapper
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication state management
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Application pages
│   ├── patient/        # Patient-specific pages
│   ├── doctor/         # Doctor-specific pages
│   ├── admin/          # Administrative pages
│   └── auth/           # Authentication pages
└── main.tsx           # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd medportal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The built application will be available in the `dist` directory.

## 🎨 Design System

The application uses a comprehensive design system built on Tailwind CSS with:

- **Semantic Color Tokens**: Consistent color palette with light/dark mode support
- **Typography Scale**: Harmonious text sizing and spacing
- **Component Variants**: Flexible UI components with multiple states
- **Responsive Design**: Mobile-first approach with breakpoint consistency
- **Accessibility**: WCAG compliant components with proper focus management

## 🔐 User Roles & Permissions

### Patient
- View personal dashboard and health metrics
- Book and manage appointments
- Access medical records and history
- Update personal information

### Doctor
- Manage patient appointments and schedules
- Access patient medical records
- View analytics and performance metrics
- Update patient information and notes

### Administrator
- Full system access and user management
- System-wide analytics and reporting
- Configuration and settings management
- Monitor system performance and usage

## 📱 Responsive Design

Medportal is fully responsive and optimized for:
- Desktop computers (1024px+)
- Tablets (768px - 1023px)
- Mobile devices (320px - 767px)

## 🧪 Development

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting (configured via ESLint)
- Component-driven development

### Performance Optimizations
- Lazy loading for route components
- Optimized bundle splitting
- Image optimization
- Efficient re-rendering with React Query

## 📈 Analytics & Monitoring

The platform includes comprehensive analytics for:
- Appointment trends and patterns
- User engagement metrics
- System performance monitoring
- Resource utilization tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation for common solutions

---

Built By Adrian Okonkwo
