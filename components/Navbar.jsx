import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

export default function Navbar() {

    const [isToggle, setIsToggle] = useState(false)
    const [height, setHeight] = useState(263)
    const ref = useRef(null)
    const handleToggle = () => {
        setIsToggle(!isToggle)
    }
    const handleToggleWithDelay = () => {
        setTimeout(() => {
            setIsToggle(!isToggle)
        }, 1000);
    }
    useEffect(() => {
        setHeight(ref.current.clientHeight)
        console.log(height);
    }, [isToggle])

    const router = useRouter();

    return (
        <header id="nav" className="header header-stick header-fixed header-white-transprant" >
            <div className="header-wrap">
                {/* <!----CONTAINER START--------> */}
                <div className="container-sm">
                    {/* <!-----NAV START-------> */}
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-header">
                                {/* <!---TOGGLE BUTTON STARTS----> */}
                                <button type="button" className={isToggle ? "navbar-toggle collapsed in" : "navbar-toggle collapsed"} data-toggle="collapse"
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



                                <div className={isToggle ? "collapse navbar-collapse in" : "collapse navbar-collapse"} id="Navbar" ref={ref} >
                                    <ul className="nav navbar-nav navbar-right mega hover-effect">
                                        <li className="center">
                                            <Link className={router.pathname == "/" ? "scroll active" : "scroll"} href="/" onClick={handleToggleWithDelay}>Home</Link>
                                        </li>
                                        <li className="center">
                                            <Link className={router.pathname == "/my-story" ? "scroll active" : "scroll"} href="/my-story" onClick={handleToggleWithDelay}>My Story</Link>
                                        </li>
                                        <li className="center">
                                            <Link className={router.pathname == "/works" ? "scroll active" : "scroll"} href="/works" onClick={handleToggleWithDelay}>Works</Link>
                                        </li>
                                        <li className="center">
                                            <Link className={router.pathname == "/contact" ? "scroll active" : "scroll"} href="/contact" onClick={handleToggleWithDelay}>Contact</Link>
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
