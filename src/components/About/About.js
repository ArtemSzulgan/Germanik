import React from 'react';
import './about.scss';
import {FormattedMessage} from 'react-intl';

function About() {
  const fleetDefMsg = "Company specializes in freight transportation in Europe, Belarus and Russia. Our fleet consists from refrigerated trucks with a lifting capacity up to three tons.All vehicles comply with environmental standards EURO 6, equipped with communications equipment and satellite navigation.";
  const logisticDefMsg = "The company has a warehouse near Warsaw, Poland.Long-term experience of warehouse employees is a guarantee of reliable and safe storage of your cargo, and a streamlined logistics system in the warehouse allows you not to waste extra time during unloading and loading.";
  const perfectDefMsg = "A permanent driver’s staff, undergoing periodic training along with modern equipment of refrigeration units, ensures compliance with the conditions of transportation your cargo.Each machine is equipped with thermal recorders so that you can control the safety of the cargo throughout the transportation.";

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row justify-content-center about_row">
          <div className="col-lg-4 text-center">
            <i className="fas fa-truck about_icon"></i>
            <h3 className="feature-head"><FormattedMessage id="about.titleTruck" defaultMessage="Modern car fleet"/></h3>
            <p><FormattedMessage id="about.contentTruck" defaultMessage={fleetDefMsg}/></p>
          </div>
          <div className="col-lg-4 text-center">
            <i className="fas fa-truck-loading about_icon"></i>
            <h3 className="feature-head"><FormattedMessage id="about.titleCargo" defaultMessage="Careful logistics"/></h3>
            <p><FormattedMessage id="about.contentCargo" defaultMessage={logisticDefMsg}/></p>
          </div>
          <div className="col-lg-4 text-center">
            <i className="fas fa-temperature-low about_icon"></i>
            <h3 className="feature-head"><FormattedMessage id="about.titleTemp" defaultMessage="Always perfect"/></h3>
            <p><FormattedMessage id="about.contentTemp" defaultMessage={perfectDefMsg}/></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
