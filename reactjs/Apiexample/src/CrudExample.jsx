import React, { useEffect, useState } from "react";
import axios from "axios";
const CrudExample = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [id, setId] = useState("");
  const [alldata, setAllData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    if(id!=''){
        axios.put("http://localhost:3000/users/"+id,data)
            .then(() => console.log("Updated..."));

    } else {
        axios
            .post("http://localhost:3000/users", data)
            .then(() => console.log("Inserted..."));
    }
    disp();

    setData({
      name: "",
      age: "",
      salary: "",
    });
  };
  const disp = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setAllData(res.data));
  };
  useEffect(() => {
    disp();
  }, []);
  const editData = (id) => {
    axios
      .patch("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data));
      setId(id)
  };
  const delData = (id) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      .then(() => console.log("Delete"));
    disp();
  };
  //   disp()
  return (
    <div>
      <h3>User CRUD Example</h3>
      <form method="post" name="frm" action="#" onSubmit={saveData}>
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
        <input type="submit" value="SaveData" />
      </form>
      <br />
      <br />
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
          {alldata.map((i) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button onClick={() => editData(i.id)}>Edit</button>
                  <button onClick={() => delData(i.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CrudExample;
