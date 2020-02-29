import React from "react";
import Iframe from 'react-iframe'
import "./Style/Footer.scss"

function Footer() {
    return (
        <section id="footer">
            <div className="footer_content">
                <div className="footer_text">
                    <div className="footer_text_title">Многоотраслевое предприятие Germanik Wlodzimierz German</div>
                    <div className="footer_text_content">Международные перевозки грузов. Складирование грузов. Перевозки грузов в контролируемой температуре. Перевозка опасных грузов</div>
                    <div className="footer_text_mark"><i className="fas fa-phone"></i>+48 600 000 000</div>
                    <div className="footer_text_mark"><i className="fas fa-envelope"></i>germanik@germanik.pl</div>
                    <div className="footer_text_mark"><i className="fas fa-map-marker-alt"></i>Słonimska 3/9, 15-028 Białystok</div>
                </div>
                <div className="footer_map">
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2393.666111292591!2d23.173513!3d53.134139000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffea75df27d1b%3A0x13907114373aa295!2sPrzedsi%C4%99biorstwo%20Wielobran%C5%BCowe%20Germanik%20W%C5%82odzimierz%20German!5e0!3m2!1sru!2spl!4v1582829051097!5m2!1sru!2spl"
                        frameBorder="0" allowFullScreen=""></Iframe>
                </div>
            </div>
            <p className="footer_copyright">© Copyright 2020 Germanik</p>
        </section>
    )
}

export default Footer;