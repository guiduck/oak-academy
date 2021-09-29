import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
    <h2>Sorry</h2>
      Could not find page
      <Link to="/home">Go back to Home page</Link>
    </div>
  )
}
