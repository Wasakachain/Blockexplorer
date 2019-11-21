import React from 'react';
import './css/Pagination.css';
import { ReactComponent as Arrow } from '../assets/icons/arrow-down.svg';

export default class Pagination extends React.Component {
  current = this.props.paginate.current ? parseInt(this.props.paginate.current) : 1;
  next = this.props.paginate.next;
  last = this.props.paginate.last ? parseInt(this.props.paginate.last) : this.current;
  shouldComponentUpdate({ paginate: { current, next, last } }) {
    if (this.current !== current) {
      this.current = current ? parseInt(current) : 1;
      this.next = next;
      this.last = last ? parseInt(last) : current;
    }
    return true;
  }
  goto = (pageNumber) => {
    let base = this.props.match.path.replace('/:page', '');
    return this.props.history.push(`${base}/${pageNumber}`);
  }
  goFirst = () => {
    if (this.current > 1) this.goto(1);
  }
  goNext = () => {
    if (this.next) this.goto(this.next)
  }
  goBack = () => {
    if (this.current > 1) this.goto(this.current - 1)
  }
  goLast = () => {
    if (this.current < this.last) this.goto(this.last);
  }
  render() {
    return (
      <div className='pagination-container full-width flex-center wrap'>
        <p className={`button prev five-color four-background${this.current > 1 ? ' active' : ' disabled'}`} onClick={this.goFirst}>First</p>
        <div className={`arrow four-background prev${this.current > 1 ? ' active' : ' disabled'}`} onClick={this.goBack}>
          <Arrow className='prev' />
        </div>
        <p className='pages four-background five-color'>{`Page ${this.current} of ${this.last}`}</p>
        <div className={`arrow four-background next${this.current < this.last ? ' active' : ' disabled'}`} onClick={this.goNext}>
          <Arrow className='next' />
        </div>
        <p className={`button next four-background five-color${this.current < this.last ? ' active' : ' disabled'}`} onClick={this.goLast}>Last</p>
      </div>
    )
  }
}
