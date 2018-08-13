import React from 'react';
import { StyleSheet, View } from 'react-native';

import Screen from './components/Screen'
import GameScreen from './components/GameScreen'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // TODO: switch back to false after timer is completed
      start: true,
    }
    this.start = this.start.bind(this)
  }
  start() {
    this.setState({
      start: !this.state.start,
    })

  }
  
  render() {
    const defaultBtn = buttons.default
    const smallBtn = buttons.small
    return (
      <View style={styles.container}>
        { !this.state.start ? <Screen mainMessage="Welcome. Test your reflexes" title="start" btnStyle={defaultBtn} activatePress={this.start} /> : <GameScreen btnStyle={smallBtn} activatePress={this.start} /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const buttons = StyleSheet.create({
  default: {
    backgroundColor: 'lightgreen',
    color: 'white',
    padding: 30,
    width: 200,
    textAlign: 'center',
    fontSize: 30,
    borderColor: 'green',
    borderWidth: 2,
  },
  small: {
    backgroundColor: 'black',
    color: 'white',
    padding: 5,
    textAlign: 'center',
  }
})