export interface CatalogItem {
    id: number,
    image: string;
    name: string;
    price: number;
    inCart?: boolean;
}

export interface CatalogState {
    items: CatalogItem[],
    isLoading: boolean,
    error: string
}

export enum CatalogActionsEnum {
    SET_CATALOG = 'SET_CATALOG',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_STATUS_IN_CART = 'SET_STATUS_IN_CART',
    SET_STATUS_IN_CART_OFF = 'SET_STATUS_IN_CART_OFF',
    CLEAR_STATUS_IN_CART = 'CLEAR_STATUS_IN_CART'
}

export interface setCatalogAction {
    type: CatalogActionsEnum.SET_CATALOG;
    payload: CatalogItem[]
}

export interface setIsLoadingAction {
    type: CatalogActionsEnum.SET_IS_LOADING;
    payload: boolean
}

export interface setIsErrorAction {
    type: CatalogActionsEnum.SET_ERROR;
    payload: string
}

export interface setInCartAction {
    type: CatalogActionsEnum.SET_STATUS_IN_CART;
    payload: number;
}

export interface setInCartOffAction {
    type: CatalogActionsEnum.SET_STATUS_IN_CART_OFF;
    payload: number;
}

export interface clearStatusInCartAction {
    type: CatalogActionsEnum.CLEAR_STATUS_IN_CART;
}

// обобщающий тип для catalogActions
export type CatalogAction =
    setCatalogAction | setIsLoadingAction | setIsErrorAction |
    setInCartAction | setInCartOffAction | clearStatusInCartAction