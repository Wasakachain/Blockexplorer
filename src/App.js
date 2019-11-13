import React from 'react';
import { localNodeRoute, productionNodeRoute, appEnv } from './configs/env';
import { activeResponsiveSizeListeners } from './utils/responsive';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouterContainer from './containers/AppRoutesContainer'
import { Provider } from 'react-redux';
import initiateStore from './redux/store';
import Ajax from './utils/Ajax';

Ajax.baseUrl = appEnv === 'dev' ? localNodeRoute : productionNodeRoute;
// initializate the store creation
const store = initiateStore();
export const dispatch = store.dispatch;
// activate windows matchMedia
activeResponsiveSizeListeners(dispatch);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRouterContainer/>
      </Router>
    </Provider>
  );
}

export default App;
