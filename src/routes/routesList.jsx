import { lazy } from 'react';
const Home = lazy(() => import('../components/Home'));
const BlockView = lazy(() => import('../containers/BlockViewContainer'));
const TransactionView = lazy(() => import('../containers/TransactionViewContainer'));
const BlockTransactionsView = lazy(() => import('../containers/BlockTransactionsViewContainer'));
const AddressView = lazy(() => import('../containers/AddressContainerView'));

export const routesList = [
  {
    exact: true,
    path: '/',
    key: 'home',
    component: Home
  },
  {
    path: '/transactions',
    exact: true,
    key: 'home',
    component: Home
  },
  {
    path: '/transaction/:hash',
    exact: true,
    key: 'transaction',
    component: TransactionView
  },
  {
    path: '/blocks',
    exact: true,
    key: 'home',
    component: Home
  },
  {
    path: '/block/transactions/:blockIndex',
    exact: true,
    key: 'BlockTransactionsView',
    component: BlockTransactionsView
  },
  {
    path: '/block/:blockIndex',
    exact: true,
    key: 'BlockView',
    component: BlockView
  },
  {
    path: '/address/:address',
    exact: true,
    key: 'addressView',
    component: AddressView
  },
];