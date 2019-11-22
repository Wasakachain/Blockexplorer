import { connect } from 'react-redux';
import HomeResumeBlock from '../components/HomeResumeBlock';
import { withRouter } from 'react-router-dom';
import { getLastBlock } from '../redux/blocksActions';
import { getLastTransaction } from '../redux/transactionsActions';

export default withRouter(
  connect(
    (state, { reducer, reducerKey }) => {
      return {
        data: state[reducer][reducerKey],
        objectIdentificator: reducer === 'blocksReducer' ? parseInt(state[reducer].pagination.total) - 1 : state[reducer].lastTransactionHash,
        loading: state[reducer].loading
      }
    },
    {
      getLastBlock,
      getLastTransaction
    }
  )(HomeResumeBlock)
);
