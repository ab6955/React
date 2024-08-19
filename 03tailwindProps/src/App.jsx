import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const myObj = {
    name: "Abdullah",
    age: 20,
  };
  const myArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card
        Username="Chai aur Code"
        btnText="Click me"
        someObj={myObj}
        someArr={myArr}
      />
      <Card Username="React" btnText="Visit me" />
    </>
  );
}

export default App;
