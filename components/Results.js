import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"


export default class Results extends Component {

  formatNumbers(basicNumber) {
    const number = basicNumber
    let fNumber, arr
    if (number < 1000) {
      fNumber = '0.' + number + ' sec'
    } else if (number >= 1000 && number < 10000) {
      arr = (""+number).split("")
      if (arr.length > 3) {
        fNumber = arr[0] + '.' + arr[1] + arr[2] + arr[3] + ' sec';
      }
    } else {
      fNumber = "Oh boy, try again."
    }
    return (fNumber)
  }

  render() {
    return(
      <View style={styles.results}>

        <Text>Results:</Text>
        <Text style={styles.resultsText}>{ this.props.reflexAttempts <= 1 ? 'Time:' : 'Last time:'} {this.formatNumbers(this.props.timeDelta)}</Text>
        
        {/* after more than one attempts, show fastest and slowest */}
        {
          this.props.reflexAttempts <= 1 
          ? 
          null 
          :
          <Fragment>
            {/* <Text style={styles.resultsText}>Fastest time: {this.formatNumbers(this.props.reflexLow)}</Text>
            <Text style={styles.resultsText}>Slowest time: {this.formatNumbers(this.props.reflexHigh)}</Text> */}
            <Text style={styles.resultsText}>Attempts: {this.props.reflexAttempts}</Text>
          </Fragment>
        }
        {/*  Early hits */}
        {this.props.earlyAttempts !== 0 ? <Text style={styles.resultsText}>Early Hits: {this.props.earlyAttempts}</Text> : null }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  results: {
    alignItems: 'center',
    padding: 10,
  },
  resultsText: {
    fontSize: 25,
    padding: 5,
    // color: 'white',
  },
  reset: {
    backgroundColor: '#D75A5A',
    width: '50%',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  resetText: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },
})