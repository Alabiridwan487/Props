import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Blogs from "./pages/Blogs";



const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {index: true, element: <Home/>},
            {path:"/create", element: <Create/>},
            {path:"/blogs", element: <Blogs/>}
        ]
    }
])

export default router