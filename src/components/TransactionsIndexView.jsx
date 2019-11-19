import React from 'react';
import './css/TransactionsIndexView.css';
import { formatTimeStamp, parseCoinAmount, changeDocumentTitle } from '../utils/functions';
import Loader from './Loader';
import TransactionsList from '../containers/TransactionsListContainer';
// import { Link } from 'react-router-dom';
// import { fullTransactionProperties } from '../static_data/transactionData';

export default class TransactionsIndexView extends React.Component {
  componentDidMount() {
    const { data, pendingdTransactions, getTransactionsPage } = this.props;
    changeDocumentTitle(pendingdTransactions ? 'Pending Transactions' : 'Confirmed Transactions', true);
    if (!Object.keys(data).length) {
      getTransactionsPage(pendingdTransactions ? 'pending' : 'confirmed');
    }
  }
  render() {
    const {
      pendingdTransactions,
      loading,
      data
    } = this.props;
    return (
      <div className='transaction-view-wrapper max-width flex wrap'>
        <p className='view-title main-color full-width'>{pendingdTransactions ? 'Pending Transactions' : 'Confirmed Transactions'}</p>
        {
          loading ? <Loader /> : (
            Object.keys(data).length ? (
              <div className='address-info-panel-container transactions-panel full-width'>
                <TransactionsList
                  reducer='transactionsReducer'
                  reducerKey={pendingdTransactions ? 'pendingTransactionsList' : 'confirmedTransactionsList'}
                />
              </div>
            ) : <p className='error-message-container full-width five-color'>No Transactions Found</p>
          )
        }
      </div>
    )
  }
}