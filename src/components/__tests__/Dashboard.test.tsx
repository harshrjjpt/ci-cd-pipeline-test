import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../Dashboard';

describe('Dashboard Component', () => {
  const defaultStats = [
    { title: "Total Users", value: "1,234", change: "+12%", changeType: "positive" },
    { title: "Revenue", value: "$45,678", change: "+8%", changeType: "positive" },
    { title: "Orders", value: "567", change: "-3%", changeType: "negative" },
    { title: "Conversion Rate", value: "3.2%", change: "0%", changeType: "neutral" },
  ];

  it('renders with default title and stats', () => {
    render(<Dashboard />);
    
    expect(screen.getByTestId('dashboard')).toBeInTheDocument();
    expect(screen.getByTestId('dashboard-title')).toHaveTextContent('Dashboard Overview');
    
    // Check that all default stats are rendered
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('Orders')).toBeInTheDocument();
    expect(screen.getByText('Conversion Rate')).toBeInTheDocument();
  });

  it('renders with custom title', () => {
    render(<Dashboard title="Custom Dashboard" />);
    
    expect(screen.getByTestId('dashboard-title')).toHaveTextContent('Custom Dashboard');
  });

  it('renders with custom stats', () => {
    const customStats = [
      { title: "Custom Metric", value: "999", change: "+5%", changeType: "positive" },
      { title: "Another Metric", value: "123", change: "-2%", changeType: "negative" },
    ];
    
    render(<Dashboard stats={customStats} />);
    
    expect(screen.getByText('Custom Metric')).toBeInTheDocument();
    expect(screen.getByText('Another Metric')).toBeInTheDocument();
    expect(screen.queryByText('Total Users')).not.toBeInTheDocument();
  });

  it('displays stat values correctly', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('1,234')).toBeInTheDocument();
    expect(screen.getByText('$45,678')).toBeInTheDocument();
    expect(screen.getByText('567')).toBeInTheDocument();
    expect(screen.getByText('3.2%')).toBeInTheDocument();
  });

  it('displays change indicators with correct colors', () => {
    render(<Dashboard />);
    
    // Positive changes should have green color
    const positiveChanges = screen.getAllByText(/\+12%|\+8%/);
    positiveChanges.forEach(change => {
      expect(change).toHaveClass('text-green-600');
    });
    
    // Negative changes should have red color
    const negativeChange = screen.getByText('-3%');
    expect(negativeChange).toHaveClass('text-red-600');
    
    // Neutral changes should have gray color
    const neutralChange = screen.getByText('0%');
    expect(neutralChange).toHaveClass('text-gray-600');
  });

  it('renders all stat cards', () => {
    render(<Dashboard />);
    
    // Check that stat cards are rendered by looking for the stat card test IDs
    expect(screen.getByTestId('stat-card-0')).toBeInTheDocument();
    expect(screen.getByTestId('stat-card-1')).toBeInTheDocument();
    expect(screen.getByTestId('stat-card-2')).toBeInTheDocument();
    expect(screen.getByTestId('stat-card-3')).toBeInTheDocument();
  });

  it('renders quick actions section', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('Quick Actions')).toBeInTheDocument();
  });

  it('handles empty stats array', () => {
    render(<Dashboard stats={[]} />);
    
    expect(screen.getByTestId('dashboard')).toBeInTheDocument();
    expect(screen.getByTestId('dashboard-title')).toBeInTheDocument();
    
    // Should not render any stat cards
    const statCards = screen.queryAllByTestId('stat-card-0');
    expect(statCards).toHaveLength(0);
  });

  it('assigns correct data-testid attributes', () => {
    render(<Dashboard />);
    
    // Check that each stat card has the correct test id
    expect(screen.getByTestId('stat-card-0')).toBeInTheDocument();
    expect(screen.getByTestId('stat-card-1')).toBeInTheDocument();
    expect(screen.getByTestId('stat-card-2')).toBeInTheDocument();
    expect(screen.getByTestId('stat-card-3')).toBeInTheDocument();
  });
});
