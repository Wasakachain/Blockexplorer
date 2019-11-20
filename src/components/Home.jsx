import React from 'react';
import './css/Home.css';
import { changeDocumentTitle } from '../utils/functions';
import HomeSearchBox from './HomeSearchBox';
import OveralHomeResumeBlocks from './OveralHomeResumeBlocks';
import BlockExplorerHomePanel from '../containers/BlockExplorerHomePanelContainer';
import TransactionsExplorerHomePanel from '../containers/TransactionsExplorerHomePanelContainer';

export default class Loader extends React.Component {
  componentDidMount() {
    changeDocumentTitle('Explore WasakaChain', true);
  }

  componentDidMount() {
    this.props.getBlocksIndex();
    this.props.getTransactionsIndex();
  }

  render() {
    return (
      <div className='home-view-wrapper max-width flex wrap'>
        <HomeSearchBox />
        <OveralHomeResumeBlocks />
        <div className='twoo-panel-layout flex-between wrap'>
          <BlockExplorerHomePanel />
          <TransactionsExplorerHomePanel />
        </div>
      </div>
    )
  }
}
