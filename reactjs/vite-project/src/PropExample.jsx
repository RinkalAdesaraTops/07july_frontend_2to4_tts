import React from 'react'
import PropTypes from 'prop-types';
// default props
// const PropExample = (props) => {
const PropExample = ({myname,myage}) => { 
  return (
    <div>
      <h3>Props Example</h3>
      <h4>Name is -- {myname}</h4>
      <h4>Age is -- {myage}</h4>
    </div>
  )
}
// PropExample.defaultProps = {
//     myname:"TETST",
//     myage:"45"
// }
PropExample.propTypes  = {
  myname:PropTypes.string.isRequired,
  myage:PropTypes.number.isRequired
}

export default PropExample
