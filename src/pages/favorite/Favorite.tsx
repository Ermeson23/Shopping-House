import { useDispatch, useSelector } from "react-redux";

import { removeItemFavorite, clearFavorite } from "../../store/favorite/favoriteSlice";
import { RootState } from "../../store/rootReducer";
import { Product } from "../../types/types";

import "./Favorite.css";

export default function Favorite() {
    const dispatch = useDispatch();

    const favoriteProducts = useSelector((state: RootState) => {
        return state.favorite.products
            .map(productId => {
                return state.home.products.find((product: Product) => product.id === productId);
            })
            .filter((product: Product | undefined): product is Product => product !== undefined);
    });

    const handleRemoveItem = (productId: number) => {
        dispatch(removeItemFavorite(productId));
    };

    const handleClearFavorite = () => {
        dispatch(clearFavorite());
    }

    return (
        <section className="container">
            <h2>Produtos Favoritos</h2>
            {(favoriteProducts.length === 0) ? (
                <p>A lista de favoritos está vazia.</p>
            ) : (
                <div className="card-container">
                    {favoriteProducts.map((product: Product) => (
                        <div className="card" key={product.id}>
                            <img src={product.image} alt={product.description} />
                            <h5 className="card-title">{product.title}</h5>
                            <p>R${product.price}</p>
                            <p><strong>Categoria:</strong> {product.category}</p>
                            <div className="custom-button">
                                <button onClick={() => handleRemoveItem(product.id)} className="btn btn-warning">Remover dos favoritos</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <button onClick={handleClearFavorite} className="btn btn-danger clear-favorite">Limpar Favoritos</button>
        </section>
    )
}
