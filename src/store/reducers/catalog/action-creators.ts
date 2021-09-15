import {
    CatalogActionsEnum,
    CatalogItem,
    clearStatusInCartAction,
    setCatalogAction,
    setInCartAction,
    setInCartOffAction,
    setIsErrorAction,
    setIsLoadingAction
} from "./type";
import {AppDispatch} from "../../index";
import axios from "axios";


export const CatalogActionCreators = {
    setItems: (items: CatalogItem[]): setCatalogAction => ({
       type: CatalogActionsEnum.SET_CATALOG,
       payload: items
    }),
    setIsLoading: (payload: boolean): setIsLoadingAction => ({type: CatalogActionsEnum.SET_IS_LOADING, payload}),
    setIsError: (payload: string): setIsErrorAction => ({type: CatalogActionsEnum.SET_ERROR, payload}),
    setInCart: (payload: number): setInCartAction => ({type: CatalogActionsEnum.SET_STATUS_IN_CART, payload}),
    setInCartOff: (payload: number): setInCartOffAction => ({type: CatalogActionsEnum.SET_STATUS_IN_CART_OFF, payload}),
    clearStatusInCartAction: (): clearStatusInCartAction => ({type: CatalogActionsEnum.CLEAR_STATUS_IN_CART}),
    getItems: () => async (dispatch: AppDispatch) => {
        try {
            // Устанавливаем статус загрузки
            dispatch(CatalogActionCreators.setIsLoading(true))

            // Получаем предметы
            const items = await axios.get('https://appevent.ru/dev/task1/catalog')

            // Убираем Loader
            dispatch(CatalogActionCreators.setIsLoading(false))

            // Сохраняем предметы в store
            dispatch(CatalogActionCreators.setItems(items.data.items))
        }catch (e) {
            // В случае ошибки будем выводить этот текст
            dispatch(CatalogActionCreators.setIsError('Произошла ошибка при получении каталога'))
        }
    }
}