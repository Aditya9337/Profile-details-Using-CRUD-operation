import Logo from "./Logo"
import Menu from "./Menu"
import Btn from "./Btn"
import style from "./find.module.css"

const FindCoder=()=>{
    return(
          <section id={style.nav}>
            <article id={style.article}>
                <div className={style.logo}><Logo></Logo></div>
                <div className={style.menu}><Menu></Menu></div>
                <div className={style.btn}><Btn></Btn></div>
            </article>
          </section>     
)
}
export default FindCoder