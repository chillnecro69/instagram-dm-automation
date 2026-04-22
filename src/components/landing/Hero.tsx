import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Instagram, Play, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-black uppercase tracking-widest mb-10 fade-in-up">
          <Sparkles className="h-3.5 w-3.5" />
          <span>India's #1 Engagement Platform</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] fade-in-up delay-100">
          Scale Your Social<br />
          <span className="instagram-text">Revenue Automatically</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium fade-in-up delay-200">
          Stop manually replying to "Check DM" comments. AutoDM Pro converts every interaction 
          into a high-value lead instantly using official Meta APIs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center fade-in-up delay-300">
          <Link href="/signup">
            <Button size="lg" className="h-16 px-12 rounded-full text-lg font-black bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/25 hover:-translate-y-1 transition-all duration-300">
              Start Free Trial <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
          <Link href="#features">
            <Button variant="outline" size="lg" className="h-16 px-10 rounded-full text-lg font-bold border-2 hover:bg-muted/50">
              Watch Demo <Play className="ml-2 h-4 w-4 fill-current" />
            </Button>
          </Link>
        </div>

        {/* Hero Visual */}
        <div className="mt-24 relative max-w-5xl mx-auto fade-in-up delay-300">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="rounded-[2.5rem] border border-white/5 overflow-hidden premium-shadow bg-muted/30 aspect-video flex items-center justify-center group cursor-pointer relative">
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
              <div className="w-24 h-24 rounded-full instagram-gradient flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                <Play className="h-10 w-10 text-white fill-white ml-1" />
              </div>
            </div>
            <div className="text-muted-foreground font-black text-4xl opacity-20 uppercase tracking-[0.5em]">Dashboard Preview</div>
          </div>
          
          {/* Floating Badges */}
          <div className="absolute -top-6 -left-6 glass px-6 py-4 rounded-3xl premium-shadow border-white/10 hidden lg:block animate-bounce-slow">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Zap className="h-5 w-5 text-green-500" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-black uppercase text-muted-foreground leading-none mb-1">Response Time</div>
                <div className="text-lg font-black leading-none">0.8 Seconds</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 glass px-6 py-4 rounded-3xl premium-shadow border-white/10 hidden lg:block animate-bounce-slow delay-500">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Instagram className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-black uppercase text-muted-foreground leading-none mb-1">Leads Today</div>
                <div className="text-lg font-black leading-none">+1,284</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
