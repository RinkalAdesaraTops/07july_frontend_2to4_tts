import React, { useState, useEffect } from "react";

const LocalstorageCrud = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [id, setId] = useState("");
  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    let allData = JSON.parse(localStorage.getItem("userData"));
    if (allData != null) setData(allData);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let data1;
    if (id !== "") {
        data1 = data.map((i,index)=>{
            if(index == id){
                i = form
            }
            return i
        })
    } else {
      data.push(form);
      data1 = [...data];
    }
    setData(data1)
    localStorage.setItem("userData", JSON.stringify(data1));
    setForm({
      name: "",
      age: "",
      email: "",
    });
    setId("");
  };
  const delData = (id) => {
    let res = data.filter((i, index) => index != id);
    setData(res);
    localStorage.setItem("userData", JSON.stringify(res));
  };
  const editData = (id) => {
    let res = data.find((i, index) => index == id);
    setForm(res);
    setId(id);
  };
  return (
    <div>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          value={form.name}
          placeholder="enter a name"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          id=""
          value={form.age}
          placeholder="enter a age"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id=""
          value={form.email}
          placeholder="enter a email"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <table border={"2"}>
        <caption>User Information</caption>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.email}</td>
                <td>
                  <button onClick={() => editData(index)}>Edit</button>
                  <button onClick={() => delData(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LocalstorageCrud;
