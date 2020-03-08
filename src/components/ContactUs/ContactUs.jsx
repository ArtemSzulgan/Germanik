import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {FormattedMessage, useIntl} from 'react-intl';
import Axios from 'axios';
import './ContactUs.scss';

function ContactUs() {
  const intl = useIntl();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [theme, setTheme] = useState('');
  const [message, setMessage] = useState('');
  const [style, setStyle] = useState({display: 'none'});

  function handleChangeEmail(e) {
    const newData = e.target.value;

    setEmail(newData);
  }

  function handleChangeName(e) {
    const newData = e.target.value;

    setName(newData);
  }

  function handleChangeMsg(e) {
    const newData = e.target.value;

    setMessage(newData);
  }

  function handleChangeTheme(e) {
    const newData = e.target.value;

    setTheme(newData);
  }

  let submitData = {
    email: email,
    name: name,
    theme: theme,
    message: message
  };

  function formSubmit(e) {
    e.preventDefault();

    Axios.post(
      'https://getform.io/f/3348505c-4929-4540-bcc2-6dd59d535fde',
      submitData
    )
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });

    setMessage('');
    setEmail('');
    setName('');
    setTheme('');

    setStyle({display: 'block'});

    setTimeout(function () {
      setStyle({display: 'none'});
    }, 3000);
  }

  return (
    <section id="contact-us" className="contact-us">
      <FormattedMessage id="contactUs.title" defaultMessage="Email Address" tagName="h1"/>
      <div>
        <p className='contact-us_sentConf' style={style}><FormattedMessage id="contactUs.sent"
          defaultMessage="Your mail was sent"/></p>
        <Form name='contact' onSubmit={formSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label><FormattedMessage id="contactUs.email"
              defaultMessage="Email Address"/></Form.Label>
            <Form.Control type="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              placeholder={intl.formatMessage({
                id: 'contactUs.emailPlaceholder',
                defaultMessage: 'Enter your email'
              })}/>
            <Form.Text><FormattedMessage id="contactUs.emailWarning"
              defaultMessage="We'll never share your email with anyone else"/></Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.Password">
            <Form.Label><FormattedMessage id="contactUs.name" name="name" defaultMessage="Your name"/></Form.Label>
            <Form.Control type="text"
              id="name"
              value={name}
              onChange={handleChangeName}
              placeholder={intl.formatMessage({
                id: 'contactUs.namePlaceholder',
                defaultMessage: 'Enter your name'
              })}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label><FormattedMessage id="contactUs.theme"
              defaultMessage="Chose theme"/></Form.Label>
            <Form.Control as="select" value={theme} onChange={handleChangeTheme}>
              <FormattedMessage id="contactUs.themeFirst" defaultMessage="Calculate shipment"
                tagName="option"/>
              <FormattedMessage id="contactUs.themeSecond" defaultMessage="Partnership"
                tagName="option"/>
              <FormattedMessage id="contactUs.themeThird" defaultMessage="Looking for a work"
                tagName="option"/>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label><FormattedMessage id="contactUs.messages"
              defaultMessage="Your message"/></Form.Label>
            <Form.Control as="textarea" value={message} onChange={handleChangeMsg} name="text" rows="9"/>
          </Form.Group>
          <Button variant="outline-dark" type="submit"><FormattedMessage id="contactUs.button"
            defaultMessage="Send"/></Button>
        </Form>
      </div>
    </section>
  );
}

export default ContactUs;

