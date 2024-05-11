//adminlogin.jsx

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './adminlogin.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/admin/login", { username, password });

            if (response.data.success) {
                sessionStorage.setItem("adminToken", response.data.token);
                console.log('JWT Token:', response.data.token);
                alert("Logged In");
                setTimeout(() => {
                    sessionStorage.removeItem("adminToken");
                    alert("Session expired. Redirecting to login...");
                    nav("/admin");
                }, 60000);
                nav("/admindashboard");
            } else {
                alert("Wrong Credentials");
            }
        } catch (e) {
            alert("Error occurred while logging in");
            console.log(e);
        }
    };

    return (
        <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <h2 style={{ textAlign: 'center' }}>Admin</h2>
                                <hr /><br />
                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <input type="text" id="username" className="form-control form-control-lg" value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Enter Username" />
                                    <label className="form-label" htmlFor="form3Example3">Username</label>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-3">
                                    <input type="password" id="password" className="form-control form-control-lg" value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter password" />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>

                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" onClick={submit} className="btn btn-primary btn-lg"
                                        style={{ paddingleft: '2.5rem', paddingright: '2.5rem' }}>Login</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}


export default AdminLogin