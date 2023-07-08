import style from "./find.module.css"
import { Link } from "react-router-dom"

const Menu=()=>{
    return(
       <ol id={style.MenuBlock}>
        <li><Link to="/abc1">Explore Work</Link></li>
        <li><Link to="/abc2">Hire Talents</Link></li>
        <li><Link to="/abc3">Dev Board</Link></li>
        <li><Link to="/abc4">Challenges</Link></li>
       </ol>
    )
}
export default Menu