import React, { useState } from 'react'

const Test = () => {
    const [alldata,setalldata] = useState ([])
    const [id,setid] = useState ("")
    const [data , setdata] = useState ({
        name:"",
        age:"",
        salary:""
    })
    const handlechange =(e) =>{
        const{name,value} = e.target
        setdata({...data,
            [name]:value
            
        })
    }
    const saveData = (e) =>{
        e.preventDefault()
        setalldata([...alldata,data])
    }

  return (
    <div>
        <form action='#' method='post' onSubmit={saveData} >
            <label htmlFor=''>name</label>
            <input type='text' name='name' value={data.name} onChange={handlechange}/>
            <br></br>
              <label htmlFor=''>age</label>
            <input type='number' name='age' value={data.age} onChange={handlechange}/>
            <br></br>
              <label htmlFor=''>salary</label>
            <input type='number' name='salary' value={data.salary} onChange={handlechange}/>
            <button type='submit'>save</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>salary</th>

                </tr>
            </thead>
            <tbody>
                {
                    alldata.map((i,index) =>{
                        return(
                            <tr>
                                <td>{index + 1}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>

                                <td>{i.salary}</td>
                               

                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default Test
