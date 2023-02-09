import React from "react";
import "../styles/mainVideo.css";
import Description from "./Description";

function Mainvideo() {

  return (
    <>
      <div className="mainVideo">
      
        <video className="video" src="https://player.vimeo.com/external/390402719.sd.mp4?s=20cfdb066c4253047562b65bd4e411b86a004bc5&amp;profile_id=139&amp;oauth2_token_id=57447761" controls typeof="video/mp4"></video>
        <Description />
      </div>
    </>
  );
}

export default Mainvideo;
