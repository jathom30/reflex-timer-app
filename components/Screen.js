import React, { Component } from 'react'
import { StyleSheet, Text, View } from "react-native";

import Button from "./Button";

export default class Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeader}>{this.props.mainMessage}</Text>
        <Button title={this.props.title} btnStyle={this.props.btnStyle} activatePress={this.props.activatePress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mainHeader: {
    fontSize: 40,
  }
})