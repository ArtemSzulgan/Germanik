import React from 'react';
import Card from '../Card/Card';
import europe from '../../assets/europe.png';
import russia from '../../assets/russia.png';
import './persons.scss';
import {FormattedMessage} from 'react-intl';

const persons = [{
  textClass: 'persons_card-left',
  className: 'persons_image-left',
  avatar: europe,
  name: 'Katarzyna Mosiej',
  position: <FormattedMessage id="persons.positionWest" defaultMessage="Head of East Department"/>,
  tel: '+48 600 000 000',
  skype: 'xz.germanik',
  email: 'xz@germanik.pl'
},
{
  textClass: 'persons_card-right',
  className: 'persons_image-right',
  avatar: russia,
  name: 'Natalia Molchanova',
  position: <FormattedMessage id="persons.positionEast" defaultMessage="Head of Western Department"/>,
  tel: '+48 600 000 000',
  skype: 'xz.germanik',
  email: 'xz@germanik.pl'
}];

function Persons() {
  return (
    <section id="persons" className="persons">
      {persons.map((person, index) => {
        return <Card key={index}{...person}/>;
      })}
    </section>
  );
}

export default Persons;
