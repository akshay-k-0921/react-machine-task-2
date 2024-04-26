import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: [],
    cartCount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addTOCart: (state, action) => {
            const existingItem = state.cartList.find(item => item.dish_id === action.payload.dish_id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartList.push({
                    ...action.payload,
                    quantity: 1
                });
            }
            state.cartCount += 1;
        },
        decrement: (state, action) => {
            const item = state.cartList.find(item => item.dish_id === action.payload.dish_id);
            if (item && item.quantity > 0) {
                item.quantity -= 1;
                state.cartCount -= 1;
            }
        }
    },
});

export const { decrement, addTOCart } = cartSlice.actions;

export default cartSlice.reducer;
