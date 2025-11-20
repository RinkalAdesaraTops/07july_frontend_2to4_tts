import axios from "axios";
import { useEffect, useState } from "react";

const ApiCrudExample = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [alldata, setAlldata] = useState([]);
  const [id, setId] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      axios
        .put("http://localhost:4000/users/" + id, data)
        .then(() => console.log("updated"));
    } else {
      axios
        .post("http://localhost:4000/users", data)
        .then(() => console.log("Inserted"));
    }

    disp();
    setData({
      name: "",
      age: "",
      salary: "",
    });
    setId("");
  };
  const disp = () => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setAlldata(res.data));
  };
  const delData = (id) => {
    axios
      .delete("http://localhost:4000/users/" + id)
      .then(() => console.log("Deleted"));
    disp();
  };
  const editData = (id) => {
    axios
      .patch("http://localhost:4000/users/" + id)
      .then((res) => setData(res.data));
    setId(id);
  };
  disp();
  // useEffect(() => {
  //   disp();
  // }, []);
  return (
    <div>
      <h3>Api CRUD Example</h3>
      <form action="#" method="post" name="frm" onSubmit={saveData}>
        Name:
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <br />
        Age:
        <input
          type="number"
          name="age"
          id="age"
          value={data.age}
          onChange={handleChange}
        />
        <br />
        <br />
        Salary:
        <input
          type="number"
          name="salary"
          id="salary"
          value={data.salary}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="save" />
        <br />
        <br />
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
export default ApiCrudExample;
