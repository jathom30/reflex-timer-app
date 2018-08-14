import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Button from './Button'

export default class ClockScreen extends Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <TouchableOpacity style={styles.fullscreen} onPress={this.props.stopClock}>
          <Text>When the screen turns red, press anywhere</Text>
          <Text>{this.props.time}</Text>
          <Text>{this.props.userTime}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fullscreen: {
    backgroundColor: 'purple',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})