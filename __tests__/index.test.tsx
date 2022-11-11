import { render, screen } from '@testing-library/react'
import Home from '../src/pages'

describe('Home', () => {
  test('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Boilerplate/i,
    })

    expect(heading).toBeInTheDocument()
  })
})