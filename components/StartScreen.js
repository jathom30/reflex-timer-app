import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Button from './Button'
import Choices from './Choices'
import ShowAllResults from './ShowAllResults';

export default class StartScreen extends Component {

  
  render() {
    return(
      <View style={this.props.reflexAttempts === 0 ? [styles.container, {marginBottom: 50}] : styles.container}>
        <Text style={styles.mainHeader}>{!this.props.details ? "Test your reflexes" : "Full Results"}</Text>
          
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
              reset={this.props.reset} />
            :
            <ShowAllResults 
              deltaArray={this.props.deltaArray}
              reflexHigh={this.props.reflexHigh}
              reflexLow={this.props.reflexLow}
              reflexAttempts={this.props.reflexAttempts}
              reflexAverage={this.props.reflexAverage}
              showDetails={this.props.showDetails}
              startClock={this.props.startClock}
              reset={this.props.reset} />
          }

          {/* show results button if more than 1 attempt */}
          {this.props. reflexAttempts > 1 ? <Button title={this.props.details ? "Hide" : "Full Results"} touchableStyle={[button.seconds, {backgroundColor: '#55efc4'}]} btnTextStyle={btnText.details} activatePress={this.props.showDetails} /> : null}

          {/* Show reset button if attempts is great than 0 */}
          <View style={{alignItems: 'center'}}>
            <View style={styles.buttonGroup}>
              { this.props.reflexAttempts !== 0 ?
                <Button title="Reset" touchableStyle={[button.reset, {marginRight: 2.5}]} btnTextStyle={btnText.resetText} activatePress={this.props.reset} />
                :
                null
              }

              <Button title={this.props.reflexAttempts === 0 ? 'S T A R T' : 'Try Again?' } touchableStyle={this.props.reflexAttempts === 0 ? [button.reset, {backgroundColor: '#74b9ff', width: '85%'}] : [button.reset, {backgroundColor: '#74b9ff', marginLeft: 2.5}]} btnTextStyle={btnText.resetText} activatePress={this.props.startClock} />
            </View>
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
  mainHeader: {
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: '#2d3436',
    color: 'white',
    paddingTop: 50,
    paddingBottom: 10,
  },
  subHeader: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  buttonGroup: {
    // flex: 1,
    flexDirection: 'row',
    paddingBottom: 50,
    // height: 200,
    // backgroundColor: 'pink',
    // alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
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
    // margin: 10,
    borderRadius: 5,
    // width: '45%'
    // marginLeft: 5
    // marginTop: 10,
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