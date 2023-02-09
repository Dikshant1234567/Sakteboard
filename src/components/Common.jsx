import React from "react";
import "../styles/common.css";
import Heding from "./Heding";
import Mainvideo from "./Mainvideo";
import Playerboard from "./Playerboard";

function Common(props) {
  return (
    <div className="commonContainer">
      <Heding  mainTitle ={props.mainTitle}/>
      <div className="commonHead">
        <Mainvideo />
        <Playerboard />
      </div>
    </div>
  );
}

export default Common;
