'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Instagram, ArrowLeft } from 'lucide-react'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-instagram/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <Link href="/" className="absolute top-8 left-8 flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Link>

      <Card className="w-full max-w-md border-white/5 glass premium-shadow fade-in-up">
        <CardHeader className="text-center pt-10">
          <div className="w-12 h-12 rounded-2xl instagram-gradient flex items-center justify-center mx-auto mb-6 shadow-lg shadow-instagram/20">
            <Instagram className="h-7 w-7 text-white" />
          </div>
          <CardTitle className="text-3xl font-black tracking-tight mb-2">Welcome Back</CardTitle>
          <CardDescription className="text-base font-medium">
            Access your automation command center and scale your engagement.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pb-10">
          <div className="space-y-4">
            <Button 
              onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
              className="w-full h-12 rounded-full font-bold text-base bg-white text-black hover:bg-white/90 border border-black/10"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </Button>
            <Button 
              onClick={() => signIn('instagram', { callbackUrl: '/dashboard' })}
              variant="instagram" 
              className="w-full h-12 rounded-full font-bold text-base shadow-xl shadow-instagram/20"
            >
              <Instagram className="w-5 h-5 mr-3" />
              Continue with Instagram
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">New to AutoDM Pro?</span>
            </div>
          </div>

          <Link href="/signup">
            <Button variant="outline" className="w-full h-12 rounded-full font-bold text-base border-2 hover:bg-primary/5 transition-colors mt-2">
              Create an Account
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
