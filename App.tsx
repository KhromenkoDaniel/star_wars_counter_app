import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';

import NavigationApp from './src/navigation';

function App(): ReactNode {
  return (
    <Provider store={store}>
      <NavigationApp />
    </Provider>
  );
}

export default App;
