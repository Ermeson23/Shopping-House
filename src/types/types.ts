export interface CartItem {
    product: Product;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}

export interface FavoriteState {
    products: number[];
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    isFavorite: boolean;
}

export interface ProductState {
    products: Product[];
    status: "idle" | "loading" | "succeded" | "failed";
    error: string | null;
}

export interface UserRegisterData {
    email: string;
    password: string;
}

export interface UserRegistrationResponse {
    id: number;
    error?: string;
}

export interface UserLoginData {
    email: string;
    password: string;
}

export interface UserLoginResponse {
    id: number;
    error?: string;
}