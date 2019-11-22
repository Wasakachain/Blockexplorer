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

  getTransactionPropertyValue(property, baseUrl, index, transactionHash, responsive = false) {
    if (property !== 'minedInBlockIndex') {
      if (baseUrl) {
        return (
          <Link
            key={`transaction-property-${index}`}
            className={`transaction-property${property === 'transactionDataHash' ? ' main-color' : ''} ${responsive ? 'responsive-width' : 'desktop-width'}`}
            to={`${baseUrl}${this.transactionsList[transactionHash][property]}`}
          >
            <p className='overflow-ellipsis'>{
              property === 'from' || property === 'to' ? parseHashToShow(this.transactionsList[transactionHash][property]) : this.transactionsList[transactionHash][property]
            }</p>
          </Link>
        );
      }
      return (
        <p
          key={`transaction-property-${index}`}
          className={`overflow-ellipsis transaction-property ${responsive ? 'responsive-width' : 'desktop-width'}`}
        >
          {property === 'value' || property === 'fee' ? parseCoinAmount(this.transactionsList[transactionHash][property]) :
            property === 'dateCreated' ? getDifferenceFromNow(this.transactionsList[transactionHash][property]) : this.transactionsList[transactionHash][property]}
        </p>
      );
    }
    return this.getTransactionStatus(this.transactionsList[transactionHash][property], baseUrl, index, responsive)
  }

  getTransactionStatus(minedInBlockIndex, baseUrl, index, responsive) {
    if (typeof minedInBlockIndex === 'number') {
      return (
        <Link key={`transaction-property-${index}`} className={`transaction-property ${responsive ? 'responsive-width' : 'desktop-width'}`} to={`${baseUrl}${minedInBlockIndex}`}>
          <p className='overflow-ellipsis'>{minedInBlockIndex}</p>
        </Link>
      );
    }
    return (
      <p key={`transaction-property-${index}`} className={`overflow-ellipsis transaction-property five-color ${responsive ? 'responsive-width' : 'desktop-width'}`} >Pending</p>
    );
  }

  desktopList() {
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
                        transactionProperties.map(({ property, baseUrl }, index) => this.getTransactionPropertyValue(property, baseUrl, index, transactionHash))
                      }
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

  responsiveList() {
    return (
      <div className='transactions-tables-list-container full-width flex wrap'>
        <p className='transactions-count full-width five-color'>{`A total of ${this.count} transactions found`}</p>
        {
          Object.keys(this.transactionsList).map((transactionHash, index) => {
            return (
              <div key={`transaction-${transactionHash}`} className={`single-transaction-properties-table full-width flex-between ${index % 2 === 0 ? 'four-background' : 'third-background'}`}>
                <div className='property-label-column flex'>
                  {
                    tableHeader.map((label, index) => {
                      return (
                        <p key={`table-header-${index}`} className='header-label full-width five-color'>{label}</p>
                      )
                    })
                  }
                </div>
                <div className='property-value-column flex'>
                  {
                    transactionProperties.map(({ property, baseUrl }, index) => this.getTransactionPropertyValue(property, baseUrl, index, transactionHash, true))
                  }
                </div>
              </div>
            );
          })
        }
      </div>
    )
  }

  render() {
    const { responsive } = this.props;
    if (responsive <= 800) {
      return this.responsiveList();
    }
    return this.desktopList();
  }
}
