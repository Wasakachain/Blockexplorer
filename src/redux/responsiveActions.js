// action types
export const IS_MOBILE = 'IS_MOBILE';
export const IS_NOT_MOBILE = 'IS_NOT_MOBILE';

// actions creators
export const setAppBreakpoint = (size) => { 
  return {
    type: IS_MOBILE,
    meta: {
      media: size
    }
  }
}

// actions creators
export const setAppDesktop = () => { 
  return {
    type: IS_NOT_MOBILE
  }
}
