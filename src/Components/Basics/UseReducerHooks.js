import React, { useState,useEffect,useReducer } from 'react'


const reducer = ((state,action)=> {
    if(action.type==="INCR"){
        state =state+1;

    }

    if(action.type==="DECR"){
        state =state-1;

    }
    return state;


})
const UseReducerHooks = () => {

    // const[count,setcount] = useState(0)
    // useEffect(()=>{
    //     document.title = `chats(${count})`
    // },[])
    const initalData =10
    
    
    const[state, dispatch] = useReducer(reducer,initalData);
  return (

    <>
    {/* <h1>UseStaeHooks</h1>
    <h1>{count}</h1>
    <button onClick={()=>{setcount(count+1)}}> Increase Count </button>
    <button onClick={()=>{setcount(count-1)}}> decrease Count </button>
    <h1>UseEffectHooks</h1>
    <h1>{count}</h1>
    <button onClick={()=>{setcount(count-1)}}> decrease Count </button>
    <button onClick={()=>{setcount(count+1)}}> Increase Count </button> */}

    <h1>UseReducerHooks</h1>
    <h1>{state}</h1>

    <button onClick={()=> dispatch({type:"INCR"})}> Increase Count </button>
    <button onClick={()=> dispatch({type:"DECR"})}>  Decrease Count </button>

    </>
  )
}

export default UseReducerHooks
