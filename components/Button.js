import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity adjustsFontSizeToFit numberOfLines={1} minimumFontScale={.25} style={this.props.touchableStyle} onPress={this.props.activatePress}>
        <Text adjustsFontSizeToFit numberOfLines={1} minimumFontScale={.05} style={this.props.btnTextStyle}>
            {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}

