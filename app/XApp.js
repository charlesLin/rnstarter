import React, {Component} from 'react';
import { View, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

class XApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab : 'home'
    }
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"

          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' }) }>
          <Text>Home</Text>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"


          onPress={() => this.setState({ selectedTab: 'profile' }) }>
          <Text>Profile</Text>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

export default XApp;