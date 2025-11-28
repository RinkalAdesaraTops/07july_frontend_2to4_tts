import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react/jsx-runtime';
import Firstcomponent from './Firstcomponent';
import Secondcomponent from './Secondcomponent';
import Usercomponent from './Usercomponent';
import ApiCrud from './ApiCrud';
// jsx 
function App() {
  let a=20
  var b=35
  const name="abc"
  let age=25
  let salary = 25000
  return (
    <>
    {/* <Usercomponent /> */}
    <ApiCrud />
    {/* <Secondcomponent myname={name} myage="29" sal={salary}/> */}
    {/* // <React.Fragment> */}
    {/* <div>
      <h3>First React Project</h3>
      <h4>A is {a}</h4>
      <h4>B is {b}</h4>
      <h4>Addition is {a+b}</h4>
    </div>
    <Firstcomponent /> */}
    </>
    // </Fragment>
    // {/* </React.Fragment> */}  
  );
}
export default App;
