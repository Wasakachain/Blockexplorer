import React, { Fragment } from 'react';
import searchIcon from '../assets/icons/main_search.png';
import {
  validateTransaction,
  validateAddress
} from '../utils/functions';
import { pushHistory } from './Root';

export default class HomeSearchBox extends React.Component {
  state = {
    error: false,
    message: null
  }
  inputVal = '';

  getInputValue = ({ target: { value } }) => {
    this.inputVal = value;
    if (this.state.error) {
      this.setState({ error: false, message: null });
    }
  }

  validateInputBeforeSearch = () => {
    this.inputVal = this.inputVal.replace(' ', '');
    if (validateTransaction(this.inputVal)) {
      return pushHistory(`/transaction/${this.inputVal}`)
    }
    if (validateAddress(this.inputVal)) {
      return pushHistory(`/address/${this.inputVal}`)
    }
    if (/^\d+$/.test(this.inputVal)) {
      return pushHistory(`/block/${this.inputVal}`)
    }
    this.setState({ error: true, message: 'Invalid Address, Transaction Hash or Block Index' });
  }

  handleEnter = ({ keyCode }) => {
    if (keyCode === 13) { // enter
      return this.validateInputBeforeSearch()
    }
  }

  render() {
    const { message, error } = this.state;
    return (
      <Fragment>
        <div className={`home-input-search-box-container flex-center ${error ? 'error-val' : 'normal'}`}>
          <img src={searchIcon} className='search-icon' alt='search' onClick={this.validateInputBeforeSearch} />
          <input
            placeholder='Search for Address, Transaction Hash or Block Index'
            className='search-box-input'
            type="text"
            onChange={this.getInputValue}
            onKeyDown={this.handleEnter}
          />
        </div>
        {
          error && (
            <p className='search-panel-error-input-message full-width five-color'>{message}</p>
          )
        }
      </Fragment>
    )
  }
}
