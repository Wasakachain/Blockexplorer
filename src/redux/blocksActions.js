import Ajax from '../utils/Ajax';
// action types
export const NEW_BLOCK = 'NEW_BLOCK';
export const GET_BLOCKS = 'GET_BLOCKS';
export const GET_BLOCKS_PAGE = 'GET_BLOCKS_PAGE';

// actions creators
export const getBlocksIndex = () => { 
  return {
    type: GET_BLOCKS,
    payload: new Ajax('blocks', {
      params: {
        paginate: 21
      }
    }).result()
  }
}

export const getBlocksPage = (pageNumber) => { 
  return {
    type: GET_BLOCKS,
    payload: new Ajax('blocks', {
      params: {
        paginate: 21,
        current_page: pageNumber
      }
    }).result()
  }
}
