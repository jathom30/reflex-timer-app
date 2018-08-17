import React, { Component } from 'react'
import { StyleSheet, Text, View } from "react-native"

import Button from './Button'

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
      <Text style={styles.dataBlock} key={index}><Text style={styles.bold}>{index + 1}:</Text> {number}</Text>
    )

    return(
      <View style={styles.main}>
        <Text style={styles.header}>Full Results</Text>
        <View style={styles.dataRow}>
          {eachResult}
        </View>
        <View style={styles.data}>
          {/* <Text style={styles.subHeader}>High Low Average</Text> */}
          <Text style={styles.dataCell}><Text style={styles.bold}>Slowest Time:</Text> {this.formatNumbers(this.props.reflexHigh)}</Text>
          <Text style={styles.dataCell}><Text style={styles.bold}>Fastest Time:</Text> {this.formatNumbers(this.props.reflexLow)}</Text>
          <Text style={styles.dataCell}><Text style={styles.bold}>Average:</Text> {this.formatNumbers(this.props.reflexAverage)}</Text>
        </View>
        <Button title="Hide"  btnTextStyle={[styles.header, {backgroundColor: '#39FC8B'}]} activatePress={this.props.showDetails} />
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
    borderRadius: 20,
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 2,
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'black',
    color: 'white',
  },
  subHeader: {
    fontSize: 20,
  },
  data: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  dataRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'center',
    // backgroundColor: 'pink',
    padding: 20,
  },
  dataBlock: {
    margin: 5,
    fontSize: 20,
  },
  dataCell: {
    alignItems: 'center',
    fontSize: 25,
  },
  bold: {
    fontWeight: 'bold',
  }
})