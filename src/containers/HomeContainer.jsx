import { connect } from 'react-redux';
import Home from '../components/Home';
import { withRouter } from 'react-router-dom';
import { getBlocksIndex } from '../redux/blocksActions';
import { getTransactionsIndex } from '../redux/transactionsActions';

export default withRouter(
  connect(
    state => state,
    {
      getBlocksIndex,
      getTransactionsIndex
    }
  )(Home)
);
