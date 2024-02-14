import { useDispatch, useSelector } from "react-redux";

import { addByUnity, clearCart, removeItemCart, removeByUnity } from "../../store/cart/cartSlice";
import { RootState } from "../../store/rootReducer";

import "./Cart.css";

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleAddByUnit = (productId: number, quantity: number) => {
        dispatch(addByUnity({ productId: productId, quantity: quantity }));
    };

    const handleRemoveByUnity = (productId: number, quantity: number) => {
        dispatch(removeByUnity({ productId: productId, quantity: quantity }));
    };

    const handleRemoveItem = (productId: number) => {
        dispatch(removeItemCart(productId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <>
            <section className="container">
                <h2>Carrinho de compras</h2>
                {(cartItems.length === 0) ? (
                    <p>O carrinho está vazio.</p>
                ) : (
                    <div className="card-container">
                        {cartItems.map(item => (
                            <div className="card" key={item.product.id}>
                                <img src={item.product.image} alt={item.product.description} />
                                <h5 className="card-title">{item.product.title}</h5>
                                <p>R${item.product.price * item.quantity}</p>
                                <p><strong>Categoria:</strong> {item.product.category}</p>
                                <p>Quantidade: {item.quantity}</p>
                                <div className="custom-button">
                                    <button onClick={() => handleAddByUnit(item.product.id, 1)} className="btn btn-success">Adicionar unidade</button>
                                    <button onClick={() => (item.quantity > 1) ? handleRemoveByUnity(item.product.id, 1) : handleRemoveItem(item.product.id)} className="btn btn-primary">Remover unidade</button>
                                    <button onClick={() => handleRemoveItem(item.product.id)} className="btn btn-warning">Remover do carrinho</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <button onClick={handleClearCart} className="btn btn-danger clear-cart">Limpar Carrinho</button>
        </>
    )
}
