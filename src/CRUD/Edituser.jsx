import { useNavigate, useParams } from "react-router-dom"
import style from "./home.module.css"
import { useEffect, useState } from "react"

import axios from "axios"

const Edituser=()=>{

    let navigate =  useNavigate()
    //------------------------for name----------------
    let[name,setName]=useState("")
    let namehandle=((x)=>{
        setName(x.target.value)
       
    })
 //-----------------------for salary------------
 let [salary,setSalary]=useState("")
 let salaryhandle=((y)=>{
     setSalary(y.target.value)
    
 })
//---------------------For company name------------------
let[comp,setComp]=useState("")
let comphandle=((z)=>{
    setComp(z.target.value)
   
})


let {abc} = useParams()
// console.log(abc);

//--------------------------------update the data-------------------------
let formhandle=(e)=>{

     e.preventDefault();
    let payload = {name,salary,comp}
    axios.put(`http://localhost:3000/user/${abc}`,payload)
    .then(()=>{
        console.log("Data Updated ");
    })
    .catch(()=>{
        console.log("Data npot updated");
    })

    navigate("/user")
}




useEffect(()=>{

    axios.get(`http://localhost:3000/user/${abc}`)
    .then((res)=>{
        // console.log("Data has been stored");
        // console.log(res.data)
        setName(res.data.name)
        setSalary(res.data.salary)
        setComp(res.data.comp)
        
    })
    .catch(()=>{
        console.log("Data is not stored");
    })
    

},[])     



    return(
        <div id={style.edituser}>
            <div id={style.edituserform}>
            <form >

                <h3>Update-User</h3>

            <label  >Name : </label>
            <input type="text" onChange={namehandle} value={name}/>
            <label>Salary :</label>
            <input type="text"  value={salary} onChange={salaryhandle}/>
            <label>Comapny :</label>
            <input type="text"  value={comp} onChange={comphandle} />

            <button onClick={formhandle}>UPDATE</button>
            </form>
            </div>
        </div>
    )
}
export default Edituser