import React, {Component} from "react";
import "./Service.css"
import Aux from '../../hoc/Auxilary';
import {connect} from "react-redux"
import {getSpecialItems} from "../../store/actions/itemActions";
import {Link} from "react-router-dom"

class Service extends Component{

    componentDidMount() {
        this.props.getSpecialItems()
    }

    render() {
        let specialFoodItems = null;
        
        if (this.props.specialItems){
            const itemList = this.props.specialItems;
            specialFoodItems = Object.keys(itemList).map(id =>{
                return (
                    <Aux key={id}>
                        <Link className="links" to ={"/details/"+id} >
                        <div className="menu_item" id="top" >
                            <img src={itemList[id].img} alt="Item Image"/>
                            <div className="style_items">
                                <h4>{itemList[id].title[0].toUpperCase() + itemList[id].title.slice(1)}</h4>
                                <p>
                                    Price: <i className="fa fa-rupee rupee"></i>{itemList[id].price}
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
                        </Link>
                    </Aux>
                );
            })
        }

        return (
            <div className="service" key="1">
                <div class="veg">
                    {specialFoodItems}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        specialItems:state.item.specialItems
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getSpecialItems:() => dispatch(getSpecialItems())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Service);
