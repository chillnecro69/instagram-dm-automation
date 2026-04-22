import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sparkles, ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-32 container mx-auto px-4">
      <div className="relative rounded-[4rem] overflow-hidden p-12 md:p-24 text-center group">
        <div className="absolute inset-0 instagram-gradient group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/20 text-white text-[11px] font-black uppercase tracking-widest mb-10">
            <Sparkles className="h-4 w-4" />
            <span>Limited Time Offer</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
            Join the elite 1% of <br />
            Instagram creators.
          </h2>
          <p className="text-xl text-white/90 mb-12 font-medium">
            Stop letting manual DMs bottleneck your growth. Get started with 
            AutoDM Pro today and watch your engagement skyrocket.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="h-16 px-12 rounded-full text-xl font-black hover:scale-105 transition-all duration-300 shadow-2xl">
                Unlock 24/7 Automation <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-white/60 text-sm font-bold uppercase tracking-widest">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
