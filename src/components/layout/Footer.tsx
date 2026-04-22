import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg instagram-gradient flex items-center justify-center">
                <Instagram className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">AutoDM Pro</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The elite automation platform for Instagram creators and brands in India. 
              Built on official Meta APIs for 100% safety and compliance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all">
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-black text-sm uppercase tracking-widest mb-6 text-foreground">Product</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">API Docs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-sm uppercase tracking-widest mb-6 text-foreground">Company</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-sm uppercase tracking-widest mb-6 text-foreground">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Get the latest automation strategies directly in your inbox.</p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-muted border-none rounded-full px-4 text-xs flex-grow focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              />
              <button className="bg-primary text-white text-[10px] font-bold px-4 py-2 rounded-full hover:bg-primary/90 transition-colors uppercase tracking-wider">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} AutoDM Pro. A product of NextGen Creators India.
          </p>
          <div className="flex items-center space-x-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <span>Status: Operational</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  )
}
