import React, { Component } from "react";
import "./Search.css";
import {connect} from "react-redux"
import {getItems} from "../../store/actions/itemActions"


class Search extends Component {

  state = {
    searchText: "",
  };
  // filteredItems = () =>{
  //   this.props.items.filter(filItem =>{
  //     return filItem.title.toLowerCase().includes(this.state.searchText.toLowerCase());
  //   })
  // }
  componentDidMount(){
    this.props.getItems()
  }

  clearText = (e) => {
    this.setState({
      searchText: "",
    });
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


   filteredItems = this.props.items.filter((item) => {
    return item.title.toLowerCase().includes(this.state.searchText.toLowerCase());
  });
  render() {
    console.log(this.filteredItems)
// console.log("ITEMS",this.props.items)
    const {searchText} = this.state;
    return (
      <>
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
        
        </div>
      </div>

      {/* {this.props.items.filter(item => item.title.includes(this.state.searchText)).map(filItem => (
        <li>
          {filItem.title}
        </li>
      ))} */}
            {searchText.length >= 1 ? (
        <div>
          {this.filteredItems.map((item) => (
              <p>{item.title}</p>
        
          ))}
        </div>
      ) : null}
     
      </>
    );
  }
}

const mapStateToProps = state =>{
  return{
items:state.item.res
  }
}

  const mapDispatchToProps = dispatch =>{
    return {
      getItems : () => dispatch(getItems())
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(Search);
