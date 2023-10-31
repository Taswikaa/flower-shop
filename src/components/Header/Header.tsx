import logo from '/flower-svgrepo-com.svg';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt="" />
      <a className='header__link' href="https://github.com/Taswikaa/flowers-base" target="_blank" rel="noopener noreferrer">GitHub</a>
    </header>
  )
}

export default Header