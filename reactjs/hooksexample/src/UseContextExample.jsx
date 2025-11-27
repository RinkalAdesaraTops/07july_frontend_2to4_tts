import React, { createContext, useContext,useState } from 'react'
const UserData = createContext()
const UseContextExample = () => {
      let [name, setName] = useState("Test");
    
  return (
    <div>
      <h3>Component1 called..</h3>
      <h4>Name is -- {name}</h4>
        <UserData.Provider value={name}>
            <Component2 />

        </UserData.Provider>
    </div>
  )
}
const Component2 = () => {
  return (
    <div>
      <h3>Component2 called..</h3>
      <Component3/>
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
    let name = useContext(UserData)
  return (
    <div>
      <h3>Component4 called..</h3>
      <h4>Final Name is -- {name}</h4>
    </div>
  );
};
export default UseContextExample
