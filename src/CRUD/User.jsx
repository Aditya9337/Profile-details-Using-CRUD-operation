import { useEffect, useState } from "react"
import axios from "axios"
import style from "./home.module.css"
import { Link } from "react-router-dom"
const User=()=>{
   let [content,setContent]=useState([])

   useEffect(()=>{
          axios.get(" http://localhost:3000/user")
          .then((res)=>{
            console.log(res.data);
                   setContent(res.data)
          })
         .catch(()=>{
              console.log("Data is not Fetched");
         })
   },[])
 
let deleteData=(d)=>{
           axios.delete(`http://localhost:3000/user/${d}`)
           window.location.reload("/user")
}
    return(
        <div id={style.userpage}>
              {content.map((x)=>{
                     return(
                        <div id={style.profile}>
                            
                        <table>
                            <tr>
                                <th colSpan="2">USER :{x.id}</th>
                            </tr>
                            <tr>
                                <td>NAME</td>
                                <td>: {x.name}</td>
                            </tr>
                            <tr>
                                    <td>Company</td>
                                    <td>: {x.comp}</td> 
                            </tr>
                            <tr>
                                   <td>Salary</td>
                                   <td>: {x.salary}</td>
                            </tr>
                            
                            <br /><br />
                        </table>
                        <button><Link to={`/edit/${x.id}`}>EDIT</Link></button> 
                        <button onClick={()=>{deleteData(x.id)}}>DELETE</button>

                           
                        </div>
                     )
              })}
        </div>
    )

}
export default User