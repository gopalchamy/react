import React,{useState} from 'react';

const App8=()=>{
  const a4={
    height:'500px',
    width:'500px',
    verticalAlign:'middle',
    position:'absolute',
    backgroundColor:'lightskyblue',
    textAlign:'center',
    top:'25%',
    left:'35%',
  }
  return(
    <div style={a4}>
      <h1>Smile Component</h1>
      <p >It is a functional Component</p>
      <img src="https://cdn.pixabay.com/photo/2020/12/27/20/24/smile-5865208_640.png" style={{height:'250px',width:"250px"}}></img>
    </div>
  )
 }
export default App8;