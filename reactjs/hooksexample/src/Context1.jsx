import React, { useState } from "react";

const Context1 = () => {
  let [data, setData] = useState("test");
  return (
    <div>
      <h3>Component1 called..</h3>
      <h4>Data is -- {data}</h4>
      <Component2 data={data} />
    </div>
  );
};
// props drilling
const Component2 = ({ data }) => {
  return (
    <div>
      <h3>Component2 called..</h3>
      <Component3 data={data} />
    </div>
  );
};
const Component3 = ({ data }) => {
  return (
    <div>
      <h3>Component3 called..</h3>
      <Component4 data={data} />
    </div>
  );
};
const Component4 = ({ data }) => {
  return (
    <div>
      <h3>Component4 called..</h3>
      <h4>Final Data is -- {data}</h4>
    </div>
  );
};

export default Context1;
