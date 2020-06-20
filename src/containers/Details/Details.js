import React, {useEffect} from "react";
import Aux from './../../hoc/Auxilary';
import {connect} from "react-redux";
import ItemDetails from './../../component/ItemDetails/ItemDetails';
import {getItemDetails,addItemToCart} from "../../store/actions/itemActions";


const details = (props) =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() =>{
        props.onGetDetails(props.match.params.id);
    },[]);
    return (
        <Aux>
            <ItemDetails info={props.info} click={props.onAddingItemToCart}/>;
        </Aux>
    )
}
const mapStateToProps = state =>{
    return{
        info : state.item.itemDetails
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onGetDetails : (id) => dispatch(getItemDetails(id)),
        onAddingItemToCart : (item) => dispatch(addItemToCart(item))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(details);