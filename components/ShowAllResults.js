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
        <View style={styles.dataRow}>
          {eachResult}
        </View>
        <View style={styles.data}>
          <Text style={styles.dataCell}><Text style={styles.bold}>Slowest Time:</Text> {this.formatNumbers(this.props.reflexHigh)}</Text>
          <Text style={styles.dataCell}><Text style={styles.bold}>Fastest Time:</Text> {this.formatNumbers(this.props.reflexLow)}</Text>
          <Text style={styles.dataCell}><Text style={styles.bold}>Average:</Text> {this.formatNumbers(this.props.reflexAverage)}</Text>
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
    // backgroundColor: 'black',
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#2d3436',
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
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'center',
    // backgroundColor: 'pink',
    padding: 20,
    // width: '85%'
  },
  dataBlock: {
    margin: 5,
    fontSize: 20,
    color: 'white',
  },
  dataCell: {
    alignItems: 'center',
    fontSize: 25,
    color: 'white',
  },
  bold: {
    fontWeight: 'bold',
  },
  buttonGroup: {
    // flex: 1,
    flexDirection: 'row',
    paddingBottom: 50,
    // height: 200,
    // backgroundColor: 'pink',
    // alignItems: 'center',
    justifyContent: 'space-around',
    width: '85%',
  },
})

const button = StyleSheet.create({
  main: {
    backgroundColor: '#6c5ce7',
    padding: 20,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  seconds: {
    backgroundColor: '#a29bfe',
    width: '85%',
    padding: 20,
    margin: 5,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#6c5ce7'
  },
  reset: {
    backgroundColor: '#ff7675',
    flex: 1,
    padding: 20,
    margin: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  shareSpace: {
    backgroundColor: 'lightblue',
    width: '85%',
    alignSelf: 'stretch',
    flex: 1,
    maxHeight: 100,
  },
  details: {
    backgroundColor: '#39FC8B',
    padding: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
})

const btnText = StyleSheet.create({
  main: {
    fontSize: 40,
    alignSelf: 'center',
    color: 'white',
  },
  time: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'white',
  },
  resetText: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },
  details: {
    fontSize: 35,
    alignSelf: 'center',
    color: 'white',
  },
})