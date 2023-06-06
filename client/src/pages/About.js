import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Header from "../components/Header";

function About() {
  return (
    <>
      <Header />
      <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 offset-md-1 offset-lg-1 offset-xl-1">
          <h1 className="blue font">
            About <span className="orange">ILOKA</span>
          </h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            reprehenderit excepturi, magnam ut odit odio. Assumenda repellendus
            inventore minima possimus. Consequatur cumque dolores, voluptates
            illum suscipit dicta cupiditate eos voluptatum!
          </p>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
          <Player
            className="lottipleyer"
            autoplay={true}
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_sqwEc44qxw.json"
          ></Player>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 offset-md-1 offset-lg-1 offset-xl-1 order-sm-first order-md-last order-lg-last order-xl-last">
          <h1 className="blue font">
            <span className="orange">Tentang</span> Kami
          </h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            reprehenderit excepturi, magnam ut odit odio. Assumenda repellendus
            inventore minima possimus. Consequatur cumque dolores, voluptates
            illum suscipit dicta cupiditate eos voluptatum!
          </p>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
          <Player
            className="lottipleyer"
            autoplay={true}
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_8etvTOtK4O.json"
          ></Player>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 offset-md-1 offset-lg-1 offset-xl-1">
          <h1 className="blue font">
            Kelebihan <span className="orange">ILOKA</span>
          </h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            reprehenderit excepturi, magnam ut odit odio. Assumenda repellendus
            inventore minima possimus. Consequatur cumque dolores, voluptates
            illum suscipit dicta cupiditate eos voluptatum!
          </p>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
          <Player
            className="lottipleyer"
            autoplay={true}
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_1mA0i9a3PH.json"
          ></Player>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 offset-md-1 offset-lg-1 offset-xl-1 order-sm-first order-md-last order-lg-last order-xl-last">
          <h1 className="blue font">
            Yuk Berga<span className="orange">bung</span>
          </h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            reprehenderit excepturi, magnam ut odit odio. Assumenda repellendus
            inventore minima possimus. Consequatur cumque dolores, voluptates
            illum suscipit dicta cupiditate eos voluptatum!
          </p>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
          <Player
            className="lottipleyer"
            autoplay={true}
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_vCSa0OQQkd.json"
          ></Player>
        </div>
      </div>
      </div>
    </>
  );
}

export default About;
