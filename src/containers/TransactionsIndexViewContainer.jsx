import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TransactionsIndexView from '../components/TransactionsIndexView';
import { getTransactionsPage } from '../redux/transactionsActions';

export default withRouter(
  connect(
    (state, { confirmedTransactions }) => {
      return {
        data: confirmedTransactions ? state.transactionsReducer.confirmedTransactionsList : state.transactionsReducer.pendingTransactionsList,
        loading: state.transactionsReducer.loading
      }
    }, {
    getTransactionsPage
  }
  )(TransactionsIndexView)
)
