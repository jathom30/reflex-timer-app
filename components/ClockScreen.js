import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class ClockScreen extends Component {
  componentDidUpdate() {
    // update styles based on countdown timer
    if (this.props.countdownTime === 0 && this.props.time >= this.props.randomNumber) {
      clearInterval(this.timer)
      styles.fullscreen = {
        paddingTop: 50,
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }
    } else {
      styles.fullscreen = {
        paddingTop: 50,
        backgroundColor: '#f9fbff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
    }
  }
  componentWillUnmount() {
    // reset styles on exit
    styles.fullscreen = {
      paddingTop: 50,
      backgroundColor: '#EADFDF',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',}
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <TouchableOpacity style={styles.fullscreen} onPress={this.props.stopClock}>
          <Text>When the screen turns red, tap anywhere</Text>
          <View style={styles.countdown}>
            <Text style={styles.countdownText}>{this.props.countdownTime === 0 ? null : this.props.countdownTime}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fullscreen: {
    paddingTop: 50,
    backgroundColor: '#f9fbff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countdown: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countdownText: {
    fontSize: 150,
  }
})
