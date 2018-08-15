import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Button from './Button'

export default class StartScreen extends Component {

  
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.mainHeader}>Test your reflexes</Text>
          <View>
            {/* <Text style={styles.subHeader}>Set your random time ceiling</Text> */}
            // TODO: create active class for button
            <Button title="5 seconds" touchableStyle={this.props.maxRandom === 5000 ? [button.seconds, button.active] : button.seconds } btnTextStyle={btnText.time} activatePress={this.props.fiveSec} />
            <Button title="10 seconds" touchableStyle={this.props.maxRandom === 10000 ? [button.seconds, button.active] : button.seconds } btnTextStyle={btnText.time} activatePress={this.props.tenSec} />
            <Button title="15 seconds" touchableStyle={this.props.maxRandom === 15000 ? [button.seconds, button.active] : button.seconds } btnTextStyle={btnText.time} activatePress={this.props.fifteenSec} />
          </View>

          {this.props.reflexAttempts > 0 ? 
            <View style={styles.results}>
              <Text style={styles.resultsText}>Delta: {this.props.timeDelta}</Text>
              <Text style={styles.resultsText}>Delta Low: {this.props.reflexLow}</Text>
              <Text style={styles.resultsText}>Delta High: {this.props.reflexHigh}</Text>
              <Text style={styles.resultsText}>Delta Average: {this.props.reflexAverage}</Text>
              <Text style={styles.resultsText}>Reflex Attempts: {this.props.reflexAttempts}</Text>
              <Button title="RESET" touchableStyle={button.reset} btnTextStyle={btnText.reset} activatePress={this.props.reset} />
            </View>
            : 
            null 
          }


          <Button title="S T A R T" touchableStyle={button.main} btnTextStyle={btnText.main} activatePress={this.props.startClock} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  mainHeader: {
    fontSize: 50,
    textAlign: 'center'
  },
  subHeader: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  results: {
    alignItems: 'center',
    backgroundColor: '#A1FAFA',
    padding: 10,
  },
  resultsText: {
    fontSize: 25,
    padding: 5,
    // color: 'white',
  }
});

const button = StyleSheet.create({
  main: {
    backgroundColor: '#39FC8B',
    width: '75%',
    // height: 70,
    padding: 20,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 3,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  seconds: {
    backgroundColor: '#B2FED2',
    width: '75%',
    padding: 20,
    margin: 5,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#39FC8B'
  },
  reset: {
    backgroundColor: '#D75A5A',
    width: '50%',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  }
})

const btnText = StyleSheet.create({
  main: {
    fontSize: 45,
    alignSelf: 'center',

  },
  time: {
    fontSize: 25,
    alignSelf: 'center',
    
  },
  reset: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  }
})