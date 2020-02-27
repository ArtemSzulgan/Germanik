import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" fixed="top" variant="dark">
                <Navbar.Brand href="/">Germanik</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <NavDropdown title="Language" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Русский</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Polski</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#about">About us</Nav.Link>
                        <Nav.Link href="#persons">Contacts</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;