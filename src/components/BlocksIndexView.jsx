import React from 'react';
import './css/BlocksIndexView.css';
import { changeDocumentTitle } from '../utils/functions';
import Loader from './Loader';
import BlocksList from '../containers/BlocksListContainer';
import Pagination from '../containers/PaginationContainer';

export default class BlocksIndexView extends React.Component {
  componentDidMount() {
    const { getBlocksPage, match: { params: { page } }, responsive } = this.props;
    let pagination = 15;
    if (responsive <= 800)
      pagination = 5
    getBlocksPage(page ? page : 1, pagination);
    changeDocumentTitle('WasakaChain', true)
  }

  componentDidUpdate({ match: { params: { page } }, responsive }) {
    if (this.props.match.params.page !== page) {
      const { getBlocksPage } = this.props;
      let pagination = 15;
      if (this.props.responsive !== responsive && this.props.responsive <= 800)
        pagination = 5
      getBlocksPage(this.props.match.params.page ? this.props.match.params.page : 1, pagination);
    }
  }

  render() {
    const { loading } = this.props;
    return (
      <div className='block-view-wrapper max-width flex wrap'>
        <p className='view-title main-color full-width'>WasakaChain Blocks</p>
        {
          loading ? <Loader /> : (
            <div className='block-index-view-container full-width'>
              <BlocksList />
              <Pagination
                reducer='blocksReducer'
                paginationKey='pagination'
              />
            </div>
          )
        }
      </div>
    )
  }
}