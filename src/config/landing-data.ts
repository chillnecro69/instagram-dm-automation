import { 
  MessageCircle, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock,
  Sparkles,
  BarChart3,
  MousePointer2,
  Target,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Pricing', href: '#pricing' },
]

export const STATS = [
  { number: '2.4M+', label: 'DMs Automated', icon: MessageCircle },
  { number: '150K+', label: 'Qualified Leads', icon: Target },
  { number: '12x', label: 'ROI for Brands', icon: TrendingUp },
  { number: '99.9%', label: 'Delivery Rate', icon: ShieldCheck }
]

export const FEATURES = [
  {
    icon: Sparkles,
    title: 'Precision Comment Triggers',
    description: 'Convert every "How much?" or "Details?" into a high-intent conversation instantly. Our AI understands context and intent.',
    badge: 'Popular'
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Engagement',
    description: 'Engagement is highest in the first 60 seconds. AutoDM Pro ensures no follower is ever kept waiting.',
    badge: 'Fast'
  },
  {
    icon: Users,
    title: 'Automated CRM Integration',
    description: 'Capture emails and phone numbers seamlessly. Automatically sync leads to HubSpot, Salesforce, or your custom CRM.',
    badge: 'Enterprise'
  },
  {
    icon: ArrowUpRight,
    title: 'Conversion-First Workflows',
    description: 'Design multi-step DM sequences that guide your followers from initial interest to a confirmed purchase or booking.',
    badge: 'New'
  },
  {
    icon: BarChart3,
    title: 'Executive Analytics',
    description: 'Track every rupee of revenue generated. Deep-dive into campaign performance with presentation-ready reports.',
    badge: 'Data'
  },
  {
    icon: Shield,
    title: 'Safety-First Compliance',
    description: 'Built on official Meta APIs. We use proprietary "Human-Pulse" technology to keep your account safe and compliant.',
    badge: 'Secure'
  }
]

export const PRICING = [
  {
    name: 'Starter',
    price: '0',
    description: 'Perfect for individual creators starting their automation journey.',
    features: [
      '100 automated DMs / month',
      '3 active comment triggers',
      'Basic lead capture (Email)',
      'Community support',
      'AutoDM Pro branding'
    ],
    buttonText: 'Get Started Free',
    popular: false
  },
  {
    name: 'Professional',
    price: '1,499',
    description: 'For serious creators and growing brands scaling their engagement.',
    features: [
      '5,000 automated DMs / month',
      'Unlimited comment triggers',
      'Advanced multi-step flows',
      'WhatsApp & CRM integrations',
      'No branding',
      'Priority 24/7 support'
    ],
    buttonText: 'Start 14-Day Free Trial',
    popular: true
  }
]
