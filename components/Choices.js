import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Results from './Results'
import Button from './Button'

export default class Choices extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.subHeader}>Select random max time</Text>
          // TODO: create active class for button
          <Button title="5 seconds" touchableStyle={this.props.maxRandom === 5000 ? [button.seconds, button.active] : button.seconds } btnTextStyle={button.time} activatePress={this.props.fiveSec} />
          <Button title="10 seconds" touchableStyle={this.props.maxRandom === 10000 ? [button.seconds, button.active] : button.seconds } btnTextStyle={button.time} activatePress={this.props.tenSec} />
          <Button title="15 seconds" touchableStyle={this.props.maxRandom === 15000 ? [button.seconds, button.active] : button.seconds } btnTextStyle={button.time} activatePress={this.props.fifteenSec} />
        </View>

        {
          this.props.reflexAttempts > 0 ? 
          <Results 
            timeDelta={this.props.timeDelta}
            reflexLow={this.props.reflexLow}
            reflexHigh={this.props.reflexHigh}
            reflexAverage={this.props.reflexAverage}
            reflexAttempts={this.props.reflexAttempts}
            earlyAttempts={this.props.earlyAttempts}
            reset={this.props.reset} />
          : 
          null 
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    // backgroundColor: 'yellow',
  },
  subHeader: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
})

const button = StyleSheet.create({
  seconds: {
    backgroundColor: '#81ECEC',
    // width: '93.3333%',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    alignSelf: 'stretch',
    // justifyContent: 'stretch',
  },
  active: {
    backgroundColor: '#00CEC9'
  },
  time: {
    textAlign: 'center',
    color: 'white',
    fontSize: 41,
  }
})