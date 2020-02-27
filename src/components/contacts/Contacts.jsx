import React from "react";
import Card from "../Card";
import photo from "../../assets/computer.png"
import './styles.css'
const contacts = [
    {
        textClass:"contact-card-left",
        className:'image-left',
        avatar:photo,
        name:"Lorem Ipsum 1",
        position:"Lorem Ipusm Vazhnym Czyvambum",
        tel:"     +48 600 000 000",
        skype:"   xz.germanik",
        email:"   xz@germanik.pl",
    },
    {
        textClass:"contact-card-right",
        className:'image-right',
        avatar:photo,
        name:"Lorem Ipsum 2",
        position:"Lorem Ipusm Vazhnym Czyvambum",
        tel:" +48 600 000 000",
        skype:" xz.germanik",
        email:" xz@germanik.pl",
    },
    {
        textClass:"contact-card-left",
        className:'image-left',
        avatar:photo,
        name:"Lorem Ipsum 3",
        position:"Lorem Ipusm Vazhnym Czyvambum",
        tel:" +48 600 000 000",
        skype:" xz.germanik",
        email:" xz@germanik.pl",
    }
];

function Contact() {
    return (
        <>
            <section id="about">
                <div>
                    {
                        contacts.map((item, i)=>{
                            return <Card key={i}{...item}/>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Contact;
