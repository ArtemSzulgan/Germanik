import React from "react";
import Card from "./Card";
import photo from "../assets/computer.png"

function Contact() {
    return (
        <>
            <section id="about">
                <div>
                   <Card
                    class='image-left'
                    avatar={photo}
                    name="Lorem Ipsum 1"
                    tel="+48 600 000 000 Mauris porttitor diam sit amet sapien lobortis sodales. In suscipit tortor quis justo sollicitudin, ut faucibus tortor vestibulum.+48 600 000 000 Mauris porttitor diam sit amet sapien lobortis sodales. In suscipit tortor quis justo sollicitudin, ut faucibus tortor vestibulum. "
                   />
                    <Card
                        class='image-right'
                        avatar={photo}
                        name="Lorem Ipsum 2"
                        tel="+48 600 000 000 Mauris porttitor diam sit amet sapien lobortis sodales. In suscipit tortor quis justo sollicitudin, ut faucibus tortor vestibulum.+48 600 000 000 Mauris porttitor diam sit amet sapien lobortis sodales. In suscipit tortor quis justo sollicitudin, ut faucibus tortor vestibulum. "
                    />
                    <Card
                        class='image-left'
                        avatar={photo}
                        name="Lorem Ipsum 3"
                        tel="+48 600 000 000 Mauris porttitor diam sit amet sapien lobortis sodales. In suscipit tortor quis justo sollicitudin, ut faucibus tortor vestibulum.+48 600 000 000 Mauris porttitor diam sit amet sapien lobortis sodales. In suscipit tortor quis justo sollicitudin, ut faucibus tortor vestibulum. "
                    />
                </div>
            </section>
        </>
    )
}

export default Contact;