import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';


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
      earlyAttempts: 0,
      details: false,
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
    this.showDetails = this.showDetails.bind(this)
  }

  // format numbers to decimals
  formatNumbers(number) {
    let fNum, arr
    // if number is 3 digits
    if (number < 1000 && number > 99) {
      fNum = `0.${number}`
      // if number is more than 3 digits
    } else if (number >= 1000) {
      arr = (''+number).split('')
      fNum = arr[0] + '.' + arr[1] + arr[2] + arr[3]
      // if number is 1 digit
    } else if (number < 10) {
      fNum = `0.00${number}`
      // if number is 2 digits
    } else if (number < 100) {
      fNum = `0.0${number}`
    }
    return parseFloat(fNum)
  }

  // start stopwatches(user and master) after countdown is finished
  startClock() {
    // start game-> sends to timer screen
    this.setState({
      start: true,
      details: false,
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
      let delta = this.formatNumbers(this.state.userTime - this.state.time)
      // find delta average and set
      let reflexAverage, reflexLow, reflexHigh
      if (this.state.deltaArray.length === 0) {
        reflexAverage = delta
        reflexHigh = delta
        reflexLow = delta
      } else if (this.state.deltaArray.length > 0) {
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
        reflexAverage: reflexAverage,
        reflexHigh: reflexHigh,
        reflexLow: reflexLow,
        reflexAttempts: this.state.reflexAttempts + 1,
      })
    } else {
      this.setState({
        earlyAttempts: this.state.earlyAttempts + 1,
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
      earlyAttempts: 0,
      details: false,
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

  showDetails() {
    let deltaSum = this.state.deltaArray.reduce((total, delta) => total + delta)
    let deltaAverage = deltaSum / this.state.deltaArray.length
    this.setState({
      details: !this.state.details,
      reflexAverage: deltaAverage.toFixed(3)
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
        <ImageBackground source={require('./assets/background.png')} style={styles.background}>
          {this.state.start ? null : <Image source={require('./assets/reflexing-logo.png')} style={styles.logo} />}

          {
            this.state.start 
            ? 
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
              start={this.state.start}
              details={this.state.details}
              showDetails={this.showDetails}
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
              earlyAttempts={this.state.earlyAttempts}
              deltaArray={this.state.deltaArray}
              showDetails={this.showDetails}
              reset={this.reset} /> 
          }


          {/* // ! Test component !
            <Test 
              time={this.state.time}
              userTime={this.state.userTime}
              randomNumber={this.state.randomNumber}
              countdownTime={this.state.countdownTime}
              delta={this.state.delta}
              reflexLow={this.state.reflexLow}
              reflexHigh={this.state.reflexHigh}
              reflexAverage={this.state.reflexAverage}
              reflexAttempts={this.state.reflexAttempts}
              earlyAttempts={this.state.earlyAttempts}
              start={this.state.start} /> */}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C5CE7',
  },
  logo: {
    height: 74.3,
    width: 203,
    alignSelf: 'center',
    marginBottom: 10,
  },
  background: {
    width: '100%',
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 25,
    paddingTop: 50,
    justifyContent: 'space-between',
  }
});
