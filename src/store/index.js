import { configureStore, createSlice } from '@reduxjs/toolkit';

const ibgeSlice = createSlice({
  name: 'ibge',
  initialState: { 
    historico: JSON.parse(localStorage.getItem('historico_ibge')) || [] 
  },
  reducers: {
    adicionarAoHistorico: (state, action) => {
      state.historico.unshift(action.payload);
      localStorage.setItem('historico_ibge', JSON.stringify(state.historico));
    },
    limparHistorico: (state) => {
      state.historico = [];
      localStorage.removeItem('historico_ibge');
    }
  }
});

export const { adicionarAoHistorico, limparHistorico } = ibgeSlice.actions;
export const store = configureStore({ reducer: { ibge: ibgeSlice.reducer } });