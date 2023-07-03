import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Orders from "../pages/Orders";

function Routing() {
    return <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
    </>
}

export default Routing;