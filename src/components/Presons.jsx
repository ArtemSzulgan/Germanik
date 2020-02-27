import React from "react";
import Card from "./Card";
import photo from "../assets/computer.png"

const persons = [{
        textClass: "persons_card-left",
        class: "persons_image-left",
        avatar: {photo},
        name: "Lorem Ipsum 1",
        position: "Lorem Ipusm Vazhnym Czyvambum",
        tel: "     +48 600 000 000",
        skype: "   xz.germanik",
        email: "   xz@germanik.pl"
    },
    {
        textClass: "persons_card-right",
        class: "persons_image-right",
        avatar: {photo},
        name: "Lorem Ipsum 1",
        position: "Lorem Ipusm Vazhnym Czyvambum",
        tel: "     +48 600 000 000",
        skype: "   xz.germanik",
        email: "   xz@germanik.pl"
    },
    {
        textClass: "persons_card-left",
        class: "persons_image-left",
        avatar: {photo},
        name: "Lorem Ipsum 1",
        position: "Lorem Ipusm Vazhnym Czyvambum",
        tel: "     +48 600 000 000",
        skype: "   xz.germanik",
        email: "   xz@germanik.pl"
    }];

function Persons() {
    return (
        <>
            <section id="persons">
                {persons.map((person, index) => {
                    return <Card
                        textClass={person.textClass}
                        class={person.class}
                        avatar={person.avatar}
                        name={person.name}
                        position={person.position}
                        tel={person.tel}
                        skype={person.skype}
                        email={person.email}
                    />
                })}
            </section>
        </>
    )
}

export default Persons;