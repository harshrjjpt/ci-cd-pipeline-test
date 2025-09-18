import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../page';

// Mock the components

jest.mock('../../components/BusCard', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function MockBusCard({ bus }: any) {
    return <div data-testid={`bus-card-${bus.id}`}>{bus.name}</div>;
  };
});

jest.mock('../../components/BusFilters', () => {
  return function MockBusFilters() {
    return <div data-testid="bus-filters">Bus Filters</div>;
  };
});

jest.mock('../../components/Hero', () => {
  return function MockHero() {
    return <div data-testid="hero">Hero Section</div>;
  };
});

jest.mock('../../components/WhyChooseUs', () => {
  return function MockWhyChooseUs() {
    return <div data-testid="why-choose-us">Why Choose Us</div>;
  };
});

jest.mock('../../components/BuyFromTheBest', () => {
  return function MockBuyFromTheBest() {
    return <div data-testid="buy-from-the-best">Buy From The Best</div>;
  };
});

jest.mock('../../components/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer</div>;
  };
});

// Mock the data
jest.mock('../../data/buses', () => ({
  buses: [
    {
      id: '1',
      name: 'Test Bus 1',
      type: 'school',
      fuelType: 'cng',
      seats: 50,
      price: 1500000,
      year: 2023,
      mileage: 8,
      transmission: 'manual',
      image: '/test1.jpg',
      features: ['AC', 'GPS'],
      description: 'Test bus 1',
      availability: 'available'
    },
    {
      id: '2',
      name: 'Test Bus 2',
      type: 'tourist',
      fuelType: 'diesel',
      seats: 45,
      price: 2000000,
      year: 2023,
      mileage: 6,
      transmission: 'automatic',
      image: '/test2.jpg',
      features: ['AC', 'WiFi'],
      description: 'Test bus 2',
      availability: 'available'
    }
  ]
}));

describe('Home Page', () => {
  it('renders all main sections', () => {
    render(<Home />);
    
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('bus-filters')).toBeInTheDocument();
    expect(screen.getByTestId('why-choose-us')).toBeInTheDocument();
    expect(screen.getByTestId('buy-from-the-best')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders bus cards', () => {
    render(<Home />);
    
    expect(screen.getByTestId('bus-card-1')).toBeInTheDocument();
    expect(screen.getByTestId('bus-card-2')).toBeInTheDocument();
  });

  it('displays bus names', () => {
    render(<Home />);
    
    expect(screen.getByText('Test Bus 1')).toBeInTheDocument();
    expect(screen.getByText('Test Bus 2')).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    expect(() => render(<Home />)).not.toThrow();
  });
});
