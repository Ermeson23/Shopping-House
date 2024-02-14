import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Cart from './pages/cart/Cart';
import Favorite from './pages/favorite/Favorite';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import rootReducer from './store/rootReducer';

import "./App.css";

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
            <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pages/cart" element={<Cart />} />
            <Route path="pages/favorite" element={<Favorite />} />
          </Routes>
            <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
