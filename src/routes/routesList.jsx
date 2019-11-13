import React, { lazy } from 'react';
const Home = lazy(() => import('../components/Home'));

export const routesList =  [
  {
    exact:true,
    path: '/',
    key: 'home',
    component: Home
  },
  {
    path: '/transactions',
    exact:true,
    key: 'home',
    component: Home
  },
  {
    path: '/blocks',
    exact:true,
    key: 'home',
    component: Home
  },
];