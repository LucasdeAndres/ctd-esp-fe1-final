import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { Episodio } from "../../types/character.types";

export const fetchEpisodes = createAsyncThunk(
    'episodios/fetchEpisodes',
    async (lista: string) => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${lista}`);
        if (!response.ok) {
          throw new Error('Error fetching episodes');
        }
        const data = await response.json();      
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  );

interface EpisodioState {
  episodios: Episodio[];
  loading: boolean;
  error: string | null;
}

const initialState: EpisodioState= {
  episodios:[],
  loading: false,
  error: null,
};

const episodios = createSlice({
  name: "episodios",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.loading = false;
        state.episodios = action.payload;
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching episodes';
      });
    }
});



export default episodios.reducer;
