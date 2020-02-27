import React from "react";
import Iframe from 'react-iframe'

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
                        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d581.3823148262516!2d23.17348501726014!3d53.134025195252356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffea75d6b4c51%3A0xc374e6b2f700b830!2sS%C5%82onimska%203%2C%2015-077%20Bia%C5%82ystok!5e0!3m2!1sru!2spl!4v1582825997780!5m2!1sru!2spl"
                        width="600"
                        height="180"
                        frameBorder="0"
                        allowFullScreen=""
                    />
                </div>
            </div>
            <p className="copyright">© Copyright 2020 Germanik</p>
        </section>
    )
}

export default Footer;