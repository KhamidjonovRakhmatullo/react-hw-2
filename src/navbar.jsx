import React from "react";
import {Link} from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "GrayText",
        padding: "10px",
        color: "yellow",
      }}
    >
     <Link to= "/home"> 
     <p style={{cursor: "pointer"}}> Home</p> 
     </Link>
     <Link to= "/facilities"> 
     <p style={{cursor: "pointer"}}>Facilities</p>
     </Link>
     <Link to= "/rooms">    
     <p style={{cursor: "pointer"}}>Rooms</p>
       </Link>
       <Link to= "/contact-us">
      <p style={{cursor: "pointer"}}>Contact-us</p>
      </Link>
    </div>
  );
};

export default NavbarComponent;
