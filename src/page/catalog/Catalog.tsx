import React, { FC, useEffect } from 'react';
import './catalog.css'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hook/useTypedSelector";
import {CatalogActionCreators} from "../../store/reducers/catalog/action-creators";
import {CartActionCreators} from "../../store/reducers/cart/action-creators";
import {CartItem} from "../../store/reducers/cart/type";
import { CatalogItem } from '../../store/reducers/catalog/type';
import Loader from "../../components/Loader/Loader";
import Card from '../../components/Card/Card';


const Catalog: FC = () => {
    const {items, isLoading, error} = useTypedSelector(state => state.catalog)
    const dispatch = useDispatch()

    // Получим каталог товаров
    useEffect(() => {
       dispatch(CartActionCreators.getItems())
    }, [dispatch]);

    // Если есть ошибка то выводим текст
    if (error) {
        return <p style={{margin: '15px'}}>{error}</p>
    }

    // Если статус загрузки: активен - показываем Loader
    if (isLoading) {
        return <Loader  />
    }

    // Добавим товар в корзину и сохраним в localStorage
    const addToCart = ({id, name, price, image}: CartItem): void => {
        dispatch(CatalogActionCreators.setInCart(id))
        dispatch(CartActionCreators.addItems({
            id, name, price, image
        }))
    }

    return (
        <div className="catalog">
            {items.map((item: CatalogItem) =>
                <Card key={item.id}
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      inCart={item.inCart}
                      price={item.price}
                      btnClick={addToCart}
                />
            )}
        </div>
    );
};

export default Catalog;
