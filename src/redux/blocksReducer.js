import {
  NEW_BLOCK,
  GET_BLOCKS,
  GET_BLOCKS_PAGE,
} from './blocksActions';
import {actions_suffix} from './store';

const initialState = {
  blocks: [],
  pagination: {},
  loading: false
};

function responsiveReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOCKS + actions_suffix.START:
      return {
        ...state,
        loading: true
      }
    case GET_BLOCKS + actions_suffix.SUCCESS:
      return {
        ...state,
        loading: false,
        blocks: [
          ...state.blocks,
          ...action.payload.blocks
        ],
        pagination: {
          current: action.payload.currentPage,
          next: action.payload.nextPage,
          last: action.payload.lastPage
        }
      }
    default:
      return state;
  }
}

export default responsiveReducer;