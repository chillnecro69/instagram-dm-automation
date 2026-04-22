'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Instagram } from 'lucide-react'
import { NAV_LINKS } from '@/config/landing-data'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-white/5 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-9 h-9 rounded-xl instagram-gradient flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-instagram/20">
            <Instagram className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-black tracking-tight">
            AutoDM<span className="instagram-text">Pro</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-10 text-[13px] font-bold uppercase tracking-widest text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Link href="/login">
            <Button variant="ghost" className="text-sm font-bold hover:bg-primary/5 rounded-full px-6">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="rounded-full px-7 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 text-sm font-bold h-11">
              Start Free
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
