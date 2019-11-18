import React from 'react';
import { tableHeader } from '../static_data/blockData';
import { transactionProperties } from '../static_data/transactionData';
import { parseCoinAmount, getDifferenceFromNow } from '../utils/functions';
import { Link } from 'react-router-dom';
import './css/TransactionsList.css';

export default class TransactionsList extends React.Component {
  constructor(props) {
    super(props);
    if (props.searchForTransactions)
      this.transactionsList = props.data.transactions;
    else
      this.transactionsList = props.data;
  }
  render() {
    return (
      <div className='transactions-list-wrapper full-width flex wrap'>
        <p className='transactions-count full-width five-color'>{`A total of ${this.transactionsList.length} transactions found`}</p>
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
                          if (baseUrl) {
                            return (
                              <Link
                                key={`transaction-property-${index}`}
                                className={`transaction-property${property === 'transactionDataHash' ? ' main-color' : ''}`}
                                to={`${baseUrl}${this.transactionsList[transactionHash][property]}`}
                              >
                                <p className='overflow-ellipsis'>{this.transactionsList[transactionHash][property]}</p>
                              </Link>
                            );
                          }
                          return (
                            <p key={`transaction-property-${index}`} className='overflow-ellipsis transaction-property' >
                              {property === 'value' || property === 'fee' ? parseCoinAmount(this.transactionsList[transactionHash][property]) :
                                property === 'dateCreated' ? getDifferenceFromNow(this.transactionsList[transactionHash][property]) : this.transactionsList[transactionHash][property]}
                            </p>
                          );
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
