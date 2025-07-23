import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import List from './components/List/List'
import Counter from './components/Counter/Counter'
import AddItem from './components/AddItem/AddItem'

function App() {
    const arr = ["Item2", "Item3", "Item4"];
    const [item, setItem]= useState(arr)

    const onAdd = (data)=>{
      setItem([...item, data])
    }  
  return (
    <>
    <AddItem onAdd={onAdd}/>
    <List arr={item}/>
    <Counter/>
    
    </>
  )
}

export default App
