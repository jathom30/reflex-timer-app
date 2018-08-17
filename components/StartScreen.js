import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Button from './Button'
import Results from './Results'

export default class StartScreen extends Component {

  
  render() {
    return(
      <View style={this.props.reflexAttempts === 0 ? [styles.container, {marginBottom: 50}] : [styles.container, {borderBottomColor: 'white', borderBottomWidth: 2}]}>
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

          {/* Show reset button if attempts is great than 0 */}
          <View style={this.props.reflexAttempts === 0 ? [styles.buttonGroup, {justifyContent: 'space-around',}] : [styles.buttonGroup, {alignItems: 'stretch', width: '100%', backgroundColor: 'purple', alignContent: 'stretch'}]}>
            { this.props.reflexAttempts !== 0 ?
              <Button title="reset" touchableStyle={[button.shareSpace, {backgroundColor: 'tomato', borderRightColor: 'white', borderRightWidth: 2}]} btnTextStyle={btnText.main} activatePress={this.props.reset} />
              :
              null
            }

            <Button title={this.props.reflexAttempts === 0 ? 'S T A R T' : 'Try Again?' } touchableStyle={this.props.reflexAttempts === 0 ? [button.main, {width: '75%'}] : button.shareSpace} btnTextStyle={btnText.main} activatePress={this.props.startClock} />
          </View>
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
});

const button = StyleSheet.create({
  main: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 15,
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
    width: '50%',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  shareSpace: {
    backgroundColor: 'lightblue',
    padding: 20,
    alignSelf: 'stretch',
    flex: 1,
    maxHeight: 100,
  }
})

const btnText = StyleSheet.create({
  main: {
    fontSize: 45,
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
})