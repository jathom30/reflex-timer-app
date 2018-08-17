import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

export default class Test extends Component {
  render() {
    return(
      <View style={styles.test}>
        <Text>Time: {this.props.time}</Text>
        <Text>User Time: {this.props.userTime}</Text>
        <Text>Random number: {this.props.randomNumber}</Text>
        <Text>countdown Time: {this.props.countdownTime}</Text>
        <Text>Delta: {this.props.timeDelta}</Text>
        <Text>Delta Low: {this.props.reflexLow}</Text>
        <Text>Delta High: {this.props.reflexHigh}</Text>
        <Text>Delta High: {this.props.reflexHigh}</Text>
        <Text>Delta Average: {this.props.reflexAverage}</Text>
        <Text>Attempts: {this.props.reflexAttempts}</Text>
        <Text>Early Attempts: {this.props.earlyAttempts}</Text>
        <Text>Start? {this.props.start ? 'START' : 'FALSE'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  test: {
    backgroundColor: 'white',
    marginBottom: 50,
    flex: 1,
    alignItems: 'center',
  }
})