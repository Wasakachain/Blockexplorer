import { connect } from 'react-redux';
import Root from '../components/Root';
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
    )(Root)
);
