import React, { useState,useCallback } from 'react'
import Display from './Display'

const First = () => {
    const[data, setdata] = useState({
        name:"",
        age:"",
        salary:""
    })
    const[alldata,setalldata] = useState([])
    const handleChange = (e)=>{
        let{name,value} = e.target
        setdata({
            ...data,
            [name]:value
        })
    }
    const saveData = useCallback((e)=>{
        e.preventDefault()
        setalldata([...alldata,data])
        setdata({
            name:"",
            age:"",
            salary:""
        })
    },[data])   
    // useCallback hooks = to prevent unneccesary function 
    // -->returns memoized function
    //--> to freeze a function
  return (
    <div>
      <form action="" name='frm' onSubmit={saveData}>
        <label htmlFor="">name</label>
        <input type="text" name='name' id='name' value={data.name} onChange={handleChange}/>
        <br />
        <label htmlFor="">age</label>
        <input type="number" name='age' id='age' value={data.age} onChange={handleChange}/>
        <br />
        <label htmlFor="">salary</label>
        <input type="number" name='salary' id='salary' value={data.salary} onChange={handleChange}/>
       <br />
        <button type='submit'>save</button>
      </form>
       
    </div>
  )
}

export default First
