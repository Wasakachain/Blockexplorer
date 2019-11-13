import React from 'react';
import './css/Header.css';
import Logo from '../assets/img/logos/logo.png';
import { Link } from 'react-router-dom';
import ViewDropDown from '../containers/ViewDropDownContainer'

export default class Loader extends React.Component {
  render() {
    return (
      <header className='header-wrapper flex-center'>
        <nav className='header-content max-width flex-between'>
          <div className='logo-container'>
            <img src={Logo} alt='wasakascan-logo'/>
          </div>
          <div className='menu-options-container flex-between'>
            <Link to='/' className='home-link'>
              HOME
            </Link>
            <ViewDropDown />
          </div>
        </nav>
      </header>
    )
  }
}