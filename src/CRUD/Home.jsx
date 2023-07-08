import { Link } from "react-router-dom" 
import style from "./home.module.css"
const Home=()=>{
    return(
        <section id={style.home}>
              <button> <Link to="/createuser">CREATE-User</Link> </button>  
              <button>   <Link to="/user">USER</Link> </button>  
              
        </section>
    )
}
export default Home