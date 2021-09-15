import {CatalogAction, CatalogActionsEnum, CatalogState} from "./type";


const initialState: CatalogState = {
    items: [],
    isLoading: false,
    error: ''
}

export default function catalogReducer(state: CatalogState = initialState, action: CatalogAction): CatalogState {
    let stateItems;
    switch (action.type) {
        case CatalogActionsEnum.SET_CATALOG:
            // Получаем каталог товаров
            stateItems = localStorage.getItem('cartItems')
            let newArr:any = [] ;
            if (stateItems) {
                // Получим список товаров корзины из localStorage
                const localStorageArray = JSON.parse(stateItems)

                // Пробегаемся по полученному с сервера массиву
                for (let i = 0; i < action.payload.length; i++) {
                    let localId = 0;
                    for (let j = 0; j < localStorageArray.length; j++) {
                        // Если id объекта с сервера и id объекта из LocalStorage равны
                        // То сохраняем этот id в localId
                        if(action.payload[i].id === localStorageArray[j].id){
                            localId = j
                        }
                    }
                    // Так же проверка на соответствие id,но не во втором цикле
                    // Сохраняем объект, в зависимости от условия

                    if(action.payload[i].id === localStorageArray[localId].id){
                        newArr.push(localStorageArray[localId])
                    }else{
                        newArr.push(action.payload[i])
                    }
                }
                return {...state, items: newArr }
            }
            return {...state, items: [...state.items, ...action.payload]}

        case CatalogActionsEnum.SET_IS_LOADING:
            // Устанавливаем статус лоадинг
            return {...state, isLoading: action.payload}
        case CatalogActionsEnum.SET_ERROR:
            // Устанавливаем ошибку
            return {...state, error: action.payload}
        case CatalogActionsEnum.SET_STATUS_IN_CART:
            // Добавляем статус в корзине
            stateItems = state.items.map(item => item.id === action.payload ? {...item, inCart: true} : {...item})
            return {...state, items: stateItems}
        case CatalogActionsEnum.SET_STATUS_IN_CART_OFF:
            // Убираем статус в корзине
            stateItems = state.items.map(item => item.id === action.payload ? {...item, inCart: false} : {...item})
            return {...state, items: stateItems}
        case CatalogActionsEnum.CLEAR_STATUS_IN_CART:
            stateItems = state.items.map(item => {
                return {
                    ...item,
                    inCart: false
                }
            })
            return {...state, items: stateItems}
        default:
            return state
    }
}