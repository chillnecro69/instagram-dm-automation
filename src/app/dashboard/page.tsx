import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Instagram, 
  Zap, 
  MessageSquare, 
  Users, 
  BarChart3, 
  Settings, 
  Plus, 
  History,
  TrendingUp,
  Activity
} from "lucide-react"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-instagram/5 rounded-full blur-[120px] -z-10" />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 lg:py-12 relative">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6 fade-in-up">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">
              Welcome back, <span className="instagram-text">{session.user?.name?.split(' ')[0] || 'Creator'}</span>
            </h1>
            <p className="text-muted-foreground font-medium flex items-center">
              <Activity className="h-4 w-4 mr-2 text-green-500" />
              Your automation engine is running smoothly.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-11 px-6 rounded-xl glass border-white/10 font-bold text-sm flex items-center gap-2 hover:bg-white/5 transition-all">
              <History className="h-4 w-4" />
              Logs
            </button>
            <button className="h-11 px-6 rounded-xl instagram-gradient text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-instagram/20 hover:scale-105 transition-all">
              <Plus className="h-4 w-4" />
              New Trigger
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 fade-in-up delay-100">
          {[
            { title: "Total DMs", value: "1,284", change: "+12%", icon: MessageSquare, color: "text-primary" },
            { title: "Leads Captured", value: "426", change: "+5%", icon: Users, color: "text-instagram" },
            { title: "Avg Response", value: "0.8s", change: "Instant", icon: Zap, color: "text-yellow-500" },
            { title: "Conversion", value: "18.4%", change: "+2.1%", icon: TrendingUp, color: "text-green-500" }
          ].map((stat, i) => (
            <Card key={i} className="glass border-white/5 premium-shadow card-hover overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <stat.icon className="h-12 w-12" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-black mb-1">{stat.value}</div>
                <div className={`text-xs font-bold ${stat.change.includes('+') ? 'text-green-500' : 'text-muted-foreground'}`}>
                  {stat.change} <span className="text-muted-foreground font-medium ml-1">since yesterday</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Connected Accounts */}
          <Card className="lg:col-span-2 glass border-white/5 premium-shadow fade-in-up delay-200">
            <CardHeader className="border-b border-white/5">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2 text-xl font-bold">
                  <Instagram className="h-5 w-5 text-instagram" />
                  <span>Instagram Accounts</span>
                </CardTitle>
                <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider">
                  Live System
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-20 text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-instagram/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-20 h-20 rounded-3xl bg-muted border border-white/5 flex items-center justify-center">
                  <Instagram className="h-10 w-10 text-muted-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-black mb-2">Connect your first account</h3>
              <p className="text-muted-foreground text-sm max-w-sm mb-8 leading-relaxed">
                Connect your Instagram Business account to unlock real-time DM automation and AI-powered comment replies.
              </p>
              <button className="h-12 px-10 rounded-full instagram-gradient text-white font-black text-sm hover:scale-105 transition-transform duration-300 shadow-xl shadow-instagram/30">
                Link Instagram Business
              </button>
            </CardContent>
          </Card>

          {/* Quick Actions & Tips */}
          <div className="space-y-6 fade-in-up delay-300">
            <Card className="glass border-white/5 premium-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  Quick Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Auto-reply to DMs", done: false },
                  { label: "Comment to DM Trigger", done: false },
                  { label: "Story Mention Reply", done: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="w-5 h-5 rounded-md border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                      {item.done && <div className="w-2 h-2 bg-primary rounded-sm" />}
                    </div>
                    <span className="text-sm font-bold">{item.label}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass border-white/5 premium-shadow overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1 h-full instagram-gradient" />
              <CardHeader>
                <CardTitle className="text-lg font-bold">Pro Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Accounts with <span className="text-foreground font-bold">Comment-to-DM</span> automations see a 40% higher conversion rate on sales posts.
                </p>
                <button className="mt-4 text-xs font-bold text-primary hover:underline">
                  Learn more &rarr;
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

