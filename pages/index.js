import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useEffect } from 'react'
import Link from 'next/link'
import WorkSingle from '../components/WorkSingle'



const inter = Inter({ subsets: ['latin'] })

const portfolioData = [
  {
    bg: "#fff2eb",
    tags: " #Web Design #Web Development",
    title: "Mouzy Avil Milk",
    description: `I can seamlessly switch between tools and use whatever helps me
       put ideas across clearly and quickly so that the team can easily understand, 
       give actionable feedback, and make better decisions faster.`,
    site: "https://mouzy.in/",
    img: "images/mouzy-1.png",
    button: false
  },
  {
    bg: "#EEEAFF",
    tags: " #Web Design #Web Development",
    title: "BlueLadder Constructions",
    description: `I can seamlessly switch between tools and use whatever helps me
       put ideas across clearly and quickly so that the team can easily understand, 
       give actionable feedback, and make better decisions faster.`,
    site: "https://blueladderconstructions.in/",
    img: "images/blc-1.png",
    button: false
  },
  {
    bg: "#FFE2F6",
    tags: " #Web Design #Web Development",
    title: "Anfield",
    description: `I can seamlessly switch between tools and use whatever helps me
       put ideas across clearly and quickly so that the team can easily understand, 
       give actionable feedback, and make better decisions faster.`,
    site: "https://anfield.ae",
    img: "images/anfied-1.png",
    button: true
  }
]

const skillsData = [
  " Front End  ",
  "UI Design",
  "Interaction Design",
  "Project Managment",
  "Responsive design",
  "Server-side scripting",
  "Database management",
  "Git and version control",
  "Collaboration",
  "Problem-solving",
  "Design System",
  "Time management",
  "Adaptability",
  "Team player",
]

const tools = [
  {
    image: "images/new-list/html.png"
    , title: "HTML"
  },
  {
    image: "images/new-list/css-3.png"
    , title: "CSS"
  },

  {
    image: "images/new-list/js.png"
    , title: "Javascript"
  },

  {
    image: "images/new-list/bootstrap.png"
    , title: " Bootstrap"
  },

  {
    image: "images/new-list/sass.png"
    , title: "SASS"
  },

  {
    image: "images/new-list/tailwind.png"
    , title: "Tailwind CSS"
  },

  {
    image: "images/new-list/react.png"
    , title: " Reactjs"
  },

  {
    image: "images/new-list/typescript.png"
    , title: " Typescript"
  },

  {
    image: "images/new-list/mui.png"
    , title: " Material UI"
  },

  {
    image: "images/new-list/nextjs.png"
    , title: "Next.js"
  },

  {
    image: "images/new-list/redux-icon.webp"
    , title: "Redux"
  },

  {
    image: "images/new-list/nodejs.webp"
    , title: "Node js"
  },

  {
    image: "images/new-list/git.png",
    title: "Git"
  },


  {
    image: "images/new-list/github.png"
    , title: "Github"
  },

  {
    image: "images/new-list/icon-4.svg"
    , title: "Figma"
  },

  {
    image: "images/new-list/icon-8.svg"
    , title: "Adobe Xd"
  },

  {
    image: "images/new-list/icon-3.svg"
    , title: "Adobe Illustrator"
  },

  {
    image: "images/new-list/icon-1.svg"
    , title: "Adobe Photoshop"
  },
]



export default function Home() {

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.WOW = require('wowjs');
  //   }
  // }, [])
  return (
    <>
      {/* <!-- HERO SECTION START --> */}
      <section className="hero">
        <div className="container">
          <div className="head-top">
            <div className="head-text">
              <h5 className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.5s" >Hello, I’m Jaseem -
                Frontent Web Developer</h5>
              <h1 className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >Passionate
                <strong> Frontend Web Developer,</strong> experienced in <strong>creating user freindly
                  Websites</strong> &
                <strong>Web applications </strong>
              </h1>
              <div className="head-btn wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.9s" >
                <Link href="/contact" className="get-btn">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- HERO SECTION END --> */}

      {/* <!-- IMAGES SECTION START --> */}
      <section className="gallery-sec">
        <div className="container-full">
          <div className="head-text">
            <ul className="dribble-gallery">
              <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.4s" ><img
                src="images/mouzy-1.png" className="dribble-img" /></li>
              <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" ><img
                src="images/eatiz.png" className="dribble-img" /></li>
              <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.5s" ><img
                src="images/blc-1.png" className="dribble-img" /></li>
              <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.6s" ><img
                src="images/anfied-1.png" className="dribble-img" /></li>
              <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.9s" ><img
                src="images/angelblues.png" className="dribble-img" /></li>
              <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.8s" ><img
                src="images/ddots.png" className="dribble-img" /></li>

            </ul>
          </div>
        </div>
      </section>
      {/* <!-- IMAGES SECTION END --> */}
      {/* <!-- TOOLKIT SECTION START --> */}
      <section className="product-list">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
              <div className="head-text">
                <h2 className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.5s" >I'm a
                  <span className="sec-color"> Web Developer </span>
                  based in kerala,India. Specializing in building beautiful, functional websites
                </h2>
                <p className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.7s" >Hi there, I'm
                  Jaseem. A professional web designer and developer based in Calicut,kerala . I've spent the
                  last 2
                  years delivering impactful design & development solutions for a wide bandwidth of companies
                  - from small startups to big business companies . I'm
                  bringing my wealth of experience to clients in the South West and Nationwide. I approach
                  each new project with a full toolkit of ideas and a fresh focus to your needs. Whether
                  you're looking for a web design, or looking for a full package of design, development and
                  marketing whatever the size of the project, I will make sure it's set up for success.
                  <br /><br />
                  From coffee to deployment, my priority is to fully understand your project requirements, and
                  we can discuss your project over an informal coffee or over Skype/Zoom, whichever suits you
                  best. With all assignment aims confirmed, a proposal will be designed, detailing your exact
                  project package. After the proposal is accepted, we'll get started creating your project.
                </p>
                <h3 className="title-sec wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.9s" >My Skills
                </h3>
                <p>As a passionated developer, I can wear many hats and possess skills that help me lead
                  teams from discovery through delivery to build products and features faster, and achieve
                  business outcomes.</p>
                <ul className="skill-list">
                  {
                    skillsData.map((el, i) => {
                      return (
                        <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.5s" >{el}</li>
                      )

                    })
                  }
                </ul>
                <h3 className="title-sec wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.13s" >My Toolkit
                </h3>
                <p className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.13s" >I can seamlessly
                  switch between tools and use whatever helps me put ideas across clearly and quickly so that
                  the team can easily understand, give actionable feedback, and make better decisions faster.
                </p>
                <ul className="list-ss">

                  {
                    tools.map((el, i) => {
                      return (
                        <li className="wow  fadeInUp" style={{ visibility: "hidden" }} data-wow-duration="0.5s" ><span
                          className="left-img"><img src={el.image}
                            className="tollit-icon" /></span>{el.title}</li>
                      )

                    })
                  }


                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- TOOLKIT SECTION END --> */}
      {/* <!-- HYPD SECTION START --> */}
      {
        portfolioData.map((el, i) => {
          return (
            <WorkSingle
              key={i}
              bg={el.bg}
              tags={el.tags}
              title={el.title}
              description={el.description}
              site={el.site}
              img={el.img}
              isButton={el.button}
            />
          )
        })
      }
      {/* <!-- HYPD SECTION END --> */}
    </>
  )
}
