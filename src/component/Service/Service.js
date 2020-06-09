import React from "react";
import "./Service.css"
import itemImg from "../../images/img2.jpg"
import {connect} from "react-redux"

function Service(props) {
  console.log(props)
  return (
    <div className="service">
      <h1 className="heading">VEG</h1>
      <div class="veg">
        <div class="menu_item" id="top">
          <img src={itemImg} alt="Item Image" />
          <div class="style_items">
            <h4>Cusine</h4>
            <p>
              Price: <i class="fa fa-rupee rupee"></i>200
            </p>
          </div>
          <div class="type_rating">
            <span class="type">
              <i class="fa fa-leaf"></i>
              <p>Veg</p>
            </span>
            <span class="rating">
              <i class="fa fa-star"></i>
              <p>4.5</p>
            </span>
          </div>
        </div>
        <div class="menu_item" id="top">
          <img src={itemImg} alt="Item Image" />
          <div class="style_items">
            <h4>Cusine</h4>
            <p>
              Price: <i class="fa fa-rupee rupee"></i>200
            </p>
          </div>
          <div class="type_rating">
            <span class="type">
              <i class="fa fa-leaf"></i>
              <p>Veg</p>
            </span>
            <span class="rating">
              <i class="fa fa-star"></i>
              <p>4.5</p>
            </span>
          </div>
        </div>
        <div class="menu_item" id="top">
          <img src={itemImg} alt="Item Image" />
          <div class="style_items">
            <h4>Cusine</h4>
            <p>
              Price: <i class="fa fa-rupee rupee"></i>200
            </p>
          </div>
          <div class="type_rating">
            <span class="type">
              <i class="fa fa-leaf"></i>
              <p>Veg</p>
            </span>
            <span class="rating">
              <i class="fa fa-star"></i>
              <p>4.5</p>
            </span>
          </div>
        </div>
        <div class="menu_item" id="top">
          <img src={itemImg} alt="Item Image" />
          <div class="style_items">
            <h4>Cusine</h4>
            <p>
              Price: <i class="fa fa-rupee rupee"></i>200
            </p>
          </div>
          <div class="type_rating">
            <span class="type">
              <i class="fa fa-leaf"></i>
              <p>Veg</p>
            </span>
            <span class="rating">
              <i class="fa fa-star"></i>
              <p>4.5</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    items:state.item.items
  }
}
export default connect(mapStateToProps)(Service);
