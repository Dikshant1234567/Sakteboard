import React from "react";
import Header from "./Header";
import "../styles/discover.css";
import RunningVideo from "./RunningVideo";
import Heding from "./Heding";


function Discover() {
  return (
    <>
      <section className="discover-container">
        <Heding mainTitle="Discover" />
        <div className="disImg">
          <div className="disImg1">
          <h2>
              How to do Basic <br /> Jumping and how <br /> to landing safely
            </h2>
            <div className="profo">
              <img
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <div className="profoDes">
                <p>Jakson finland</p>

                <h6>40k views </h6>
              </div>
            </div>
          </div>
          <div className="disImg2">
            <h2>
              Skateboard <br /> Tips You need <br /> to know
            </h2>
            <div className="profo">
              <img
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <div className="profoDes">
                <p>Jakson finland</p>

                <h6>40k views </h6>
              </div>
            </div>
          </div>
        </div>



        <div className="mainVideoContainer">
          <h2>Most Watched</h2>
          <div className="runningVideoMain">
            <RunningVideo title="Basic how to ride your skateboard comfortly " views="45k" />
            <RunningVideo  title="Prepare for your first skateboard jump" views="55k" />
            <RunningVideo title="Basic equipment to play skateboard safely" views="96k"  />
            <RunningVideo title="Tips to playing skateboard on the ramp" views="10k"  />
          </div>
        </div>
      </section>
    </>
  );
}

export default Discover;
