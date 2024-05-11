import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../../icons/logo.png'
import './adminnavbar.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from 'react';

function AdminNavbar() {
    const nav = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('adminToken');
        alert("Logged out Successfully")
        nav("/admin")

    };

    const checkProtectedRoute = async () => {
        try {
            const response = await axios.get('http://localhost:5000/admin/protected', {
                headers: {
                    'x-auth-token': sessionStorage.getItem('adminToken'),
                },
            });

            console.log('Protected Route Response:', response.data);
        } catch (e) {
            console.log('Error checking protected route:', e);
        }
    };

    useEffect(() => {
        checkProtectedRoute();
    }, []);


    return (
        <>
            {/* <!-- Sidebar --> */}
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                <div class="position-sticky">
                    <div class="list-group list-group-flush mx-3 mt-4">

                        {/* <!-- Collapsed content --> */}
                        <hr />
                        <ul class="collapse show list-group list-group-flush">
                            <li class="list-group-item py-1">
                                <a href='/admindashboard' class="text-reset">Dashboard</a>
                            </li>

                            <li class="list-group-item py-1">
                                <a href="/emaillist" class="text-reset">Emails</a>
                            </li>
                        </ul>
                        <hr />
                        <button className="logoutbutton" onClick={handleLogout}>
                            Log Out
                        </button>
                    </div>
                </div>
            </nav>


            {/* <!-- Navbar --> */}
            <nav id="#main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                {/* <!-- Container wrapper --> */}
                <div class="container-fluid">
                    {/* <!-- Toggle button --> */}

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <!-- Brand Logo --> */}
                    <a class="navbar-brand" href="/admindashboard">
                        <img className="img-responsive" src={logo} height="50" alt="Logo" loading="lazy" />
                    </a>
                    
                    
                    <div className="navbar-heading col-xs-12 col-sm-12 col-md-12 col-lg-10">
                            <h2>Welcome Admin</h2>
                        </div>
                 
                        


                </div>

            </nav>

            <main style={{ margintop: '50px' }}>
                <div class="container pt-4"></div>
            </main>

        </>
    )
}

export default AdminNavbar