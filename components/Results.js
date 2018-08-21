import React, { Component } from 'react'
import { StyleSheet, Text, View } from "react-native"


export default class Results extends Component {
  render() {
    return(
      <View style={styles.results}>

        <Text adjustsFontSizeToFit minimumFontScale={.25} style={{fontWeight: 'bold', color: 'white', alignSelf: 'center', textAlign: 'center', fontSize: 40, width: '50%',}}>Time:</Text>
        <Text adjustsFontSizeToFit numberOfLines={1} minimumFontScale={.25} style={styles.resultsText}>{this.props.tooLong ? 'Too long, try again' : this.props.timeDelta + ' sec'}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  results: {
    alignItems: 'center',
    padding: 10,
    // flex: 1,
    justifyContent: 'center',
  },
  resultsText: {
    fontSize: 75,
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%'
  },
})