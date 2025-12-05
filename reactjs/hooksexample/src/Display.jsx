import React, { memo } from 'react'

const Display = ({alldata}) => {
    console.log('display component called..');
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>age</th>
                <th>salary</th>
            </tr>
        </thead>
        <tbody>
            {alldata.map((i,index)=>{
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.salary}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default memo(Display)
