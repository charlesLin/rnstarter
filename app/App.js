import React, {Component} from 'react';
import CounterApp from './CounterApp';

import { Provider } from 'react-redux';

import configureStore from './stores/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

export default App;