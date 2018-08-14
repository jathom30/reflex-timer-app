import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Button from './components/Button'

import Screen from './components/Screen'
import StartScreen from './components/StartScreen'
import ClockScreen from './components/ClockScreen'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start: false,
      maxRandom: 15000,
      randomNumber: 0,
      time: 0,
      internalTime: 0,
      userTime: 0,
      timeDelta: 0,
      randomReached: false,
      btnDisabled: true,
      activeClass: false,
    }
    this.startClock = this.startClock.bind(this)
    this.stopClock = this.stopClock.bind(this)

    // random number functions
    this.fiveSec = this.fiveSec.bind(this)
    this.tenSec = this.tenSec.bind(this)
    this.fifteenSec = this.fifteenSec.bind(this)
    this.randomNumber = this.randomNumber.bind(this)
  }

  // start stopwatches(user and master)
  startClock() {
    this.setState({
      start: true,
      time: this.state.time,
      internalTime: Date.now() - this.state.time,
    })
    // sets random number for user to match
    this.randomNumber()

    // start timers
    this.timer = setInterval(() => this.setState({time: Date.now() - this.state.internalTime}), 1)
    this.userTimer = setInterval(() => this.setState({userTime: Date.now() - this.state.internalTime}), 1)
  }

  // stop user stopwatch
  stopClock() {
    // only when time is less than user time (timer has stopped) can button press work
    if (this.state.time < this.state.userTime) {
      // stop timers
      clearInterval(this.timer)
      clearInterval(this.userTimer)
  
      // find delta and set
      let delta = this.state.userTime - this.state.time
      this.setState({
        timeDelta: delta,
        start: false,
        time: 0,
        userTime: 0,
      })
    }
  }

  // random number functions
  fiveSec() {
    this.setState({
      maxRandom: 5000,
      activeClass: true,
    })
  }
  tenSec() {
    this.setState({
      maxRandom: 10000,
    })
  }
  fifteenSec() {
    this.setState({
      maxRandom: 15000,
    })
  }
  randomNumber() {
    this.setState({
      randomNumber: 1 + (Math.floor(Math.random() * this.state.maxRandom))
    })
  }

  componentDidUpdate() {
    if (this.state.time >= this.state.randomNumber) {
      clearInterval(this.timer)
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer)
    clearInterval(this.userTimer)
  }

  
  render() {
    return (
      <View style={styles.container}>

        {this.state.start ? 
          <ClockScreen 
            stopClock={this.stopClock}
            time={this.state.time}
            userTime={this.state.userTime}
            btnDisabled={this.state.btnDisabled} /> 
          : 
          <StartScreen 
            fiveSec={this.fiveSec}
            activeClass={this.state.activeClass}
            tenSec={this.tenSec}
            fifteenSec={this.fifteenSec}
            maxRandom={this.state.maxRandom}
            timeDelta={this.state.timeDelta}
            startClock={this.startClock} /> }

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  mainHeader: {
    fontSize: 40,
  }
});