import { connect } from 'react-redux';
import TransactionView from '../components/TransactionView';
import { withRouter } from 'react-router-dom';
import { getTransactionByHash, cleanReducerMessage } from '../redux/transactionsActions';

export default withRouter(
  connect(
    state => {
      return {
        transactions: state.transactionsReducer.confirmedTransactionsList,
        loading: state.transactionsReducer.loading,
        message: state.transactionsReducer.message,
      }
    },
    {
      getTransactionByHash, cleanReducerMessage
    }
  )(TransactionView)
);