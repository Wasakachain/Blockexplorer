import React from 'react';
import './css/Home.css';
import {changeDocumentTitle} from '../utils/functions';
import HomeSearchBox from './HomeSearchBox';
import OverallViewBlocks from './OverallViewBlocks';
import BlockExplorerHomePanel from '../containers/BlockExplorerHomePanelContainer';
import TransactionsExplorerHomePanel from '../containers/TransactionsExplorerHomePanelContainer';

export default class Loader extends React.Component {
  componentDidMount() {
    changeDocumentTitle('Explore WasakaChain', true);
  }
  render() {
    return (
      <div className='home-view-wrapper max-width flex wrap'>
        <HomeSearchBox />
        <OverallViewBlocks />
        <div className='twoo-panel-layout flex-between wrap'>
          <BlockExplorerHomePanel />
          <TransactionsExplorerHomePanel />
        </div>
      </div>
    )
  }
}
