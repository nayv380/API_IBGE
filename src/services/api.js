import axios from 'axios';

const api = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades'
});

export const getUFs = () => api.get('/estados?orderBy=nome');
export const getCidadesPorUF = (uf) => api.get(`/estados/${uf}/municipios?orderBy=nome`);