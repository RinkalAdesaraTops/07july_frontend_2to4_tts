import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiCrud = () => {
  const [data, setData] = useState({
    username: "",
    age: "",
    salary: "",
  });
  const [alldata, setAlldata] = useState([]);
  const [id, setId] = useState("");
  
  const changeData = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const insertData = (event) => {
    event.preventDefault();
    if(id!==''){
      axios.put("http://localhost:3000/users/"+id,data)
    } else {
      axios.post("http://localhost:3000/users",data)
    }
    disp()
    setData({
      username: "",
      age: "",
      salary: "",
    });
    setId('')
  };
  const disp = async()=>{
    await axios.get("http://localhost:3000/users")
      .then((res)=>setAlldata(res.data))
  }
  
  const delData = async(id)=>{
    await axios.delete("http://localhost:3000/users/"+id)
    disp()
  }
  const editData = async(id)=>{
    await axios.patch("http://localhost:3000/users/"+id)
      .then((res)=>setData(res.data))
    
    setId(id)
  }  

  useEffect(()=>{
      disp()
  },[])
  return (
    <div>
      <form action="#" method="post" onSubmit={insertData}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={changeData}
          value={data.username}
        />{" "}
        <br />
        <br />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={changeData}
          value={data.age}
        />{" "}
        <br />
        <br />
        <label htmlFor="">Salary:</label>
        <input
          type="number"
          name="salary"
          id="salary"
          onChange={changeData}
          value={data.salary}
        />{" "}
        <br />
        <br />
        <input type="submit" value="Save" />
      </form>
      <table border={"2"}>
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
          {
          alldata.map((i, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{i.username}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button onClick={()=>editData(i.id)}>Edit</button>
                  <button onClick={()=>delData(i.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ApiCrud;
