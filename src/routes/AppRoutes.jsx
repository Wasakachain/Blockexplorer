import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from '../containers/RootContainer';
import Loader from '../components/Loader';
import {routesList} from './routesList'

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Root>
        <Suspense fallback={<Loader siteLoader />}>
          <Switch>
            {
              routesList.map(route => {
                return <Route {...route} />;
              })
            }
          </Switch>
        </Suspense>
      </Root>
    );
  }
}
