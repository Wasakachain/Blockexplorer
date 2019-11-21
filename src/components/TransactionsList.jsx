import React from 'react';
import { transactionProperties, tableHeader } from '../static_data/transactionData';
import { parseCoinAmount, getDifferenceFromNow, parseHashToShow } from '../utils/functions';
import { Link } from 'react-router-dom';
import './css/TransactionsList.css';

export default class TransactionsList extends React.Component {
  constructor(props) {
    super(props);
    if (props.searchForTransactions)
      this.transactionsList = props.data.transactions;
    else
      this.transactionsList = props.data;
    this.count = Array.isArray(this.transactionsList) ? this.transactionsList.length : Object.keys(this.transactionsList).length;
  }
  getTransactionStatus(minedInBlockIndex, baseUrl, index) {
    if (typeof minedInBlockIndex === 'number') {
      return (
        <Link key={`transaction-property-${index}`} className='transaction-property' to={`${baseUrl}${minedInBlockIndex}`}>
          <p className='overflow-ellipsis'>{minedInBlockIndex}</p>
        </Link>
      );
    }
    return (
      <p key={`transaction-property-${index}`} className='overflow-ellipsis transaction-property five-color'> Pending</p>
    );
  }
  render() {
    return (
      <div className='transactions-list-wrapper full-width flex wrap'>
        <p className='transactions-count full-width five-color'>{`A total of ${this.count} transactions found`}</p>
        <div className='transactions-table-container full-width flex wrap'>
          <div className='table-header flex-center full-width'>
            {
              tableHeader.map((label, index) => {
                return (
                  <p key={`table-header-${index}`} className='header-label five-color'>{label}</p>
                )
              })
            }
          </div>
          <div className='transactions-list-container flex full-width'>
            <div className='list-scroll-container flex full-width wrap'>
              {
                Object.keys(this.transactionsList).map(transactionHash => {
                  return (
                    <div key={`transaction-${transactionHash}`} className='transaction-element-container full-width flex-between'>
                      {
                        transactionProperties.map(({ property, baseUrl }, index) => {
                          if (property !== 'minedInBlockIndex') {
                            if (baseUrl) {
                              return (
                                <Link
                                  key={`transaction-property-${index}`}
                                  className={`transaction-property${property === 'transactionDataHash' ? ' main-color' : ''}`}
                                  to={`${baseUrl}${this.transactionsList[transactionHash][property]}`}
                                >
                                  <p className='overflow-ellipsis'>{
                                    property === 'from' || property === 'to' ? parseHashToShow(this.transactionsList[transactionHash][property]) : this.transactionsList[transactionHash][property]
                                  }</p>
                                </Link>
                              );
                            }
                            return (
                              <p key={`transaction-property-${index}`} className='overflow-ellipsis transaction-property' >
                                {property === 'value' || property === 'fee' ? parseCoinAmount(this.transactionsList[transactionHash][property]) :
                                  property === 'dateCreated' ? getDifferenceFromNow(this.transactionsList[transactionHash][property]) : this.transactionsList[transactionHash][property]}
                              </p>
                            );
                          }
                          return this.getTransactionStatus(this.transactionsList[transactionHash][property], baseUrl, index)
                        })
                      }
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
