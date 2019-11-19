import Ajax from '../utils/Ajax';
// action types
export const NEW_ADDRESS = 'NEW_ADDRESS';
export const ADDRESS_TRANSACTIONS = 'ADDRESS_TRANSACTIONS';
export const CLEAN_MESSAGES = 'CLEAN_MESSAGES';

export const getAddressBalance = (addresss) => {
  return {
    type: NEW_ADDRESS,
    payload: new Ajax(`address/${addresss}/balance`, {}).result()
  }
}

export const getAddressTransactions = (address) => {
  return {
    type: ADDRESS_TRANSACTIONS,
    payload: new Ajax(`address/${address}/transactions`, {}).result()
  }
}

export const cleanMessages = () => {
  return {
    type: CLEAN_MESSAGES
  }
}