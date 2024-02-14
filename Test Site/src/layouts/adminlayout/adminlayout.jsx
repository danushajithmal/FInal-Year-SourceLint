import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/admincomponents/adminnavbar/adminnavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './adminlayout.css'

const {Content} = Layout;

function AdminLayout(){
    return(
        <>
        <div className="maincont">
        <Layout>
            <AdminNavbar/>
            <Content>
                <Outlet/>
            </Content>
        </Layout>
        </div>
        
        </>
    )
}

export default AdminLayout