import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Button from './Button'

export default class ClockScreen extends Component {
  componentDidUpdate() {
    if (this.props.time >= this.props.randomNumber) {
      clearInterval(this.timer)
      styles.fullscreen = {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }
    } else {
      styles.fullscreen = {
        backgroundColor: '#EADFDF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
    }
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <TouchableOpacity style={styles.fullscreen} onPress={this.props.stopClock}>
          <Text>When the screen turns red, press anywhere</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fullscreen: {
    backgroundColor: '#EADFDF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
