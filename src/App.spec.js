import React from 'react'
import { render } from 'react-testing-library'
import App from './App'

describe('App', () => {
  it('Renders without blowing up', () => {
    const { getByText } = render(<App />)
    expect(getByText(/app/i)).toBeInTheDocument()
  })
})
