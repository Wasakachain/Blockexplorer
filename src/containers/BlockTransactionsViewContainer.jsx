import { connect } from 'react-redux';
import BlockTransactionsView from '../components/BlockTransactionsView';
import { withRouter } from 'react-router-dom';
import { getBlockByIndex } from '../redux/blocksActions';

export default withRouter(
  connect(
    state => {
      return {
        blocks: state.blocksReducer.blocksList,
        loading: state.blocksReducer.loading,
        message: state.blocksReducer.message,
      }
    },
    {
      getBlockByIndex,
    }
  )(BlockTransactionsView)
);