import React, { Component } from 'react'
import "../Login/Login.css"
import"./Admin.css"
import {connect} from "react-redux";
import {addItem} from "../../store/actions/itemActions"
import {getItems} from "../../store/actions/itemActions"
import firebase from "../../config/Config"



 class Admin extends Component {

state={
    title : "",
    desc : "",
    price:"",
    category:"",
    // img:""
}


componentDidMount(){
  const fetchData = async() =>{
    const db = firebase.firestore();
    const data = await db.collection('items').get();
    const doc = data.docs.map((doc) =>{
        // console.log(doc.data())
    });
  }
  fetchData();
}
handleSubmit = (e) =>{
    const {title,desc,price,category} =this.state;
    e.preventDefault();
    // console.log(this.state)
    if(!title || !desc || !price || !category){
        return alert("Please provide all the fields...")
    }
    this.props.addItem(this.state)
    this.props.history.push('/service');


}

// handleFileChange = (e) =>{
//     const file = e.target.files[0];
//     this.setState({
//         img:file
//     })
// }
handleChange = (e) =>{
    this.setState({[e.target.name] : e.target.value})
}

    render() {
        console.log(this.props.getItems())
        return (
          
            <div className="login_fields admin">

            <div className="login">
                <div className="login-text">
                    <h3>Add Item</h3>
                    <p>Add items to cloud</p>
                </div>
                <div className="email_password">
                    <input type="text" placeholder="Name" name="title" onChange={this.handleChange}/>
                    <input type="text" placeholder="Description" name="desc" onChange={this.handleChange}/>
                    <input type="text" placeholder="Price" name="price" onChange={this.handleChange}/>
                    <input type="text" placeholder="Category" name="category" onChange={this.handleChange}/>
                    {/* <input type="file" name="image" onChange={this.handleFileChange}/> */}


                    <button onClick={this.handleSubmit}>Add item</button>
                </div>
            
            </div>
            </div>
          
        )
    }
}

const mapDispatchToProps = (dispatch) =>{

    return {
        addItem: (item) => dispatch(addItem(item)),
        getItems:() => dispatch(getItems())
    }
}
// const mapStateToProps = (state) =>{
//     console.log("STATE",state)
//     return{
//     }
// }



export default connect(null,mapDispatchToProps)(Admin)
