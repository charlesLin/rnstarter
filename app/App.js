import React, {Component} from 'react';
import XApp from './XApp';

import { Provider } from 'react-redux';

import configureStore from './stores/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <XApp />
      </Provider>
    );
  }
}

export default App;