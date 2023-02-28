import React, { useEffect, useState } from 'react'

const UseStateHooks = () => {

    const[count,setcount] = useState(0)
  
  return (
    <>
    <h1>UseStaeHooks</h1>
    <h1>{count}</h1>
    <button onClick={()=>{setcount(count+1)}}> Increase Count </button>
    <button onClick={()=>{setcount(count-1)}}> decrease Count </button>
    </>
  )
}

export default UseStateHooks
