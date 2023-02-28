import React, { useState,useEffect } from 'react'

const UseEffectHooks = () => {
    const[count,setcount] = useState(0)
    useEffect(()=>{
        document.title = `chats(${count})`
    },[])
  return (

    <>
    <h1>UseStaeHooks</h1>
    <h1>{count}</h1>
    <button onClick={()=>{setcount(count+1)}}> Increase Count </button>
    <button onClick={()=>{setcount(count-1)}}> decrease Count </button>
    </>
  )
}

export default UseEffectHooks
