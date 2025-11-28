import React, { useState } from "react";

const Usercomponent = () => {
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
        let res = alldata.map((i,index)=> (index==id)? i=data:i)
        setAlldata(res)
    } else {
        setAlldata([...alldata, data]);
    }
    
    setData({
      username: "",
      age: "",
      salary: "",
    });
    setId('')
  };
  const delData = (id)=>{
    let res = alldata.filter((i,index)=> index != id)
    setAlldata(res)
  }
  const editData = (id)=>{
    let res = alldata.find((i,index)=> index == id)
    setData(res)
    setId(id)
  }  
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
          {alldata.map((i, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{i.username}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button onClick={()=>editData(index)}>Edit</button>
                  <button onClick={()=>delData(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Usercomponent;
