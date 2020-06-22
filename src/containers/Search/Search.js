import React, { Component } from "react";
import "./Search.css";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Aux from './../../hoc/Auxilary';
import {getItems} from "../../store/actions/itemActions";
import load from './../../images/loading-search.gif';

class Search extends Component {

  state = {
    searchText: "",
    filteredItems : {},
    message : '',
    result:''
  };
  componentDidMount() {
    this.props.onGetItems();
  }

  clearText = (e) => {
    this.setState({
      searchText: "",
    });
  };
 
  handleInput = (e) => {
    
    let filteredItems = {};
    this.setState({
      [e.target.name]: e.target.value,
    });
    const val = e.target.value;
    const foodItems = this.props.items;
    const keys = Object.keys(foodItems);
    if(keys.length){
       const filteredItemsKeys = keys.filter(id => foodItems[id].title.toLowerCase().includes(val.toLowerCase()));
       filteredItemsKeys.map(key =>{
           filteredItems[key] = foodItems[key];
      })

      const values = Object.keys(filteredItems);
      if(values.length > 0){
        this.state.result  = values.map(item =>{
      
          return (
          <Link to={"/details/"+item} style={{textDecoration : "none",color : "#000"}}>
            <div className="searchItemResult">
              <img height="100" width="100" src={filteredItems[item].img} />
              <div className="titleDesc">
                <h3>{filteredItems[item].title[0].toUpperCase() + filteredItems[item].title.slice(1)}</h3>
                <h6>{filteredItems[item].desc}</h6>
              </div>
            </div>
          </Link>
            )
        })
      }else{
        this.state.result= <h3 style={{textAlign : "center"}}>No Items Found For The Search...</h3>;
      }
      
       this.setState({filteredItems : filteredItems});
    }
    if (e.target.value.length <= 0){
       this.setState({filteredItems : {}})
    }


  };
  render() {
    
    const {searchText} = this.state;
    return (
      <Aux>
        <div className="search_bar">
          <div className="search-field">
            <span className="fa fa-search"></span>
            <input
                placeholder="Search For Restaurants Or Dishes"
                name="searchText"
                value={searchText}
                onChange={this.handleInput}
            />
            {searchText.length > 0 ? (
                <span onClick={this.clearText} className="fa fa-close"></span>
            ) : (
                ""
            )}
            {/* <button>
             <i className="fa fa-close">    </i>
         </button> */}
          </div>
        </div>
        {this.state.result ? this.state.result : this.state.result }
      </Aux>
    );
  }
}

const mapStateToProps = state =>{
  return {
      items : state.item.res
  }
}
const mapDispatchToProps = dispatch =>{
  return {
     onGetItems : () => dispatch(getItems())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
