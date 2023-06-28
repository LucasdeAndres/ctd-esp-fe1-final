import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice";
import filtroReducer from "./Slices/filtroSlice";
import personajesReducer from "./Slices/personajesSlice";


 const store = configureStore({
    reducer:{
        counter: counterReducer,
        personaje: personajesReducer,
        filtro: filtroReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store