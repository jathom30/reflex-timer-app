import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Button from './Button'

export default class StartScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.mainHeader}>Test your reflexes</Text>
          <View>
            <Text>Set your random time ceiling</Text>
            // TODO: create active class for button
            <Button title="5 seconds" btnStyle={!this.props.activeClass ? button.seconds : [button.seconds, button.active]} activatePress={this.props.fiveSec} />
            <Button title="10 seconds" btnStyle={button.seconds} activatePress={this.props.tenSec} />
            <Button title="15 seconds" btnStyle={button.seconds} activatePress={this.props.fifteenSec} />
          </View>

          <Text>Delta: {this.props.timeDelta}</Text>

          <Button title="Start" btnStyle={button.main} activatePress={this.props.startClock} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  mainHeader: {
    fontSize: 40,
    textAlign: 'center'
  }
});

const button = StyleSheet.create({
  main: {
    backgroundColor: 'lightgreen',
    padding: 10,
    fontSize: 30,
    width: 300,
    textAlign: 'center',
  },
  seconds: {
    backgroundColor: 'lightblue',
    padding: 20,
    margin: 5,
  },
  active: {
    backgroundColor: 'blue'
  }
})