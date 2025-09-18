import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../ui/Buttons/Button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary', 'text-primary-foreground');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-secondary', 'text-secondary-foreground');

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button')).toHaveClass('border', 'border-border');

    rerender(<Button variant="link">Link</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-primary', 'bg-transparent');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="lg">Large</Button>);
    // Size classes are applied to the inner div, not the button element
    const button = screen.getByRole('button');
    const innerDiv = button.querySelector('div');
    expect(innerDiv).toHaveClass('h-12', 'px-6', 'text-lg');

    rerender(<Button size="sm">Small</Button>);
    const smallButton = screen.getByRole('button');
    const smallInnerDiv = smallButton.querySelector('div');
    expect(smallInnerDiv).toHaveClass('h-8', 'px-3', 'text-sm');

    rerender(<Button size="xs">Extra Small</Button>);
    const xsButton = screen.getByRole('button');
    const xsInnerDiv = xsButton.querySelector('div');
    expect(xsInnerDiv).toHaveClass('h-7', 'px-2.5', 'text-xs');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:pointer-events-none');
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('shows loader when showLoader is true', () => {
    render(<Button showLoader>Loading</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('pointer-events-none');
    
    // Check that loader is present (Loader2 icon)
    const loader = button.querySelector('svg');
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass('animate-spin');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('handles active state for tertiary variant', () => {
    render(<Button variant="tertiary" isActive>Active</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-accent', 'text-accent-foreground');
  });

  it('renders with danger-outline variant', () => {
    render(<Button variant="danger-outline">Danger</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-destructive', 'border-destructive');
  });

  it('forwards additional props', () => {
    render(<Button data-testid="custom-button" type="submit">Submit</Button>);
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
