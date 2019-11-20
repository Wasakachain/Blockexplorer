import React, { Component } from 'react';
import './css/Root.css';
import Header from './Header';
let push = null;

export const pushHistory = (route, state) => {
  if (push) {
    push(route, state);
  }
}

export default class Root extends Component {
  constructor(props) {
    super(props);
    push = props.history.push;
  }

  componentDidMount() {
    this.props.getBlocksIndex();
    this.props.getTransactionsIndex();
  }

  render() {
    const { children } = this.props;
    return (
      <div className='site-container flex wrap'>
        <Header />
        {children}
      </div>
    );
  }
}