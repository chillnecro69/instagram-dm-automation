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
            <Button size="lg" className="px-8">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            ✨ Free forever plan • 🚀 No credit card required • 🇮🇳 Made for Indian creators
          </p>
        </div>
      </section>
    </div>
  )
}
