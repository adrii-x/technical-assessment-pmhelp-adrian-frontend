import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'patient' | 'doctor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  subscription?: {
    tier: 'free' | 'basic' | 'premium';
    expiresAt: string;
    appointmentsUsed: number;
    appointmentLimit: number;
  };
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const mockUsers: Record<string, User> = {
  'patient@example.com': {
    id: '1',
    name: 'John Smith',
    email: 'patient@example.com',
    role: 'patient',
    subscription: {
      tier: 'basic',
      expiresAt: '2025-12-31T23:59:59Z',
      appointmentsUsed: 2,
      appointmentLimit: 5,
    },
  },
  'doctor@example.com': {
    id: '2',
    name: 'Dr. Sarah Johnson',
    email: 'doctor@example.com',
    role: 'doctor',
  },
  'admin@example.com': {
    id: '3',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
  },
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored token on app start
    const storedToken = localStorage.getItem('medportal_token');
    const storedUser = localStorage.getItem('medportal_user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser = mockUsers[email];
    if (!mockUser || password !== 'password123') {
      setIsLoading(false);
      throw new Error('Invalid credentials');
    }
    
    const mockToken = `mock-jwt-token-${mockUser.id}`;
    
    setUser(mockUser);
    setToken(mockToken);
    
    localStorage.setItem('medportal_token', mockToken);
    localStorage.setItem('medportal_user', JSON.stringify(mockUser));
    
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('medportal_token');
    localStorage.removeItem('medportal_user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};