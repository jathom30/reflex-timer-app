import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Button from './Button'
import Choices from './Choices'
import ShowAllResults from './ShowAllResults';

export default class StartScreen extends Component {

  
  render() {
    return(
      <View style={this.props.reflexAttempts === 0 ? [styles.container, {marginBottom: 50}] : styles.container}>
          
          {/* show either second buttons or data */}
          {
            !this.props.details 
            ? 
            <Choices
              maxRandom={this.props.maxRandom}
              fiveSec={this.props.fiveSec}
              tenSec={this.props.tenSec}
              tenSec={this.props.tenSec}
              fifteenSec={this.props.fifteenSec}
              reflexAttempts={this.props.reflexAttempts}
              timeDelta={this.props.timeDelta}
              reflexLow={this.props.reflexLow}
              reflexHigh={this.props.reflexHigh}
              earlyAttempts={this.props.earlyAttempts}
              reflexAverage={this.props.reflexAverage}
              reset={this.props.reset}
              tooLong={this.props.tooLong} />
            :
            <ShowAllResults 
              deltaArray={this.props.deltaArray}
              reflexHigh={this.props.reflexHigh}
              reflexLow={this.props.reflexLow}
              reflexAttempts={this.props.reflexAttempts}
              reflexAverage={this.props.reflexAverage}
              earlyAttempts={this.props.earlyAttempts}
              showDetails={this.props.showDetails}
              startClock={this.props.startClock}
              reset={this.props.reset} />
          }

          {/* show results button if more than 1 attempt */}
          {this.props. reflexAttempts > 1 ? <Button title={this.props.details ? "Hide" : "Full Results"} touchableStyle={[button.seconds, {backgroundColor: '#74B9FF', alignSelf: 'stretch'}]} btnTextStyle={btnText.resetText} activatePress={this.props.showDetails} /> : null}

          {/* Show reset button if attempts is great than 0 */}
          <View style={this.props.reflexAttempts !== 0 ? [styles.buttonGroup, {alignItems: 'center'}] : null }>
            { this.props.reflexAttempts !== 0 ?
              <Button title="Reset" touchableStyle={[button.reset, {width: '47.5%'}]} btnTextStyle={btnText.resetText} activatePress={this.props.reset} />
              :
              null
            }

            <Button title={this.props.reflexAttempts === 0 ? 'S T A R T' : 'Retry?' } touchableStyle={this.props.reflexAttempts !== 0 ? [button.reset, {backgroundColor: '#0984e3', width: '47.5%'}] : [button.reset, {backgroundColor: '#0984e3'}]} btnTextStyle={btnText.resetText} activatePress={this.props.startClock} />
          </View>
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    // alignItems: 'stretch',
    justifyContent: 'space-between',
    // marginTop: 50,
    // marginBottom: 50,
  },
  subHeader: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const button = StyleSheet.create({
  main: {
    backgroundColor: '#6c5ce7',
    padding: 20,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  seconds: {
    backgroundColor: '#81ECEC',
    // width: '93.3333%',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    height: 50,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#6c5ce7'
  },
  reset: {
    backgroundColor: '#D63031',
    // width: '93.3333%',
    padding: 10,
    // margin: 10,
    borderRadius: 5,
    height: 50,
    // alignSelf: 'center',
    // alignSelf: 'stretch',
    // justifyContent: 'center',
  },
  shareSpace: {
    backgroundColor: 'lightblue',
    // width: '85%',
    alignSelf: 'stretch',
    flex: 1,
    maxHeight: 100,
  },
  details: {
    backgroundColor: '#39FC8B',
    padding: 10,

    // alignSelf: 'stretch',
    // justifyContent: 'center',
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
    width: '50%',
  },
  resetText: {
    color: 'white',
    fontSize: 41,
    alignSelf: 'center',
    fontWeight: 'bold',
    width: '50%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  details: {
    fontSize: 35,
    alignSelf: 'center',
    color: 'white',
  },
})