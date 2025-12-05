import React, { useState } from "react";

const CrudExam = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [alldata, setAlldata] = useState([]);
  const [id, setId] = useState("");
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    setAlldata([...alldata, data]);
    setData({
      name: "",
      age: "",
      salary: "",
    });
  };
  return (
    <div>
      <form action="#" method="post" name="frm" onSubmit={saveData}>
        Name:
        <input type="text" name="name" id="name" value={data.name} onChange={handlechange} />
        <br />
        <br />
        Age:
        <input type="number" name="age" id="age"value={data.age} onChange={handlechange} />
        <br />
        <br />
        Salary:
        <input type="number" name="salary" id="salary" value={data.salary}onChange={handlechange} />
        <br />
        <br/>
        <input type="submit" value="save"/>
      </form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
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
                </tr>
              );
            })}
          </tbody>
       
      </table>
    </div>
  );
};

export default CrudExam;
