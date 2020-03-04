import React, {useContext} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Context} from '../wrapper';
import './Header.scss';

function Header() {
  const context = useContext(Context);

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" fixed="top" variant="dark">
        <Navbar.Brand href="/">Germanik</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>

            <select className="form-control bg-dark header_select" value={context.locale} onChange={context.selectLang}>
              <option className="header_option" value="en-Us">English</option>
              <option value="ru-RU">Russian</option>
            </select>

            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#persons">Contacts</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
