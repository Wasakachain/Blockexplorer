import React from 'react';
import searchIcon from '../assets/icons/main_search.png';

export default class HomeSearchBox extends React.Component {
  render() {
    return (
      <div className='home-input-search-box-container flex-center'>
        <img src={searchIcon} className='search-icon' />
        <input className='search-box-input' type="text"/>
      </div>
    )
  }
}
