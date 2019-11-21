import React from 'react';
import './css/AddressView.css';
import Loader from './Loader';
import AddressBalances from '../containers/AddressBalancesContainer';
import TransactionsList from '../containers/TransactionsListContainer';
import { changeDocumentTitle, parseHash0x, parseHashToShow } from '../utils/functions';

export default class AddressView extends React.Component {
  state = {
    showTransactions: false
  };
  parsedAddress = parseHash0x(this.props.match.params.address);
  addressBalance = this.props.balances[this.parsedAddress];
  addressTransactions = this.props.transactions[this.parsedAddress];
  addressChanged = false;

  componentDidMount() {
    changeDocumentTitle(`Show Address`);
    this.searchAddressBalance();
    const { getAddressBalance } = this.props;
    if (!this.addressBalance) {
      return getAddressBalance(this.parsedAddress);
    }
  }

  componentWillUnmount() {
    const { cleanMessages, balanceMessage, transactionsMessage } = this.props;
    if (balanceMessage || transactionsMessage) {
      cleanMessages();
    }
  }

  shouldComponentUpdate({ balances, transactions, match: { params: { address } } }) {
    if (this.parsedAddress !== parseHash0x(address)) {
      this.parsedAddress = parseHash0x(address);
      this.addressChanged = true
    }
    this.addressBalance = balances[this.parsedAddress];
    this.addressTransactions = transactions[this.parsedAddress];
    return true;
  }

  componentDidUpdate({ transactions: oldTransactions }, { showTransactions: wasShowingTransactions }) {
    if (this.addressChanged) {
      this.addressChanged = false;
      this.searchAddressBalance();
      if (wasShowingTransactions) {
        this.setState({ showTransactions: false });
      }
    } else {
      if (!wasShowingTransactions && !oldTransactions[this.parsedAddress] && this.addressTransactions) {
        this.setState({ showTransactions: true });
      }
    }
  }

  searchAddressBalance() {
    const { getAddressBalance } = this.props;
    if (!this.addressBalance) {
      return getAddressBalance(this.parsedAddress);
    }
  }

  requestTransactions = () => {
    const { getAddressTransactions, loadingTransactions } = this.props;
    if (!this.addressTransactions && !loadingTransactions) {
      getAddressTransactions(this.parsedAddress);
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
      loadingTransactions,
    } = this.props;
    const { showTransactions } = this.state;
    return (
      <div className='address-view-wrapper max-width full-width flex wrap'>
        <h1 className='address-title full-width main-color'>Address</h1>
        <h1 className='address full-width five-color'>{parseHashToShow(this.parsedAddress)}</h1>
        {
          loadingBalance ? <Loader /> : (
            <div className='address-info-panel-container full-width'>
              {
                balanceMessage || !this.addressBalance ? (
                  <div className='error-message-container'>
                    <p className='full-width five-color'>{balanceMessage ? balanceMessage : 'Server Error'}</p>
                  </div>
                ) : (
                    <AddressBalances address={this.parsedAddress} />
                  )
              }
            </div>
          )
        }
        {
          !loadingBalance && !showTransactions && !balanceMessage ? (
            <p className='show-transactions main-color full-width' onClick={this.requestTransactions}>View Transactions</p>
          ) : loadingTransactions ? <loader />
              : transactionsMessage || !this.addressTransactions ? (
                <div className='error-message-container'>
                  <p className='full-width five-color'>{transactionsMessage ? transactionsMessage : 'Server Error When Request Transactions'}</p>
                </div>
              ) : (
                  <div className='address-info-panel-container transactions-panel full-width'>
                    <TransactionsList
                      reducer='addressesReducer'
                      reducerKey='transactions'
                      identificator={this.parsedAddress}
                    />
                  </div>
                )
        }
      </div>
    )
  }
}
