import React from "react";

const TopNavbar = (props) => {

  return (
    <div className="TopNavbar">
      <div onClick = {() => props.changeDataDisplay("intro")} className="navbar-component">Introduction</div>
      <div onClick = {() => props.changeDataDisplay("projects")} className="navbar-component">Projects</div>
      <div onClick = {() => props.changeDataDisplay("contact")} className="navbar-component">Contact Me</div>
    </div>
  );
}

export default TopNavbar;