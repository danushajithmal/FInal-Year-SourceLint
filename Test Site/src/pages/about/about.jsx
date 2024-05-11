import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './about.css'
import dp from '../../components/icons/dp.jpg'

function About() {
    return (
        <>
            <div class="col-xl-10">
                <div class="dp row">
                    <div class="col-sm">
                        <img src={dp} class="rounded-pill img-fluid" width="200px" />
                    </div>
                </div>

                <div class="me row">
                    <div class="col-sm"></div>
                    <div class="col-sm-6">
                        <p>I am an undergraduate at NSBM
                            Green University. I’m currently
                            following a bachelor’s degree in
                            computer security which is
                            affiliated with the University of
                            Plymouth, and I have already
                            completed two years of my
                            degree program. I am currently
                            unemployed and looking forward
                            to using the skills that I have
                            achieved during these two years</p>
                    </div>
                    <div class="col-sm"></div>
                </div>

            </div>
        </>
    )
}

export default About