import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {

    const [isToggle, setIsToggle] = useState(false)

    const handleToggle = () => {
        setIsToggle(!isToggle)
    }


    return (
        <header id="nav" className="header header-stick header-fixed header-white-transprant">
            <div className="header-wrap">
                {/* <!----CONTAINER START--------> */}
                <div className="container-sm">
                    {/* <!-----NAV START-------> */}
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-header">
                                {/* <!---TOGGLE BUTTON STARTS----> */}
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#Navbar" onClick={handleToggle}>
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>
                                {/* <!---TOGGLE BUTTON END----> */}
                                <a className="navbar-brand" href="mailto:hello@jaseem-v.com">
                                    <img src="images/logo.svg" alt="" className="logo-icon" />
                                    <b className="logomail">hello@jaseem-v.com</b>
                                </a>



                                <div className={isToggle ? "collapse navbar-collapse in" : "collapse navbar-collapse"} id="Navbar">
                                    <ul className="nav navbar-nav navbar-right mega hover-effect">
                                        <li className="center">
                                            <Link className="scroll active" href="/">Home</Link>
                                        </li>
                                        <li className="center">
                                            <Link className="scroll" href="/my-story">My Story</Link>
                                        </li>
                                        <li className="center">
                                            <Link className="scroll" href="/works">Works</Link>
                                        </li>
                                        <li className="center">
                                            <Link className="scroll" href="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* <!------NAV END------> */}
                </div>
                {/* <!------CONTAINER END-----> */}
            </div>
        </header>
    )
}
