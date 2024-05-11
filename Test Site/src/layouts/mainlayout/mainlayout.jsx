import React from "react";
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './mainlayout.css'


const { Content } = Layout;

function MainLayout(){
    return(
        <>
        <Layout>
            <Navbar/>
            <div className="hero-image container-fluid">
                <Content>  
                        
                    <Outlet/>
                
                </Content>
            </div>
            <Footer/>
        </Layout>
        </>
    )
}

export default MainLayout