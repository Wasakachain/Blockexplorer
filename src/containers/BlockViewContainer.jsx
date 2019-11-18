import { connect } from 'react-redux';
import BlockView from '../components/BlockView';
import { withRouter } from 'react-router-dom';
import {
  getBlockByIndex,
  cleanReducerMessage
} from '../redux/blocksActions';

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
      cleanReducerMessage
    }
  )(BlockView)
);