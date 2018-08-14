import React, { Component } from 'react'
import { StyleSheet, Text, View } from "react-native";

import Button from "./Button";

export default class Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeader}>{this.props.mainMessage}</Text>

        <View>
          <Button title="5 sec" btnStyle={button.seconds} activatePress={this.props.activatePress} />
          <Button title="10 sec" btnStyle={button.seconds} activatePress={this.props.activatePress} />
          <Button title="15 sec" btnStyle={button.seconds} activatePress={this.props.activatePress} />
        </View>

        <Text>{this.props.maxRandom}</Text>

        <Button title="Start" btnStyle={button.main} activatePress={this.props.activatePress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mainHeader: {
    fontSize: 40,
  }
})

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
  }
})