import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Home from '@/Home/views/Index';

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'',
                element:<Navigate to={'home'}/>
            },
            {
                path:'home',
                element:<Home/>
            }
        ]
    }
])