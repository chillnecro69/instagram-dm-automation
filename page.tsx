import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  MessageCircle, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock,
  Instagram,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Instagram className="h-8 w-8 text-instagram" />
            <span className="text-2xl font-bold gradient-text">AutoDM Pro</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Automate Your Instagram DMs
            <span className="block text-transparent bg-clip-text instagram-gradient">
              24/7 Lead Capture
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Say goodbye to manual responses. Let AI handle your Instagram comments and DMs 
            while you focus on creating content. Perfect for Indian creators and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/signup">
              <Button size="lg" className="px-8">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg">
                See How It Works
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            ✨ Free forever plan • 🚀 No credit card required • 🇮🇳 Made for Indian creators
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '10K+', label: 'DMs Automated', icon: MessageCircle },
            { number: '500+', label: 'Happy Creators', icon: Users },
            { number: '5x', label: 'Response Speed', icon: Zap },
            { number: '99.9%', label: 'Uptime', icon: Shield }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, powerful automation that works while you sleep. 
            No technical knowledge required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: MessageCircle,
              title: 'Comment Auto-Reply',
              description: 'Automatically respond to comments with keywords. Send links, capture leads, or ask users to follow.'
            },
            {
              icon: Zap,
              title: 'Instant DM Response',
              description: 'Reply to direct messages instantly. Set up keyword triggers for common questions.'
            },
            {
              icon: Users,
              title: 'Lead Capture',
              description: 'Collect email and phone numbers directly in DMs. Export leads to your CRM or WhatsApp.'
            },
            {
              icon: Shield,
              title: 'Follower Gate',
              description: 'Require users to follow before sending content. Grow your audience while sharing resources.'
            },
            {
              icon: TrendingUp,
              title: 'Analytics Dashboard',
              description: 'Track response rates, engagement, and leads captured. Optimize your automation for better results.'
            },
            {
              icon: Clock,
              title: '24/7 Automation',
              description: 'Never miss an opportunity. Your automation works round the clock, even when you\'re offline.'
            }
          ].map((feature, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Get started in minutes, not hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Connect Instagram',
                description: 'Securely connect your Instagram business account using official Meta API.'
              },
              {
                step: '2',
                title: 'Set Up Automations',
                description: 'Create triggers for comments, DMs, and stories. Choose what to send back.'
              },
              {
                step: '3',
                title: 'Go Live & Scale',
                description: 'Your automations work 24/7. Track performance and optimize for better results.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full instagram-gradient flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Start free, scale as you grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-2xl">Free</CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
              <div className="text-4xl font-bold">₹0<span className="text-lg text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  '100 DMs per month',
                  '3 active automations',
                  'Comment auto-reply',
                  'Basic analytics',
                  'Email support'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6" variant="outline">
                Start Free
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="relative border-primary shadow-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Pro</CardTitle>
              <CardDescription>For serious creators and businesses</CardDescription>
              <div className="text-4xl font-bold">₹999<span className="text-lg text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  '2,500 DMs per month',
                  'Unlimited automations',
                  'Lead capture forms',
                  'Advanced analytics',
                  'Multi-step flows',
                  'Priority support',
                  'WhatsApp integration'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6">
                Start 14-Day Trial
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Automate?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of Indian creators who are scaling their Instagram engagement 
            with automated DMs. Start your free trial today.
          </p>
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="px-8">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Instagram className="h-6 w-6 text-instagram" />
                <span className="text-xl font-bold gradient-text">AutoDM Pro</span>
              </div>
              <p className="text-muted-foreground">
                The easiest way to automate your Instagram DMs and grow your business.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Help Center</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Status</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Privacy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Terms</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 AutoDM Pro. Made with ❤️ in India for creators worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
