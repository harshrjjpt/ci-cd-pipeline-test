// __tests__/Greeting.test.js
import { render, screen } from '@testing-library/react'
import Greeting from '../../components/Greeting'

describe('Greeting Component', () => {
  it('renders the correct greeting message', () => {
    render(<Greeting name="Harsh" />)
    expect(screen.getByTestId('greeting')).toHaveTextContent('Hello, Harsh 👋')
  })
})
