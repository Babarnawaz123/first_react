import { useState } from "react";
function Practice_jsx() {
  const name ="Haider";// dynamically getting variable
  let x=40; // addtion opertion in html
  let y=50;
  let sum;
  function fruit(){       // function Calling 
    return "apple";
  }
  function subtract(a,b){   // fuction with parameter
    return a-b;
  }
  function Operation(a,b,op){ // operation with Condition
    if (op=="+"){
      return a+b;
    
    }
    else if(op=="-"){

      return a-b ;
    }
else {
  return a*b;
}
    
  }
  const UserObject={    // object by jsx file 
name: "babarnawaz",
age:"23",
address:"islamabad"
  }
  let array= ["babar","Ali","haider"]       // Declartion Of Array 


//image by variable 

let images="src/assets/image.jpeg"

function clickme(){             //function create
  alert("function called")
}

const apple = () => {           // Arrow function 
  alert("this is apple");
}







  return(
    <div>
    <h2>dynamically call by function name </h2>
    <h1>{name}</h1>
    <h4>{sum=x+y}</h4>
    <h2>{fruit()}</h2>
    <h3>{subtract(120,10)}</h3>
    <h2>{Operation(20,10,"-")}</h2>
    <h2>{name?name:"user is not Found"}</h2>
    <h3>{UserObject.age}</h3>
   <h1>{array[1]}</h1>
   <img src={images} />  
   <h1>function and Event call</h1>
  <button onClick={apple}> Click Me </button> 

    </div>
  
  )

}
export default Practice_jsx;