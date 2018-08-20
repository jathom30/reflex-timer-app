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

        <View>
          <Text style={styles.header}>Attempts</Text>
          <View style={styles.dataRow}>
            {eachResult}
          </View>
        </View>

        <View>
          <Text style={styles.header}>Highs and Lows</Text>
          <View style={styles.data}>
            <Text style={styles.dataCell}><Text style={styles.bold}>Slowest Time:</Text> {this.formatNumbers(this.props.reflexHigh)}</Text>
            <Text style={styles.dataCell}><Text style={styles.bold}>Fastest Time:</Text> {this.formatNumbers(this.props.reflexLow)}</Text>
            <Text style={styles.dataCell}><Text style={styles.bold}>Average:</Text> {this.formatNumbers(this.props.reflexAverage)}</Text>
            {this.props.earlyAttempts === 0 ? null : <Text style={styles.dataCell}><Text style={styles.bold}>Early Hits:</Text> {this.props.earlyAttempts}</Text>}
          </View>
        </View>

        {/* <Button title="Hide"  touchableStyle={[button.seconds, {backgroundColor: '#55efc4'}]} btnTextStyle={btnText.details} activatePress={this.props.showDetails} /> */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#74B9FF',
    borderRadius: 5,
    marginBottom: 20,
    padding: 10
    // backgroundColor: 'black',
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
    paddingBottom: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 35,
    textAlign: 'center',
    paddingBottom: 5,
    color: 'white',
  },
  data: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  dataRow: {
    // flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'center',
    // padding: 20,
    // backgroundColor: 'pink'
  },
  dataBlock: {
    margin: 5,
    fontSize: 27,
    color: 'white',
    padding: 5,
  },
  dataCell: {
    alignSelf: 'flex-start',
    fontSize: 25,
    color: 'white',
    padding: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
})
