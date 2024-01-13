import React, { useEffect, useState } from "react";

function App() {

  const [value, setValue] = useState('string')

  useEffect(() => {
    setTimeout(() => {
      setValue('number')
    }, 1000)
  }, [])

  return (
    <div>
      <h2 className="elem1">telran</h2>
      <button>Click</button>
      <input placeholder="name"/>
      {value === 'number' && <h2>HELLO!</h2>} 
    </div>
  );
}

export default App;
