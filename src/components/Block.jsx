import React from 'react';
import { Link } from 'react-router-dom';
import { blockInfoLabels } from '../static_data/blockData';
import { formatTimeStamp, parseHashToShow } from '../utils/functions';

export default class Block extends React.Component {
  getBlockPropertyValue(propertyName) {
    const { data } = this.props;
    if (propertyName === 'index') {
      return <p className='property-value main-color'>{data[propertyName]}</p>;
    }
    if (propertyName === 'dateCreated') {
      return <p className='property-value five-color'>{formatTimeStamp(data[propertyName])}</p>;
    }
    if (propertyName === 'minedBy') {
      return (
        <Link to={`/address/${data[propertyName]}`} className='property-value five-color'>
          <p className='full-width'>{parseHashToShow(data[propertyName])}</p>
        </Link>
      )
    }
    return (
      <p className='property-value five-color'>{data[propertyName]}</p>
    )
  }
  render() {
    const { data, blockIndex } = this.props;
    return (
      <div className='block-info-container full-width flex wrap'>
        <p className='title main-color full-width'>Overview</p>
        {
          Object.keys(data).map(
            (BlockPropertyName, index) => {
              if (typeof data[BlockPropertyName] !== 'object' && BlockPropertyName !== 'status') {
                return (
                  <div key={`block-property-${index}`} className='block-property-container flex-between wrap full-width'>
                    <p className='label five-color'>{blockInfoLabels[BlockPropertyName]}</p>
                    {this.getBlockPropertyValue(BlockPropertyName)}
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
