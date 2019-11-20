import { connect } from 'react-redux';
import TransactionView from '../components/TransactionView';
import { withRouter } from 'react-router-dom';
import { getTransactionByHash, cleanReducerMessage } from '../redux/transactionsActions';

export default withRouter(
  connect(
    state => {
      const transactions = {
        ...state.transactionsReducer.confirmedTransactionsList,
        ...state.transactionsReducer.pendingTransactionsList,
      }
      return {
        transactions: transactions,
        loading: state.transactionsReducer.loading,
        message: state.transactionsReducer.message,
      }
    },
    {
      getTransactionByHash, cleanReducerMessage
    }
  )(TransactionView)
);