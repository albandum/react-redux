import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) => { //Equivalent to props.onPress
  const { buttonStyle, buttonText } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonText: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1, // Expand as much as it Can
    alignSelf: 'stretch', //Streth to fill limits of container
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#007aff',
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
  }
};

export { Button };
