import { connect } from 'react-redux';
import ViewBlock from '../components/ViewBlock';
import { withRouter } from 'react-router-dom';
import { getLastBlock } from '../redux/blocksActions';
import { getLastTransaction } from '../redux/transactionsActions';

export default withRouter(
  connect(
    (state, {reducer,reducerKey}) => {
      return {
        data: state[reducer][reducerKey],
        objectIndentificator: reducer === 'blocksReducer' ? state[reducer].pagination.last : state[reducer].lastTransactionHash
      }
    },
    {
      getLastBlock,
      getLastTransaction
    }
  )(ViewBlock)
);
