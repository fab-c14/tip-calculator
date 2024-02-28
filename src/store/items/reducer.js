let id = 1;
import { ITEM_ADDED } from "./actions";
export const intialItems = [
    { uuid: 1, name: 'Awsome Tofu Roast', price: 14, quantity: 1 },
    { uuid: 2, name: 'Vegan Ham Sandwich', price: 12, quantity: 1 }
]

export const reducer = (state=intialItems,action)=>{
    if(action.type===ITEM_ADDED){
        const item = {uuid:id++,quantity:1,...action.payload};
        return [...state,item];
    }
    return state;
}

export default reducer;