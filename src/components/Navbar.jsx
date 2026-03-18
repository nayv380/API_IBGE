import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <div className={styles.logo}>IBGE<span>APP</span></div>
    <div className={styles.links}>
      <Link to="/">Consulta</Link>
      <Link to="/historico">Histórico</Link>
    </div>
  </nav>
);

export default Navbar;