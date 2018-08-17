import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, View } from "react-native"

export default class ShowAllResults extends Component {

  formatNumbers(basicNumber) {
    const number = basicNumber
    let fNumber, arr, fArr
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
    return fNumber
  }

  formatArray(array) {
    // create empty array
    let fArr = []
    // create empty var
    let fNumber
    // loop length of array
    for (let i=0; i < array.length; i++) {
      // fNumber is index of array formatted
      fNumber = this.formatNumbers(array[i])
      // add fNumber to formatted array
      fArr = [...fArr, fNumber]
    }
    return fArr
  }

  render() {

    let eachResult = this.formatArray(this.props.deltaArray).map((number, index) =>
      <Text key={index}>{index + 1}: {number}</Text>
    )

    return(
      <View style={styles.main}>
        <Text>Full Results</Text>
        {eachResult}
        <View>
          <Text>High Low Average</Text>
          <Text>Slowest Time: {this.formatNumbers(this.props.reflexHigh)}</Text>
          <Text>Fastest Time: {this.formatNumbers(this.props.reflexLow)}</Text>
          <Text>Average: {this.formatNumbers(this.props.reflexAverage)}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    top: 40,
    bottom: 120,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
})