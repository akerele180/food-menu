import React from 'react';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  return (
    <>
      <header>
        <h1 className='text-center display-5 fw-bold'>Our Menu</h1>
        <div className='underline'></div>
      </header>
      <NavBar />
    </>
  )
}

export default Header
