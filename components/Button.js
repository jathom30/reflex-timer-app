import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.activatePress}>
        <Text style={this.props.btnStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

