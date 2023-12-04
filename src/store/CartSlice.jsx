import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state=initialState, action) => {
      // Check if the item is already in the cart
      const existingItem = state.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If it exists, increase the quantity
        existingItem.quantity += 1;
      } else {
        // If it doesn't exist, add it to the cart
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      console.log(state,action)
      return state.filter(item => item.id !== action.payload);
    },
    removeone: (state, action) => {
        const IteamsIndex_rmv = state.carts.findIndex((iteam)=> iteam.id===action.payload.id);
        if(state.carts[IteamsIndex_rmv].qnty >=1){
         const dltitem = state.carts[IteamsIndex_rmv].qnty-=1;
            return{
                ...state,
                carts:[...state.carts]
              } 
        }
        else if(state.carts[IteamsIndex_rmv].qnty ===1){
            const data= state.carts.filter((el)=>el.id != action.payload.id);
            return {
                ...state,
                carts:data
            }
        }
    },
    addone : (state, action) => {
        const IteamsIndex_add = state.carts.findIndex((iteam)=> iteam.id===action.payload.id);
        if(state.carts[IteamsIndex_add].qnty >=1){
         const dltitem = state.carts[IteamsIndex_add].qnty+=1;
            return{
                ...state,
                carts:[...state.carts]
              } 
        }
        else if(state.carts[IteamsIndex_add].qnty ===1){
            const data= state.carts.filter((el)=>el.id != action.payload.id);
            return {
                ...state,
                carts:data
            }
        }
    }

  },
});



export const { addToCart, removeFromCart,removeone,addone } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export default cartSlice.reducer;


