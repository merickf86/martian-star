import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1>Welcome to Martian Star<h1>
		<p>This my Martian site running on vite!</p>
    </div>
  )
}

export default App
