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
import CreateProject from "./pages/admin/CreateProject";
import UpdateProject from "./pages/admin/UpdateProject";
import AdminProjects from "./pages/admin/AdminProjects";
import Admin from "./pages/admin/Admin";
import { AdminProtected } from "./hooks/protected";
import OrganizeProjects from "./pages/admin/OrganizeProjects";

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

                        <Route path='/admin/login' element={
                            <LogIn />
                        }></Route>
                        <Route path='/admin' element={
                            <AdminProtected>
                                <Admin />
                            </AdminProtected>
                        }></Route>
                        <Route path='/admin/projects' element={
                            <AdminProtected>
                                <AdminProjects />
                            </AdminProtected>
                        }></Route>
                        <Route path='/admin/projects/create' element={
                            <AdminProtected>
                                <CreateProject />
                            </AdminProtected>
                        }></Route>
                        <Route path='/admin/projects/:id' element={
                            <AdminProtected>
                                <UpdateProject />
                            </AdminProtected>
                        }></Route>
                        <Route path='/admin/projects/organize' element={
                            <AdminProtected>
                                <OrganizeProjects />
                            </AdminProtected>
                        }></Route>
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