import React, { Component } from 'react'
import { StyleSheet, Text, View } from "react-native"


export default class Results extends Component {
  render() {
    return(
      <View style={styles.results}>

        <Text style={{fontWeight: 'bold', color: 'white', alignSelf: 'center', fontSize: 40}}>Time:</Text>
        <Text style={styles.resultsText}>{this.props.tooLong ? 'Too long, try again' : this.props.timeDelta + ' sec'}</Text>

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
})