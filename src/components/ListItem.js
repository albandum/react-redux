import React, { Component } from 'react';
import { Text } from 'react-native';

class ListItem extends Component {
  render() {
    return (
      <Text>{this.props.library.title}</Text>
    );
  }
}

export default ListItem;
