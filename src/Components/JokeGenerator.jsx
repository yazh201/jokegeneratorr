import React, { useEffect, useState } from "react";
const Test = ()=>{
    const [state, setState]= useState({})
      useEffect(()=>{
         fetchdetails();
      },[]);

const fetchdetails= async()=>{
    try{
        const data = await fetch('https://api.chucknorris.io/jokes/random');
        const convertedJason = await data.json();
        setState(convertedJason)
    }
    catch(error){
        console.log(error);
    }
}

const joke = () =>{
        fetchdetails()
 }
return<div>
        <h4 className="txt">Laugh at Chuck Norris jokes</h4>
        <h3 className="txt2">{state.value}</h3>
        <button onClick={joke} className="btn">Tell me another</button>
    </div> 
}
export default Test