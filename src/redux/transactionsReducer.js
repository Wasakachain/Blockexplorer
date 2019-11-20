import {
  GET_TRANSACTIONS_INDEX,
  // GET_TRANSACTIONS_PAGE,
  GET_LAST_TRANSACTION,
  NEW_TRANSACTION,
  CLEAN_MESSAGE,
  GET_CONFIRMED_TRANSACTIONS_PAGE,
  GET_PENDING_TRANSACTIONS_PAGE
} from './transactionsActions';
import { actions_suffix } from './store';
import { parseHash0x } from '../utils/functions';

const initialState = {
  confirmedTransactionsList: {},
  pendingTransactionsList: {},
  confirmedPagination: {},
  pendingPagination: {},
  lastTransaction: {},
  loading: false,
  message: null,
};

function transactionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTIONS_INDEX + actions_suffix.START:
      return {
        ...state,
        loading: true
      }
    case GET_TRANSACTIONS_INDEX + actions_suffix.SUCCESS:
      let lastDataHash = parseHash0x(Object.keys(action.payload.confirmed.transactions)[0]);
      return {
        ...state,
        loading: false,
        confirmedTransactionsList: action.payload.confirmed.transactions,
        pendingTransactionsList: action.payload.pending.transactions,
        lastTransactionHash: lastDataHash
      }
    case GET_PENDING_TRANSACTIONS_PAGE + actions_suffix.START:
      return {
        ...state,
        loading: true
      }
    case GET_PENDING_TRANSACTIONS_PAGE + actions_suffix.SUCCESS:
      return {
        ...state,
        loading: false,
        pendingTransactionsList: action.payload.transactions,
        pendingPagination: {
          current: action.payload.currentPage,
          last: action.payload.lastPage,
          next: action.payload.nextPage
        }
      }
    case GET_CONFIRMED_TRANSACTIONS_PAGE + actions_suffix.START:
      return {
        ...state,
        loading: true
      }
    case GET_CONFIRMED_TRANSACTIONS_PAGE + actions_suffix.SUCCESS:
      return {
        ...state,
        loading: false,
        confirmedTransactionsList: action.payload.transactions,
        confirmedPagination: {
          current: action.payload.currentPage,
          last: action.payload.lastPage,
          next: action.payload.nextPage
        }
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
        loading: true,
        message: null
      }
    case NEW_TRANSACTION + actions_suffix.ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload.message
      }
    case NEW_TRANSACTION + actions_suffix.SUCCESS:
      let listToStore = action.payload.minedInBlockIndex ? 'confirmedTransactionsList' : 'pendingTransactionsList'
      return {
        ...state,
        loading: false,
        message: null,
        [listToStore]: {
          ...state[listToStore],
          [parseHash0x(action.payload.transaction.transactionDataHash)]: action.payload.transaction
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