import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"


export default class Results extends Component {
  render() {
    return(
      <View style={styles.results}>

        <Text>Results:</Text>
        <Text style={styles.resultsText}>{ this.props.reflexAttempts <= 1 ? 'Time:' : 'Last time:'} {this.props.timeDelta}</Text>
        {this.props.reflexAttempts <= 1 ? 
          null 
          :
          <Fragment>
            <Text style={styles.resultsText}>Fastest time: {this.props.reflexLow}</Text>
            <Text style={styles.resultsText}>Slowest time: {this.props.reflexHigh}</Text>
            <Text style={styles.resultsText}>Attempts: {this.props.reflexAttempts}</Text>
          </Fragment>
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  results: {
    alignItems: 'center',
    // backgroundColor: '#A1FAFA',
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