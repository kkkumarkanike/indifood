import React, { Component } from 'react'
import "../Login/Login.css"
import"./Admin.css"
import {connect} from "react-redux";
import {addItem} from "../../store/actions/itemActions"
import {getItems} from "../../store/actions/itemActions"
import  {storage} from "../../config/Config";
import Spinner from './../../component/UI/Spinner/Spinner';



 class Admin extends Component {

    state={
        title : "",
        desc : "",
        price:"",
        category:"",
        img:"",
        loading : false
    }

     componentDidMount(){
        this.props.getItems();
  // const fetchData = async() =>{
  //   const db = firebase.firestore();
  //   const data = await db.collection('items').get();
  //   const doc = data.docs.map((doc) =>{
  //       console.log(doc.data())
  //   });
      console.log("FOODITEMS",this.props.foodItems)

  // }
  // fetchData();
}
handleSubmit = (e) =>{
    const {title,desc,price,category} =this.state;
    e.preventDefault();
    // console.log(this.state)
    if(!title || !desc || !price || !category){
        return alert("Please provide all the fields...")
    }
    this.props.addItem({
        title : this.state.title,
        desc : this.state.desc,
        price: this.state.price,
        category: this.state.category,
        img: this.state.img
    });
    this.props.history.push('/service');


}

handleFileChange = (event) =>{
        this.setState({loading : true});
    const file = event.target.files[0];
    const storageRef = storage.ref().child(file.name);
    storageRef.put(file).then((snapshot) =>{
        storageRef.getDownloadURL().then(url =>{
            console.log(url);
            this.setState({img : url, loading : false});
        })
    });
}

handleChange = (e) =>{
    this.setState({[e.target.name] : e.target.value})
}

    render() {
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
                    <input type="file" name="image" onChange={this.handleFileChange}/>
                    {this.state.loading ?
                        <div style={{display : "flex", marginTop : "10px"}}>
                            <p style={{marginLeft : "16px"}}>Uploading file...</p>
                            &nbsp;&nbsp;
                            <Spinner/></div> :
                    null
                    }

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
const mapStateToProps = (state) =>{
    return{
        foodItems: state.item.res
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Admin)
