import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Button from './Button'
import Results from './Results'

export default class StartScreen extends Component {

  
  render() {
    return(
      <View style={this.props.reflexAttempts === 0 ? [styles.container, {marginBottom: 50}] : styles.container}>
        <Text style={styles.mainHeader}>Test your reflexes</Text>
          <View>
            <Text style={styles.subHeader}>Set your max limit</Text>
            // TODO: create active class for button
            <Button title="5 seconds" touchableStyle={this.props.maxRandom === 5000 ? [button.seconds, button.active] : button.seconds } btnTextStyle={btnText.time} activatePress={this.props.fiveSec} />
            <Button title="10 seconds" touchableStyle={this.props.maxRandom === 10000 ? [button.seconds, button.active] : button.seconds } btnTextStyle={btnText.time} activatePress={this.props.tenSec} />
            <Button title="15 seconds" touchableStyle={this.props.maxRandom === 15000 ? [button.seconds, button.active] : button.seconds } btnTextStyle={btnText.time} activatePress={this.props.fifteenSec} />
          </View>

          {this.props.reflexAttempts > 0 ? 
            <Results 
              timeDelta={this.props.timeDelta}
              reflexLow={this.props.reflexLow}
              reflexHigh={this.props.reflexHigh}
              reflexAverage={this.props.reflexAverage}
              reflexAttempts={this.props.reflexAttempts}
              earlyAttempts={this.props.earlyAttempts}
              reset={this.props.reset} />
            : 
            null 
          }

          { this.props.reflexAttempts > 1 && !this.props.start && !this.props.details ? <Button title={ this.props.details ? "Hide Results" : "Full Results" } touchableStyle={[button.seconds, {backgroundColor: '#39FC8B'}]} btnTextStyle={btnText.details} activatePress={this.props.showDetails} /> : null }

          {/* Show reset button if attempts is great than 0 */}
          <View style={{alignItems: 'center'}}>
            <View style={styles.buttonGroup}>
              { this.props.reflexAttempts !== 0 ?
                <Button title="Reset" touchableStyle={button.reset} btnTextStyle={btnText.resetText} activatePress={this.props.reset} />
                :
                null
              }

              <Button title={this.props.reflexAttempts === 0 ? 'S T A R T' : 'Try Again?' } touchableStyle={this.props.reflexAttempts === 0 ? [button.reset, {backgroundColor: 'lightblue', width: '85%'}] : [button.reset, {backgroundColor: 'lightblue',}]} btnTextStyle={btnText.resetText} activatePress={this.props.startClock} />
            </View>
          </View>
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'stretch',
    justifyContent: 'space-between',
    marginTop: 50,
    // marginBottom: 50,
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
});

const button = StyleSheet.create({
  main: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  seconds: {
    backgroundColor: 'lightblue',
    width: '75%',
    padding: 20,
    margin: 5,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: 'blue'
  },
  reset: {
    backgroundColor: '#D75A5A',
    // width: '50%',
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  shareSpace: {
    backgroundColor: 'lightblue',
    padding: 20,
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