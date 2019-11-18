import React from 'react';
import './css/TransactionView.css';
import { changeDocumentTitle } from '../utils/functions';
import Transaction from '../containers/TransactionContainer';
import Loader from './Loader';

export default class TransactionView extends React.Component {
  componentDidMount() {
    const { match: { params: { hash } } } = this.props;
    changeDocumentTitle(`Transaction ~ ${hash}`);
    this.validateAndSearchTransactionHash();
  }
  componentWillUnmount() {
    if (this.props.message) {
      this.props.cleanReducerMessage();
    }
  }
  validateAndSearchTransactionHash() {
    const { match: { params: { hash } }, transactions, getTransactionByHash } = this.props;
    if (!transactions[hash]) {
      getTransactionByHash(hash);
    }
  }
  render() {
    const { match: { params: { hash } }, loading, message } = this.props;
    return (
      <div className='transaction-view-wrapper max-width full-width flex wrap'>
        <h1 className='transaction-title full-width five-color'>Transaction Details</h1>
        {
          loading ? <Loader /> : (
            <div className='transaction-info-panel-container full-width'>
              {
                message ? (
                  <div className='error-message-container'>
                    <p className='full-width five-color'>{message}</p>
                  </div>
                ) : (
                    <Transaction hash={hash} />
                  )
              }
            </div>
          )
        }
      </div>
    )
  }
}
