import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Button from './components/Button'

import StartScreen from './components/StartScreen'
import ClockScreen from './components/ClockScreen'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start: false,
      maxRandom: 5000,
      randomNumber: 0,
      time: 0,
      internalTime: 0,
      userTime: 0,
      countdownTime: 3,
      timeDelta: 0,
      deltaArray: [],
      reflexAverage: 0,
      reflexHigh: 0,
      reflexLow: 0,
      reflexAttempts: 0,
    }
    this.startClock = this.startClock.bind(this)
    this.threeSecDelay = this.threeSecDelay.bind(this)
    this.stopClock = this.stopClock.bind(this)
    this.reset = this.reset.bind(this)

    // random number functions
    this.fiveSec = this.fiveSec.bind(this)
    this.tenSec = this.tenSec.bind(this)
    this.fifteenSec = this.fifteenSec.bind(this)
    this.randomNumber = this.randomNumber.bind(this)
  }

  // start stopwatches(user and master) after countdown is finished
  startClock() {
    // start game-> sends to timer screen
    this.setState({
      start: true,
    })
    // countdown timer, starts at 3 and counts down
    this.countdownTimer = setInterval(() => this.setState({countdownTime: this.state.countdownTime - 1}), 1000)
    setTimeout(this.threeSecDelay, 3000)
  }

  threeSecDelay() {
    this.setState({
      time: this.state.time,
      internalTime: Date.now() - this.state.time,
      // countdownTime: 0,
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
    if (this.state.time < this.state.userTime && this.state.time >= 500) {
      // stop timers
      clearInterval(this.timer)
      clearInterval(this.userTimer)
      clearInterval(this.countdownTimer)
  
      // find delta and set
      let delta = this.state.userTime - this.state.time
      // find delta average and set
      let deltaSum, reflexAverage, reflexLow, reflexHigh
      if (this.state.deltaArray.length === 0) {
        reflexAverage = delta
        reflexHigh = delta
        reflexLow = delta
      } else if (this.state.deltaArray.length > 0) {
        deltaSum = this.state.deltaArray.reduce((total, delta) => total + delta)
        reflexAverage = deltaSum / this.state.deltaArray.length
        reflexLow = Math.min(...this.state.deltaArray)
        reflexHigh = Math.max(...this.state.deltaArray)

        // if delta is lower/higher than current state of array
        if (delta > reflexHigh) {
          reflexHigh = delta
        }
        if (delta < reflexLow) {
          reflexLow = delta
        }
      }
      this.setState({
        timeDelta: delta,
        start: false,
        internalTime: 0,
        randomNumber: 0,
        time: 0,
        userTime: 0,
        countdownTime: 3,
        // adds delta to deltaArray
        deltaArray: [...this.state.deltaArray, delta],
        reflexAverage: Math.round(reflexAverage),
        reflexHigh: reflexHigh,
        reflexLow: reflexLow,
        reflexAttempts: this.state.reflexAttempts + 1
      })
    }
  }

  reset() {
    this.setState({
      deltaArray: [],
      reflexAverage: 0,
      reflexHigh: 0,
      reflexLow: 0,
      reflexAttempts: 0,
    })
  }

  // random number functions
  fiveSec() {
    this.setState({
      maxRandom: 5000,
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
      randomNumber: 500 + (Math.floor(Math.random() * this.state.maxRandom))
    })
  }

  componentDidUpdate() {
    if (this.state.time >= this.state.randomNumber) {
      clearInterval(this.timer)
    }
    if (this.state.countdownTime < 1) {
      clearInterval(this.countdownTimer)
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer)
    clearInterval(this.userTimer)
    clearInterval(this.countdownTimer)
  }

  
  render() {
    return (
      <View style={styles.container}>

        {this.state.start ? 
          <ClockScreen 
            stopClock={this.stopClock}
            time={this.state.time}
            userTime={this.state.userTime}
            countdownTime={this.state.countdownTime}
            randomNumber={this.state.randomNumber}
            btnDisabled={this.state.btnDisabled}
            start={this.state.start} /> 
          : 
          <StartScreen 
            fiveSec={this.fiveSec}
            activeClass={this.state.activeClass}
            tenSec={this.tenSec}
            fifteenSec={this.fifteenSec}
            maxRandom={this.state.maxRandom}
            timeDelta={this.state.timeDelta}
            startClock={this.startClock}
            reflexAverage={this.state.reflexAverage}
            reflexLow={this.state.reflexLow}
            reflexHigh={this.state.reflexHigh}
            reflexAttempts={this.state.reflexAttempts}
            reset={this.reset} /> 
        }
        {/*  // ! Test component !
          <View style={styles.test}>
          <Text>Time: {this.state.time}</Text>
          <Text>User Time: {this.state.userTime}</Text>
          <Text>Random number: {this.state.randomNumber}</Text>
          <Text>countdown Time: {this.state.countdownTime}</Text>
          <Text>Delta: {this.state.timeDelta}</Text>
          <Text>Delta Low: {this.state.reflexLow}</Text>
          <Text>Delta High: {this.state.reflexHigh}</Text>
          <Text>Delta High: {this.state.reflexHigh}</Text>
          <Text>Delta Average: {this.state.reflexAverage}</Text>
          <Text>Attempts: {this.state.reflexAttempts}</Text>
          <Text>Start? {this.state.start ? 'START' : 'FALSE'}</Text>
        </View> */}

      </View>
    );
  }
}

// timeDelta: delta,
// internalTime: 0,
// // adds delta to deltaArray
// deltaArray: [...this.state.deltaArray, delta],
// reflexAverage: Math.round(reflexAverage),
// reflexHigh: reflexHigh,
// reflexLow: reflexLow,
// reflexAttempts: this.state.reflexAttempts + 1


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbff',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  mainHeader: {
    fontSize: 40,
  },
  test: {
    backgroundColor: 'white',
    marginBottom: 50,
    flex: 1,
    alignItems: 'center',
  }
});