let id = 1;
import { ITEM_ADDED, ITEM_REMOVED, ITEM_PRICE_UPDATED, ITME_QUANTITY_UPDATED } from "./actions";
export const intialItems = [
    { uuid: 1, name: 'Awsome Tofu Roast', price: 14, quantity: 1 },
    { uuid: 2, name: 'Vegan Ham Sandwich', price: 12, quantity: 1 }
]

export const reducer = (state=intialItems,action)=>{
    if(action.type===ITEM_ADDED){
        const item = {uuid:id++,quantity:1,...action.payload};
        return [...state,item];
    }
    if(action.type===ITEM_REMOVED){
        return state.filter(item=>item.uuid!==action.payload.uuid);
    }
    if(action.type===ITEM_PRICE_UPDATED){
        return state.map(item=>{
            if(item.uuid===action.payload.uuid){
                return {...item,price:action.payload.price} 
            }
            return item;
        })
    }
    if(action.type === ITME_QUANTITY_UPDATED){
        return state.map(item=>{
            if(item.uuid===action.payload.uuid){
                return {...item,quantity:action.payload.quantity}
            }
        })
    }
    return state;
}

export default reducer;