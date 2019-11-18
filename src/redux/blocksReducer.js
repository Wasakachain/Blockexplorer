import {
  NEW_BLOCK,
  GET_BLOCKS,
  // GET_BLOCKS_PAGE,
  GET_LAST_BLOCK,
  CLEAN_MESSAGE,
} from './blocksActions';
import { actions_suffix } from './store';

const initialState = {
  blocksList: {},
  pagination: {},
  lastBlock: {},
  loading: false,
  message: null
};

function blocksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOCKS + actions_suffix.START:
      return {
        ...state,
        loading: true
      }
    case GET_BLOCKS + actions_suffix.SUCCESS:
      let newBlocks = {};
      action.payload.blocks.forEach(block => {
        return newBlocks[block.index] = block;
      })
      return {
        ...state,
        loading: false,
        blocksList: {
          ...state.blocksList,
          ...newBlocks
        },
        pagination: {
          current: action.payload.currentPage,
          next: action.payload.nextPage,
          last: action.payload.lastPage,
          total: action.payload.totalBlocks
        }
      }
    case GET_LAST_BLOCK + actions_suffix.START:
      return {
        ...state,
        loading: true
      }
    case GET_LAST_BLOCK + actions_suffix.SUCCESS:
      return {
        ...state,
        loading: false,
        lastBlock: {
          ...action.payload,
          transactionsCount: action.payload.transactions.length
        }
      }
    case NEW_BLOCK + actions_suffix.START:
      console.log('start');
      return {
        ...state,
        loading: true,
        message: null
      }
    case NEW_BLOCK + actions_suffix.ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload.message
      }
    case NEW_BLOCK + actions_suffix.SUCCESS:
      return {
        ...state,
        loading: false,
        blocksList: {
          ...state.blocksList,
          [action.payload.index]: { ...action.payload }
        }
      }
    case CLEAN_MESSAGE:
      return {
        ...state,
        message: null
      }
    default:
      return state;
  }
}

export default blocksReducer;