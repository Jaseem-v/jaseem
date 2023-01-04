import Link from 'next/link'
import React from 'react'

export default function WorkSingle({
    bg = "#fff2eb",
    tags = " #Web Design #Web Development",
    title,
    description,
    site,
    img,
    isButton=false
}) {
    return (
        <section className="hypd-list" style={{ backgroundColor: bg }} >
            <div className="container">
                <div className="row row-reverse">
                    <div className="col-md-5 col-sm-5 col-xs-12">
                        <div className="head-text" style={{ paddingTop: "30px" }} >
                            <p className="wow fadeInUp black-color project-tagline" data-wow-duration="0.5s"
                                style={{ visibility: "hidden" }}>
                                {tags}</p>
                            <h2 className="wow fadeInUp ProjectHeading" data-wow-duration="0.7s" style={{ visibility: "hidden" }}>
                                {title}</h2>
                            <p className="wow fadeInUp Projecttext" data-wow-duration="0.9s" style={{ visibility: "hidden" }}>
                                {description}
                            </p>
                            <div className="btn-view wow fadeInUp" data-wow-duration="0.11s" style={{ visibility: "hidden" }}>
                                <Link href={site} className="study-btn" target="_blank">View the Website</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-7 col-xs-12">
                        <div className="head-text">
                            <p className="prodect-img wow fadeInUp" data-wow-duration="0.7s" style={{ visibility: "hidden" }}>
                                <img
                                    src={img} className="dribble-img responsive-img" />
                            </p>
                        </div>
                    </div>
                </div>
                {isButton &&
                    <div className="head-btn wow fadeInUp more-btn" data-wow-duration="0.9s" style={{ visibility: "hidden" }}>
                        <Link href="/works" className="get-btn">View more work</Link>
                    </div>}
            </div>
        </section>

    )
}
