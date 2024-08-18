import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartItem {
    id: string,
    title: string,
    price: number,
    images: string[],
    quantity: number
};

export interface ICartState {
    cartItems: ICartItem[]
};

const initialState: ICartState = {
    cartItems: []
};

export const cartSlise = createSlice({
	name: "filters",
	initialState,
	reducers: {
        addCartItem: (state, action: PayloadAction<ICartItem>) => {
            const findItem = state.cartItems.find(
                (obj) => obj.id === action.payload.id
            );

            if (findItem) {
                findItem.quantity++;
            } else {
                state.cartItems.push(action.payload);
            };
        },

        removeCartItem: (state, action: PayloadAction<string>) => {
            const findItem = state.cartItems.find(
                (obj) => obj.id === action.payload
            );

            if(!findItem) return;

            if (findItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    (obj) => obj.id !== action.payload                );
            } else {
                findItem.quantity--;
            };
        },

        removeAllCartItem: (state, action: PayloadAction<ICartItem>) => {
            state.cartItems = state.cartItems.filter(
                (obj) => obj.id !== action.payload.id
            );
        },
        // clearCartItems: (state) => {
        //     state.totalPrice = 0;
        //     state.totalCount = 0;
        //     state.cartItems = [];
        // },
	}
});

export const { addCartItem, removeCartItem } = cartSlise.actions;

export default cartSlise.reducer;