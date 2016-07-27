import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    margin: 3
  }
});

class Counter extends Component {
  render() {
    let { count, increment, decrement} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{count}</Text>
        <TouchableOpacity style={styles.button}
          onPress={increment}><Text>Up</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={decrement}>
          <Text>Down</Text></TouchableOpacity>
      </View>
    );
  }
}

export default Counter;