import React, { useEffect, useState } from "react";
import axios from "axios";
const ApiExample = () => {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/users")
        .then((res)=>setUserdata(res.data))
    // fetch("https://fakestoreapi.com/users")
    //   .then((response) => response.json())
    //   .then((data) => setUserdata(data))
    //   .catch((err) => {
    //     console.log(err);
    //     console.log("Error in API calling");
    //   });
  }, []);
  return (
    <div>
      <h3>Api Example</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone No</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((i) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.username}</td>
                <td>{i.email}</td>
                <td>{i.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ApiExample;
