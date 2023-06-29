import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice";
import episodesReducer from "./Slices/episodesSlice";
import favoritesReducer from "./Slices/favoritesSlice";
import filtroReducer from "./Slices/filtroSlice";
import personajesReducer from "./Slices/personajesSlice";


 const store = configureStore({
    reducer:{
        counter: counterReducer,
        personaje: personajesReducer,
        filtro: filtroReducer,
        favorito: favoritesReducer,
        episode: episodesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store