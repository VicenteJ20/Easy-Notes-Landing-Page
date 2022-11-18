import { NavLink } from './NavLink'
import { useState } from 'react'
import '../styles/Navbar.css'

export function Navbar () {
  const [active, setActive] = useState(false)

  const setupMenu = () => {
    setActive(!active)
  }

  return (
    <header className='Header-navbar'>
      <div className='brand-div'>
        <NavLink to='/'>Easy<span className='colorNote'>Notes</span></NavLink>
      </div>
      <button className='button-mobile' onClick={setupMenu}>
        <div />
        <div />
        <div />
      </button>
      <nav className={`navtag ${active ? 'isActive' : ''}`}>
        <ul className='nav-ul'>
          <li className='nav-item' onClick={setupMenu}><NavLink to='/Features'>Características</NavLink></li>
          <li className='nav-item' onClick={setupMenu}><NavLink to='/Prices'>Precios</NavLink></li>
          <li className='nav-item' onClick={setupMenu}><NavLink to='/About'>Acerca de</NavLink></li>
          <li className='contact-button-li' onClick={setupMenu}>
            <NavLink to='/signUp'>Registrarse</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
