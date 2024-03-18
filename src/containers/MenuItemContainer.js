import { connect } from "react-redux"
import { removeItem, updatePrice } from "../store/items/actions"
import MenuItem from "../components/MenuItem"
const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        remove:()=>dispatch(removeItem(ownProps.uuid)),
        updatePrice:(price)=>dispatch(updatePrice(ownProps.uuid,price))
    }
}

export const MenuItemContainer = connect(null,mapDispatchToProps)(MenuItem)