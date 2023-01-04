import Link from 'next/link'
import React from 'react'
import WorkSingle from '../components/WorkSingle'

const data = [
    {
        bg: "#fff2eb",
        tags: " #Web Design #Web Development",
        title: "Mouzy Avil Milk",
        description: `I can seamlessly switch between tools and use whatever helps me
         put ideas across clearly and quickly so that the team can easily understand, 
         give actionable feedback, and make better decisions faster.`,
        site: "https://mouzy.in/",
        img: "images/mouzy-1.png"
    },
    {
        bg: "#EEEAFF",
        tags: " #Web Design #Web Development",
        title: "BlueLadder Constructions",
        description: `I can seamlessly switch between tools and use whatever helps me
         put ideas across clearly and quickly so that the team can easily understand, 
         give actionable feedback, and make better decisions faster.`,
        site: "https://blueladderconstructions.in/",
        img: "images/blc-1.png"
    },
    {
        bg: "#FFE2F6",
        tags: " #Web Design #Web Development",
        title: "Anfield",
        description: `I can seamlessly switch between tools and use whatever helps me
         put ideas across clearly and quickly so that the team can easily understand, 
         give actionable feedback, and make better decisions faster.`,
        site: "https://anfield.ae",
        img: "images/anfied-1.png"
    },
    {
        bg: "#FFF2EB",
        tags: " #Ui Design #Web Design #Web Development",
        title: "Eatiz Restaurant",
        description: `I can seamlessly switch between tools and use whatever helps me
         put ideas across clearly and quickly so that the team can easily understand, 
         give actionable feedback, and make better decisions faster.`,
        site: "https://eatiz-restaurant.netlify.app/",
        img: "images/eatiz.png"
    },
    {
        bg: "#EEEAFF",
        tags: " #Ui Design #Web Design #Web Development",
        title: "AngelBlues Solutions",
        description: `I can seamlessly switch between tools and use whatever helps me
         put ideas across clearly and quickly so that the team can easily understand, 
         give actionable feedback, and make better decisions faster.`,
        site: "https://angelblues.co.in/",
        img: "images/angelblues.png"
    },
    {
        bg: "#FFE2F6",
        tags: " #Ui Design #Web Design #Web Development",
        title: "Ddots Media",
        description: `I can seamlessly switch between tools and use whatever helps me
         put ideas across clearly and quickly so that the team can easily understand, 
         give actionable feedback, and make better decisions faster.`,
        site: "https://ddots-new.netlify.app",
        img: "images/ddots.png"
    },
]
export default function works() {
    return (
        <div>
            {/* <!-- HERO SECTION START --> */}
            <section className="hero">
                <div className="container">
                    <div className="head-top-contact">
                        <div className="head-text">
                            <h2 className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >
                                Dive into my  portfolio  and discover <br />  a world of innovative solutions</h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- HERO SECTION END --> */}


            {/* <!-- HYPD SECTION START --> */}
            {
                data.map((el, i) => {
                    return (
                        <WorkSingle
                            key={i}
                            bg={el.bg}
                            tags={el.tags}
                            title={el.title}
                            description={el.description}
                            site={el.site}
                            img={el.img} />
                    )
                })
            }
            {/* <!-- HYPD SECTION END --> */}
        </div>
    )
}
