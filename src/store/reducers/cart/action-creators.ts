import {addItemAction, CartActionsEnum, CartItem, getItemAction, removeItemAction, removeItemsAction,} from "./type";

export const CartActionCreators = {
    addItems: (items: CartItem): addItemAction => ({
       type: CartActionsEnum.ADD_ITEM,
       payload: items
    }),
    removeItem: (id: number): removeItemAction => ({
        type: CartActionsEnum.REMOVE_ITEM,
        payload: id
    }),
    removeItems: (): removeItemsAction => ({
        type: CartActionsEnum.REMOVE_ITEMS
    }),
    getItems: (): getItemAction => ({
        type: CartActionsEnum.GET_ITEM,
    })
}