import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "mycart",
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, actions) => {
      const exists = state.cart.find(item => item.id === actions.payload.id);
      if (exists) {
        toast.info("This product is already in the cart!");
      } else {
        state.cart.push({ ...actions.payload, qnty: 1 }); 
        toast.success("Product added to cart!");
      }
    },

    qtyIncr: (state, actions) => {
      const item = state.cart.find(product => product.id === actions.payload.id);
      if (item) {
        item.qnty++;
        toast.success("Quantity increased!");
      }
    },

    qtyDecr: (state, actions) => {
      const item = state.cart.find(product => product.id === actions.payload.id);
      if (item) {
        if (item.qnty <= 1) {
          toast.warning("Quantity cannot be less than 1!");
        } else {
          item.qnty--;
          toast.success("Quantity decreased!");
        }
      }
    },

    proRemove: (state, actions) => {
      state.cart = state.cart.filter(product => product.id !== actions.payload.id);
      toast.error("Product removed from cart!");
    }
  }
});

export const { addToCart, qtyIncr, qtyDecr, proRemove } = cartSlice.actions;
export default cartSlice.reducer;
