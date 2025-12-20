import React, { useEffect, useState } from "react";
import { db } from "./firebase.js";
import { addDoc, collection,query,onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
const RevisionFirebase = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    pwd: "",
    g1: "",
  });
  const [alldata, setAlldata] = useState([]);
  const [id, setId] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  useEffect(() => {
    const q = query(collection(db, "empinfo"));
    const unsub = onSnapshot(q, (i) => {
      let todosArray = [];
      i.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setAlldata(todosArray);
    });
    return () => unsub();
  }, []);
  const delData = async(id)=>{
        await deleteDoc(doc(db,"empinfo",id))
  }
  const editData = async(id)=>{
      let result = await getDoc(doc(db,"empinfo",id))
      setData(result.data());
      setId(id)
  }
  const saveData = async (e) => {
    e.preventDefault();
    if(id !== ''){
        await updateDoc(doc(db,"empinfo",id),data)
    } else {
        await addDoc(collection(db, "empinfo"), data);
    }
    setData({
      name: "",
      email: "",
      pwd: "",
      g1: "",
    });
    setId('')
  };
  
  return (
    <div>
      <form action="#" name="frm" onSubmit={saveData}>
        Name:
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={data.name}
        />
        <br />
        <br />
        Email:
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={data.email}
        />
        <br />
        <br />
        Password:
        <input
          type="password"
          name="pwd"
          id="pwd"
          onChange={handleChange}
          value={data.pwd}
        />
        <br />
        <br />
        Gender:
        <input
          type="radio"
          name="g1"
          id="g1"
          onChange={handleChange}
          value="male" 
          checked = {(data.g1 == 'male')?'checked':''}
        />
        Male
        <input
          type="radio"
          name="g1"
          id="g1"
          onChange={handleChange}
          value="female"
          checked = {(data.g1 == 'female')?'checked':''}
        />
        Female
        <br />
        <br />
        <input type="submit" value={"Register"} />
        <br />
        <br />
      </form>
      <br />
      <table border={'2'} cellPadding={'10'}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((i, index) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.g1}</td>
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

export default RevisionFirebase;
