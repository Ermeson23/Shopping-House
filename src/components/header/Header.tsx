import { useSelector } from "react-redux";
import "./Header.css";
import { RootState } from "../../store/rootReducer";

export default function Header() {

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const favoriteItems = useSelector((state: RootState) => state.favorite.products);

    return (
        <header>
            <nav className="navbar navbar-expand-md bg-primary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand custom-text" href="/">Shopping House</a>
                    <button className="navbar-toggler custom-color" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-primary" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header custom-text">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close btn-close-white custom-text" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link custom-links" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <div className="detail-cart">{cartItems.length}</div>
                                    <a className="nav-link  custom-links" href="/pages/cart">Carrinho</a>
                                </li>
                                <li className="nav-item">
                                <div className="detail-favorite">{favoriteItems.length}</div>
                                    <a className="nav-link  custom-links" href="/pages/favorite">Favoritos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}