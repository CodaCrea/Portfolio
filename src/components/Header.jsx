import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className='burger'>
        <div onClick={toggle} className={open ? 'burger_button_open' : 'burger_button'}>
          <div className={open ? 'bar_rotate_left' : 'bar'}></div>
          <div className={open ? 'bar_opacity' : 'bar_middle'}></div>
          <div className={open ? 'bar_rotate_right' : 'bar'}></div>
        </div>
      </div>
      <nav className={open ? 'header_nav_open' : 'header_nav'}>
        <ul className={open ? 'header_links_open' : 'header_links'}>
          <NavLink onClick={toggle} to='/' className={({ isActive }) =>
            isActive ? 'nav_active' : ''}>
            <li>Accueil</li>
          </NavLink>
          <NavLink onClick={toggle} to='/competences' className={({ isActive }) =>
            isActive ? 'nav_active' : ''}>
            <li>Compétences</li>
          </NavLink>
          <NavLink onClick={toggle} to='/prestations' className={({ isActive }) =>
            isActive ? 'nav_active' : ''}>
            <li>Prestations</li>
          </NavLink>
          <NavLink to='mailto:eric.bt@outlook.fr'>
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;