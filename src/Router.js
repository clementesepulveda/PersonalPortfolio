import {
    BrowserRouter, Routes, Route
} from "react-router-dom"

import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import NotFound from "./pages/notFound";
// import Admin from "./pages/Admin";
import Boids from "./pages/boids/Boids";
import Abstract from "./pages/Abstract";
import Contact from "./pages/Contact";
import LogIn from "./pages/admin/LogIn";
import { AuthProvider } from "./contexts/AuthContext";

function Router() {

    return (
        <BrowserRouter >
            <AuthProvider>
                <Routes>
                    <Route Component={Layout}>
                        <Route path='/' Component={Home}></Route>
                        <Route path='/projects' Component={Projects}></Route>
                        <Route path='/blog' Component={Blog}></Route>
                        <Route path='/contact' Component={Contact}></Route>
                        <Route path='/abstract' Component={Abstract}></Route>
                        <Route path='/boids' Component={Boids}></Route>

                        <Route path='/admin' Component={LogIn}></Route>
                        <Route path='/adminLogin' Component={LogIn}></Route>
                        {/* add a project */}
                        {/* update a project */}
                        {/* delete a project */}
                        {/* add a blog */}
                        {/* update a blog */}
                        {/* delete a blog */}

                        <Route path='/*' Component={NotFound}></Route>
                    </Route>
                </Routes >
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Router