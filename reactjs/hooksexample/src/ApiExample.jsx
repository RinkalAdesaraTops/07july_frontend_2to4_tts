import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useApiCall from './useApiCall'
const ApiExample = () => {
    const [user] = useApiCall("https://jsonplaceholder.typicode.com/users")
    const [post] = useApiCall("https://jsonplaceholder.typicode.com/posts")
    const [photo] = useApiCall("https://jsonplaceholder.typicode.com/photos")
    // const [user,setUser] = useState([])
    // const [post,setPost] = useState([])
    // const [photo,setPhoto] = useState([])
    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //         .then((res)=>setPost(res.data))
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //         .then((res)=>setUser(res.data))
    //     axios.get("https://jsonplaceholder.typicode.com/photos")
    //         .then((res)=>setPhoto(res.data))
    // },[])
  return (
    <div>
      <table>
        <caption>User Information</caption>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {
                user.map((i)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.username}</td>
                            <td>{i.email}</td>
                            <td>{i.phone}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
      <hr />
      <table>
        <caption>Post Information</caption>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                
            </tr>
        </thead>
        <tbody>
            {
                post.map((i)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.body}</td>
                           
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
      <hr />
      
    </div>
  )
}

export default ApiExample
