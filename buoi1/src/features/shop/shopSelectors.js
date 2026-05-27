export const selectCartTotalItems = (state)=>{
    return state.shop.cart.reduce((total, item) => total + item.quantity, 0);
}
export const selectCartTotalPrice = (state)=>{
    return state.shop.cart.reduce((total,item)=> total+item.quantity*item.price,0);
}