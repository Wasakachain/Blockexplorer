import React from 'react';
import './css/BlockTransactionsView.css'
import { changeDocumentTitle } from '../utils/functions';
import Transactions from '../containers/TransactionsListContainer';
import Loader from './Loader';

export default class BlockTransactionsView extends React.Component {
  componentDidMount() {
    const { match: { params: { blockIndex } } } = this.props;
    changeDocumentTitle(`Block ${blockIndex} ~ Transactions`);
    this.validateAndSearchBlockIndex();
  }

  validateAndSearchBlockIndex() {
    const { match: { params: { blockIndex } }, blocks, getBlockByIndex } = this.props;
    if (!blocks.find(({ index }) => index == blockIndex)) {
      getBlockByIndex(blockIndex);
    }
  }

  render() {
    const { match: { params: { blockIndex } }, loading, message, blocks } = this.props;
    return (
      <div className='block-view-wrapper max-width full-width flex wrap'>
        <h1 className='main-block-title full-width main-color'>Transactions</h1>
        <h1 className='secundary-title full-width five-color'>{parseInt(blockIndex) !== 0 ? `For Block #${blockIndex}` : 'For Genesis Block'}</h1>
        {
          loading || !blocks.find(({ index }) => index == blockIndex) ? <Loader /> : (
            <div className='block-info-panel-container full-width'>
              {
                message ? (
                  <div className='error-message-container'>
                    <p className='full-width five-color'>{message}</p>
                  </div>
                ) : (
                    <Transactions
                      reducer='blocksReducer'
                      reducerKey={'blocksList'}
                      identificator={blockIndex}
                      searchForTransactions
                    />
                  )
              }
            </div>
          )
        }
      </div>
    );
  }
}
