import {
  NEW_ADDRESS,
  CLEAN_MESSAGES,
  ADDRESS_TRANSACTIONS
} from './addressActions';
import { actions_suffix } from './store';
import { parseHash0x } from '../utils/functions';

const initialState = {
  balances: {},
  transactions: {},
  loadingBalance: false,
  loadingTransactions: false,
  transactionsMessage: null,
  balanceMessage: null,
};

function addressesReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_ADDRESS + actions_suffix.START:
      return {
        ...state,
        loadingBalance: true,
        balanceMessage: null
      }
    case NEW_ADDRESS + actions_suffix.ERROR:
      return {
        ...state,
        loadingBalance: false,
        balanceMessage: action.payload.message
      }
    case NEW_ADDRESS + actions_suffix.SUCCESS:
      let {
        address,
        confirmedBalance,
        pendingBalance,
        safeBalance
      } = action.payload.data;
      return {
        ...state,
        loadingBalance: false,
        balanceMessage: null,
        balances: {
          ...state.balances,
          [parseHash0x(address)]: { confirmedBalance, pendingBalance, safeBalance }
        }
      }
    case ADDRESS_TRANSACTIONS + actions_suffix.START:
      return {
        ...state,
        loadingTransactions: true,
        transactionsMessage: null
      }
    case ADDRESS_TRANSACTIONS + actions_suffix.ERROR:
      return {
        ...state,
        loadingTransactions: false,
        transactionsMessage: action.payload.message
      }
    case ADDRESS_TRANSACTIONS + actions_suffix.SUCCESS:
      let { address: hash, transactions } = action.payload;
      return {
        ...state,
        loadingTransactions: false,
        transactions: {
          ...state.transactions,
          [parseHash0x(hash)]: transactions
        }
      }
    case CLEAN_MESSAGES:
      return {
        ...state,
        balanceMessage: null,
        transactionsMessage: null
      }
    default:
      return state;
  }
}

export default addressesReducer;