import { connect } from "react-redux"
import { removeItem } from "../store/items/actions"
import MenuItem from "../components/MenuItem"
const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        remove:()=>{
            dispatch(removeItem(ownProps.uuid))
        }
    }
}

export const MenuItemContainer = connect(null,mapDispatchToProps)(MenuItem)