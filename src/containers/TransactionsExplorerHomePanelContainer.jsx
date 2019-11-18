import { connect } from 'react-redux';
import TransactionsExplorerHomePanel from '../components/TransactionsExplorerHomePanel';

export default
  connect(
    state => {
      return {
        confirmed: state.transactionsReducer.confirmedTransactionsList,
        pending: state.transactionsReducer.pendingTransactionsList,
        responsive: state.responsiveReducer.responsive
      }
    },
  )(TransactionsExplorerHomePanel);
