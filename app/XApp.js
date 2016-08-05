import React, {Component} from 'react';
import { View, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import Counter from './components/Counter';
import { bindActionCreators } from 'redux';

import * as counterActions from './actions/counterActions';

import { connect} from 'react-redux';

class XApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    }
  }

  getColor(tabName) {
    const selectedColor = 'blue';
    const normalColor = 'green';
    return this.state.selectedTab === tabName ? selectedColor : normalColor;
  }



  render() {
    const { state, actions } = this.props;
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Icon name="rocket" size={30} color={this.getColor('home')} />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' }) }>
          <Text>Home</Text>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'settings'}
          title="Profile"
          renderIcon={() => <Icon name="cog" size={30} color={this.getColor('settings')} />}

          onPress={() => this.setState({ selectedTab: 'settings' }) }>
          	<Counter count={state.count} {...actions} />
        </TabNavigator.Item>
      </TabNavigator>
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


export default connect(mapStateToProps, mapDispatchToProps)(XApp);
