import React from "react";

function About() {
    return(
        <>
            <section id="about">
                <div className="container">
                    <div className="row justify-content-center about_row">
                        <div className="col-lg-4 text-center">
                            <i className="fas fa-truck about_icon"></i>
                            <h3 className="feature-head">Easy to use.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper nec nunc pellentesque ultrices. Praesent pretium at justo sit amet faucibus. Maecenas sagittis, sapien ut dapibus posuere, dui ipsum maximus lectus, id faucibus augue nibh vehicula arcu.</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <i className="fas fa-truck-loading about_icon"></i>
                            <h3 className="feature-head">Elite Client</h3>
                            <p>onec neque eros, blandit ut vehicula in, vehicula quis dui. Nulla aliquam nisl eu metus semper, in gravida tellus placerat. Pellentesque lacinia felis auctor, dapibus lectus at, hendrerit massa.</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <i className="fas fa-temperature-low about_icon"></i>
                            <h3 className="feature-head">Guaranteed to work.</h3>
                            <p>Nam lobortis, magna eget varius pulvinar, nulla leo sodales ipsum, quis ultricies leo libero et sapien. Nunc fermentum feugiat diam, eu molestie sem maximus non. Sed aliquet eros et justo ultrices cursus. Morbi tristique orci sit amet erat mattis, in feugiat ipsum aliquam.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;