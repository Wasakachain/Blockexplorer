import React from 'react';
import searchIcon from '../assets/icons/search.png';
import {
  validateBlockDataHash,
  validateAddress
} from '../utils/functions';
import { pushHistory } from './Root';

export default class PanelSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      message: null
    }
    this.inputVal = '';
    this.getInputValue = this.getInputValue.bind(this);
    this.validateInputBeforeSearch = this.validateInputBeforeSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  getInputValue({ target: { value: value } }) {
    this.inputVal = value;
    if (this.state.error) {
      this.setState({ error: false, message: null });
    }
  }

  validateInputBeforeSearch() {
    const { type } = this.props;
    if (validateBlockDataHash(this.inputVal) || validateAddress(this.inputVal)) {
      return pushHistory(`/${type}/${this.inputVal}`)
    }
    this.setState({ error: true, message: `Invalid ${type}` });
  }

  handleEnter({ keyCode }) {
    if (keyCode === 13) { // enter
      return this.validateInputBeforeSearch()
    }
  }

  render() {
    const { message, error } = this.state;
    return (
      <div className={`panel-search-container ${error ? 'error-val' : 'normal'} flex-between wrap`}>
        <img src={searchIcon} className='search-icon' alt='search' onClick={this.validateInputBeforeSearch} />
        <input
          className='search-box-input main-color'
          type="text"
          onChange={this.getInputValue}
          onKeyDown={this.handleEnter}
        />
        {
          error && (
            <p className='error-input-message full-width'>{message}</p>
          )
        }
      </div>
    )
  }
}