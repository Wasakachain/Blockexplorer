import React from 'react';
import { Link } from 'react-router-dom';
import { fullTransactionProperties } from '../static_data/transactionData';
import { formatTimeStamp, parseCoinAmount } from '../utils/functions';

export default class Transaction extends React.Component {
  getTransactionPropertyValue(name, value) {
    if (name === 'dateCreated')
      return formatTimeStamp(value);
    if (name === 'value' || name === 'fee')
      return parseCoinAmount(value);
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    return value;
  }
  getTransactionStatus() {
    const { data } = this.props;
    if (typeof data.minedInBlockIndex === 'number') {
      return <p className='property-value main-color'>Success</p>;
    }
    return <p className='property-value five-color'>Pending</p>;
  }
  render() {
    const { data } = this.props;
    return (
      <div className='transaction-info-container full-width flex wrap'>
        <p className='title main-color full-width'>Overview</p>
        <div className='transaction-property-container flex-between wrap full-width'>
          <p className='label five-color'>Status</p>
          {this.getTransactionStatus()}
        </div>
        {
          fullTransactionProperties.map(
            ({ property, baseUrl, label }, index) => {
              if (typeof data[property] !== 'object' && typeof data[property] !== 'undefined') {
                return (
                  <div key={`transaction-property-${index}`} className='transaction-property-container flex-between wrap full-width'>
                    <p className='label five-color'>{label}</p>
                    {
                      baseUrl ? (
                        <Link className='property-value five-color' to={`${baseUrl}${data[property]}`}>
                          <p className='property-value'>
                            {this.getTransactionPropertyValue(property, data[property])}
                          </p>
                        </Link>
                      ) : (
                          <p className='property-value five-color'>
                            {this.getTransactionPropertyValue(property, data[property])}
                          </p>
                        )
                    }
                  </div>
                )
              }
              return null;
            })
        }
      </div>
    )
  }
}