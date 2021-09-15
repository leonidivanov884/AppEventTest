import React, { FC } from 'react';
import './cart.css'
import { Link } from 'react-router-dom';
import {BiCart} from "react-icons/all";

interface CartProps {
    path?: string
    count?: number;
}

const Cart: FC<CartProps> = ({path= '', count}) => {
    return (
        <Link to={path} className="cart">
            <BiCart  />
            {count
                ?   <div className="cart__count">
                        {count}
                    </div>
                :   null
            }

        </Link>
    );
};

export default Cart;
