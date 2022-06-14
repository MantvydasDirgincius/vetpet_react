import '../Header/Header.css';

function Header() {
  return (
    <header className='head'>
      <div className='header'>
        <img src={'image/logo.png'} alt='vetbee logo' />
        <nav className='nav'>
          <a href='index.html'>Pets</a>
          <a href='medication.html'>Medications</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
