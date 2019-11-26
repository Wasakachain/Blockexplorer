import { connect } from 'react-redux';
import TransactionsList from '../components/TransactionsList';

export default connect(
  (state, { reducer, reducerKey, identificator }) => {
    if (reducer) {
      if (identificator !== undefined) {
        if (reducer === 'blocksReducer' && reducerKey === 'blocksList') {
          return {
            data: state[reducer][reducerKey].find(({ index }) => index == identificator),
            responsive: state.responsiveReducer.responsive
          }
        }
        return {
          data: state[reducer][reducerKey][identificator],
          responsive: state.responsiveReducer.responsive
        }
      }
      return {
        data: state[reducer][reducerKey],
        responsive: state.responsiveReducer.responsive
      }
    }
    else return {};
  }
)(TransactionsList);
