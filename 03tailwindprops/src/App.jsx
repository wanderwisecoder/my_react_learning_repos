import { useState } from 'react'
import './App.css'
import Card2DevUI from './components/Card2DevUI'
import Card1Tailwind from './components/Card1Tailwind'

function App() {
  const [count, setCount] = useState(0)
let myObj = {
username : "Goku",
age : 51
}
let myArray = [1,2,3,4];
  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl p-5'>Tailwind</h1>
    <Card2DevUI username="Bulma" setOfObj={myObj} setOfArray={myArray} btnText="Click Me"/>
    <Card2DevUI username="Sakura"/>
    <Card1Tailwind/>

    
    </>
  )
}

export default App

//My React Learning Repos and Demo Projects.
//my_react_learning_repos