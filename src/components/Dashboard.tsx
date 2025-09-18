import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface StatCard {
  title: string
  value: string | number
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
}

interface DashboardProps {
  title?: string
  stats?: StatCard[]
}

export default function Dashboard({ 
  title = "Dashboard Overview",
  stats = [
    { title: "Total Users", value: "1,234", change: "+12%", changeType: "positive" },
    { title: "Revenue", value: "$45,678", change: "+8%", changeType: "positive" },
    { title: "Orders", value: "567", change: "-3%", changeType: "negative" },
    { title: "Conversion Rate", value: "3.2%", change: "0%", changeType: "neutral" },
    
  ]
}: DashboardProps) {
  const getChangeColor = (changeType?: string) => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600'
      case 'negative':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="p-6" data-testid="dashboard">
      <h2 className="text-2xl font-bold text-gray-900 mb-6" data-testid="dashboard-title">
        {title}
      </h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card 
            key={index}
            data-testid={`stat-card-${index}`}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground" data-testid={`stat-title-${index}`}>
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-semibold" data-testid={`stat-value-${index}`}>
                  {stat.value}
                </p>
                {stat.change && (
                  <span 
                    className={`text-sm font-medium ${getChangeColor(stat.changeType)}`}
                    data-testid={`stat-change-${index}`}
                  >
                    {stat.change}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle data-testid="quick-actions-title">
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              data-testid="action-button-1"
            >
              Add New User
            </Button>
            <Button 
              variant="secondary"
              data-testid="action-button-2"
            >
              Generate Report
            </Button>
            <Button 
              variant="outline"
              data-testid="action-button-3"
            >
              View Analytics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
