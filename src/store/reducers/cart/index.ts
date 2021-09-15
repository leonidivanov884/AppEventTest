import {CartAction, CartActionsEnum, CartItem, CartState} from "./type";

const initialState: CartState = {
    items: [],
}

export default  function cartReducer(state = initialState, action: CartAction): CartState {
    let cartItems;
    switch (action.type) {
        case CartActionsEnum.REMOVE_ITEMS:
            // Удаляем все items из корзины
            localStorage.removeItem('cartItems');
            return {...state, items: []}

        case CartActionsEnum.REMOVE_ITEM:
            // Получим список предметов в корзине
            cartItems = localStorage.getItem('cartItems')
            // Если в localstorage есть элементы, то удалим его по id.
            if (cartItems){
                cartItems = JSON.parse(cartItems)
                cartItems = cartItems.filter((item: CartItem) => item.id !== action.payload)
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
            }
            // Удаляем товар в state с полученным id
            const stateItems = [...state.items].filter(item => item.id !== action.payload)
            return {...state, items: stateItems}

        case CartActionsEnum.ADD_ITEM:
            // добавляем товар и кладём в localstorage
            cartItems = [...state.items, {...action.payload, inCart: true}];
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            return {...state, items: cartItems}

        case CartActionsEnum.GET_ITEM:
            // Получим предметы из localstorage
            cartItems = localStorage.getItem('cartItems')

            // Если они есть, парсим и кладём в items
            if (cartItems) {
                return {...state, items: JSON.parse(cartItems) }
            }
            return {...state}
        default:
            return state
    }
}