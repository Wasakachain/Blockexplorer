import { connect } from 'react-redux';
import BlockExplorerHomePanel from '../components/BlockExplorerHomePanel';

export default
  connect(
    state => {
      return {
        data: state.blocksReducer.blocksList,
        loading: state.blocksReducer.loading,
      }
    },
  )(BlockExplorerHomePanel);
