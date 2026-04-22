import { FEATURES } from '@/config/landing-data'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export function Features() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-24">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">Capabilities</h2>
          <h3 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter">
            Stop losing revenue to <br />
            <span className="instagram-text text-white">slow manual replies.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <Card key={index} className="border-none bg-muted/30 card-hover overflow-hidden group p-4">
              <CardHeader className="p-6">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-background flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 premium-shadow border border-white/5">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {feature.badge}
                  </span>
                </div>
                <CardTitle className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed font-medium">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
