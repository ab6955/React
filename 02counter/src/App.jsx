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
    // setCounter(counter + 1)

    /*
    IMP::interview question 

    Q)=>Will it add 4 values to counter and make it 19 from 15 or not.
    A)=>No, because react it not consider them as four different function , instead it will consider them as one and then add only one value to it i.e from 15 to 16.
    */

    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    /* Inorder to add more than 1 value in your counter in above way , then you need a callback function .
    That callback will take the counter value(15) , add the 1 , and then again next callback will take the previous value(16) and add 1 to it.
    */
    setCounter((prevCounter) => {return prevCounter + 1 })
    setCounter((prevCounter) => {return prevCounter + 1 })
    setCounter((prevCounter) => {return prevCounter + 1 })
    setCounter((prevCounter) => {return prevCounter + 1 })
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
