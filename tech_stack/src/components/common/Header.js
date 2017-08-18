// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make compnentn
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#ECECEC',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make it available to other parts of the App
export { Header };
