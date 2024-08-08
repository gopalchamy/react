import React,{useState} from 'react';
import './App.css';
const app6=()=>{
  const name1="Arun";
  const name2="Arun";
  const obj1={name:"Arun"}
  const obj2={name:"Arun"}
  if(name1===name2)
  {
    alert(true);
  }else{
    alert(false);
  }
  if(obj1.name === obj2.name)
  {
    alert(true);
  }else{
    alert(false);
  }
}
 const Greeting=()=>{
  return(
    <div>
      <button onClick={app6}>Click</button>
      {/*<p>This is World Functional Component</p>*/}
    </div>
  )
 }


export default Greeting;
