import { createBrowserRouter } from "react-router-dom";
import Cards from "../Cards/Cards";
import Details from "../Details/Details";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Cards></Cards>
    },
    {
        path: '/details/:id',
        element:<Details></Details>,
        loader: ({params})=> fetch(`https://quadb-server.vercel.app/movies/${params.id}`)
    }
])