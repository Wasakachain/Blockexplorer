import blockIcon from '../assets/icons/cube.png';
import transactionIcon from '../assets/icons/buy.png';
import miningIcon from '../assets/icons/mining.png';

export const blocksTitles = [
  {
    title: 'Latest Block',
    secundaryTitle: 'Transactions',
    icon: blockIcon
  },
  {
    title: 'Latest Transaction',
    secundaryTitle: null,
    icon: transactionIcon
  },
  {
    title: 'Difficulty',
    secundaryTitle: 'Hash Rate',
    icon: miningIcon
  }
]