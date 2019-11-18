import Ajax from '../utils/Ajax';
// action types
export const NEW_TRANSACTION = 'NEW_TRANSACTION';
export const CLEAN_MESSAGE = 'CLEAN_MESSAGE';
export const GET_CONFIRMED_TRANSACTIONS = 'GET_CONFIRMED_TRANSACTIONS';
export const GET_TRANSACTIONS_PAGE = 'GET_LAST_TRANSACTION';
export const GET_LAST_TRANSACTION = 'GET_TRANSACTIONS_PAGE';

// actions creators
export const getTransactionsIndex = () => {
  return {
    type: GET_CONFIRMED_TRANSACTIONS,
    payload: new Ajax('transactions/confirmed', {
      params: {
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

export const getTransactionsPage = (pageNumber) => {
  return {
    type: GET_TRANSACTIONS_PAGE,
    payload: new Ajax('transactions', {
      params: {
        paginate: 21,
        current_page: pageNumber
      }
    }).result()
  }
}
