import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { fecthProducts } from '../../store/home/homeSlice';
import { Product } from '../../types/types';

import "./Home.css";
import { addItem } from '../../store/cart/cartSlice';
import { toggleFavorite } from '../../store/favorite/favoriteSlice';

export default function Home() {
  
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.home.products);
  const status = useSelector((state: RootState) => state.home.status);
  const error = useSelector((state: RootState) => state.home.error);

  const handleAddToCart = (product: Product) => {
    dispatch(addItem({ product: product, quantity: 1 }));
    alert("Adicionado ao carrinho com sucesso.");
  };

  const handleFavoriteChange = (productId: number) => {
    dispatch(toggleFavorite(productId));
    alert("Adicionado aos favoritos com sucesso.");
  };

  useEffect(() => {
    dispatch(fecthProducts() as any);
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h2>Lista de Produtos</h2>
      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.description} style={{ width: '150px', maxWidth: '300px' }} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p>R${product.price}</p>
              <p><strong>Categoria:</strong> {product.category}</p>
              <label htmlFor="favorite" className="p-2">Adicionar como favorito</label>
              <i onClick={() => handleFavoriteChange(product.id)} className="fa-regular fa-heart"></i>
              <button onClick={() => handleAddToCart(product)} className="btn btn-success">Adicionar ao carrinho</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};