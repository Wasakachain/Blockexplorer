import React from 'react';
import './css/BlockView.css';
import { changeDocumentTitle } from '../utils/functions';
import Block from '../containers/BlockContainer';
import Loader from './Loader';

export default class BlockView extends React.Component {
  componentDidMount() {
    const { match: { params: { blockIndex } } } = this.props;
    changeDocumentTitle(`Block ~ ${blockIndex}`);
    this.validateAndSearchBlockIndex();
  }
  componentWillUnmount() {
    if (this.props.message) {
      this.props.cleanReducerMessage();
    }
  }
  validateAndSearchBlockIndex() {
    const { match: { params: { blockIndex } }, blocks, getBlockByIndex } = this.props;
    if (!blocks[blockIndex]) {
      getBlockByIndex(blockIndex);
    }
  }
  render() {
    const { match: { params: { blockIndex } }, loading, message, blocks } = this.props;
    return (
      <div className='block-view-wrapper max-width full-width flex wrap'>
        <h1 className='block-title full-width five-color'>{parseInt(blockIndex) !== 0 ? `Block #${blockIndex}` : 'Genesis Block'}</h1>
        {
          loading ? <Loader /> : (
            <div className='block-info-panel-container full-width'>
              {
                message || !blocks[blockIndex] ? (
                  <div className='error-message-container'>
                    <p className='full-width five-color'>{message ? message : 'Server Error'}</p>
                  </div>
                ) : (
                    <Block blockIndex={blockIndex} />
                  )
              }
            </div>
          )
        }
      </div>
    )
  }
}
