import {
  GET_CONFIRMED_TRANSACTIONS,
  // GET_TRANSACTIONS_PAGE,
  GET_LAST_TRANSACTION,
  NEW_TRANSACTION,
  CLEAN_MESSAGE,
} from './transactionsActions';
import { actions_suffix } from './store';

const initialState = {
  confirmedtransactionslist: {},
  pendingTransactionsList: {},
  confirmedPagination: {},
  pendingPagination: {},
  lastTransaction: {},
  loading: false,
  message: null,
};

function transactionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONFIRMED_TRANSACTIONS + actions_suffix.START:
      return {
        ...state,
        loading: true
      }
    case GET_CONFIRMED_TRANSACTIONS + actions_suffix.SUCCESS:
      let lastDataHash = Object.keys(action.payload.transactions)[Object.keys(action.payload.transactions).length - 1];
      return {
        ...state,
        loading: false,
        confirmedTransactionsList: action.payload.transactions,
        confirmedPagination: {
          current: action.payload.currentPage,
          next: action.payload.nextPage,
          last: action.payload.lastPage,
          total: action.payload.totalBlocks
        },
        lastTransactionHash: action.payload.transactions[lastDataHash].transactionDataHash
      }
    case GET_LAST_TRANSACTION + actions_suffix.START:
      return {
        ...state,
        loading: true
      }
    case GET_LAST_TRANSACTION + actions_suffix.SUCCESS:
      return {
        ...state,
        loading: false,
        lastTransaction: action.payload.transaction,
        lastTransactionHash: action.payload.transaction.transactionDataHash
      }
    case NEW_TRANSACTION + actions_suffix.START:
      return {
        ...state,
        loading: true
      }
    case NEW_TRANSACTION + actions_suffix.START:
      return {
        ...state,
        loading: false,
        message: action.payload.message
      }
    case NEW_TRANSACTION + actions_suffix.SUCCESS:
      return {
        ...state,
        loading: false,
        message: null,
        confirmedTransactionsList: {
          ...state.confirmedTransactionsList,
          [action.payload.transaction.transactionDataHash]: action.payload.transaction
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

export default transactionsReducer;