import React from "react";
import "../styles/runningvideo.css"
import video from "../assets/video.mp4"

function RunningVideo(props) {
  return (    
      <div className="videoBox">
        <video loop autoPlay  src={video}></video>
        <div className="videoDes">
          <h4>{props.title}</h4>
          <p>{props.views} views</p>
        </div>
      </div>
    
  );
}

export default RunningVideo;
