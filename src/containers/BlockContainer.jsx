import { connect } from 'react-redux';
import Block from '../components/Block';

export default connect(
  (state, ownProps) => {
    return {
      data: state.blocksReducer.blocksList[ownProps.blockIndex],
    }
  }
)(Block);