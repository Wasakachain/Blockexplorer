import React from 'react';
import './css/AddressView.css';
import Loader from './Loader';
import AddressBalances from '../containers/AddressBalancesContainer';
import TransactionsList from '../containers/TransactionsListContainer';
import { changeDocumentTitle } from '../utils/functions';

export default class AddressView extends React.Component {
  state = {
    showTransactions: false
  }

  componentDidMount() {
    const { match: { params: { address } }, balances, getAddressBalance } = this.props;
    changeDocumentTitle(`Show Address`);
    if (!balances[address]) {
      return getAddressBalance(address);
    }
  }

  componentWillUnmount() {
    const { cleanMessages, balanceMessage, transactionsMessage } = this.props;
    if (balanceMessage || transactionsMessage) {
      cleanMessages();
    }
  }

  componentDidUpdate({ transactions: oldTransactions }, { showTransactions: wasShowingTransactions }) {
    const { match: { params: { address } }, transactions } = this.props;
    if (!wasShowingTransactions && !oldTransactions[address] && transactions[address]) {
      this.setState({ showTransactions: true });
    }
  }

  requestTransactions = () => {
    const { match: { params: { address } }, transactions, getAddressTransactions, loadingTransactions } = this.props;
    if (!transactions[address] && !loadingTransactions) {
      getAddressTransactions(address);
    }
    else {
      this.setState({ showTransactions: true });
    }
  }

  render() {
    const {
      loadingBalance,
      balanceMessage,
      transactionsMessage,
      match: { params: { address } },
      balances,
      loadingTransactions,
      transactions,
    } = this.props;
    const { showTransactions } = this.state;
    return (
      <div className='address-view-wrapper max-width full-width flex wrap'>
        <h1 className='address-title full-width main-color'>Address</h1>
        <h1 className='address full-width five-color'>{address}</h1>
        {
          loadingBalance ? <Loader /> : (
            <div className='address-info-panel-container full-width'>
              {
                balanceMessage || !balances[address] ? (
                  <div className='error-message-container'>
                    <p className='full-width five-color'>{balanceMessage ? balanceMessage : 'Server Error'}</p>
                  </div>
                ) : (
                    <AddressBalances address={address} />
                  )
              }
            </div>
          )
        }
        {
          !loadingBalance && !showTransactions && !balanceMessage ? (
            <p className='show-transactions main-color full-width' onClick={this.requestTransactions}>View Transactions</p>
          ) : loadingTransactions ? <loader />
              : transactionsMessage || !transactions[address] ? (
                <div className='error-message-container'>
                  <p className='full-width five-color'>{transactionsMessage ? transactionsMessage : 'Server Error When Request Transactions'}</p>
                </div>
              ) : (
                  <div className='address-info-panel-container transactions-panel full-width'>
                    <TransactionsList
                      reducer='addressesReducer'
                      reducerKey='transactions'
                      identificator={address}
                    />
                  </div>
                )
        }
      </div>
    )
  }
}
