import { connect } from 'react-redux';
import Block from '../components/Block';

export default connect(
  (state, { blockIndex }) => {
    return {
      data: state.blocksReducer.blocksList.find(({ index }) => index == blockIndex)
    }
  }
)(Block);