import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import { withRouter } from 'react-router-dom';
// import {paginate}

export default withRouter(
  connect(
    (state, { reducer, paginationKey }) => {
      return {
        paginate: state[reducer][paginationKey]
      }
    }
  )(Pagination)
);
