import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images.png'
import './Header.css'; // You'll need to create the corresponding CSS file
import Dropdown from 'react-bootstrap/Dropdown';
 import Navb from './Navb';

function Header() {
     
  
  return (
    <>
    <div className="header-container">
      <div className="header-left">
      
      <Dropdown>
      <Dropdown.Toggle variant="white" id="dropdown-basic">
ETF      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Change Site:
ETF
Institutional Capabilities

</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>

      
        <div className="text2">Finland
Institutional Investor
</div>
      </div>
      <div className="header-right">
        <div className="contact-us">Contact Us</div>
      </div>
    </div>
      <hr className="custom-hr" />
      <img
      src={logo}
      alt="logo"
      className="logo"
      />
      <hr className="custom-hr" />
      <Navb />
       <hr className="custom-hr" />
      </>

  );
}

export default Header;


