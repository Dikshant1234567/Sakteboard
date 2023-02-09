import React from "react";
import "../styles/playerboard.css";
import Image from '../assets/pp.jpg'

function Playerboard() {
  return (
    <div className="playerContiner">
      <div className="sidePlayer">
        <h1>Live Chat</h1>
        <hr />
        <ul>
          <li>
            <img src={Image} alt="" />
            <p>Wijaya Adabi</p>
          </li>
          <li>
          <img src={Image} alt="" />
            <p>Tommy</p>
          </li>
          <li>
          <img src={Image} alt="" />
            <p>Rober</p>
          </li>
          <li>
          <img src={Image} alt="" />
            <p>Elijh</p>
          </li>
          <li>
            <img src={Image} alt="" />
            <p>Jakson</p>
          </li>
          <li>
            <img src={Image} alt="" />
            <p>Grey</p>
          </li>
          <li>
            <img src={Image} alt="" />
            <p>Johny Wise</p>
          </li>
          <li>
            <img src={Image} alt="" />
            <p>Budi Hakim</p>
          </li>
          <li>
            <img src={Image} alt="" />
            <p>Thomas Hope</p>
          </li>
          <li>
            <img src={Image} alt="" />
            <p>Gerard Will</p>
          </li>
          <li>
            <img src={Image} alt="" />
            <p>William</p>
          </li>
          <li>
            <img src={Image} alt="" />
            <p>Tony</p>
          </li>
        </ul>
        <div className="comment">
          <input
            type="text"
            id="commentInput"
            placeholder="Write your Comments..."
          />
          <i class="fa-solid fa-paper-plane sendIcon"></i>
        </div>
      </div>
      
    </div>
  );
}

export default Playerboard;
