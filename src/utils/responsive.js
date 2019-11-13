import { setAppBreakpoint, setAppDesktop } from '../redux/responsiveActions';

// MediaQuery List
const AppBreakpoint_500 = window.matchMedia('(max-width:500px)');
const AppBreakpoint_800 = window.matchMedia('(max-width:800px)');
const AppBreakpoint_1280 = window.matchMedia('(min-width:1280px)');

export const activeResponsiveSizeListeners = dispatch => {
  AppBreakpoint_500.addListener(() => breakpointListener(dispatch));
  AppBreakpoint_800.addListener(() => breakpointListener(dispatch));
  AppBreakpoint_1280.addListener(() => breakpointListener(dispatch));
  // activate listener
  breakpointListener(dispatch);
}

// trigger action for each breakpoint
const breakpointListener = (dispatch) => {
  if (AppBreakpoint_500.matches) {
    dispatch(setAppBreakpoint(500));
    return;
  }
  if (AppBreakpoint_800.matches) {
    dispatch(setAppBreakpoint(800));
    return;
  }
  if (AppBreakpoint_1280.matches) {
    dispatch(setAppBreakpoint(1200));
    return;
  }
  else {
    dispatch(setAppDesktop());
    return;
  }
}
