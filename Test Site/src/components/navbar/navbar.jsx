import React from "react";
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../icons/logo.png'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} width="200px" alt='logo'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item li-container">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item li-container">
                                <a class="nav-link" href="/experience">My Experience</a>
                            </li>
                            <li class="nav-item li-container">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item li-container">
                                <a class="nav-link" href="">Contact Me</a>
                            </li>
                            

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar