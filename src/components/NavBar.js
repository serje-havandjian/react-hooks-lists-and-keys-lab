import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const displayLinks = links.map((link)=>{
    return <a href="#home" key={link} >{link}</a>
  })

  return <nav>{
    displayLinks
    }</nav>;
}

export default NavBar;
