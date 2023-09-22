import React from "react";
import "./NavOffdata.css";
function NavOffdata() {
    return (
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#overview" className="nav-link">
              <h5>Overview</h5>  
              </a>
            </li>
            <li className="nav-item">
              <a href="#performance" className="nav-link">
               <h5> Performance</h5>
              </a>
            </li>
            <li className="nav-item">
              <a href="#pricing" className="nav-link">
               <h5>Pricing</h5> 
              </a>
            </li>
            <li className="nav-item">
              <a href="#document" className="nav-link">
                <h5>                Document
</h5>
              </a>
            </li>
          </ul>
        </nav>
      );
}
export default NavOffdata;

