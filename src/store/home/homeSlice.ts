import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    isFavorite: boolean;
}

interface ProductState {
    products: Product[];
    status: "idle" | "loading" | "succeded" | "failed";
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    status: "idle",
    error: null
}

export const fecthProducts = createAsyncThunk("products/fecthProducts", async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
    } catch (error) {
        throw (error);
    }
});

const homeSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setFavoriteProduct(state, action: PayloadAction<Product>) {
            state.products = state.products.map(product => {
                if (product.id === action.payload.id) {
                    return { ...product, isFavorite: !product.isFavorite };
                }
                return product;
            });
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fecthProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fecthProducts.fulfilled, (state, action) => {
                state.status = "succeded";
                state.products = action.payload.map((product: Product) => ({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    category: product.category,
                    image: product.image,
                    isFavorite: product.isFavorite = false
                }));
            })
            .addCase(fecthProducts.rejected, (state, action) => {
                state.status = "failed",
                    state.error = action.error.message || null;
            });
    },
})

export const { setFavoriteProduct } = homeSlice.actions;

export default homeSlice.reducer;