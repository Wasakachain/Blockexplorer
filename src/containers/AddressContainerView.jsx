import { connect } from 'react-redux';
import AddressView from '../components/AddressView';
import { withRouter } from 'react-router-dom';
import { getAddressBalance, cleanMessages, getAddressTransactions } from '../redux/addressActions';

export default withRouter(
  connect(
    (state) => {
      return {
        balances: state.addressesReducer.balances,
        transactions: state.addressesReducer.transactions,
        loadingBalance: state.addressesReducer.loadingBalance,
        loadingTransactions: state.addressesReducer.loadingTransactions,
        balanceMessage: state.addressesReducer.balanceMessage,
        transactionsMessage: state.addressesReducer.transactionsMessage,
      }
    },
    {
      getAddressBalance,
      cleanMessages,
      getAddressTransactions
    }
  )(AddressView)
);