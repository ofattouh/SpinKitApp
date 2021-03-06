/**
 * SpinKitApp React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Spinner from 'react-native-spinkit';
import randomColor from 'randomcolor';

const types = [
  'Plane',
  'Bounce',
  'Wave',
  'WanderingCubes',
  'Pulse',
  'ChasingDots',
  'ThreeBounce',
  'Circle',
  '9CubeGrid',
  'FadingCircleAlt',
  'FadingCircle',
  'CircleFlip',
  'WordPress',
  'Arc',
  'ArcAlt'
];

export default class App extends Component {
  state = {
    isVisible: true,
    typeIndex: 0,
    type: types[0],
    color: randomColor()
  }

  changeSpinner = () => {
    const { typeIndex } = this.state;
    let nextType = typeIndex === types.length - 1 ? 0 : typeIndex + 1;

    this.setState({
      color: randomColor(),
      typeIndex: nextType,
      type: types[nextType]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.changeSpinner}>
          <Spinner isVisible={this.state.isVisible} size={120} type={this.state.type} color={this.state.color} />
        </TouchableOpacity>

        <Text style={styles.text}>{this.state.type}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    paddingTop: 40,
    fontSize: 25
  }
});

// npx react-native init MyApp
// npx react-native start --verbose --port=8088
// npm install react-native-spinkit@latest --save
// npm install randomcolor --save
// react-native run-ios --simulator="iPhone X"
// react-native run-ios --device="iPhone X"
