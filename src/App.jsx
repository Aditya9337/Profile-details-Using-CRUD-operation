import Explore from "./Components/Explore"
import FindCoder from "./Components/FindCoder"
import Hire from "./Components/Hire"
import Dev from "./Components/Dev"
import Challenge from "./Components/Challenge"

import Home from "./CRUD/Home"
import { BrowserRouter ,Routes , Route } from "react-router-dom"
import Createuser from "./CRUD/Createuser"
import User from "./CRUD/User"
import Edituser from "./CRUD/Edituser"

const App=()=>{
    return(


        <div>
           {/* <BrowserRouter>

           <FindCoder> </FindCoder>

                <Routes>
                    <Route element={<Explore/>} path="/abc1"></Route>
                    <Route element={<Hire/>} path="/abc2"></Route>
                    <Route element={<Dev/>} path="/abc3"></Route>
                    <Route element={<Challenge/>} path="/abc4"></Route>
                </Routes>
              
           </BrowserRouter> */}
             
          <BrowserRouter>
          <Home></Home>
           <Routes>
                     <Route element={<Createuser></Createuser>} path="/createuser"></Route>
                     <Route element={<User></User>} path="/user"></Route>
                     <Route element={<Edituser></Edituser>} path="/edit/:abc"></Route>
           </Routes>
          
          
          </BrowserRouter>
       
        </div>
          
    )
}
export default App