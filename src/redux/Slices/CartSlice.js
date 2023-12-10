import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers:{
        add:(state,action)=>{
            return state.push(action.payload)
        },
        remove:(state,action)=>{
            return state.filter((item)=>item.id !== action.payload)
        },
        checkoutCart: () => {
            return [];
          },
        increaseQty:(state,action)=>{
            return state.map((item)=>(
                item.id === action.payload ? {qty:item.qty + 1} : item
            ))
        },
        decreaseQty:(state,action)=>{
            return state.map((item)=>(
                item.id === action.payload ? {qty:item.qty - 1} : item
            ))
        },
    }

})
export const {add,remove,checkoutCart} = CartSlice.actions;
export default CartSlice.reducer;