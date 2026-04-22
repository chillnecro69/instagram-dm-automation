import { STATS } from '@/config/landing-data'

export function Stats() {
  return (
    <section className="py-24 bg-muted/20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 rounded-2xl bg-background border border-white/5 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:instagram-gradient group-hover:text-white transition-all duration-500 premium-shadow">
                <stat.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="text-5xl font-black mb-3 tracking-tighter">{stat.number}</div>
              <div className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
