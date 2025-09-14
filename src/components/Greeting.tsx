// components/Greeting.js
import React from 'react'

export default function Greeting({ name }: { name: string }) {
  return (
    <div>
      <h1 data-testid="greeting">Hello, {name} 👋</h1>
    </div>
  )
}
