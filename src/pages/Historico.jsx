import { useSelector, useDispatch } from 'react-redux';
import { limparHistorico } from '../store';
import styles from './Historico.module.css';

const Historico = () => {
  const historico = useSelector(state => state.ibge.historico);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h2>Histórico de Consultas</h2>
          <div className={styles.underline}></div>
        </header>

        <button 
          className={styles.btnClean} 
          onClick={() => dispatch(limparHistorico())}
          disabled={historico.length === 0}
        >
          LIMPAR TUDO
        </button>

        <div className={styles.listWrapper}>
          {historico.length === 0 ? (
            <p className={styles.empty}>Nenhuma consulta salva no momento.</p>
          ) : (
            <ul className={styles.list}>
              {historico.map(item => (
                <li key={item.id} className={styles.listItem}>
                  <div className={styles.locationInfo}>
                    <strong className={styles.cityName}>{item.cidade}</strong>
                    <span className={styles.ufTag}>/ {item.uf}</span>
                  </div>
                  <div className={styles.timeBadge}>
                    {item.data || item.horario}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Historico;