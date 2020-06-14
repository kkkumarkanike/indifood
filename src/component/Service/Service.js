import React, {Component} from "react";
import "./Service.css"
import itemImg from "../../images/img2.jpg"
import Aux from './../../hoc/Auxilary';
import {connect} from "react-redux"
import {getItems} from "../../store/actions/itemActions";

class Service extends Component{

    componentDidMount() {
        this.props.getItems();
        //     console.log('UseEffect worked successfully')
    }

    render() {
        let products = null;
        if (this.props.items){
            const itemList = this.props.items;
             products = Object.keys(itemList).map(id =>{
                return (
                    <Aux>
                        <div className="menu_item" id="top">
                            <img src={itemList[id].img} alt="Item Image"/>
                            <div className="style_items">
                                <h4>{itemList[id].title[0].toUpperCase() + itemList[id].title.slice(1)}</h4>
                                <p>
                                    Price: <i className="fa fa-rupee rupee"></i>200
                                </p>
                            </div>
                            <div className="type_rating">
                        <span className="type">
                            <i className="fa fa-leaf"></i>
                            <p>{itemList[id].category}</p>
                        </span>
                                <span className="rating">
                            <i className="fa fa-star"></i>
                            <p>4.5</p>
                        </span>
                            </div>
                        </div>
                    </Aux>
                );
            })
        }

        return (
            <div className="service">
                <div class="veg">
                    {products}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        items: state.item.res
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getItems:() => dispatch(getItems())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Service);
