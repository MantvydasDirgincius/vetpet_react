import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.head}>
      <div className={styles.header}>
        <img src={'./image/logo.png'} alt='vetbeeLogo' />
        <nav className={styles.nav}>
          <NavLink to='/pets'>Pets </NavLink>
          <NavLink to='/medication'>Medications</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
