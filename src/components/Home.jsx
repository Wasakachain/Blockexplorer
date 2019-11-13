import React from 'react';
import './css/Home.css';
import HomeSearchBox from './HomeSearchBox';
import OverallViewBlocks from './OverallViewBlocks';

export default class Loader extends React.Component {
  render() {
    return (
      <div className='home-view-wrapper max-width flex wrap'>
        <HomeSearchBox />
        <OverallViewBlocks />
        <div className='twoo-panel-layout flex wrap'>
        
        </div>
      </div>
    )
  }
}
