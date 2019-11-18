import blockIcon from '../assets/icons/cube.png';
import transactionIcon from '../assets/icons/buy.png';
import miningIcon from '../assets/icons/mining.png';

export const blocksTitles = [
  {
    title: 'Latest Block',
    secundaryTitle: 'Transactions',
    reducer: 'blocksReducer',
    reducerKey: 'lastBlock',
    method: 'getLastBlock',
    keyToShow: 'index',
    secundaryKeyToShow: 'transactionsCount',
    label: 'Block N°',
    icon: blockIcon,
    link: '/block/',
  },
  {
    title: 'Latest Transaction',
    reducer: 'transactionsReducer',
    reducerKey: 'lastTransaction',
    method: 'getLastTransaction',
    keyToShow: 'transactionDataHash',
    label: 'Hash',
    icon: transactionIcon,
    link: '/transaction/'
  },
  {
    title: 'Difficulty',
    reducer: 'blocksReducer',
    reducerKey: 'lastBlock',
    keyToShow: 'difficulty',
    icon: miningIcon
  }
]