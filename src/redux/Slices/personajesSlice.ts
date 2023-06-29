import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Personaje from "../../types/character.types";


export const fetchCharactersPage = createAsyncThunk(
  'characters/fetchCharactersPage',
  async (count: number) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${count}`);
      if (!response.ok) {
        throw new Error('Error fetching characters');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const fetchCharactersByFilter = createAsyncThunk(
  'characters/fetchCharactersByFilter',
  async (filter: string) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`);
      if (!response.ok) {
        throw new Error('Error fetching characters');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);


interface PersonajesState {
  listaPersonajes: Personaje[];
  loading: boolean;
  error: string | null;
}

const initialState: PersonajesState = {
  listaPersonajes: [],
  loading: false,
  error: null,
};

const personajesSlice = createSlice({
  name: "personajes",
  initialState,
  reducers: {
      resetListaPersonajes: (state) => {
        state.listaPersonajes = [];
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharactersPage.fulfilled, (state, action) => {
        state.loading = false;
        state.listaPersonajes = action.payload;
      })
      .addCase(fetchCharactersPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching characters';
      })
      .addCase(fetchCharactersByFilter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharactersByFilter.fulfilled, (state, action) => {
        state.loading = false;
        state.listaPersonajes = action.payload;
      })
      .addCase(fetchCharactersByFilter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching characters';
      });
  },
});

export const { resetListaPersonajes } = personajesSlice.actions;

export default personajesSlice.reducer;
