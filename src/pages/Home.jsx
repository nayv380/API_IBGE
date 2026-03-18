import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUFs, getCidadesPorUF } from '../services/api';
import { adicionarAoHistorico } from '../store';
import styles from './Home.module.css';

const Home = () => {
  const [ufs, setUfs] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selecionados, setSelecionados] = useState({ uf: '', cidade: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    getUFs().then(res => setUfs(res.data));
  }, []);

  useEffect(() => {
    if (selecionados.uf) {
      setLoading(true);
      getCidadesPorUF(selecionados.uf).then(res => {
        setCidades(res.data);
        setLoading(false);
      });
    }
  }, [selecionados.uf]);

  const salvar = () => {
    dispatch(adicionarAoHistorico({
      id: Date.now(),
      ...selecionados,
      data: new Date().toLocaleString()
    }));
    alert("Consulta salva!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Consultar Localidade</h2>
        <div className={styles.field}>
          <label>Estado (UF)</label>
          <select value={selecionados.uf} onChange={e => setSelecionados({uf: e.target.value, cidade: ''})}>
            <option value="">Selecione...</option>
            {ufs.map(uf => <option key={uf.id} value={uf.sigla}>{uf.nome}</option>)}
          </select>
        </div>
        <div className={styles.field}>
          <label>Cidade {loading && "(...)"}</label>
          <select 
            disabled={!selecionados.uf || loading}
            value={selecionados.cidade}
            onChange={e => setSelecionados({...selecionados, cidade: e.target.value})}
          >
            <option value="">Selecione...</option>
            {cidades.map(c => <option key={c.id} value={c.nome}>{c.nome}</option>)}
          </select>
        </div>
        <button className={styles.btn} onClick={salvar} disabled={!selecionados.cidade}>Salvar Consulta</button>
      </div>
    </div>
  );
};
export default Home;