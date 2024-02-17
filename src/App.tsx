import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import Favorite from './pages/favorite/Favorite';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import rootReducer from './store/rootReducer';
import { loginUserApi } from './store/login/loginSlice';
import { registerUserApi } from './store/register/registerSlice';
import { loggedUserApi } from './store/logged/loggedSlice';

import "./App.css";
import Logged from './pages/logged/Logged';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loginUserApi.middleware, registerUserApi.middleware, loggedUserApi.middleware),
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
            <Route path="pages/register" element={<Register />} />
            <Route path="pages/login" element={<Login />} />
            <Route path="pages/logged" element={<Logged />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
