import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
import Documentation from "../pages/Documentation";


function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
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
                        <Nav.Link href="/documentation">Documentation</Nav.Link>
                        <Nav.Link href="/about">About us</Nav.Link>
                        <Nav.Link href="/contacts">Contacts</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/documentation' component={Documentation}/>
                </Switch>
            </Router>
        </>
    )
}

export default Header;