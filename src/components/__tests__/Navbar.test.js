import { render, screen } from '@testing-library/react'
import Navbar from '../Navbar'

describe('Navbar Component', () => {
  it('renders the navbar with default brand name', () => {
    render(<Navbar />)
    
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('brand')).toHaveTextContent('MyApp')
  })

  it('renders the navbar with custom brand name', () => {
    render(<Navbar brandName="CustomApp" />)
    
    expect(screen.getByTestId('brand')).toHaveTextContent('CustomApp')
  })

  it('renders default navigation links', () => {
    render(<Navbar />)
    
    expect(screen.getByTestId('nav-link-home')).toHaveTextContent('Home')
    expect(screen.getByTestId('nav-link-dashboard')).toHaveTextContent('Dashboard')
    expect(screen.getByTestId('nav-link-about')).toHaveTextContent('About')
  })

  it('renders custom navigation links', () => {
    const customLinks = [
      { label: 'Products', href: '/products' },
      { label: 'Contact', href: '/contact' }
    ]
    
    render(<Navbar links={customLinks} />)
    
    expect(screen.getByTestId('nav-link-products')).toHaveTextContent('Products')
    expect(screen.getByTestId('nav-link-contact')).toHaveTextContent('Contact')
    expect(screen.queryByTestId('nav-link-home')).not.toBeInTheDocument()
  })

  it('renders mobile menu button', () => {
    render(<Navbar />)
    
    expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument()
  })

  it('applies correct CSS classes for styling', () => {
    render(<Navbar />)
    
    const navbar = screen.getByTestId('navbar')
    expect(navbar).toHaveClass('bg-blue-600', 'text-white', 'shadow-lg')
  })
})
