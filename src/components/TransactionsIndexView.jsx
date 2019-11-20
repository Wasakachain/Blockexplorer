import React from 'react';
import './css/TransactionsIndexView.css';
import { formatTimeStamp, parseCoinAmount, changeDocumentTitle } from '../utils/functions';
import Loader from './Loader';
import TransactionsList from '../containers/TransactionsListContainer';
import Pagination from '../containers/PaginationContainer';
// import { Link } from 'react-router-dom';
// import { fullTransactionProperties } from '../static_data/transactionData';

export default class TransactionsIndexView extends React.Component {
  componentDidMount() {
    const { data, pendingdTransactions, getTransactionsPage, match: { params: { page } } } = this.props;
    changeDocumentTitle(pendingdTransactions ? 'Pending Transactions' : 'Confirmed Transactions', true);
    getTransactionsPage(pendingdTransactions ? 'pending' : 'confirmed', page ? page : 1);
  }
  componentDidUpdate({ match: { params: { page } } }) {
    if (this.props.match.params.page !== page) {
      const { pendingdTransactions, getTransactionsPage } = this.props;
      getTransactionsPage(pendingdTransactions ? 'pending' : 'confirmed', this.props.match.params.page ? this.props.match.params.page : 1);
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
                <Pagination
                  reducer='transactionsReducer'
                  paginationKey={pendingdTransactions ? 'pendingPagination' : 'confirmedPagination'}
                />
              </div>
            ) : <p className='error-message-container full-width five-color'>No Transactions Found</p>
          )
        }
      </div>
    )
  }
}