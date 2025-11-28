import React from 'react'

const Secondcomponent = (props) => {
    // immutable - props
  return (
    <div>
      <h3>Second Component Called..</h3>
      <h4>Name is -- {props.myname}</h4> 
      <br />
      <h4>Age is -- {props.myage}</h4>
      <h4>Salary is -- {props.sal}</h4>
    </div>
  )
}
export default Secondcomponent
