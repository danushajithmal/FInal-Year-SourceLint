import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './experience.css'

function Experience() {
    return (

        <>
                <div className="row xp-about-container">
                    <div className="col-sm"></div>
                    <div className="about-me col-sm-6">
                        <h4>My Experience</h4><br />
                        <p>I am currently unemployed and previously I worked as a
                            freelancer for almost a year. In freelancing I have done many
                            jobs related to Java swing, java web and C# .net applications
                            likewise. Here are my academic related experience.
                        </p>
                        <div className="row">
                            <div className="col-sm"></div>
                            <div className="projects col-sm-6">
                                <ul>
                                    <li>Token Generator Using C# .net Framework</li>
                                    <li>Movie Tickets Reservation System Using Java</li>
                                    <li>Smart Irrigation System Using IOT</li>
                                </ul>
                            </div>
                            <div className="col-sm"></div>
                        </div>

                    </div>
                    <div className="col-sm"></div>
                </div>


            {/* skills bars */}

            <div class="col-xl-10 mt-5">
                <div class="row p-5">
                    <h1>Programming Skills</h1>
                </div>
                <div class="row mt-5">
                    <div class="col-sm-3 text-black">
                        <p>C</p>
                    </div>
                    <div class="col-sm-8">
                        <div class="progress">
                            <div class="progress-bar bg-danger" style={{ width: '60%' }}>60%</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3 text-black">
                        <p>Html/CSS</p>
                    </div>
                    <div class="col-sm-8">
                        <div class="progress">
                            <div class="progress-bar bg-danger" style={{ width: '85%' }}>85%</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3 text-black">
                        <p>JavaScript</p>
                    </div>
                    <div class="col-sm-8">
                        <div class="progress">
                            <div class="progress-bar bg-danger" style={{ width: '35%' }}>35%</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3 text-black">
                        <p>C#</p>
                    </div>
                    <div class="col-sm-8">
                        <div class="progress">
                            <div class="progress-bar bg-danger" style={{ width: '65%' }}>65%</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3 text-black">
                        <p>Java</p>
                    </div>
                    <div class="col-sm-8">
                        <div class="progress">
                            <div class="progress-bar bg-danger" style={{ width: '70%' }}>70%</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3 text-black">
                        <p>Python</p>
                    </div>
                    <div class="col-sm-8">
                        <div class="progress">
                            <div class="progress-bar bg-danger" style={{ width: '40%' }}>40%</div>
                        </div>
                    </div>
                </div>

                <div class="row"></div>

            </div>
        </>
    )
}

export default Experience