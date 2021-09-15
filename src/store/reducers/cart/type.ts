
export interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    inCart?: boolean;
}

export interface CartState {
    items: CartItem[]
}

export enum CartActionsEnum {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    GET_ITEM = 'GET_ITEM',
    REMOVE_ITEMS = 'REMOVE_ITEMS'
}

export interface addItemAction {
    type: CartActionsEnum.ADD_ITEM;
    payload: CartItem
}

export interface removeItemAction {
    type: CartActionsEnum.REMOVE_ITEM;
    payload: number
}

export interface removeItemsAction {
    type: CartActionsEnum.REMOVE_ITEMS;
}

export interface getItemAction {
    type: CartActionsEnum.GET_ITEM;
}

// обобщающий тип для catalogActions
export type CartAction =
    addItemAction | removeItemAction | getItemAction | removeItemsAction