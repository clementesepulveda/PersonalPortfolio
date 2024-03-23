import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"

  import Home from "./pages/Home";
  import Boids from "./pages/Boids";
import NotFound from "./pages/notFound";
  
  function Router() {
    // initialize a browser router
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/boids",
          element: <Boids />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
    ])
  
    return (
        <RouterProvider router={router} />
    )
  }
  
  export default Router