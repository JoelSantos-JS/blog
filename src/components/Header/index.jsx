import React from "react";
import logo from "../../assets/logo.png";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src={logo}
          alt="logo do projeto"
          style={{ width: "60px", height: "60px" }}
        />
        <h1 className="">Today i Learned</h1>
      </div>

      <button className="btn btn-large btn-open">Share a fact</button>
    </header>
  );
}

export default Header;
