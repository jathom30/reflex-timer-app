import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={this.props.touchableStyle} onPress={this.props.activatePress}>
        <Text style={this.props.btnTextStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

