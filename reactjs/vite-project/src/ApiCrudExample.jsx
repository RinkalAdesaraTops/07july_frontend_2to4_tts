import axios from "axios"
import { useState } from "react"

const ApiCrudExample = () => {
    const [data,setData] = useState({
        name:"",
        age:"",
        salary:""
    })
    const [alldata,setAlldata] = useState([])
    const [id,setId] = useState('')
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/users",data)
        .then(()=>console.log("Inserted"))
    }
    return (
    <div>
      <h3>Api CRUD Example</h3>
      <form action="#" method='post' name="frm" onSubmit={saveData}>
        Name:
        <input type="text" name="name" id="name" value={data.name} onChange={handleChange} />
        <br /><br />
        Age:
        <input type="number" name="age" id="age" value={data.age} onChange={handleChange}/>
        <br /><br />
        Salary:
        <input type="number" name="salary" id="salary" value={data.salary} onChange={handleChange} />
        <br /><br />
         <input type="submit" value="save" />
        <br /><br />
      </form>
      <br /><br />
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}
export default ApiCrudExample
