import { IS_MOBILE, IS_NOT_MOBILE } from './responsiveActions';

const initialState = {
  responsive: false
};

function responsiveReducer(state = initialState, action) {
  switch (action.type) {
    case IS_MOBILE:
      if (action.meta.media !== state.responsive) {
        return {
          ...state,
          responsive: action.meta.media
        }
      } else {
        return {
          ...state
        }
      }
    case IS_NOT_MOBILE:
      return {
        ...state,
        responsive: 1200
      }
    default:
      return state;
  }
}

export default responsiveReducer;