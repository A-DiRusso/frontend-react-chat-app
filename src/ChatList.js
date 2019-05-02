import React from 'react'

export default function ChatList({messages}) {
    const messageItems = messages.map((m, i) => (
        <li key={i}>{m}</li>
    ))
  return (
    <ul>
        {messageItems}
    </ul>
  )
}
