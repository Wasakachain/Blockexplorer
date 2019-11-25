import React from 'react';
import { Link } from 'react-router-dom';
import { fullTransactionProperties } from '../static_data/transactionData';
import { formatTimeStamp, parseCoinAmount, parseHashToShow } from '../utils/functions';
import checkMark from '../assets/icons/success.png';
import pending from '../assets/icons/pending.png';
import error from '../assets/icons/error.png';

export default class Transaction extends React.Component {
  getTransactionPropertyValue(name, value) {
    if (name === 'dateCreated')
      return formatTimeStamp(value);
    if (name === 'value' || name === 'fee')
      return parseCoinAmount(value);
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    if (name === 'from' || name === 'to')
      return parseHashToShow(value);
    return value;
  }

  setIcon(status) {
    if (status !== 'Pending') {
      return status === 'Success' ? checkMark : error;
    }
    return pending
  }

  getTransactionStatus() {
    const { data = {} } = this.props;
    let status = 'Pending';
    if (typeof data.minedInBlockIndex === 'number') {
      status = data.transferSuccessful ? 'Success' : 'Failed';
    }

    return (
      <span className='property-value full-width flex'>
        <img src={this.setIcon(status)} className={'transaction-status-image' + (typeof data.minedInBlockIndex !== 'number' ? ' pending-image' : '')} />
        <p className={`transaction-status ${status}`}>{status}</p>
      </span>
    )
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