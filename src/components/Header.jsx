import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <>
<nav className="navbar bg-1 fg-2">
  <div className="container-fluid">
    <a className="navbar-brand mt-2" ><img src="/Logo.png" alt="" /></a>
    <form className="d-flex gap-4" role="search">
      <a href="" className='textColor mt-2'>Blog</a>
      <a href="" className='textColor mt-2'>About</a>
          <a href="#" className="nav-link textColor mt-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
      <button class="btn-outline theme-success headerBtn" type="submit">Contact us</button>
    </form>
  </div>
</nav>
    </>
  )
}

export default Header