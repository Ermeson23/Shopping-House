import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../home/homeSlice';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const hasItem = state.items.find(item => item.product.id === action.payload.product.id);

      (hasItem) ? hasItem.quantity += action.payload.quantity : (state.items.push(action.payload))
    },
    addByUnity(state, action: PayloadAction<{ productId: number, quantity: number }>) {
      return {
        ...state,
        items: state.items.map(item => {
          if (item.product.id === action.payload.productId && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity
            };
          }
          return item;
        })
      };
    },
    removeByUnity(state, action: PayloadAction<{ productId: number, quantity: number }>) {
      return {
        ...state,
        items: state.items.map(item => {
          if (item.product.id === action.payload.productId && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity - action.payload.quantity
            };
          }
          return item;
        })
      };
    },
    removeItemCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.product.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, addByUnity, removeItemCart, removeByUnity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
