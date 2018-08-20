import React, { Component } from 'react'
import { StyleSheet, Text, View } from "react-native"


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

        <Text style={{fontWeight: 'bold', color: 'white', alignSelf: 'center', fontSize: 40}}>Time:</Text>
        <Text style={styles.resultsText}>{this.formatNumbers(this.props.timeDelta)}</Text>
        
        {/* {
          this.props.reflexAttempts <= 1 
          ? 
          null 
          :
          <Text style={{fontWeight: 'bold', color: 'white', alignSelf: 'center', fontSize: 20}}>Attempts: {this.props.reflexAttempts}</Text>
        } */}
        {/*  Early hits */}
        {/* {this.props.earlyAttempts !== 0 ? <Text style={{fontWeight: 'bold', color: 'white', alignSelf: 'center', fontSize: 20}}>Early Hits: {this.props.earlyAttempts}</Text> : null } */}

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
    fontSize: 75,
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  reset: {
    backgroundColor: '#D75A5A',
    // width: '50%',
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