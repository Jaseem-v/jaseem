import Navbar from '../components/Navbar'
import "../styles/style.css";
import Head from 'next/head';
import Footer from '../components/Footer';
// import WOW from 'wowjs';
import { useEffect } from 'react';
import { Router } from 'next/router';
// import $ from 'jquery'



export default function App({ Component, pageProps }) {


  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");

    const isServer = typeof window === 'undefined'
    const WOW = !isServer ? require('wowjs').WOW : null
    new WOW().init()
    Router.events.on('routeChangeComplete', () => {
      const isServer = typeof window === 'undefined'
      const WOW = !isServer ? require('wowjs').WOW : null
      new WOW().init()
    });
  }, [])


  return (
    <div>
      <Head>
        <title>Jaseem v</title>
        {/* <!-- META --> */}
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Jaseem v" />
        <meta name="DC.title" content="Jaseem v" />
        <meta name="author" content="Jaseem v" />
        <meta name="description" content=" I'm
        Jaseem. A professional web designer and developer based in Calicut,kerala . I've spent the
        last 2
        years delivering impactful design & development solutions for a wide bandwidth of companies
        - from small startups to big business companies . I'm
        bringing my wealth of experience to clients in the South West and Nationwide. I approach
        each new project with a full toolkit of ideas and a fresh focus to your needs." />



        <link rel="apple-touch-icon" sizes="180x180" href="images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
        <link rel="mask-icon" href="images/favicon-32x32.png" color="#2D2D40" />
        {/* <!--  HEAD END  --> */}


      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
