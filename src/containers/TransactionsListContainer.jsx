import { connect } from 'react-redux';
import TransactionsList from '../components/TransactionsList';

export default connect(
  (state, { reducer, reducerKey, identificator }) => {
    if (reducer) {
      return {
        data: state[reducer][reducerKey][identificator]
      }
    }
    else return {};
  }
)(TransactionsList);
