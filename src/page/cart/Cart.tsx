import React, {FC, useEffect, useState} from 'react';
import './cart.css'
import {useDispatch} from "react-redux";
import {CartActionCreators} from "../../store/reducers/cart/action-creators";
import {CatalogActionCreators} from "../../store/reducers/catalog/action-creators";
import {useTypedSelector} from "../../hook/useTypedSelector";
import { Link } from 'react-router-dom';
import { RouteNames } from '../../router';
import Button from "../../components/Button/Button";

const Cart: FC = () => {
    const [amount, setAmount] = useState(0);
    const {items} = useTypedSelector(state => state.cart)
    const dispatch = useDispatch()

    // Считаем сумму в корзине
    useEffect(() => {
        const price = items.reduce((total, person): number => {
            return total + person.price
        }, 0)
        setAmount(price)
    }, [items]);

    // Если массив корзины пуст, то показываем данный блок
    if (!items.length){
        return (
            <div className="cartPage__empty">
                <h1 className='cartPage__empty-title'>Корзина пуста 😞</h1>
                <Link className='cartPage__empty-link' to={RouteNames.CATALOG}>Перейдите в каталог, там должно что-то быть. <i>Но это не точно :3</i></Link>
            </div>
        )
    }

    // Удалить предмет из корзины
    const remove = (id: number) => {
        dispatch(CatalogActionCreators.setInCartOff(id))
        dispatch(CartActionCreators.removeItem(id))
    }

    // Удалить все предметы из корзины
    const removeAll = () => {
        dispatch(CatalogActionCreators.clearStatusInCartAction())
        dispatch(CartActionCreators.removeItems())
    }

    return (
        <div className="cartPage">
            <table className="cartPage__table">
                <tbody>
                    <tr className="cartPage__table-head" >
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Action</th>
                    </tr>
                    {items.map(item =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><Button onClick={() => remove(item.id)}>Удалить</Button></td>
                        </tr>
                    )}
                    <tr>
                        <td>Количество товаров: {items.length}</td>
                        <td>Общая цена: {amount}</td>
                        <td><Button onClick={removeAll}>Удалить все</Button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};



export default Cart;