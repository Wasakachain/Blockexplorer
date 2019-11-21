import React, { lazy } from 'react';
const Home = lazy(() => import('../containers/HomeContainer'));
const BlockView = lazy(() => import('../containers/BlockViewContainer'));
const TransactionView = lazy(() => import('../containers/TransactionViewContainer'));
const BlockTransactionsView = lazy(() => import('../containers/BlockTransactionsViewContainer'));
const AddressView = lazy(() => import('../containers/AddressViewContainer'));
const TransactionsIndexView = lazy(() => import('../containers/TransactionsIndexViewContainer'));
const BlocksIndexView = lazy(() => import('../containers/BlocksIndexViewContainer'));

export const routesList = [
  {
    exact: true,
    path: '/',
    key: 'home',
    component: Home
  },
  {
    path: ['/confirmed-transactions', '/confirmed-transactions/:page'],
    exact: true,
    key: 'confirmed-transactions',
    render: () => <TransactionsIndexView confirmedTransactions />
  },
  {
    path: ['/pending-transactions', '/pending-transactions/:page'],
    exact: true,
    key: 'pending-transactions',
    render: () => <TransactionsIndexView pendingdTransactions />
  },
  {
    path: '/transaction/:hash',
    exact: true,
    key: 'transaction',
    component: TransactionView
  },
  {
    path: ['/blocks', '/blocks/:page'],
    exact: true,
    key: 'home',
    render: () => <BlocksIndexView />
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