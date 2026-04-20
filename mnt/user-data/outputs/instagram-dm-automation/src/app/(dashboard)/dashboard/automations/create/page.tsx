'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft,
  MessageCircle,
  Instagram,
  Zap,
  Users,
  Link,
  FileText,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import Link from 'next/link'

type TriggerType = 'comment' | 'dm' | 'story_reply'
type ResponseType = 'text' | 'link' | 'lead_capture' | 'multi_step'

interface AutomationData {
  name: string
  triggerType: TriggerType
  keywords: string[]
  targetPost: string
  responseType: ResponseType
  responseData: {
    message: string
    linkUrl?: string
    linkPreview?: string
    collectEmail?: boolean
    collectPhone?: boolean
    requireFollow?: boolean
  }
  conditions: {
    requireFollow: boolean
    allowRetrigger: boolean
    timeDelay: number
  }
}

const initialData: AutomationData = {
  name: '',
  triggerType: 'comment',
  keywords: [],
  targetPost: '',
  responseType: 'text',
  responseData: {
    message: '',
    linkUrl: '',
    linkPreview: '',
    collectEmail: false,
    collectPhone: false,
    requireFollow: false
  },
  conditions: {
    requireFollow: false,
    allowRetrigger: false,
    timeDelay: 0
  }
}

const steps = [
  { id: 1, name: 'Basic Info', description: 'Name and trigger type' },
  { id: 2, name: 'Trigger Setup', description: 'Keywords and targeting' },
  { id: 3, name: 'Response Config', description: 'What to send back' },
  { id: 4, name: 'Conditions', description: 'Rules and requirements' },
  { id: 5, name: 'Review', description: 'Test and publish' }
]

