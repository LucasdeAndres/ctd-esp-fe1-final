import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltroState {
  filtro: string;
}

const initialState: FiltroState = {
  filtro: '',
};

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    setFiltro: (state, action: PayloadAction<string>) => {
      state.filtro = action.payload;
    },
    clearFiltro: (state) => {
      state.filtro = '';
    },
  },
});

export const { setFiltro, clearFiltro } = filtroSlice.actions;
export default filtroSlice.reducer;
