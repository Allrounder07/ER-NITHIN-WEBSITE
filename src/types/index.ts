export type Language = 'en' | 'kn';
export type Theme = 'dark' | 'light';

export interface ServiceItem {
  id: string;
  title: string;
  titleKn: string;
  category: 'web-development' | 'digital-services';
  icon: string;
  shortDesc: string;
  shortDescKn: string;
  fullDesc: string;
  fullDescKn: string;
  features: string[];
  featuresKn: string[];
  requirements?: string[];
  requirementsKn?: string[];
  turnaroundTime: string;
  turnaroundTimeKn: string;
  priceHint?: string;
  badge?: string;
  officialPortalNote?: string;
  officialPortalNoteKn?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Web Application' | 'Business Website' | 'E-Commerce' | 'Digital Platform';
  description: string;
  clientType: string;
  techStack: string[];
  features: string[];
  metrics: string;
  liveUrlMock?: string;
  accentColor: string;
  icon: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email?: string;
  serviceCategory: string;
  message: string;
  urgency: 'normal' | 'urgent' | 'immediate';
  preferredContact: 'whatsapp' | 'phone' | 'email';
  createdAt: string;
  status: 'new' | 'contacted' | 'completed';
}

export interface FaqItem {
  id: string;
  category: 'web' | 'land-records' | 'xerox-print' | 'general';
  question: string;
  questionKn: string;
  answer: string;
  answerKn: string;
}

export interface QuoteCalculation {
  projectType: string;
  pagesCount: number;
  selectedFeatures: string[];
  timeline: 'standard' | 'express';
  maintenanceMonths: number;
  estimatedMin: number;
  estimatedMax: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  nameKn?: string;
  role: string;
  roleKn?: string;
  location: string;
  locationKn?: string;
  serviceCategory: 'web-dev' | 'digital-services' | 'printing';
  serviceUsed: string;
  serviceUsedKn: string;
  rating: number; // 1-5
  review: string;
  reviewKn: string;
  date: string;
  verified: boolean;
  avatarSeed: string; // Used for customized initial avatar or placeholder
  projectMetric?: string;
}
