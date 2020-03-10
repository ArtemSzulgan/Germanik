import React from 'react';
import Card from '../Card/Card';
import photo from '../../assets/computer.png';
import './persons.scss';
import {FormattedMessage} from 'react-intl';

const persons = [{
  textClass: 'persons_card-left',
  className: 'persons_image-left',
  avatar: photo,
  name: 'Lorem Ipsum 1',
  position: <FormattedMessage id="persons.positionWest" defaultMessage=""/>,
  tel: '+48 600 000 000',
  skype: 'xz.germanik',
  email: 'xz@germanik.pl'
},
{
  textClass: 'persons_card-right',
  className: 'persons_image-right',
  avatar: photo,
  name: 'Lorem Ipsum 1',
  position: <FormattedMessage id="persons.positionEast" defaultMessage=""/>,
  tel: '+48 600 000 000',
  skype: 'xz.germanik',
  email: 'xz@germanik.pl'
},
{
  textClass: 'persons_card-left',
  className: 'persons_image-left',
  avatar: photo,
  name: 'Lorem Ipsum 1',
  position: <FormattedMessage id="persons.positionAccounting" defaultMessage=""/>,
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
