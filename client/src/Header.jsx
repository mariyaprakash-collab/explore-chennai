import "./header.css"
import {NavLink} from "react-router-dom";
import { useEffect } from "react";

function Header(){
  useEffect(() => {
  const activeLink = document.querySelector(".navbar a.active");

  if (activeLink) {
    activeLink.scrollIntoView({
      behavior:"instant",
      inline: "center",
      block: "nearest",
    });
  }
  }, []);
  return(
    <div className="mheader">
        <div className="titletext">
        <h2>CHENNAI -</h2>
        <h3>நம்ம ஊர்</h3>
        </div>

        <div className="navbar">
              <NavLink to="/" >HOME</NavLink>
              <NavLink to="/beaches">BEACHES</NavLink>
              <NavLink to="/malls">MALLS</NavLink>
              <NavLink to="/theatres">THEATRES</NavLink>
              <NavLink to="/parks&zoos">PARKS & ZOOS</NavLink>
              <NavLink to="/museums">MUSEUMS</NavLink>
              <NavLink to="/foods">FOODS</NavLink>
        </div>
    </div>
  )
}

export default Header;