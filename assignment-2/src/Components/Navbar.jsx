// import React from "react";

// import { NavLink } from "react-router-dom";
// import styled from "styled-components"
// import pic from "../assects/logo.png"

// const links = [
//   { to: "/", title: "Home" },
//   { to: "/favoritecharacter", title: "Favorite Characters" }
// ];

// function Navbar() {

//   const ActiveLink = {
//     textDecoration:'none', color:'red' , fontSize:'25px' , textShadow: '4px 2px 4px rgba(0, 0, 0, 0.3)'
//   }
//   const defaultLink = {
//     textDecoration:'none', color:'black' , fontSize:'25px'  , textShadow: '4px 2px 4px rgba(0, 0, 0, 0.3)'
//   }
//   return (
//     <DIV>
      
//       <div id="maindiv">
      
//         <div id="logimg"><img src={pic} alt="" /></div>

//         {links.map((link) => {
//           return (
//             <NavLink id="links"  key={link.to} to={link.to} style={({isActive}) => {
//               return isActive ? ActiveLink : defaultLink
//             }}>
//               {link.title}
//             </NavLink>
//           );
//         })}
//       </div>
//     </DIV>
//   );
// }
// export { Navbar };


// const DIV = styled.div`
  
//   #maindiv{
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
//     display: flex;
//     justify-content: flex-end;
//     padding: 25px 90px;
//     gap: 300px;
//     /* background-color: #e7e5e5; */
//   }

 

// `

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import pic from "../assects/logo.png";

const links = [
  { to: "/", title: "Home" },
  { to: "/favoritecharacter", title: "Favorite Characters" }
];

function Navbar() {
  const ActiveLink = {
    textDecoration: 'none',
    color: 'red',
    fontSize: '25px',
    textShadow: '4px 2px 4px rgba(0, 0, 0, 0.3)'
  };

  const defaultLink = {
    textDecoration: 'none',
    color: 'black',
    fontSize: '25px',
    textShadow: '4px 2px 4px rgba(0, 0, 0, 0.3)'
  };

  return (
    <DIV>
      <div id="maindiv">
        <div id="logimg">
          <img  src={pic} alt="Logo"  style={{ width: '60px', marginLeft: "-800px" }} /> {/* Adjust the width as needed */}
        </div>
        {links.map((link) => {
          return (
            <NavLink id="links" key={link.to} to={link.to} style={({ isActive }) => {
              return isActive ? ActiveLink : defaultLink;
            }}>
              {link.title}
            </NavLink>
          );
        })}
      </div>
    </DIV>
  );
}

export { Navbar };

const DIV = styled.div`
  #maindiv {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 90px;
    gap: 300px; /* Adjust the gap between logo and links as needed */
    background-color: #e7e5e5;
  }
`;
