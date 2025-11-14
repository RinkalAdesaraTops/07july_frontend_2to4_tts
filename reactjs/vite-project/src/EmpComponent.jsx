import React, { useState } from "react";

const EmpComponent = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [alldata, setAllData] = useState([]);
  const handleChange = (e) => {
    let { name, value } = e.target;
    // let nm = e.target.name
    // let val = e.target.value
    setData({
      ...data,
      [name]: value,
      // [nm]:val
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    setAllData([...alldata, data]);
  };
  const delData = (id)=>{
    let res = alldata.filter((i,index)=> index != id)
    setAllData(res)
  }
  return (
    <div>
      <h3>Employee Add</h3>
      <form action="#" method="post" name="frm" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          value={data.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Salary:</label>
        <input
          type="number"
          name="salary"
          id="salary"
          value={data.salary}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" name="save" value="Save Data" />
        <br />
        <br />
      </form>
      <br />
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
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td><button onClick={()=>delData(index)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmpComponent;