export default function CreateAutomationPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [automationData, setAutomationData] = useState<AutomationData>(initialData)
  const [keywordInput, setKeywordInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const updateData = (key: keyof AutomationData, value: any) => {
    setAutomationData(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const updateResponseData = (key: string, value: any) => {
    setAutomationData(prev => ({
      ...prev,
      responseData: {
        ...prev.responseData,
        [key]: value
      }
    }))
  }

  const updateConditions = (key: string, value: any) => {
    setAutomationData(prev => ({
      ...prev,
      conditions: {
        ...prev.conditions,
        [key]: value
      }
    }))
  }

  const addKeyword = () => {
    if (keywordInput.trim() && !automationData.keywords.includes(keywordInput.trim().toUpperCase())) {
      updateData('keywords', [...automationData.keywords, keywordInput.trim().toUpperCase()])
      setKeywordInput('')
    }
  }

  const removeKeyword = (keyword: string) => {
    updateData('keywords', automationData.keywords.filter(k => k !== keyword))
  }

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSave = async () => {
    setIsLoading(true)
    try {
      // In real app, this would call your API
      console.log('Saving automation:', automationData)
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
      router.push('/dashboard/automations')
    } catch (error) {
      console.error('Error saving automation:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return automationData.name.trim().length > 0 && automationData.triggerType
      case 2:
        return automationData.keywords.length > 0
      case 3:
        return automationData.responseData.message.trim().length > 0 || 
               (automationData.responseType === 'link' && automationData.responseData.linkUrl)
      case 4:
        return true
      default:
        return true
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link href="/dashboard/automations">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h2 className="text-2xl font-bold">Create Automation</h2>
          <p className="text-muted-foreground">
            Set up a new Instagram comment or DM automation
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  step.id <= currentStep 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step.id < currentStep ? <CheckCircle className="h-4 w-4" /> : step.id}
                </div>
                <div className="ml-2 hidden sm:block">
                  <p className={`text-sm font-medium ${
                    step.id <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {step.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-px w-8 ml-4 ${
                    step.id < currentStep ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <Card>
        <CardContent className="pt-6">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Automation Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Free Guide Download"
                  value={automationData.name}
                  onChange={(e) => updateData('name', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Trigger Type</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { 
                      id: 'comment', 
                      name: 'Comment Trigger', 
                      description: 'Triggered by comments on your posts',
                      icon: MessageCircle 
                    },
                    { 
                      id: 'dm', 
                      name: 'Direct Message', 
                      description: 'Triggered by incoming DMs',
                      icon: MessageCircle 
                    },
                    { 
                      id: 'story_reply', 
                      name: 'Story Reply', 
                      description: 'Triggered by replies to your stories',
                      icon: Instagram 
                    }
                  ].map((option) => (
                    <button
                      key={option.id}
                      className={`p-4 border rounded-lg text-left hover:bg-muted transition-colors ${
                        automationData.triggerType === option.id
                          ? 'border-primary bg-primary/10'
                          : 'border-input'
                      }`}
                      onClick={() => updateData('triggerType', option.id as TriggerType)}
                    >
                      <option.icon className="h-6 w-6 mb-2 text-primary" />
                      <h3 className="font-medium">{option.name}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Keywords</label>
                <p className="text-sm text-muted-foreground mb-3">
                  Add keywords that will trigger this automation (case-insensitive)
                </p>
                <div className="flex space-x-2 mb-3">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., GUIDE, FREE, DOWNLOAD"
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
                  />
                  <Button onClick={addKeyword} disabled={!keywordInput.trim()}>
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {automationData.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {keyword}
                      <button
                        className="ml-1 hover:text-primary/70"
                        onClick={() => removeKeyword(keyword)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {automationData.triggerType === 'comment' && (
                <div>
                  <label className="block text-sm font-medium mb-2">Target Post (Optional)</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Leave empty to target all posts, or specify a post URL"
                    value={automationData.targetPost}
                    onChange={(e) => updateData('targetPost', e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    If specified, this automation will only trigger on comments from this specific post
                  </p>
                </div>
              )}
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">Response Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { 
                      id: 'text', 
                      name: 'Text Message', 
                      description: 'Send a simple text response',
                      icon: FileText 
                    },
                    { 
                      id: 'link', 
                      name: 'Link Sharing', 
                      description: 'Send a link with preview',
                      icon: Link 
                    },
                    { 
                      id: 'lead_capture', 
                      name: 'Lead Capture', 
                      description: 'Collect email/phone before sending',
                      icon: Mail 
                    },
                    { 
                      id: 'multi_step', 
                      name: 'Multi-Step Flow', 
                      description: 'Complex flow with conditions',
                      icon: Zap 
                    }
                  ].map((option) => (
                    <button
                      key={option.id}
                      className={`p-4 border rounded-lg text-left hover:bg-muted transition-colors ${
                        automationData.responseType === option.id
                          ? 'border-primary bg-primary/10'
                          : 'border-input'
                      }`}
                      onClick={() => updateData('responseType', option.id as ResponseType)}
                    >
                      <option.icon className="h-6 w-6 mb-2 text-primary" />
                      <h3 className="font-medium">{option.name}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Response Message</label>
                <textarea
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  placeholder="Hi {{username}}! Thanks for your interest. Here's what you requested..."
                  value={automationData.responseData.message}
                  onChange={(e) => updateResponseData('message', e.target.value)}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Use {{'{'}username{'}'}} to personalize with their Instagram username
                </p>
              </div>

              {automationData.responseType === 'link' && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Link URL</label>
                    <input
                      type="url"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="https://yourwebsite.com/free-guide"
                      value={automationData.responseData.linkUrl}
                      onChange={(e) => updateResponseData('linkUrl', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Link Preview Text</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Free Content Creation Guide - 50 Pages"
                      value={automationData.responseData.linkPreview}
                      onChange={(e) => updateResponseData('linkPreview', e.target.value)}
                    />
                  </div>
                </>
              )}

              {automationData.responseType === 'lead_capture' && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="collectEmail"
                      checked={automationData.responseData.collectEmail}
                      onChange={(e) => updateResponseData('collectEmail', e.target.checked)}
                      className="w-4 h-4 text-primary"
                    />
                    <label htmlFor="collectEmail" className="text-sm font-medium">
                      Collect Email Address
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="collectPhone"
                      checked={automationData.responseData.collectPhone}
                      onChange={(e) => updateResponseData('collectPhone', e.target.checked)}
                      className="w-4 h-4 text-primary"
                    />
                    <label htmlFor="collectPhone" className="text-sm font-medium">
                      Collect Phone Number
                    </label>
                  </div>
                </div>
              )}
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Automation Conditions</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Require Follow</h4>
                      <p className="text-sm text-muted-foreground">
                        Only respond to users who follow your account
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={automationData.conditions.requireFollow}
                      onChange={(e) => updateConditions('requireFollow', e.target.checked)}
                      className="w-4 h-4 text-primary"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Allow Re-triggering</h4>
                      <p className="text-sm text-muted-foreground">
                        Allow same user to trigger automation multiple times
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={automationData.conditions.allowRetrigger}
                      onChange={(e) => updateConditions('allowRetrigger', e.target.checked)}
                      className="w-4 h-4 text-primary"
                    />
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Response Delay</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Add a delay before sending the response (in seconds)
                    </p>
                    <input
                      type="number"
                      min="0"
                      max="300"
                      className="w-32 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={automationData.conditions.timeDelay}
                      onChange={(e) => updateConditions('timeDelay', parseInt(e.target.value) || 0)}
                    />
                    <span className="text-sm text-muted-foreground ml-2">seconds</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Ready to Launch!</h3>
                <p className="text-muted-foreground">
                  Review your automation settings below, then publish to go live.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Automation Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <span className="font-medium">Name:</span> {automationData.name}
                    </div>
                    <div>
                      <span className="font-medium">Trigger:</span> {automationData.triggerType === 'comment' ? 'Comment' : automationData.triggerType === 'dm' ? 'Direct Message' : 'Story Reply'}
                    </div>
                    <div>
                      <span className="font-medium">Keywords:</span> {automationData.keywords.join(', ')}
                    </div>
                    <div>
                      <span className="font-medium">Response Type:</span> {automationData.responseType}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Response Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm">
                        {automationData.responseData.message.replace('{{username}}', 'john_doe')}
                      </p>
                      {automationData.responseType === 'link' && automationData.responseData.linkUrl && (
                        <div className="mt-2 p-2 bg-background rounded border">
                          <p className="text-xs font-medium">{automationData.responseData.linkPreview}</p>
                          <p className="text-xs text-muted-foreground">{automationData.responseData.linkUrl}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-800">Before You Publish</h4>
                    <ul className="text-sm text-amber-700 mt-1 space-y-1">
                      <li>• Test your automation with a friend first</li>
                      <li>• Make sure your Instagram account is connected</li>
                      <li>• Check that you have enough DMs remaining in your plan</li>
                      <li>• Ensure your response complies with Instagram's policies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 1}
        >
          Back
        </Button>

        {currentStep < steps.length ? (
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
          >
            Next
          </Button>
        ) : (
          <Button
            onClick={handleSave}
            disabled={isLoading}
            loading={isLoading}
          >
            {isLoading ? 'Publishing...' : 'Publish Automation'}
          </Button>
        )}
      </div>
    </div>
  )
}
