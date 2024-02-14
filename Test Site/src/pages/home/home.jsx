
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './home.css';

function Home() {
    return (
        <>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-8">
                        <div className="hero-text text-center mt-5">
                            <h1 className="greeting">Welcome!</h1>
                            <br /><br /><br /><br /><br />
                            <h2>I'm Jithmal Danusha</h2>
                            <h4>And I'm a Software Developer</h4>
                            <button className="btn btn-primary mt-3">Hire me</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home