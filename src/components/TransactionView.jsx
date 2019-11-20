import React from 'react';
import './css/TransactionView.css';
import { changeDocumentTitle, parseHash0x } from '../utils/functions';
import Transaction from '../containers/TransactionContainer';
import Loader from './Loader';

export default class TransactionView extends React.Component {
  parsedHash = parseHash0x(this.props.match.params.hash);
  componentDidMount() {
    changeDocumentTitle(`Transaction ~ ${this.parsedHash}`);
    this.validateAndSearchTransactionHash();
  }

  componentWillUnmount() {
    if (this.props.message) {
      this.props.cleanReducerMessage();
    }
  }

  validateAndSearchTransactionHash() {
    const { transactions, getTransactionByHash } = this.props;
    if (!transactions[this.parsedHash]) {
      getTransactionByHash(this.parsedHash);
    }
  }

  render() {
    const { loading, message, transactions } = this.props;
    return (
      <div className='transaction-view-wrapper max-width full-width flex wrap'>
        <h1 className='transaction-title full-width five-color'>Transaction Details</h1>
        {
          loading || !transactions[this.parsedHash] ? <Loader /> : (
            <div className='transaction-info-panel-container full-width'>
              {
                message ? (
                  <div className='error-message-container'>
                    <p className='full-width five-color'>{message}</p>
                  </div>
                ) : <Transaction hash={this.parsedHash} />
              }
            </div>
          )
        }
      </div>
    )
  }
}
