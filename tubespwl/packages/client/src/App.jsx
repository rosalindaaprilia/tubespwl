import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "./route/home"
import List from "./route/list";
import Register from "./route/register";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },{
      path : "/register",
      element : <Register/>
    }, 
    {
      path : "/list",
      element : <List/>
    }
  ]);

  export default function App() {
    return (
        <>
        <RouterProvider router={router} />
        </>
    )
  }