import { connect } from 'react-redux';
import BlocksList from '../components/BlocksList';

export default connect(
  (state) => {
    return {
      data: state.blocksReducer.blocksList
    }
  }
)(BlocksList);
