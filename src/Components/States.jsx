import { useState } from 'react';

function States() {         // state to change data on UI
  const [fruit, setFruit] = useState("Banana");   // hook 
  const changeFruits = () => {
    setFruit("Orange");
  };

  return (
    <div>
      <h1>Fruits Example Using useState</h1>
      <h2>Fruit: {fruit}</h2>
      <button onClick={changeFruits}>Change Fruit</button>
      <Counter />
      <Toggle />
    </div>
  );
}
const Counter=()=>{       // counter by State 
  const [count,setCount]= useState(0)
  return(
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={()=>setCount(count+1)}>update Counter</button>
    </div>
  )
  
}
  const Toggle = () => {
    const [display, setDisplay] = useState(true);
    return (
      <div>
        
        <h2>Toggle in react JS </h2>
       
        <button onClick={() => setDisplay(!display)}>Toggle
        </button>
         {display ? <h1>babar nawaz</h1> : null}
      </div>
    );
  };
export default States;
