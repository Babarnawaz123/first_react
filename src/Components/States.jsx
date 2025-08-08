import { useState } from 'react';

function States(props) {         // state to change data on UI
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
      <User name={props.name} age={props.age}  />         {/* props data get form sub function*/}
      <StudentData stdName={props.stdName} stdId={props.stdId} />
      <ProductDetails ProName={props.ProName} ProId={props.stdId} ProDes={props.ProDes}/>
    </div>
  );
}
const Counter=()=>{       // counter by State 
  const [count,setCount]= useState(0)
  return(
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={()=>setCount(count+1)}>update Counter</button>
    </div>//
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
const User = (props) => {           // Props simple Example for User Data 
  return (
    <div>
      <h2>User Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

const StudentData = (props) => {           // Props simple Example for student Data 
  return (
    <div>                                           {/* props */}
      <h2>User Component</h2>
      <p>Student_Name: {props.stdName}</p>
      <p>Student_Id: {props.stdId}</p>
    </div>
  );
}
function ProductDetails(props){
  return(
    <div>
    <h1>product Name:{props.ProName} </h1>
    <h2>Product ID:{props.ProId} </h2>
    <h3>Product Description:{props.ProDes}</h3>
    </div>
  )
}

export default States;

