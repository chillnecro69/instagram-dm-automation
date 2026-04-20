'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Plus, 
  Zap, 
  MessageCircle,
  Instagram,
  Users,
  Edit,
  Trash2,
  MoreVertical,
  Play,
  Pause,
  Copy,
  TrendingUp
} from 'lucide-react'
import Link from 'next/link'

// Mock data - in real app this would come from your database
const automations = [
  {
    id: 1,
    name: 'Free Guide Download',
    triggerType: 'comment',
    keywords: ['GUIDE', 'FREE', 'DOWNLOAD'],
    targetPost: 'Latest post about content creation',
    responseType: 'link',
    isActive: true,
    triggered: 156,
    converted: 89,
    createdAt: '2024-01-15',
    description: 'Sends free content creation guide when users comment with keywords'
  },
  {
    id: 2,
    name: 'Course Inquiry Handler',
    triggerType: 'dm',
    keywords: ['COURSE', 'PRICE', 'INFO'],
    responseType: 'multi_step',
    isActive: true,
    triggered: 78,
    converted: 45,
    createdAt: '2024-01-10',
    description: 'Multi-step flow for course inquiries with follow requirement'
  },
  {
    id: 3,
    name: 'Story Reply - Workout Plan',
    triggerType: 'story_reply',
    keywords: ['WORKOUT', 'FITNESS', 'PLAN'],
    responseType: 'lead_capture',
    isActive: false,
    triggered: 23,
    converted: 18,
    createdAt: '2024-01-05',
    description: 'Collects email for workout plan delivery'
  },
  {
    id: 4,
    name: 'Restaurant Recommendations',
    triggerType: 'comment',
    keywords: ['FOOD', 'RESTAURANT', 'EAT'],
    responseType: 'text',
    isActive: true,
    triggered: 92,
    converted: 67,
    createdAt: '2024-01-20',
    description: 'Simple text response with food recommendations'
  }
]

const getStatusBadge = (isActive: boolean) => {
  if (isActive) {
    return (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5" />
        Active
      </span>
    )
  } else {
    return (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-1.5" />
        Paused
      </span>
    )
  }
}

const getTriggerIcon = (type: string) => {
  switch (type) {
    case 'comment':
      return <MessageCircle className="h-4 w-4" />
    case 'dm':
      return <MessageCircle className="h-4 w-4" />
    case 'story_reply':
      return <Instagram className="h-4 w-4" />
    default:
      return <Zap className="h-4 w-4" />
  }
}

const getTriggerLabel = (type: string) => {
  switch (type) {
    case 'comment':
      return 'Comment Trigger'
    case 'dm':
      return 'DM Trigger'
    case 'story_reply':
      return 'Story Reply'
    default:
      return 'Unknown'
  }
}

export default function AutomationsPage() {
  const [selectedAutomation, setSelectedAutomation] = useState<number | null>(null)

  const toggleAutomation = (id: number) => {
    // In real app, this would call your API
    console.log('Toggle automation:', id)
  }

  const duplicateAutomation = (id: number) => {
    // In real app, this would call your API
    console.log('Duplicate automation:', id)
  }

  const deleteAutomation = (id: number) => {
    // In real app, this would call your API
    console.log('Delete automation:', id)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Automations</h2>
          <p className="text-muted-foreground">
            Manage your Instagram comment and DM automations
          </p>
        </div>
        <Link href="/dashboard/automations/create">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Automation
          </Button>
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Automations</p>
                <p className="text-2xl font-bold">{automations.length}</p>
              </div>
              <Zap className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active</p>
                <p className="text-2xl font-bold text-green-600">
                  {automations.filter(a => a.isActive).length}
                </p>
              </div>
              <Play className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Triggers</p>
                <p className="text-2xl font-bold">
                  {automations.reduce((sum, a) => sum + a.triggered, 0)}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                <p className="text-2xl font-bold text-purple-600">
                  {Math.round((automations.reduce((sum, a) => sum + a.converted, 0) / automations.reduce((sum, a) => sum + a.triggered, 0)) * 100)}%
                </p>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Automations List */}
      <div className="space-y-4">
        {automations.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Zap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No automations yet</h3>
              <p className="text-muted-foreground mb-6">
                Create your first automation to start automating your Instagram responses.
              </p>
              <Link href="/dashboard/automations/create">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Automation
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          automations.map((automation) => (
            <Card key={automation.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {getTriggerIcon(automation.triggerType)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <CardTitle className="text-lg">{automation.name}</CardTitle>
                        {getStatusBadge(automation.isActive)}
                      </div>
                      <CardDescription className="mb-2">
                        {automation.description}
                      </CardDescription>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{getTriggerLabel(automation.triggerType)}</span>
                        <span>Keywords: {automation.keywords.join(', ')}</span>
                        <span>Created: {new Date(automation.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleAutomation(automation.id)}
                    >
                      {automation.isActive ? (
                        <>
                          <Pause className="h-4 w-4 mr-1" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-1" />
                          Activate
                        </>
                      )}
                    </Button>
                    
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedAutomation(
                          selectedAutomation === automation.id ? null : automation.id
                        )}
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                      
                      {selectedAutomation === automation.id && (
                        <div className="absolute right-0 top-full mt-1 w-48 bg-background border rounded-lg shadow-lg z-10">
                          <div className="py-1">
                            <Link href={`/dashboard/automations/${automation.id}`}>
                              <button className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted">
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </button>
                            </Link>
                            <button 
                              className="flex items-center w-full px-3 py-2 text-sm hover:bg-muted"
                              onClick={() => duplicateAutomation(automation.id)}
                            >
                              <Copy className="h-4 w-4 mr-2" />
                              Duplicate
                            </button>
                            <button 
                              className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                              onClick={() => deleteAutomation(automation.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{automation.triggered}</p>
                    <p className="text-sm text-muted-foreground">Times Triggered</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">{automation.converted}</p>
                    <p className="text-sm text-muted-foreground">Conversions</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">
                      {Math.round((automation.converted / automation.triggered) * 100)}%
                    </p>
                    <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Quick Tips */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">💡 Pro Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Use specific keywords to avoid false triggers (e.g., "FREEGUIDE" instead of "FREE")
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Test your automations with a friend before going live
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Check analytics weekly to optimize keyword performance
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Keep your response messages under 1000 characters for better deliverability
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
