import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FavoriteState } from '../../types/types';

const initialState: FavoriteState = {
    products: [],
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        toggleFavorite(state: FavoriteState, action: PayloadAction<number>): void {
            const productIndex = state.products.findIndex(
                (productId) => productId === action.payload
            );

            if (productIndex !== -1) {
                state.products.splice(productIndex, 1);
            } else {
                state.products.push(action.payload);
            }
        },
        removeItemFavorite(state, action: PayloadAction<number>) {
            state.products = state.products.filter(productId => productId !== action.payload);
        },
        clearFavorite(state) {
            state.products = [];
        },
    },
});

export const { toggleFavorite, removeItemFavorite, clearFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
