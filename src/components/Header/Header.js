import React, {useContext} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Context} from '../Wrapper/Wrapper';
import {FormattedMessage} from 'react-intl';
import './header.scss';

function Header() {
  const {locale, selectLang} = useContext(Context);

  function handlerChange(e) {
    if (selectLang) {
      selectLang(e);
    }
  }

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" fixed="top" variant="dark">
      <Navbar.Brand href="/">Germanik</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>

          <select className="header_select" value={locale} onChange={handlerChange}>
            <option value="en-US">English</option>
            <option value="ru-RU">Русский</option>
            <option value="pl-PL">Polski</option>

          </select>

          <Nav.Link href="#about">
            <FormattedMessage
              id="header.about"
              defaultMessage="About"/>
          </Nav.Link>
          <Nav.Link href="#persons">
            <FormattedMessage
              id="header.contact"
              defaultMessage="Contact"/>
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
