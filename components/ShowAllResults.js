import React, { Component } from 'react'
import { StyleSheet, Text, View } from "react-native"

import Button from './Button'

export default class ShowAllResults extends Component {
  render() {

    let eachResult = this.props.deltaArray.map((number, index) =>
      <Text style={styles.dataBlock} key={index}><Text adjustsFontSizeToFit numberOfLines={1} minimumFontScale={.25} style={styles.bold}>{index + 1}:</Text> {number} sec</Text>
    )

    return(
      <View style={styles.main}>

        <View>
          <Text adjustsFontSizeToFit numberOfLines={1} minimumFontScale={.25} style={styles.header}>Attempts</Text>
          <View style={styles.dataRow}>
            {eachResult}
          </View>
        </View>

        <View style={{height: '50%'}}>
          <Text adjustsFontSizeToFit numberOfLines={1} minimumFontScale={.25} style={styles.header}>Highs and Lows</Text>
          <View style={styles.data}>
            <Text adjustsFontSizeToFit numberOfLines={1} minimumFontScale={.25} style={styles.dataCell}><Text style={styles.bold}>Slowest Time:</Text> {this.props.reflexHigh} sec</Text>
            <Text adjustsFontSizeToFit numberOfLines={1} minimumFontScale={.25} style={styles.dataCell}><Text style={styles.bold}>Fastest Time:</Text> {this.props.reflexLow} sec</Text>
            <Text adjustsFontSizeToFit numberOfLines={1} minimumFontScale={.25} style={styles.dataCell}><Text style={styles.bold}>Average:</Text> {this.props.reflexAverage} sec</Text>
            {this.props.earlyAttempts === 0 ? null : <Text adjustsFontSizeToFit numberOfLines={1} minimumFontScale={.25} style={styles.dataCell}><Text style={styles.bold}>Early Hits:</Text> {this.props.earlyAttempts}</Text>}
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
    width: '50%',
    alignSelf: 'center'
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
