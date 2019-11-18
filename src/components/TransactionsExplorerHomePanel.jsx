
import React from 'react';
import { Link } from 'react-router-dom';
import PanelSearchInput from './PanelSearchInput';
import { parseCoinAmount } from '../utils/functions';

export default class TransactionsExplorerHomePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
    this.changeTab = this.changeTab.bind(this);
    this.listTransactions = this.listTransactions.bind(this);
  }

  changeTab = (index) => () => {
    if (this.state.index !== index) {
      this.setState({ index });
    }
  }

  listTransactions(reducerToMap) {
    const transactions = this.props[reducerToMap];
    return (
      <div className='list flex wrap'>
        {
          Object.keys(transactions).length > 0 ? (
            Object.keys(transactions).map((transactionName, index) => {
              return (
                <div key={`transaction-container-${index}`} className='transaction-info-container flex-between'>
                  <div className='transaction-image four-background five-color'>Tx</div>
                  <div className='transaction-hash flex-center'>
                    <Link className='hash overflow-ellipsis' to={`/transaction/${transactions[transactionName].transactionDataHash}`}>
                      <p className='overflow-ellipsis'>{transactions[transactionName].transactionDataHash}</p>
                    </Link>
                  </div>
                  <div className='from-to-container flex-center wrap'>
                    <span className='from flex'>
                      <p className='label main-color'>From:</p>
                      <Link className='value' to={`address/${transactions[transactionName].from}`}>
                        <p className='overflow-ellipsis'>{transactions[transactionName].from}</p>
                      </Link>
                    </span>
                    <span className='from flex'>
                      <p className='label main-color'>To:</p>
                      <Link className='value' to={`address/${transactions[transactionName].to}`}>
                        <p className='overflow-ellipsis'>{transactions[transactionName].to}</p>
                      </Link>
                    </span>
                  </div>
                  <div className='price-container four-background flex-center'>
                    <p className='price overflow-ellipsis'>{parseCoinAmount(transactions[transactionName].value)}</p>
                  </div>
                </div>
              )
            })
          )
            : (
              <div className='empty-transactions'>
                <p className='five-color'>No transactions Found</p>
              </div>
            )
        }
      </div>
    );
  }

  render() {
    const { index } = this.state;
    return (
      <div className='home-resume-panel-container transactions-panel flex wrap third-background'>
        <div className={`panel-header ${this.props.responsive <= 500 ? 'flex-center' : 'flex-between'} wrap`}>
          <div className={`panel-list-options-container ${this.props.responsive <= 500 ? 'flex-center' : 'flex'}`}>
            <p
              className={`with-divisor ${index === 0 ? 'main-color' : 'five-color'}`}
              onClick={this.changeTab(0)}
            >Latest transactions</p>
            <p
              className={`${index === 1 ? 'main-color' : 'five-color'}`}
              onClick={this.changeTab(1)}
            >Pending transactions</p>
          </div>
          <Link className='link five-color' to='/transactions'>View all</Link>
        </div>
        <div className='search-container flex'>
          <PanelSearchInput type='transaction' />
        </div>
        <div className='list-container flex'>
          {
            index === 0 ? this.listTransactions('confirmed') : this.listTransactions('pending')
          }
        </div>
      </div>
    )
  }
}