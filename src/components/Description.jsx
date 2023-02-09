import React from "react";
import "../styles/description.css";
import Image from '../assets/pp.jpg'

function Description() {
  return (
    <div className="DescriptionContainer">
      <div className="descriptionHead">
        <div className="head1">
          <img src={Image} alt="" />
          <span>
            <h4>William Joshep</h4>
            <p>10M views</p>
          </span>
        </div>
        <div className="head2">
         <button onClick={()=>alert("You liked the video")}>❤️Like</button>
         <button >👉Share</button>
        </div>
      </div>
      <div className="desmain">
        <h2>Basic how to ride your Skateboard</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          expedita aspernatur qui eum tempore illum molestias, placeat facilis
          sit rerum a neque perspiciatis magnam! Aliquam nam qui quos
          accusantium dolore quis reiciendis sit omnis sed aspernatur velit
          consequatur nemo quidem architecto minus saepe fuga, beatae sequi
          distinctio dolorum aperiam repellat dolores sapiente! Impedit eligendi
           dicta!
        </p>
      </div>
    </div>
  );
}

export default Description;
