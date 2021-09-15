import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import catalogReducer from "./reducers/catalog";
import cartReducer from "./reducers/cart";

const rootReducer = combineReducers({
    catalog: catalogReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch