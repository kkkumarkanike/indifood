import React, { Component } from "react";
import "./Search.css";
class Search extends Component {
  state = {
    searchText: "",
  };

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

  render() {

    const {searchText} = this.state;
    return (
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
    );
  }
}

export default Search;
