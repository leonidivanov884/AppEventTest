import React, { FC } from 'react';
import Button from '../Button/Button';
import './card.css'
import {RouteNames} from "../../router";
import {BiCart, BsArrowUpShort} from "react-icons/all";

interface CardProps {
    id: number;
    name: string;
    price: number;
    image: string;
    inCart?: boolean;
    btnClick?: any;
}

const Card: FC<CardProps> = (
        {id,name,price,image,inCart, btnClick}
    ) => {

    return (
        <div className="card">
            <div className={`card__status ${inCart ? 'active' : ''}`}>
                <BiCart  />
                <BsArrowUpShort />
            </div>
            <div className="card__img">
                <img src={image} alt={name}/>
            </div>
            <div className="card__name">{name}</div>
            <div className="card__price">{price} ₽</div>
            {inCart
                ?   <Button href={RouteNames.CART} red={inCart}>
                        Оформить заказ
                    </Button>
                :   <Button red={inCart} onClick={() => btnClick({id,image, name,price, inCart})}>
                        Добавить в корзину
                    </Button>
            }
        </div>
    );
};

export default Card;
