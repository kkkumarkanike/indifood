import React from "react";
import img from "../../images/img2.jpg";
import  './MobileCard.css'

function MobileCard() {
  return (
    <div className="single-card">
        <div className="card">
            <div className="">
                <img height="80" width="80" src={img}/>
            </div>
            <div className="desc">
                <div className="heading">Lorem ipsum dolor sit amet.</div>
                <p style={{margin:0}}>Lorem ipsum dolor sit amet.</p>
                <div className="hr"></div>
                <div className="rating_time">
                    <p><i className="fa fa-star"></i>3.5</p>
                    <p>31 min</p>
                    <p><i className="fa fa-rupee rupee"></i>200</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MobileCard;
