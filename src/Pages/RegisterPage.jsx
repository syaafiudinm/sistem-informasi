import React, { Children } from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
    return (
        <div>
            <Navbar {...{ children: "Login", link: "/login" }} />
            <RegisterForm />
        </div>
    );
}

export default RegisterPage;