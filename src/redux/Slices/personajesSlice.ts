import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Personaje from "../../types/character.types";


interface PersonajesState {
  listaPersonajes: Personaje[];
}

const initialState: PersonajesState = {
  listaPersonajes: [],
};

const personajesSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {
    setPersonajes: (state, action: PayloadAction<Personaje[]>) => {
      state.listaPersonajes = action.payload;
    },
    toggleFavorito: (state, action: PayloadAction<number>) => {
        const personaje = state.listaPersonajes.find(p => p.id === action.payload);
        if (personaje) {
          const { favorite } = personaje;
          personaje.favorite = !favorite;
      
          if (personaje.favorite) {
            // Agregar el personaje al localStorage de ítems favoritos
            const favoritos = localStorage.getItem('favoritos');
            let favoritosArray = [];
      
            if (favoritos) {
              favoritosArray = JSON.parse(favoritos);
            }
      
            const personajeExistente = favoritosArray.find((p: Personaje) => p.id === personaje.id);
            if (!personajeExistente) {
              favoritosArray.push(personaje);
              localStorage.setItem('favoritos', JSON.stringify(favoritosArray));
            }
          } else {
            // Eliminar el personaje del localStorage de ítems favoritos
            const favoritos = localStorage.getItem('favoritos');
            let favoritosArray = [];
      
            if (favoritos) {
              favoritosArray = JSON.parse(favoritos);
      
              // Buscar y eliminar el personaje del array de favoritos
              favoritosArray = favoritosArray.filter((p: Personaje) => p.id !== personaje.id);
      
              localStorage.setItem('favoritos', JSON.stringify(favoritosArray));
            }
          }
        }
      },
      
      
  },
});

export const { setPersonajes, toggleFavorito } = personajesSlice.actions;

export default personajesSlice.reducer;
