import Ajax from '../utils/Ajax';
// action types
export const NEW_TRANSACTION = 'NEW_TRANSACTION';
export const CLEAN_MESSAGE = 'CLEAN_MESSAGE';
export const GET_TRANSACTIONS_INDEX = 'GET_TRANSACTIONS_INDEX';
export const GET_CONFIRMED_TRANSACTIONS_PAGE = 'GET_CONFIRMED_TRANSACTIONS_PAGE';
export const GET_PENDING_TRANSACTIONS_PAGE = 'GET_PENDING_TRANSACTIONS_PAGE';
export const GET_LAST_TRANSACTION = 'GET_LAST_TRANSACTION';

// actions creators
export const getTransactionsIndex = () => {
  return {
    type: GET_TRANSACTIONS_INDEX,
    payload: new Ajax('transactions', {
      params: {
        responseFormat: true,
        paginate: 21
      }
    }).result()
  }
}

export const getLastTransaction = (hash) => {
  return {
    type: GET_LAST_TRANSACTION,
    payload: new Ajax(`transactions/${hash}`, {
      params: {
        responseFormat: true
      }
    }).result()
  }
}

export const cleanReducerMessage = () => {
  return {
    type: CLEAN_MESSAGE
  }
}

export const getTransactionByHash = (hash) => {
  return {
    type: NEW_TRANSACTION,
    payload: new Ajax(`transactions/${hash}`, {
      params: {
        responseFormat: true
      }
    }).result()
  }
}

export const getTransactionsPage = (status, current_page = 1, paginate = 10) => {
  return {
    type: status === 'confirmed' ? GET_CONFIRMED_TRANSACTIONS_PAGE : GET_PENDING_TRANSACTIONS_PAGE,
    payload: new Ajax(`transactions/${status}`, {
      params: {
        paginate,
        current_page
      }
    }).result()
  }
}
