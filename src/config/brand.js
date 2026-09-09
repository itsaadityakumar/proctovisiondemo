export const brand = {
  name: 'Procto Vision',
  tagline: 'Secure Online Examinations',
  description: 'Enterprise-grade examination and proctoring platform for institutions, educators, and organizations.',
  email: 'proctovision@gmail.com',
  whatsapp: '+91 6207817603',
  phone: '+91 6207817603',
  mapPlaceholder: 'Replace with actual Google Maps embed URL',
  location: 'CGC University, Mohali, India',
  copyright: `© ${new Date().getFullYear()} Procto Vision. All rights reserved.`,
  social: {
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
};

export const colors = {
  primary: '#4338CA',
  primaryDark: '#3730A3',
  primaryLight: '#6366F1',
  accent: '#0EA5E9',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
  white: '#FFFFFF',
  black: '#000000',
};

export const team = [
  {
    name: 'Aditya Kumar',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 12+ years in EdTech. Passionate about making examinations secure and accessible.',
    photo: null,
  },
  {
    name: 'Manpreet',
    role: 'Co-Founder & Chief Technology Officer',
    bio: 'Full-stack architect specializing in scalable platforms, AI integration, and security-first engineering.',
    photo: null,
  },
  {
    name: 'Aniket Kumar',
    role: 'Chief Operating Officer',
    bio: 'Operations expert with deep experience in SaaS scaling, institutional partnerships, and enterprise delivery.',
    photo: null,
  },
  {
    name: 'Mohit Kumar',
    role: 'Chief Marketing Officer',
    bio: 'Strategic marketer driving brand awareness and growth in the education technology sector.',
    photo: null,
  },
];

export const pricing = {
  perTest: {
    name: 'Per Test',
    description: 'Pay per examination conducted',
    basePrice: 499,
    perStudentRate: 5,
    tiers: [
      { min: 0, max: 200, rate: 5 },
      { min: 201, max: 500, rate: 4 },
      { min: 501, max: 1000, rate: 3 },
      { min: 1001, max: 5000, rate: 2.5 },
      { min: 5001, max: 10000, rate: 2 },
    ],
    features: [
      'Online examination access',
      'X-Code exam entry',
      'Basic proctoring ready',
      'Student management',
      'Exam analytics',
      'Email support',
    ],
  },
  enterprise: {
    name: 'Enterprise',
    description: 'Custom solution for institutions',
    price: 'Custom',
    features: [
      'Unlimited examinations',
      'Full proctoring suite',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantees',
      'Custom onboarding',
      'API access',
      'Advanced analytics',
    ],
  },
};

export const demoAccounts = {
  student: {
    email: 'student@demo.proctovision.com',
    password: 'demo1234',
    name: 'Aditya Verma',
    id: 'PUC-STU-2026030042',
    role: 'student',
  },
  teacher: {
    email: 'teacher@demo.proctovision.com',
    password: 'demo1234',
    name: 'Dr. Neha Gupta',
    id: 'PUC-TCH-1024',
    role: 'teacher',
  },
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Platform', path: '/platform' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Security', path: '/security' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
];
