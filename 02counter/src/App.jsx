import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () =>{
    if(count === 20)
    alert("Value can not exceed above 20.")
    else{
      setCount(count => count +2)
      setCount(count => count +2)
      setCount(count => count +2)
    }
  }
  const decrement = () =>{
    if(count === 0)
    alert("Value can not exceed below 0..")
    else
    setCount(count-1)
  }

  return (
    <div>
    <h1>React Counter App.</h1>
    <h3>Counter Value: {count}</h3>
    <button onClick={increment}>Increase Counter {count}</button>
    <br/><br/>
    <button onClick={decrement}>Decrease Counter {count}</button>

    <p>
      footer: {count}
    </p>
    </div>
  )
}

export default App
