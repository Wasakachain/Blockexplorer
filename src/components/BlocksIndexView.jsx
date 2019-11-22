import React from 'react';
import './css/BlocksIndexView.css';
import { changeDocumentTitle } from '../utils/functions';
import { pushHistory } from './Root';
import Loader from './Loader';
import BlocksList from '../containers/BlocksListContainer';
import Pagination from '../containers/PaginationContainer';

export default class BlocksIndexView extends React.Component {
  constructor(props) {
    super(props);
    this.validatePageInUrl();
  }

  validatePageInUrl() {
    const { match: { params: { page } } } = this.props;
    if (/^\d+$/.test(page) || !page) {
      return true;
    } else {
      return pushHistory('/not-found');
    }
  }
  componentDidMount() {
    const { getBlocksPage, match: { params: { page } }, responsive } = this.props;
    let pagination = responsive <= 800 ? 5 : 15;
    getBlocksPage(page ? page : 1, pagination);
    changeDocumentTitle('WasakaChain', true)
  }

  componentDidUpdate({ match: { params: { page } }, responsive }) {
    if (this.props.match.params.page !== page && this.validatePageInUrl()) {
      const { getBlocksPage } = this.props;
      let pagination = this.props.responsive <= 800 ? 5 : 15;
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