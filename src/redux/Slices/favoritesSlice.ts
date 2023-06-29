import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Personaje from "../../types/character.types";

interface PersonajesState {
  listaFavoritos: Personaje[];
}

const initialState: PersonajesState = {
  listaFavoritos: [],
};

const listaFavoritos = createSlice({
  name: "favoritos",
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<Personaje>) => {
      const personaje = action.payload;
      const index = state.listaFavoritos.findIndex(
        (p) => p.id === personaje.id
      );
      if (index !== -1) {
        state.listaFavoritos.splice(index, 1);
      } else {
        state.listaFavoritos.push(personaje);
      }
    },
  },
});

export const { toggleFavorito } = listaFavoritos.actions;

export default listaFavoritos.reducer;
