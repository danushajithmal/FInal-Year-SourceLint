import React from "react";
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SubscribeForm from "./footermailscript";
import Logo from '../icons/logo.png'

function Footer() {

    return (
        <>
            <footer>
                <div className="footer-container-fluid">
                    <div class="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div>
                                <img src={Logo} width='200px' />
                                <p className="mb-30 footer-desc">This is my Personal website <br /> Thank you!</p>
                            </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
                            <h4>Quick Links</h4>
                            <div className="footer-link">

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="text-decoration-none">Home</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">My Experience</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">About</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">Contact Me</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <h4>Services</h4>
                            <div className="footer-link">

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="text-decoration-none">Software Design</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">Web design</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">Graphics Design</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none">Branding</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div>
                                <h4>Newsletter</h4>
                                <label className="form-label">Subscribe To Our Newsletter</label>
                                <div>
                                    <SubscribeForm/>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </footer>

        </>
    )
}

export default Footer
