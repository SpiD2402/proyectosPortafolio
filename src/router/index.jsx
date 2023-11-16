import {BrowserRouter, Route, Routes} from "react-router-dom"
//import Search from "../pages/Search"
//Aca se renombro el componente Search a SearchView
import { SearchView } from "../pages"
import Users from "../pages/Users"
import User from "../pages/User"

export const Router =()=>{


    return (

        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={<SearchView/>}/>
                <Route path="users/:username"  element={<Users/>}  />
                <Route path="user/:username"  element={<User/>}  />




            </Routes>
        
        </BrowserRouter>


    )


}