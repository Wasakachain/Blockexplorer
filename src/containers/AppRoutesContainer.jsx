import { connect } from 'react-redux';
import AppRoutes from '../routes/AppRoutes';
import { withRouter } from 'react-router-dom';

export default withRouter(
    connect(
        state => state
    )(AppRoutes)
);
