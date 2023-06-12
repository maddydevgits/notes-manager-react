import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
import { NavbarBrand } from "react-bootstrap";
 
const DashboardNavbar = () => {
    return (
        <div>
            <Nav>
                <NavMenu>
                    <NavbarBrand style={{color: "white",fontSize:"large"}}>Notes Manager</NavbarBrand>
                    <NavLink to="/dashboard" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/insertnotes" activeStyle>
                        Insert Notes
                    </NavLink>
                    <NavLink to="/viewnotes" activeStyle>
                        View Notes
                    </NavLink>
                    <NavLink to="/" activeStyle>
                        Logout
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
};
 
export default DashboardNavbar;