import React from "react";
import {useRoutes} from 'react-router-dom'
import MainLayout from "../layouts/mainlayout/mainlayout";

import Home from "../pages/home/home";
import Experience from "../pages/experience/experience";
import About from "../pages/about/about";

import AdminLayout from "../layouts/adminlayout/adminlayout";
import AdminLogin from "../pages/adminpages/adminlogin/adminlogin";
import AdminDashboard from "../pages/adminpages/admindashboard/admindashboard";
import EmailList from "../pages/adminpages/email/emaillist";


const RouterConfig = () => {
    return(
        
        useRoutes(
            [
                {
                    path: '/',
                    element: <MainLayout/>,
                    children: [
                        {
                            index: true,
                            element: <Home/>
                        },
                        {
                            path: '/experience',
                            element: <Experience/>
                        },
                        {
                            path: '/about',
                            element: <About/>
                        }
                    ]
                },

                {
                    path: '/admin',
                    index: true,
                    element: <AdminLogin/>
                },

                {
                    path: '/',
                    element: <AdminLayout/>,
                    children: [
                        {
                            path: '/admindashboard',
                            element: <AdminDashboard/>
                        },
                        {
                            path: '/emaillist',
                            element: <EmailList/>
                        }
                    ]
                },

                
            ]
        )
    
    )
}


export default RouterConfig