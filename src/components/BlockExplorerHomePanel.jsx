import React from 'react';
import { Link } from 'react-router-dom';
import PanelSearchInput from './PanelSearchInput';
import { getTransactionsTotal, getMiningTime } from '../utils/functions';

export default class BlockExplorerHomePanel extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className='home-resume-panel-container blocks-panel flex wrap third-background'>
        <div className='panel-header flex-between'>
          <p className='panel-title main-color'>Latest Blocks</p>
          <Link className='link five-color' to='/blocks'>View all</Link>
        </div>
        <div className='search-container flex'>
          <PanelSearchInput type='block' />
        </div>
        <div className='list-container flex'>
          <div className='list flex wrap'>
            {
              Object.keys(data).map((blockIndex, index) => {
                return (
                  <div key={`block-container-${index}`} className='block-info-container flex-between'>
                    <div className='block-image four-background five-color'>Was</div>
                    <div className='block-index flex-center'>
                      <Link className='index' to={`/block/${index}`}>
                        <p>{data[blockIndex].index}</p>
                      </Link>
                    </div>
                    <div className='block-miner'>
                      <Link className='miner overflow-ellipsis' to={`address/${data[blockIndex].minedBy}`}>
                        <p className='overflow-ellipsis'>{`Mined By: ${data[blockIndex].minedBy}`}</p>
                      </Link>
                      <Link className='flex' to={`/block/${index}`}>
                        <span className='flex'>
                          <p className='transactions-count main-color'>{`${data[blockIndex].transactions.length} txns`}</p>
                          <p className='transactions-seconds five-color'>{getMiningTime(data[blockIndex], data[index - 1])}</p>
                        </span>
                      </Link>
                    </div>
                    <div className='price-container four-background flex-center'>
                      <p className='price overflow-ellipsis'>{getTransactionsTotal(data[blockIndex].transactions)}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}