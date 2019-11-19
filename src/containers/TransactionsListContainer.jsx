import { connect } from 'react-redux';
import TransactionsList from '../components/TransactionsList';

export default connect(
  (state, { reducer, reducerKey, identificator }) => {
    if (reducer) {
      if (identificator !== undefined) {
        return {
          data: state[reducer][reducerKey][identificator]
        }
      }
      return {
        data: state[reducer][reducerKey]
      }
    }
    else return {};
  }
)(TransactionsList);
