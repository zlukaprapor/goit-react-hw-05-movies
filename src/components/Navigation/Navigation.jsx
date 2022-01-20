import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" className={styles.link} activeClassName={styles.activeLink}>
      главная
    </NavLink>
    <NavLink
      to="/1"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      1-я
    </NavLink>
    <NavLink
      to="/2"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      2-я
    </NavLink>
    <NavLink
      to="/3"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      3-я
    </NavLink>
  </nav>
);

export default Navigation;
