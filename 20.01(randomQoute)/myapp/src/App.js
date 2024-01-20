import { useState } from "react";
import datas from './data.json'

function App() {

  const [quote, setQuote] = useState(getRandomElement(datas))

  function getRandomElement(array){
    const randomIndex = Math.floor(array.length * Math.random())
    return array[randomIndex]
  }

  return (
    <div>
        <h2>{quote}</h2>
    </div>
  );
}

export default App;
