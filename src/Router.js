import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/notFound";
import Boids from "./pages/boids/Boids";
import Abstract from "./pages/Abstract";

function Router() {
    // initialize a browser router
    const router = createBrowserRouter([{
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/projects",
            element: <Projects />,
        },
        {
            path: "/boids",
            element: <Boids />,
        },
        {
            path: "/abstract",
            element: <Abstract />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
        ]
    }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default Router