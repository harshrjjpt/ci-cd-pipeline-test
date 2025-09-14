import React from 'react'

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
          <div 
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            data-testid={`stat-card-${index}`}
          >
            <h3 className="text-sm font-medium text-gray-500 mb-2" data-testid={`stat-title-${index}`}>
              {stat.title}
            </h3>
            <div className="flex items-baseline justify-between">
              <p className="text-2xl font-semibold text-gray-900" data-testid={`stat-value-${index}`}>
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
          </div>
        ))}
      </div>
      
      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4" data-testid="quick-actions-title">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            data-testid="action-button-1"
          >
            Add New User
          </button>
          <button 
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            data-testid="action-button-2"
          >
            Generate Report
          </button>
          <button 
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
            data-testid="action-button-3"
          >
            View Analytics
          </button>
        </div>
      </div>
    </div>
  )
}
