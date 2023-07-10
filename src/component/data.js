import React from 'react';
import { useState } from 'react';

export default function Data() {
  const [number, setNumber] = useState(10);
  const [user, setUser] = useState();
  const[result,setResult]=useState("")
  const[count,setCount]=useState(0)

  // let number = 10;
  function handle() {
    if (user < number) {
      alert('my hu don');
      setCount(count+1)
      setUser("")
    } else if (user > number) {
      alert('asur');
      setCount(count+1)
      setUser("")
    } else {
      alert('gaddari');
      setCount(count+1)
      setUser("")
    }
  }
  return (
    <div>
      <h3>Lucky Number</h3>
      <input
        value={user}
        placeholder="Enter a Lucky number"
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handle}>Click</button>
       <h3><li>{count}</li></h3>
    </div>
  );
}
