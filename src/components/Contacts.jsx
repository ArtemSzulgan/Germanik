import React from "react";
import Card from "./Card";
import photo from "../assets/computer.png"

function Contact() {
    return (
        <>
            <section id="about">
                <div>
                    <Card
                        textClass="contact-card-left"
                        class='image-left'
                        avatar={photo}
                        name="Lorem Ipsum 1"
                        position="Lorem Ipusm Vazhnym Czyvambum"
                        tel="     +48 600 000 000"
                        skype="   xz.germanik"
                        email="   xz@germanik.pl"
                    />
                    <Card
                        textClass="contact-card-right"
                        class='image-right'
                        avatar={photo}
                        name="Lorem Ipsum 2"
                        position="Lorem Ipusm Vazhnym Czyvambum"
                        tel=" +48 600 000 000"
                        skype=" xz.germanik"
                        email=" xz@germanik.pl"
                    />
                    <Card
                        textClass="contact-card-left"
                        class='image-left'
                        avatar={photo}
                        name="Lorem Ipsum 3"
                        position="Lorem Ipusm Vazhnym Czyvambum"
                        tel=" +48 600 000 000"
                        skype=" xz.germanik"
                        email=" xz@germanik.pl"
                    />
                </div>
            </section>
        </>
    )
}

export default Contact;