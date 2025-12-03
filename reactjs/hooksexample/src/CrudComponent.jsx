import React, { useState } from 'react'

const CrudComponent = () => {
    const [data, setData] = useState([])
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })
    const handleChange = (e) =>{
      let {name,value}=e.target
      setForm
      ({
        ...form,
        [name]:value
      })

    } 

    const handleSubmit =(e)=>{
        e.preventDefault()
        setData([...data,form])
        // let res = data.find((_,index)=>{
        //     return index == id
        // })
        // setData(res)
        setData(data[index])
    }

  return (
    <div>
      <form action='#' method='post' onSubmit={handleSubmit}>
        <input type="text" name="name" id="" value={form.name} placeholder='enter a name' onChange={handleChange} />
        <input type="number" name="age" id=""  value={form.age} placeholder='enter a age' onChange={handleChange} />
        <input type="email" name="email" id="" value={form.email} placeholder='enter a email' onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
      <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>email</th>
                
            </tr>
        </thead>
        <tbody>
            {
                data.map((i,index)=>{
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.email}</td>
                            
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default CrudComponent
