import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import List from './components/List/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <List/>
    </>
  )
}

export default App
