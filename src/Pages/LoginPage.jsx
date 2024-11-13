import React from "react";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import "../index.css";

function Home() {
  return (
    <div>
        <Navbar />
        <LoginForm/>
    </div>
  )
}

export default Home;
