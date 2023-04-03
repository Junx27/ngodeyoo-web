import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function About() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-5 offset-1">
          <h1>Cari pekerjaan</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            reprehenderit excepturi, magnam ut odit odio. Assumenda repellendus
            inventore minima possimus. Consequatur cumque dolores, voluptates
            illum suscipit dicta cupiditate eos voluptatum!
          </p>
        </div>
        <div className="col-5">
          <Player
            autoplay={true}
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_bo8vqwyw.json"
            style={{ height: "500px", width: "500px" }}
          ></Player>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-5">
          <Player
            autoplay={true}
            loop
            src="https://assets4.lottiefiles.com/packages/lf20_y8wovcjv.json"
            style={{ height: "500px", width: "500px" }}
          ></Player>
        </div>
        <div className="col-5 offset-1">
          <h1>Apply Lamaran</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            reprehenderit excepturi, magnam ut odit odio. Assumenda repellendus
            inventore minima possimus. Consequatur cumque dolores, voluptates
            illum suscipit dicta cupiditate eos voluptatum!
          </p>
        </div>
        <hr />
      </div>
      <div className="row align-items-center">
        <div className="col-5 offset-1">
          <h1>Test Online</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            reprehenderit excepturi, magnam ut odit odio. Assumenda repellendus
            inventore minima possimus. Consequatur cumque dolores, voluptates
            illum suscipit dicta cupiditate eos voluptatum!
          </p>
        </div>
        <div className="col-5">
          <Player
            autoplay={true}
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_6wkp2o3cgq.json"
            style={{ height: "500px", width: "500px" }}
          ></Player>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-5">
          <Player
            autoplay={true}
            loop
            src="https://assets4.lottiefiles.com/private_files/lf30_lps8ojuw.json"
            style={{ height: "500px", width: "500px" }}
          ></Player>
        </div>
        <div className="col-5 offset-1">
          <h1>Let's Work</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            reprehenderit excepturi, magnam ut odit odio. Assumenda repellendus
            inventore minima possimus. Consequatur cumque dolores, voluptates
            illum suscipit dicta cupiditate eos voluptatum!
          </p>
        </div>
      </div>
      <div className="container text-center">
        <button className="btn btn-warning mb-5">Join Now</button>
      </div>
    </div>
  );
}

export default About;
