import React from 'react'
import ReactDOM from 'react-dom/client'
import Video from './components/Video'

function Profile() {
  return <h1>Profile</h1>
}

export default function Gallery() {
  return (
    <div>
      <Profile />
      <Video />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Gallery />)
