import Ajax from '../utils/Ajax';
// action types
export const NEW_BLOCK = 'NEW_BLOCK';
export const GET_BLOCKS = 'GET_BLOCKS';
export const GET_LAST_BLOCK = 'GET_LAST_BLOCK';
export const GET_BLOCKS_PAGE = 'GET_BLOCKS_PAGE';
export const CLEAN_MESSAGE = 'CLEAN_MESSAGE';

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

export const getLastBlock = (index) => {
  return {
    type: GET_LAST_BLOCK,
    payload: new Ajax(`blocks/${index}`, {}).result()
  }
}

export const getBlockByIndex = (index) => {
  return {
    type: NEW_BLOCK,
    payload: new Ajax(`blocks/${index}`, {}).result()
  }
}

export const cleanReducerMessage = () => {
  return {
    type: CLEAN_MESSAGE
  }
}

export const getBlocksPage = (pageNumber) => {
  return {
    type: GET_BLOCKS_PAGE,
    payload: new Ajax('blocks', {
      params: {
        paginate: 15,
        current_page: pageNumber
      }
    }).result()
  }
}
