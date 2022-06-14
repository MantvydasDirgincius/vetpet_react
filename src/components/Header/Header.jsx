import { NavLink } from 'react-router-dom';
import '../Header/Header.css';

function Header() {
  return (
    <header className='head'>
      <div className='header'>
        <img src={'image/logo.png'} alt='vetbee logo' />
        <nav className='nav'>
          <NavLink to='/pets'>Pets </NavLink>
          <NavLink to='/medication'>Medications</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
