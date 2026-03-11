// Zetech University Configuration
export const schoolConfig = {
  // School Information
  name: 'Zetech University',
  shortName: 'ZTU',
  slogan: 'Innovation Meets Education',
  emailDomain: '@zetech.ac.ke',
  
  // Contact Information
  contact: {
    email: 'support@zetech.ac.ke',
    phone: '+254 (0) 710 120 120',
    address: 'Nairobi, Kenya',
    website: 'www.zetech.ac.ke'
  },
  
  // Campus Locations (Common Lost & Found areas on campus)
  locations: [
    'Main Gate',
    'Library',
    'Student Center',
    'Science Block',
    'Engineering Lab',
    'Computer Lab',
    'Cafeteria',
    'Dining Hall',
    'Basketball Court',
    'Football Pitch',
    'Dormitory A',
    'Dormitory B',
    'Dormitory C',
    'Administration Office',
    'Health Center',
    'Bookstore',
    'Parking Lot',
    'Auditorium',
    'Class Block A',
    'Class Block B'
  ],
  
  // Item Categories for Lost & Found
  categories: [
    'Electronics',
    'Documents',
    'Accessories',
    'Clothing',
    'Books & Stationery',
    'Bags & Luggage',
    'Personal Items',
    'Keys',
    'Jewelry',
    'Other'
  ],
  
  // Brand Colors
  colors: {
    primary: '#1e40af',      // Deep Blue (Zetech Primary)
    secondary: '#f59e0b',     // Amber (Zetech Accent)
    success: '#10b981',       // Emerald
    danger: '#ef4444',        // Red
    warning: '#f59e0b',       // Amber
    info: '#3b82f6',          // Blue
    dark: '#0f172a',          // Slate-900
    light: '#f1f5f9'          // Slate-100
  },
  
  // Admin Email Addresses (Users with these emails get admin access)
  adminEmails: [
    'admin@zetech.ac.ke',
    'security@zetech.ac.ke',
    'lost-and-found@zetech.ac.ke'
  ]
};

export default schoolConfig;
