import { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Createuser=()=>{
    //-------------------------for navigate to the user---------------------
    let navigate = useNavigate()
    //---------------For Name----------------------
    let[name,setName]=useState("")
    let namehandle=(x)=>{
        setName(x.target.value)
       
    }

    //-----------------------for salary------------
    let [salary,setSalary]=useState("")
    let salaryhandle=(y)=>{
        setSalary(y.target.value)
       
    }

    //---------------------For Phno------------------
    let[comp,setComp]=useState("")
    let comphandle=(z)=>{
        setComp(z.target.value)
       
    }
//---------------------------submitt------------------
let submit=(res)=>{

    res.preventDefault();

    let payload ={name , salary , comp}
    axios.post("http://localhost:3000/user" , payload)
    .then(()=>{
        console.log("Data has been stored");
    })
    .catch(()=>{
        console.log("Data is not stored");
    })
    
navigate("/user")


}
    return(
        <div id={style.formbody}>
        <div id={style.myform}>
            <form>
                 <label htmlFor="">Name :</label>
                 <input type="text" value={name} onChange={namehandle}/>
                <br />
                 <label htmlFor="">Salary :</label>
                 <input type="number" value={salary} onChange={salaryhandle} />
                 <br />
                 <label htmlFor="">Company :</label>
                 <input type="text" value={comp} onChange={comphandle}/>
                 <br />
                 <button onClick={submit}>SUBMIT</button>
            </form>
        </div>
        </div>
    )
}
export default Createuser