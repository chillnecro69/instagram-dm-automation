'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp,
  TrendingDown,
  MessageCircle,
  Users,
  Zap,
  Calendar,
  Download,
  Filter
} from 'lucide-react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

// Mock data - in real app this would come from your API
const dailyStats = [
  { date: '2024-01-15', dms: 23, triggers: 28, leads: 8 },
  { date: '2024-01-16', dms: 31, triggers: 35, leads: 12 },
  { date: '2024-01-17', dms: 18, triggers: 22, leads: 6 },
  { date: '2024-01-18', dms: 42, triggers: 48, leads: 15 },
  { date: '2024-01-19', dms: 35, triggers: 41, leads: 13 },
  { date: '2024-01-20', dms: 29, triggers: 33, leads: 11 },
  { date: '2024-01-21', dms: 38, triggers: 44, leads: 16 }
]

const automationPerformance = [
  { name: 'Free Guide Download', triggers: 156, conversions: 89, rate: 57 },
  { name: 'Course Inquiry Handler', triggers: 78, conversions: 45, rate: 58 },
  { name: 'Restaurant Recommendations', triggers: 92, conversions: 67, rate: 73 },
  { name: 'Story Reply - Workout', triggers: 23, conversions: 18, rate: 78 }
]

const responseTypeDistribution = [
  { name: 'Text Messages', value: 45, color: '#3b82f6' },
  { name: 'Link Sharing', value: 30, color: '#10b981' },
  { name: 'Lead Capture', value: 15, color: '#f59e0b' },
  { name: 'Multi-step Flows', value: 10, color: '#ef4444' }
]

const monthlyGrowth = [
  { month: 'Oct 2023', dms: 120, leads: 45 },
  { month: 'Nov 2023', dms: 185, leads: 78 },
  { month: 'Dec 2023', dms: 290, leads: 125 },
  { month: 'Jan 2024', dms: 425, leads: 189 }
]

export default function AnalyticsPage() {
  const totalDMs = dailyStats.reduce((sum, day) => sum + day.dms, 0)
  const totalTriggers = dailyStats.reduce((sum, day) => sum + day.triggers, 0)
  const totalLeads = dailyStats.reduce((sum, day) => sum + day.leads, 0)
  const avgConversionRate = Math.round((totalLeads / totalTriggers) * 100)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Analytics</h2>
          <p className="text-muted-foreground">
            Track your automation performance and engagement metrics
          </p>
        </div>
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Last 7 Days
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">DMs Sent (7d)</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDMs}</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +15% vs last week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Triggers (7d)</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTriggers}</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8% vs last week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leads Captured (7d)</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLeads}</div>
            <div className="flex items-center text-xs text-red-600 mt-1">
              <TrendingDown className="h-3 w-3 mr-1" />
              -3% vs last week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate (7d)</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgConversionRate}%</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +2.3% vs last week
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Activity Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Activity</CardTitle>
            <CardDescription>
              DMs sent, triggers fired, and leads captured over the last 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                />
                <YAxis />
                <Tooltip 
                  labelFormatter={(value) => new Date(value).toLocaleDateString()}
                />
                <Legend />
                <Line type="monotone" dataKey="dms" stroke="#3b82f6" name="DMs Sent" strokeWidth={2} />
                <Line type="monotone" dataKey="triggers" stroke="#10b981" name="Triggers" strokeWidth={2} />
                <Line type="monotone" dataKey="leads" stroke="#f59e0b" name="Leads" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Response Type Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Response Types</CardTitle>
            <CardDescription>
              Distribution of different automation response types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={responseTypeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {responseTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Automation Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Automation Performance</CardTitle>
            <CardDescription>
              Conversion rates by automation over the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={automationPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  fontSize={12}
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="rate" fill="#3b82f6" name="Conversion Rate %" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly Growth */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Growth</CardTitle>
            <CardDescription>
              DMs sent and leads captured over the last 4 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="dms" fill="#3b82f6" name="DMs Sent" radius={[2, 2, 0, 0]} />
                <Bar dataKey="leads" fill="#10b981" name="Leads Captured" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Performance Table */}
      <Card>
        <CardHeader>
          <CardTitle>Automation Breakdown</CardTitle>
          <CardDescription>
            Detailed performance metrics for each automation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4 font-medium">Automation Name</th>
                  <th className="text-right py-2 px-4 font-medium">Triggers</th>
                  <th className="text-right py-2 px-4 font-medium">Conversions</th>
                  <th className="text-right py-2 px-4 font-medium">Rate</th>
                  <th className="text-center py-2 px-4 font-medium">Trend</th>
                </tr>
              </thead>
              <tbody>
                {automationPerformance.map((automation, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">
                      <div className="font-medium">{automation.name}</div>
                    </td>
                    <td className="py-3 px-4 text-right">{automation.triggers.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right">{automation.conversions.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right">
                      <span className={`font-medium ${
                        automation.rate >= 60 ? 'text-green-600' : 
                        automation.rate >= 40 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {automation.rate}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {automation.rate >= 60 ? (
                        <TrendingUp className="h-4 w-4 text-green-500 inline" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500 inline" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Insights & Recommendations */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">📊 AI Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">🚀 What's Working Well</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• "Restaurant Recommendations" has your highest conversion rate at 73%</li>
                <li>• Daily activity has grown 15% compared to last week</li>
                <li>• Story reply automations show strong engagement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">💡 Optimization Opportunities</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• Consider A/B testing your "Free Guide" messaging</li>
                <li>• Lead capture declined 3% - review your forms</li>
                <li>• Your weekend engagement is lower than weekdays</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
