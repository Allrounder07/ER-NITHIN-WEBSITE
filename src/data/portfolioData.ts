import { PortfolioItem } from '../types';

export const portfolioProjects: PortfolioItem[] = [
  {
    id: 'kolar-agrimart',
    title: 'Kolar AgroConnect & Market Gateway',
    category: 'Web Application',
    clientType: 'Agriculture & Farmer Collective (Kolar Dist)',
    description: 'A responsive agricultural portal enabling local farmers to check daily APMC market prices for tomatoes, mangoes and silk, track weather advisories, and verify village land survey records.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    features: [
      'Live Mandi/APMC Daily Price Ticker',
      'Survey Number & RTC Quick-lookup Helper',
      'Multilingual Kannada & English Interface',
      'Farmer WhatsApp Direct Order Inquiry System',
      'Mobile-first responsive design for field use'
    ],
    metrics: 'Used by 450+ farmers in Kolar & Malur',
    accentColor: 'from-emerald-500 to-teal-600',
    icon: 'Wheat'
  },
  {
    id: 'malur-silk-sarees',
    title: 'Malur Heritage Silk & Handloom Store',
    category: 'E-Commerce',
    clientType: 'Retail & Textile Enterprise',
    description: 'An online storefront and interactive catalog showcasing pure silk sarees, handloom fabrics, and traditional bridal wear with instant WhatsApp direct-order fulfillment and UPI payment options.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'MySQL', 'Cloudinary'],
    features: [
      'High-Resolution Zoomable Saree Gallery',
      'One-Click "Order this on WhatsApp" Checkout',
      'Category Filters by Fabric, Border, & Price',
      'Integrated Razorpay & UPI Payment Flow',
      'Lightweight bundle loading under 1.2s on 4G'
    ],
    metrics: '3.4x Increase in online customer inquiries',
    accentColor: 'from-amber-500 to-rose-600',
    icon: 'ShoppingBag'
  },
  {
    id: 'santhehalli-school-portal',
    title: 'Santhehalli Rural Academy Management System',
    category: 'Web Application',
    clientType: 'Educational Institution',
    description: 'Custom school administration software with student attendance tracking, online report card generation, homework assignments portal, and parent SMS/WhatsApp notification triggers.',
    techStack: ['Python', 'React', 'PostgreSQL', 'FastAPI', 'Chart.js'],
    features: [
      'Bilingual Kannada/English Report Card Generator',
      'Student Fee Collection & Receipt Generator (PDF)',
      'Digital Notice Board with Circular PDF Downloads',
      'Teacher Assignment Upload & Submission Tracking',
      'Admin Dashboard with Class-wise Attendance Analytics'
    ],
    metrics: 'Automates records for 600+ students',
    accentColor: 'from-blue-600 to-indigo-700',
    icon: 'School'
  },
  {
    id: 'granite-stone-showcase',
    title: 'Sri Manjunatha Granite & Stone Quarries',
    category: 'Business Website',
    clientType: 'Manufacturing & Industrial Enterprise',
    description: 'A heavy-duty corporate showcase website for a granite slab manufacturer, featuring 3D slab previews, interactive square-foot cost estimator, and client quotation generation.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
    features: [
      'Interactive Granite Texture & Finish Gallery',
      'Instant Sq. Ft. Material Cost Calculator',
      'Detailed Export & Logistics Portfolio',
      'Google Maps Location & Turn-by-Turn Directions',
      'High Performance Google Lighthouse Score of 98'
    ],
    metrics: '98/100 Lighthouse Performance Score',
    accentColor: 'from-cyan-500 to-blue-600',
    icon: 'Building2'
  },
  {
    id: 'quick-xerox-hub',
    title: 'SmartPrint & Document Queue Portal',
    category: 'Digital Platform',
    clientType: 'ER Nithin Digital Center Utility',
    description: 'A real-time web portal allowing local students, advocates and citizens to upload PDFs, specify page ranges, color/BW mode, and book instant pickup slots at the Santhehalli center.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS'],
    features: [
      'Drag-and-Drop PDF Upload with Page Counter',
      'Instant Price Calculation (Color vs B&W)',
      'Direct WhatsApp Order Notification with Attached Token',
      'Queue Status Tracker (Printing / Ready for Pickup)',
      'Zero paper waste with pre-flight check'
    ],
    metrics: 'Cuts counter waiting time by 80%',
    accentColor: 'from-violet-500 to-purple-700',
    icon: 'Printer'
  }
];
