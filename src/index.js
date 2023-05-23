import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

export default function Gallery() {
  return <App />
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Gallery />)
