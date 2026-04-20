'use client'

import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Instagram,
  User,
  CreditCard,
  Bell,
  Shield,
  Trash2,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Settings,
  Link as LinkIcon,
  Unlink
} from 'lucide-react'

export default function SettingsPage() {
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  
  const [notifications, setNotifications] = useState({
    automationTriggers: true,
    dailyReports: true,
    leadCaptures: true,
    planLimits: true,
    systemUpdates: false
  })

  const [profile, setProfile] = useState({
    name: session?.user?.name || '',
    email: session?.user?.email || '',
    timezone: 'Asia/Kolkata'
  })

  const handleInstagramConnect = () => {
    // In real app, this would redirect to Instagram OAuth
    window.location.href = '/api/auth/signin/instagram'
  }

  const handleInstagramDisconnect = async () => {
    setIsLoading(true)
    try {
      // In real app, this would call your API to disconnect
      console.log('Disconnecting Instagram account...')
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      console.error('Error disconnecting Instagram:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveProfile = async () => {
    setIsLoading(true)
    try {
      // In real app, this would call your API
      console.log('Saving profile:', profile)
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      console.error('Error saving profile:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveNotifications = async () => {
    setIsLoading(true)
    try {
      // In real app, this would call your API
      console.log('Saving notifications:', notifications)
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      console.error('Error saving notifications:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteAccount = async () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      setIsLoading(true)
      try {
        // In real app, this would call your API
        console.log('Deleting account...')
        await new Promise(resolve => setTimeout(resolve, 2000))
        signOut()
      } catch (error) {
        console.error('Error deleting account:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account, Instagram connection, and preferences
        </p>
      </div>

      {/* Instagram Connection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Instagram className="h-5 w-5 mr-2 text-pink-500" />
            Instagram Connection
          </CardTitle>
          <CardDescription>
            Connect your Instagram business account to enable automations
          </CardDescription>
        </CardHeader>
        <CardContent>
          {session?.instagramConnected ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-green-50 border-green-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-medium">Connected to @{session.instagramUsername}</p>
                    <p className="text-sm text-muted-foreground">
                      Your Instagram account is successfully connected
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={handleInstagramDisconnect}
                  disabled={isLoading}
                  loading={isLoading}
                >
                  <Unlink className="h-4 w-4 mr-2" />
                  Disconnect
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Permissions Granted:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      Read comments on posts
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      Send direct messages
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      Read story replies
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Account Info:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Account Type: Business</li>
                    <li>Followers: 12.5K</li>
                    <li>Last Sync: 2 hours ago</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-6">
              <Instagram className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Instagram Not Connected</h3>
              <p className="text-muted-foreground mb-6">
                Connect your Instagram business account to start using automations
              </p>
              <Button onClick={handleInstagramConnect}>
                <LinkIcon className="h-4 w-4 mr-2" />
                Connect Instagram Account
              </Button>
              
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                  <div className="text-left">
                    <h4 className="font-medium text-amber-800">Requirements</h4>
                    <ul className="text-sm text-amber-700 mt-1 space-y-1">
                      <li>• You need an Instagram Business or Creator account</li>
                      <li>• Your account must be connected to a Facebook Page</li>
                      <li>• You must be an admin of the Facebook Page</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            Profile Settings
          </CardTitle>
          <CardDescription>
            Update your personal information and preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={profile.name}
                onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={profile.email}
                onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Timezone</label>
            <select
              className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={profile.timezone}
              onChange={(e) => setProfile(prev => ({ ...prev, timezone: e.target.value }))}
            >
              <option value="Asia/Kolkata">India Standard Time (IST)</option>
              <option value="America/New_York">Eastern Time (EST)</option>
              <option value="America/Los_Angeles">Pacific Time (PST)</option>
              <option value="Europe/London">Greenwich Mean Time (GMT)</option>
              <option value="Asia/Dubai">Gulf Standard Time (GST)</option>
            </select>
          </div>
          
          <Button onClick={handleSaveProfile} disabled={isLoading} loading={isLoading}>
            Save Profile Changes
          </Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            Notification Preferences
          </CardTitle>
          <CardDescription>
            Choose what notifications you want to receive
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { key: 'automationTriggers', label: 'Automation Triggers', description: 'When your automations are triggered' },
            { key: 'dailyReports', label: 'Daily Reports', description: 'Daily summary of your automation activity' },
            { key: 'leadCaptures', label: 'New Lead Captures', description: 'When someone submits their contact info' },
            { key: 'planLimits', label: 'Plan Limit Alerts', description: 'When you\'re approaching your monthly limits' },
            { key: 'systemUpdates', label: 'System Updates', description: 'New features and maintenance notifications' }
          ].map((notification) => (
            <div key={notification.key} className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">{notification.label}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
              <input
                type="checkbox"
                checked={notifications[notification.key as keyof typeof notifications]}
                onChange={(e) => setNotifications(prev => ({
                  ...prev,
                  [notification.key]: e.target.checked
                }))}
                className="w-4 h-4 text-primary"
              />
            </div>
          ))}
          
          <Button onClick={handleSaveNotifications} disabled={isLoading} loading={isLoading}>
            Save Notification Settings
          </Button>
        </CardContent>
      </Card>

      {/* Billing & Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="h-5 w-5 mr-2" />
            Billing & Plan
          </CardTitle>
          <CardDescription>
            Manage your subscription and billing information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="font-medium">Current Plan: Free</p>
              <p className="text-sm text-muted-foreground">
                85 of 100 DMs used this month
              </p>
              <div className="w-48 bg-muted rounded-full h-2 mt-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
            <Button variant="instagram">
              Upgrade to Pro
            </Button>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Next billing date: N/A (Free plan)</p>
            <p>Payment method: None</p>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Security
          </CardTitle>
          <CardDescription>
            Manage your account security and data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Add extra security to your account</p>
            </div>
            <Button variant="outline" disabled>
              Coming Soon
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">Export Data</p>
              <p className="text-sm text-muted-foreground">Download all your automation data</p>
            </div>
            <Button variant="outline">
              <ExternalLink className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center text-red-600">
            <Trash2 className="h-5 w-5 mr-2" />
            Danger Zone
          </CardTitle>
          <CardDescription>
            Irreversible actions that will permanently affect your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 border border-red-200 rounded-lg bg-red-50">
            <h4 className="font-medium text-red-800 mb-2">Delete Account</h4>
            <p className="text-sm text-red-700 mb-4">
              This will permanently delete your account, all automations, captured leads, and analytics data. 
              This action cannot be undone.
            </p>
            <Button 
              variant="destructive"
              onClick={handleDeleteAccount}
              disabled={isLoading}
              loading={isLoading}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
