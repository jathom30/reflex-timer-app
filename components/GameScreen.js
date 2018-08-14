import React, { Component } from 'react'
import { StyleSheet, Text, View } from "react-native";

import Button from './Button'

export default class GameScreen extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      randomNumber: 10000 ,
      randomMax: 5000,
      timerRunning: false,
      start: 0,
      time: 0,
      userTime: 0,
      timeDelta: 0,
      formattedTime: '0',
      randomReached: false,
    }
    this.startStop = this.startStop.bind(this)
    this.stopUserTimer = this.stopUserTimer.bind(this)
    this.reset = this.reset.bind(this)
    this.randomNumber5 = this.randomNumber5.bind(this)
    this.randomNumber10 = this.randomNumber10.bind(this)
    this.randomNumber15 = this.randomNumber15.bind(this)
  }

  // TODO: if timer meets randomMax, randomReached: true
  // TODO: second timer to not stop until user input hits (reaction timer)

  // Starts both timers, stops only internal timer
  startStop() {
    // if timer is not running, start timer
    if (!this.state.timerRunning) {
      this.setState({
        time: this.state.time,
        start: Date.now() - this.state.time,
        timerRunning: true,
        userTimer: true,
        randomReached: false,
      })
      this.timer = setInterval(() => this.setState({time: Date.now() - this.state.start}), 1)
      this.userTimer = setInterval(() => this.setState({userTime: Date.now() - this.state.start}), 1)
    } else {  // if timer is running, stop timer
      this.setState({
        timerRunning: false,
        randomReached: false,
      })
      clearInterval(this.timer)
      clearInterval(this.userTimer)
    }
  }

  // Stops and resets all timers
  reset() {
    this.setState({
      time: 0,
      userTime: 0,
      timeDelta: 0,
      timerRunning: false,
      randomReached: false,
    })
    clearInterval(this.timer)
    clearInterval(this.userTimer)
    styles.container = {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-around',
    }
  }

  // Stops only user/reflex Timer
  stopUserTimer() {
    // TODO: button deactive until time has stopped so users can't hit early
    clearInterval(this.userTimer)
    let delta = this.state.userTime - this.state.time
    if (delta > 0) {
      this.setState({
        timeDelta: delta,
      })
    } else if (delta === 0) {
      this.setState({
        timeDelta: 'Fucking nailed it'
      })
    }
  }

  formatTime() {
    let formattedTime = this.state.time
    let digits = (''+formattedTime).split('')
    this.setState({
      formattedTime: digits
    })
  }

  randomNumber5() {
    this.setState({
      randomNumber: 1 + (Math.floor(Math.random() * 5000)), 
      randomMax: 5000
    })
  }
  randomNumber10() {
    this.setState({
      randomNumber: 1 + (Math.floor(Math.random() * 10000)),
      randomMax: 10000
    })
  }
  randomNumber15() {
    this.setState({
      randomNumber: 1 + (Math.floor(Math.random() * 15000)),
      randomMax: 15000
    })
  }

  componentDidUpdate() {
    // if time is greater than randomMax, stop time
    if (this.state.time >= this.state.randomNumber) {
      clearInterval(this.timer)
      styles.container = {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-around',
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    clearInterval(this.userTimer)
  }

  render() {
    return (
      <View style={this.state.randomReached ? [styles.container, timerStyles.exceeded] : styles.container }>
        <Text>Set interval length</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%'}}>
          <Button title="5 seconds" btnStyle={this.props.btnStyle} activatePress={this.randomNumber5}/>
          <Button title="10 seconds" btnStyle={this.props.btnStyle} activatePress={this.randomNumber10}/>
          <Button title="15 seconds" btnStyle={this.props.btnStyle} activatePress={this.randomNumber15}/>
        </View>

        <Text>Max: {this.state.randomMax}</Text>
        <Text>Random Number: {this.state.randomNumber}</Text>

        <Text>Elapsed Time: {this.state.time}</Text>
        <Text>Elapsed User Time: {this.state.userTime}</Text>
        <Text>Time Delta: {this.state.timeDelta}</Text>

        <Text>Formatted Time: {this.state.formattedTime}</Text>

        {/* user timer stop button */}
        {this.state.timerRunning ? <Button title="user reflex" btnStyle={this.props.btnStyle} activatePress={this.stopUserTimer} /> : null}

        {/* if time is greater than randomMax, hide start/stop button */}
        {this.state.time >= this.state.randomMax ? null : <Button title={this.state.timerRunning ? 'stop timer' : 'start timer'} btnStyle={this.props.btnStyle} activatePress={this.startStop}/>}
        {/* if timer isn't running or time is zero, hide reset button */}
        {this.state.timerRunning || this.state.time !== 0 ? <Button title='reset' btnStyle={this.props.btnStyle} activatePress={this.reset} /> : null }
        <Button title="back to home screen" btnStyle={this.props.btnStyle} activatePress={this.props.activatePress}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
})

const bkColor = 'red'

const timerStyles = StyleSheet.create({
  exceeded: {
    backgroundColor: 'red'
  }
})