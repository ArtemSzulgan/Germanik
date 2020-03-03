import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {FormattedMessage, useIntl} from 'react-intl';
import './ContactUs.scss';

function ContactUs() {
  const intl = useIntl();

  return (
    <section id="contact-us">
      <FormattedMessage id="contactUs.title" defaultMessage="Email Address" tagName="h1"/>
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label><FormattedMessage id="contactUs.email" defaultMessage="Email Address"/></Form.Label>
            <Form.Control type="email" placeholder={intl.formatMessage({
              id: 'contactUs.emailPlaceholder',
              defaultMessage: 'Enter your email',
            })}/>
            <Form.Text><FormattedMessage id="contactUs.emailWarning" defaultMessage="We'll never share your email with anyone else"/></Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.Password">
            <Form.Label><FormattedMessage id="contactUs.name" defaultMessage="Your name"/></Form.Label>
            <Form.Control type="text" placeholder={intl.formatMessage({
              id: 'contactUs.namePlaceholder',
              defaultMessage: 'Enter your name',
            })}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label><FormattedMessage id="contactUs.theme" defaultMessage="Chose theme"/></Form.Label>
            <Form.Control as="select">
              <FormattedMessage id="contactUs.themeFirst" defaultMessage="Calculate shipment" tagName="option"/>
              <FormattedMessage id="contactUs.themeSecond" defaultMessage="Partnership" tagName="option"/>
              <FormattedMessage id="contactUs.themeThird" defaultMessage="Looking for a work" tagName="option"/>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label><FormattedMessage id="contactUs.messages" defaultMessage="Your message"/></Form.Label>
            <Form.Control as="textarea" rows="9" />
          </Form.Group>
          <Button variant="outline-dark" type="submit"><FormattedMessage id="contactUs.button" defaultMessage="Send"/></Button>
        </Form>
      </div>
    </section>
  );
}

export default ContactUs;
