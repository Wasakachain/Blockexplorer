import { connect } from 'react-redux';
import Transaction from '../components/Transaction';

export default connect(
  (state, ownProps) => {
    let combinedTransctions = {
      ...state.transactionsReducer.confirmedTransactionsList,
      ...state.transactionsReducer.pendingTransactionsList,
    };
    return {
      data: combinedTransctions[ownProps.hash],
    }
  }
)(Transaction);