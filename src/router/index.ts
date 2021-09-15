import React from 'react'
import Cart from '../page/cart/Cart'
import Catalog from "../page/catalog/Catalog";

export interface IRoute  {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    CART = '/cart',
    CATALOG = '/catalog',
}

export const routes: IRoute[] = [
    {path: RouteNames.CART, component: Cart, exact: true},
    {path: RouteNames.CATALOG, component: Catalog, exact: true}
]