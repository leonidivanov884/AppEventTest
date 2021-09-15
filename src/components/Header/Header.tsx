import React, { FC } from 'react';
import './Header.css'
import {useTypedSelector} from "../../hook/useTypedSelector";
import {RouteNames} from "../../router";
import Button from '../Button/Button';
import Cart from '../Cart/Cart';

const Header: FC = () => {
    const {items} = useTypedSelector(state => state.cart)
    return (
        <div className="header">
            <p className="header__author"><i>LEONID</i></p>
            <nav className="header__nav">
                <ul>
                    <li>
                        <Button href={RouteNames.CATALOG}>
                            Каталог
                        </Button>
                    </li>
                    <li>
                        <Cart path={RouteNames.CART} count={items.length} />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
