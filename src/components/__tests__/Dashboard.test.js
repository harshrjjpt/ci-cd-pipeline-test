import { render, screen } from '@testing-library/react'
import Dashboard from '../Dashboard'

describe('Dashboard Component', () => {
  it('renders with default title', () => {
    render(<Dashboard />)

    expect(screen.getByTestId('dashboard')).toBeInTheDocument()
    expect(screen.getByTestId('dashboard-title')).toHaveTextContent(/^Dashboard Overview$/)
  })

  it('renders with a custom title', () => {
    render(<Dashboard title="Custom Dashboard" />)

    expect(screen.getByTestId('dashboard-title')).toHaveTextContent(/^Custom Dashboard$/)
  })

  it('renders 4 default stat cards with correct values', () => {
    render(<Dashboard />)

    const cards = screen.getAllByTestId(/stat-card-/)
    expect(cards).toHaveLength(4)

    expect(screen.getByTestId('stat-title-0')).toHaveTextContent(/^Total Users$/)
    expect(screen.getByTestId('stat-value-0')).toHaveTextContent(/^1,234$/)
    expect(screen.getByTestId('stat-change-0')).toHaveTextContent(/^\+12%$/)

    expect(screen.getByTestId('stat-title-1')).toHaveTextContent(/^Revenue$/)
    expect(screen.getByTestId('stat-value-1')).toHaveTextContent(/^\$45,678$/)
    expect(screen.getByTestId('stat-change-1')).toHaveTextContent(/^\+8%$/)
  })

  it('renders custom stat cards', () => {
    const customStats = [
      { title: 'Custom Stat 1', value: '100', change: '+5%', changeType: 'positive' },
      { title: 'Custom Stat 2', value: '200', change: '-2%', changeType: 'negative' }
    ]

    render(<Dashboard stats={customStats} />)

    expect(screen.getAllByTestId(/stat-card-/)).toHaveLength(2)

    expect(screen.getByTestId('stat-title-0')).toHaveTextContent(/^Custom Stat 1$/)
    expect(screen.getByTestId('stat-value-0')).toHaveTextContent(/^100$/)
    expect(screen.getByTestId('stat-change-0')).toHaveTextContent(/^\+5%$/)

    expect(screen.getByTestId('stat-title-1')).toHaveTextContent(/^Custom Stat 2$/)
    expect(screen.getByTestId('stat-value-1')).toHaveTextContent(/^200$/)
    expect(screen.getByTestId('stat-change-1')).toHaveTextContent(/^-2%$/)
  })

  it('renders stat card without change when no change is provided', () => {
    const stats = [{ title: 'Test No Change', value: '500' }]
    render(<Dashboard stats={stats} />)

    expect(screen.getByTestId('stat-title-0')).toHaveTextContent(/^Test No Change$/)
    expect(screen.queryByTestId('stat-change-0')).not.toBeInTheDocument()
  })

  it('renders quick actions correctly', () => {
    render(<Dashboard />)

    expect(screen.getByTestId('quick-actions-title')).toHaveTextContent(/^Quick Actions$/)

    const buttons = [
      { id: 'action-button-1', label: 'Add New User' },
      { id: 'action-button-2', label: 'Generate Report' },
      { id: 'action-button-3', label: 'View Analytics' }
    ]

    buttons.forEach(({ id, label }) => {
      const btn = screen.getByTestId(id)
      expect(btn).toBeInTheDocument()
      expect(btn).toHaveTextContent(new RegExp(`^${label}$`))
    })
  })

  it('applies correct CSS classes for positive change', () => {
    render(<Dashboard stats={[{ title: 'Test', value: '100', change: '+10%', changeType: 'positive' }]} />)
    expect(screen.getByTestId('stat-change-0')).toHaveClass('text-green-600')
  })

  it('applies correct CSS classes for negative change', () => {
    render(<Dashboard stats={[{ title: 'Test', value: '100', change: '-5%', changeType: 'negative' }]} />)
    expect(screen.getByTestId('stat-change-0')).toHaveClass('text-red-600')
  })

  it('applies correct CSS classes for neutral change', () => {
    render(<Dashboard stats={[{ title: 'Test', value: '100', change: '0%', changeType: 'neutral' }]} />)
    expect(screen.getByTestId('stat-change-0')).toHaveClass('text-gray-600')
  })

  it('defaults to gray color when changeType is missing', () => {
    render(<Dashboard stats={[{ title: 'Test', value: '100', change: '+2%' }]} />)
    expect(screen.getByTestId('stat-change-0')).toHaveClass('text-gray-600')
  })

  it('renders empty dashboard when stats is empty', () => {
    render(<Dashboard stats={[]} />)
    expect(screen.queryAllByTestId(/stat-card-/)).toHaveLength(0)
  })
})
