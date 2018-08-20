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
        backgroundColor: '#d63031',
        justifyContent: 'center',
        alignItems: 'center',
      }
    } else {
      styles.fullscreen = {
        paddingTop: 50,
        backgroundColor: '#dfe6e9',
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
      backgroundColor: '#dfe6e9',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',}
  }

  render() {
    return(
      <View style={{flex: 1, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0,}}>
        <TouchableOpacity style={styles.fullscreen} onPress={this.props.stopClock}>
          <Text style={{textAlign: 'center', fontSize: 20, width: 260}}>When the screen turns red, press anywhere</Text>
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
    backgroundColor: '#dfe6e9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  countdown: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countdownText: {
    fontSize: 300,
    fontWeight: 'bold',
    marginTop: -50,
  }
})
