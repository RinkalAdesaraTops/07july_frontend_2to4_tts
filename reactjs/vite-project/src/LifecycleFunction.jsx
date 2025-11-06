import React, { useEffect, useState } from 'react'

const LifecycleFunction = () => {
    const [name,setName] = useState('test')
    useEffect(()=>{
        setTimeout(()=>{
            setName("ABCD")
        },3000)
    },[])
  return (
    <div>
      <h3>Function Lifecycle Example</h3>
      <h4>Name is -- {name}</h4>
    </div>
  )
}

export default LifecycleFunction
