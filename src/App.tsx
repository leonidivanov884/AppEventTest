import React, {useEffect} from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import {RouteNames} from "./router";
import {useDispatch} from "react-redux";
import {CatalogActionCreators} from "./store/reducers/catalog/action-creators";
import Header from './components/Header/Header';
import Cart from './page/cart/Cart';
import Catalog from './page/catalog/Catalog';

function App() {
    const dispatch = useDispatch()

    // Получим список товаров корзины из localStorage
    useEffect(() => {
        dispatch(CatalogActionCreators.getItems())
    }, [dispatch]);

  return (
    <div className="App">
        <div className="container">
            <Header />
            <main className="main">
                <Switch>
                    <Route path={RouteNames.CART}>
                        <Cart />
                    </Route>
                    <Route path={RouteNames.CATALOG}>
                        <Catalog />
                    </Route>
                </Switch>
            </main>
        </div>

    </div>
  );
}

export default App;
