import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import ipad from '../assets/images/about.png';

import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';

const IndexPage = () => (
  <Layout>
    <Header />
    <header id="page-top" className="masthead ">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          {/* <Scroll type="id" element="about"> */}
          <a href="#signup" className="btn btn-dark mt-4">
            Email me updates!
          </a>
          {/* </Scroll> */}
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">About Me</h2>
            <p className="text-white-50">
              Hi! My name is Bálint, and I'm working on a lo-fi, open-world 2D
              roguelite called Way Beyond! It's been in development since 2016
              and I'm using the LÖVE framework.
              <br></br>
              <b>
                Checkout the current demo here:
                <a href="https://balintm.itch.io/waybeyond"> Itch.io</a>
              </b>
            </p>
          </div>
        </div>
        <img src={ipad} className="img-fluid w-100" alt="" />
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7 h-50">
            <video
              autoPlay
              muted
              loop
              preload="auto"
              playsinline=""
              aria-label="Embedded video"
              disablepictureinpicture=""
              poster="https://pbs.twimg.com/tweet_video_thumb/EwJYK2cWQAQuIcO.jpg"
              src="https://video.twimg.com/tweet_video/EwJYK2cWQAQuIcO.mp4"
              type="video/mp4"
            ></video>
            {/* <img className="img-fluid mb-3 mb-lg-0" src={pic1} alt="" /> */}
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Open World</h4>
              <p className="text-black-50 mb-0">
                Tons of content: Biomes, Monsters, Items, Dungeons, and so much
                more!
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={pic2} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Forest</h4>
                  <p className="mb-0 text-white-50">
                    I dont have anything for this yet but will add as I work
                    more on it
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={pic3} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Desert</h4>
                  <p className="mb-0 text-white-50">
                    Another example of a project with its respective
                    description. These sections work well responsively as well,
                    try this theme on a small screen!
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="signup">
      <Subscribe />
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
