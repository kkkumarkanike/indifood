import React from "react";
import img from "../../images/img2.jpg";
import  './MobileCard.css'

function MobileCard() {
  return (
    <div className="card">
      <div className="image">
        <img height="100" width="100" src={img} />
      </div>
      <div className="desc">
        <div className="heading">Lorem ipsum dolor sit amet.</div>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <dir className="hr"></dir>
        <div className="rating_time">
          <p><i class="fa fa-star"></i>3.5</p>
          <p>31 min</p>
          <p><i class="fa fa-rupee rupee"></i>200</p>
        </div>
      </div>
    </div>
  );
}

export default MobileCard;
