import React from 'react'
import { render } from 'react-testing-library'
import { axe } from 'jest-axe'
import App from './App'

describe('App', () => {
  it('Renders without blowing up', () => {
    const { getByText } = render(<App />)
    expect(getByText(/app/i)).toBeInTheDocument()
  })

  it('Does not have detectable accessibility issues', async () => {
    const { container } = render(<App />)
    expect(await axe(container.innerHTML)).toHaveNoViolations()
  })
})
