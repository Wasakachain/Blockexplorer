import React from 'react';
import { Link } from 'react-router-dom';
import { blockInfoLabels } from '../static_data/blockData';
import { formatTimeStamp } from '../utils/functions';

export default class Block extends React.Component {
  render() {
    const { data, blockIndex } = this.props;
    return (
      <div className='block-info-container full-width flex wrap'>
        <p className='title main-color full-width'>Overview</p>
        {
          Object.keys(data).map(
            (BlockPropertyName, index) => {
              if (typeof data[BlockPropertyName] !== 'object') {
                return (
                  <div key={`block-property-${index}`} className='block-property-container flex-between wrap full-width'>
                    <p className='label five-color'>{blockInfoLabels[BlockPropertyName]}</p>
                    <p className='property-value five-color'>
                      {
                        BlockPropertyName === 'dateCreated' ? formatTimeStamp(data[BlockPropertyName]) : data[BlockPropertyName]
                      }
                    </p>
                  </div>
                )
              }
              return null;
            })
        }
        <Link to={`/block/transactions/${blockIndex}`}>
          <p className='link main-color'>View Transactions</p>
        </Link>
      </div>
    )
  }
}
