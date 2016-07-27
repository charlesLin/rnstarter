import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';

import Counter from './components/Counter';
import * as counterActions from './actions/counterActions';

import { connect} from 'react-redux';

class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions} = this.props;
    return (
      <Counter count={state.count} {...actions} />
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(counterActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);