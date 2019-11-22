import React from 'react';
import './css/notFound.css'
import { Link } from 'react-router-dom';
import notFound from '../assets/img/404.png';

export default class Loader extends React.Component {
  render() {
    return (
      <div className='not-found-page-container full-width flex-center wrap'>
        <p className='main-message full-width five-color'>ERROR 404</p>
        <p className='secundary-message full-width five-color'>Content Not Found</p>
        <img className='error404-image' src={notFound} alt='not-found' />
        <Link className='link full-width main-color' to='/'>Go Home</Link>
      </div>
    )
  }
}
