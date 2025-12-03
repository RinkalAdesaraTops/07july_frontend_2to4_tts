import { createContext, useContext,useState } from "react";

const UserData = createContext();
const ContextExample2 = () => {
  let [data, setData] = useState("test");
  let [obj,setObj] = useState({
    "name":"dfgdfg",
    "age":25
  })
  let [arr,setArr] = useState([10,20,30,40,50])
  return (
    <div>
      <h3>Component1 called..</h3>
      <h4>Data is -- {data}</h4>
      <UserData.Provider value={{data,obj}}>
        <Component2 />
      </UserData.Provider>
    </div>
  );
};
const Component2 = () => {
  return (
    <div>
      <h3>Component2 called..</h3>
      <Component3 />
    </div>
  );
};
const Component3 = () => {
  return (
    <div>
      <h3>Component3 called..</h3>
      <Component4 />
    </div>
  );
};
const Component4 = () => {
    let {data,obj} = useContext(UserData)
  return (
    <div>
      <h3>Component4 called..</h3>
      <h4>Final Data is -- {data}</h4>
      <h4>Name is -- {obj.name}</h4>
    </div>
  );
};
export default ContextExample2;
