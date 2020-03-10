import React from 'react';
import './about.scss';
import {FormattedMessage} from 'react-intl';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row justify-content-center about_row">
          <div className="col-lg-4 text-center">
            <i className="fas fa-truck about_icon"></i>
            <h3 className="feature-head"><FormattedMessage id="about.titleTruck" defaultMessage="Easy to use."/></h3>
            <p><FormattedMessage id="about.contentTruck" defaultMessage=""/></p>
          </div>
          <div className="col-lg-4 text-center">
            <i className="fas fa-truck-loading about_icon"></i>
            <h3 className="feature-head"><FormattedMessage id="about.titleCargo" defaultMessage="Easy to use."/></h3>
            <p><FormattedMessage id="about.contentCargo" defaultMessage=""/></p>
          </div>
          <div className="col-lg-4 text-center">
            <i className="fas fa-temperature-low about_icon"></i>
            <h3 className="feature-head"><FormattedMessage id="about.titleTemp" defaultMessage="Guaranteed to work."/></h3>
            <p><FormattedMessage id="about.contentTemp" defaultMessage=""/></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
