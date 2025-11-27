import { useState } from "react";

const ContextExample = () => {
  let [name, setName] = useState("Test");
  return (
    <div>
      <h3>Context Example</h3>
      <h3>Component1 called..</h3>
      <h4>Name is -- {name}</h4>

      <Component2 name={name}/>
    </div>
  );
};
const Component2 = ({ name }) => {
  return (
    <div>
      <h3>Component2 called..</h3>
      <Component3 name={name}/>
    </div>
  );
};
const Component3 = ({ name }) => {
  return (
    <div>
      <h3>Component3 called..</h3>
      <Component4 name={name}/>
    </div>
  );
};
const Component4 = ({ name }) => {
  return (
    <div>
      <h3>Component4 called..</h3>
      <h4>Final Name is -- {name}</h4>
    </div>
  );
};
export default ContextExample;
