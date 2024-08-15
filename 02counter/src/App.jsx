import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    if (counter > 19) return;
    console.log(`Button Clicked ${counter + 1}`);
    // counter++
    // setCounter(counter)
    // or
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter < 1) return
    setCounter(counter - 1)
    console.log(`Button Clicked ${counter - 1}`);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value={counter}</h2>
      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
