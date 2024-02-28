let id = 1;
export const intialItems = [
    { uuid: 1, name: 'Tofu Roast', price: 14, quantity: 1 },
    { uuid: 2, name: 'Vegan Ham', price: 12, quantity: 1 }
]

export const reducer = (state=intialItems,action)=>{
    return state;
}

export default reducer;