import React from 'react'

export default function contact() {
    return (
        <div>
            {/* <!-- HERO SECTION START --> */}
            <section className="hero">
                <div className="container">
                    <div className="head-top-contact">
                        <div className="head-text">
                            <h2 className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >Interested? <br /> Let’s
                                get your <br /> project started!</h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- HERO SECTION END --> */}

            {/* <!-- CONTACT FORM SECTION START --> */}
            <section className="form-section">
                <div className="container">
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <div className="head-text">
                            <form id="myForm" action="" method="post">
                                <p
                                    style={{ fontSize: "21px", letterSpacing: "-1.6px", wordSpacing: "2px", visibility: "hidden" }}

                                    className="wow  fadeInUp"
                                    data-wow-duration="0.7s" >I’m interested in…</p>
                                <ul className="select-btn">
                                    <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >
                                        <div className="select-box">
                                            <input type="checkbox" name="interesed_condition" className="zop-condition"
                                                id="UiDesign" value="UiDesign" />
                                            <div className="select-box-text">
                                                <p>UI Design</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >
                                        <div className="select-box">
                                            <input type="checkbox" name="Web design" className="zop-condition" id="web-design"
                                                value="Web design" />
                                            <div className="select-box-text">
                                                <p>Web design</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >
                                        <div className="select-box">
                                            <input type="checkbox" name="Web Development" className="zop-condition"
                                                id="design-concept" value="Web Development" />
                                            <div className="select-box-text">
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >
                                        <div className="select-box">
                                            <input type="checkbox" name="Frontend" className="zop-condition" id="Frontend"
                                                value="Frontend" />
                                            <div className="select-box-text">
                                                <p>Frontend</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >
                                        <div className="select-box">
                                            <input type="checkbox" name="Others" className="zop-condition" id="Others"
                                                value="Others" />
                                            <div className="select-box-text">
                                                <p>Others</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="form-infomation">
                                    <div className="col-md-6 col-sm-6 col-xs-12 l-padding">
                                        <div className="form-field wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >
                                            <input type="text" name="name" className="form-control" placeholder="What’s your name ?"
                                                id="client-name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12 r-padding">
                                        <div className="form-field wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >
                                            <input type="email" name="email" className="form-control"
                                                placeholder="What’s your Email ?" id="client-email" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12 no-padding">
                                        <div className="form-field wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >
                                            <input type="text" name="message" className="form-control"
                                                placeholder="Tell us about your project" id="client-project" />
                                        </div>
                                    </div>
                                </div>

                                <div className="head-btn wow  fadeInUp" data-wow-duration="0.9s"
                                    style={{ animationDuration: "0.9s", animationName: " fadeInUp", visibility: "visible" }}
                                >
                                    <a href="#" className="get-btn">
                                        <input style={{ backgroundColor: " #5856e9", border: "navajowhite", fontSize: "20px" }}
                                            className="get-btn" type="submit" />
                                    </a>

                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="head-text contact-info">
                            <p className="info-title wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >Availability
                            </p>
                            <p className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >
                                Currently, I’m accepting
                                only selected projects.</p>
                            <div className="contact-se">
                                <p className="info-title wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >Say Hello,
                                    on Whatsapp 👋</p>
                                <p className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >+91 94969 27195
                                </p>
                            </div>
                            <div className="contact-se">
                                <p className="info-title wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >Location
                                </p>
                                <p className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >I’m located in
                                    Calicut,kerala,India and worked with clients from India , U.S.A, UK, U.A.E , Saudi Arabia
                                    etc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
            {/* <!-- CONTACT FORM SECTION END --> */}
        </div >
    )
}
