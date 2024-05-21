<<<<<<< HEAD
=======
import { useState } from 'react';
>>>>>>> e62148da2e7b391957a801c93e17d0a334b4c392
import { NavLink } from 'react-router-dom';
import '../style/header.css';

const Header = () => {
<<<<<<< HEAD
  return (
    <header>
      <nav className='header_nav'>
        <ul className='header_links'>
          <NavLink to='/' className={({ isActive }) =>
            isActive ? "nav_active" : ""}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to='/competences' className={({ isActive }) =>
            isActive ? "nav_active" : ""}>
            <li>Compétences</li>
          </NavLink>
          <NavLink to='/prestations' className={({ isActive }) =>
            isActive ? "nav_active" : ""}>
            <li>Prestations</li>
          </NavLink>
          <NavLink to="mailto:eric.bt@outlook.fr">
=======
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
>>>>>>> e62148da2e7b391957a801c93e17d0a334b4c392
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;