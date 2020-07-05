import React, { Component } from "react";
import "../Login/Login.css";
import "./Admin.css";
import { connect } from "react-redux";
import { addItem } from "../../store/actions/itemActions";
import { getItems } from "../../store/actions/itemActions";
import { storage } from "../../config/Config";
import Spinner from "./../../component/UI/Spinner/Spinner";
import CustomToast from "../../component/Toast/CutomToast"
import {toast} from "react-toastify"

class Admin extends Component {
  state = {
    title: "",
    desc: "",
    price: "",
    category: "",
    sub_cat:"",
    img: "",
    loading: false,
  };

  componentDidMount() {
    this.props.getItems();
  }
  handleSubmit = (e) => {
    const { title, desc, price, category } = this.state;
    e.preventDefault();
    if (!title || !desc || !price || !category) {
      return   toast.error(<CustomToast authError="Please provide all the fields..." />, {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: 3000,
        closeButton:false,
      });
    }
    this.props.addItem({
      title: this.state.title,
      desc: this.state.desc,
      price: this.state.price,
      category: this.state.category,
      sub_cat:this.state.sub_cat,
      img: this.state.img,
    });
    this.notify()
  };
  notify = () =>
  toast.success(<CustomToast authError="Item added successfully..." />, {
    position: toast.POSITION.BOTTOM_CENTER,
    hideProgressBar: true,
    autoClose: 3000,
    closeButton: false,
  });


  handleFileChange = (event) => {
    this.setState({ loading: true });
    const file = event.target.files[0];
    const storageRef = storage.ref().child(file.name);
    storageRef.put(file).then((snapshot) => {
      storageRef.getDownloadURL().then((url) => {
        this.setState({ img: url, loading: false });
      });
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleCategorySelect = e =>{
      this.setState({category:e.target.value})
  }
  handleSubCategorySelect = e =>{
    this.setState({sub_cat:e.target.value})
}


  render() {
    const itemList = this.props.foodItems;
    return (
      <>
        <div className="login_fields admin">
          <div className="login">
            <div className="login-text">
              <h3>Add Item</h3>
              <p>Add items to cloud</p>
            </div>
            <div className="email_password">
              <input
                type="text"
                placeholder="Name"
                name="title"
                onChange={this.handleChange}
              />
              <input
                type="text"
                placeholder="Description"
                name="desc"
                onChange={this.handleChange}
              />
              <input
                type="text"
                placeholder="Price"
                name="price"
                onChange={this.handleChange}
              />
              {/* Category */}
              <select onChange={this.handleCategorySelect}>
                <option value="veg">veg</option>
                <option value="non-veg">non-veg</option>
                <option value="special">special</option>
                <option value="tiffin">tiffin</option>
              </select>
{/* Sub Category */}
              <select onChange={this.handleSubCategorySelect}>
                <option value="rice">rice</option>
                <option value="roti">roti</option>
                <option value="curry">curry</option>
                <option value="starter">starter</option>
                <option value="tiffin">tiffin</option>

              </select>
              {/* <input type="text" placeholder="Category" name="category" onChange={this.handleChange}/> */}
              <input
              className="file_input"
                type="file"
                name="image"
                onChange={this.handleFileChange}
              />
              {this.state.loading ? (
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <p style={{ marginLeft: "16px" }}>Uploading file...</p>
                  &nbsp;&nbsp;
                  <Spinner />
                </div>
              ) : null}

              <button onClick={this.handleSubmit}>Add item</button>
            </div>
          </div>
        </div>
        <br />
        {/* {Object.keys(itemList).map((id) => {
          return <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
            <p>Title : {itemList[id].title}</p>
            <p>Category : {itemList[id].category}</p>
            <p>SubCat : {itemList[id].sub_cat}</p>
            <p>****************</p>


          </div>
        })} */}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
    getItems: () => dispatch(getItems()),
  };
};
const mapStateToProps = (state) => {
  return {
    foodItems: state.item.res,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);