import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)

  


  const addValue = () =>{
    if(counter == 20){
      setCount(counter)
      return

    }else{
      setCount(counter + 1)
    }
    
    

  }

  const removeValue = () =>{
    if(counter == 0){
      setCount(counter)
      return
    }else{
      setCount(counter - 1)
    }
    
   
  }

  return (
    <>
    <h1>Counter Simple</h1>
    <h2>counter value : {counter}</h2>
    
    <button
    onClick={addValue}
    >add value {counter}</button><br/>
    <button
    onClick={removeValue}
    >remove value {counter}</button>



    </>
  )
}

export default App
