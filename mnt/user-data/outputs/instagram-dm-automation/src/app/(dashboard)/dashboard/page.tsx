'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  MessageCircle, 
  Zap, 
  Users, 
  TrendingUp,
  Plus,
  Instagram,
  Activity,
  Clock,
  Target,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import Link from 'next/link'

// Mock data - in real app this would come from your database
const stats = {
  totalDMs: 1247,
  dmsSentToday: 23,
  activeAutomations: 5,
  leadsGenerated: 89,
  responseRate: 94.5,
  avgResponseTime: 2.3
}

const recentActivity = [
  {
    id: 1,
    type: 'automation_trigger',
    user: '@sarah_lifestyle',
    action: 'Commented "GUIDE" on your latest post',
    response: 'Sent free lifestyle guide',
    time: '2 minutes ago'
  },
  {
    id: 2,
    type: 'lead_capture',
    user: '@fitness_raj',
    action: 'Shared email for workout plan',
    response: 'Added to email list',
    time: '7 minutes ago'
  },
  {
    id: 3,
    type: 'dm_sent',
    user: '@mumbai_foodie',
    action: 'Messaged for restaurant recommendations',
    response: 'Sent food guide PDF',
    time: '12 minutes ago'
  },
  {
    id: 4,
    type: 'automation_trigger',
    user: '@tech_student',
    action: 'Replied to story with "COURSE"',
    response: 'Asked to follow + sent course link',
    time: '18 minutes ago'
  }
]

const quickActions = [
  {
    title: 'Create Automation',
    description: 'Set up a new comment or DM trigger',
    href: '/dashboard/automations/create',
    icon: Plus,
    color: 'bg-blue-500'
  },
  {
    title: 'View Analytics',
    description: 'Check your performance metrics',
    href: '/dashboard/analytics',
    icon: TrendingUp,
    color: 'bg-green-500'
  },
  {
    title: 'Export Leads',
    description: 'Download captured lead data',
    href: '/dashboard/leads',
    icon: Users,
    color: 'bg-purple-500'
  },
  {
    title: 'Instagram Settings',
    description: 'Manage your account connection',
    href: '/dashboard/settings',
    icon: Instagram,
    color: 'bg-pink-500'
  }
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h2 className="text-3xl font-bold">Welcome back! 👋</h2>
        <p className="text-muted-foreground mt-2">
          Here's what's happening with your Instagram automation today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total DMs Sent</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalDMs.toLocaleString()}</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +12% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">DMs Today</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.dmsSentToday}</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +3 from yesterday
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Automations</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeAutomations}</div>
            <div className="text-xs text-muted-foreground mt-1">
              2 paused, 3 running
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leads Generated</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.leadsGenerated}</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +18 this week
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-green-500" />
              Response Rate
            </CardTitle>
            <CardDescription>
              Percentage of comments that triggered automations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {stats.responseRate}%
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: `${stats.responseRate}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Excellent! Industry average is 75%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-500" />
              Avg Response Time
            </CardTitle>
            <CardDescription>
              How fast your automations respond to comments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {stats.avgResponseTime}s
            </div>
            <div className="flex items-center text-sm text-green-600">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              0.8s faster than last week
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Lightning fast automation ⚡
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks to manage your Instagram automation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted transition-colors cursor-pointer">
                  <div className={`p-2 rounded-lg ${action.color}`}>
                    <action.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{action.title}</p>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest automation triggers and responses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg border bg-muted/30">
                <div className="p-2 rounded-full bg-primary/10">
                  {activity.type === 'automation_trigger' && <Zap className="h-4 w-4 text-primary" />}
                  {activity.type === 'lead_capture' && <Users className="h-4 w-4 text-green-500" />}
                  {activity.type === 'dm_sent' && <MessageCircle className="h-4 w-4 text-blue-500" />}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.user}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                  <p className="text-sm text-primary font-medium mt-1">
                    → {activity.response}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/dashboard/messages">
              <Button variant="outline">View All Activity</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      {stats.activeAutomations === 0 && (
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">🚀 Get Started</CardTitle>
            <CardDescription>
              You haven't created any automations yet. Let's set up your first one!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg border">
                  <h4 className="font-medium mb-2">Comment Auto-Reply</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    When someone comments "LINK", automatically send them your guide
                  </p>
                  <Link href="/dashboard/automations/create?type=comment">
                    <Button size="sm">Create Comment Automation</Button>
                  </Link>
                </div>
                <div className="p-4 bg-background rounded-lg border">
                  <h4 className="font-medium mb-2">Story Reply Handler</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Respond to story replies with keywords like "INFO" or "PRICE"
                  </p>
                  <Link href="/dashboard/automations/create?type=story">
                    <Button size="sm" variant="outline">Create Story Automation</Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
