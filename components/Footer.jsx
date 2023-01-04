import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* <!-- FOOTER START --> */}
            <footer className="footer-block" style={{ backgroundImage: "url(images/bg.svg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="head-text">
                                <h2 className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.5s" >Having <br /> a
                                    great idea?</h2>
                                <h3 className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >
                                    <Link href="/contact" className="">Get in Touch</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="head-text">
                                <ul className="footer-list">
                                    <li className="what-up-icon wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.5s" >
                                        <Link
                                            href="https://wa.me/919496927195?text=I%20want%20a%20website%20!"
                                            target="_blank"><span className="footer-logo"><img
                                                src="images/footer/whatsapp.svg" /></span>+91 94969 27195</Link></li>
                                    <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >
                                        Copyright &copy;
                                        {
                                            new Date().getFullYear()
                                        } Jaseem
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="head-text">
                                <ul className="footer-list-right">
                                    <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.5s" ><Link
                                        href="https://www.linkedin.com/in/jaseem-v-a36a94209/" target="_blank">
                                        <span className="footer-logo">
                                            <img src="images/footer/link.png" /></span>Linkedin</Link></li>
                                    <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" ><Link
                                        href="https://www.instagram.com/jaseem._v/" target="_blank"><span
                                            className="footer-logo"><img
                                                src="images/footer/instagram.svg" /></span>Instagram</Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- FOOTER END --> */}
        </div>
    )
}
