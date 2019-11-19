import { connect } from 'react-redux';
import AddressBalances from '../components/AddressBalances';

export default connect(
  (state, ownProps) => {
    return {
      data: state.addressesReducer.balances[ownProps.address],
    }
  }
)(AddressBalances);