import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BlocksIndexView from '../components/BlocksIndexView';
import { getBlocksPage } from '../redux/blocksActions';

export default withRouter(
  connect(
    (state) => {
      return {
        data: state.blocksReducer.blocksList,
        loading: state.blocksReducer.loading
      }
    }, {
    getBlocksPage
  }
  )(BlocksIndexView)
)
