import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size }) => (
  <View style={styles.viewStyle}>
    <ActivityIndicator
      size={size || 'large'}
      style={styles.spinnerStyle}
    />
  </View>
);

const styles = {
  spinnerStyle: {
    flex: 1, //Full width
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewStyle: {
    flex: 1,
    alignSelf: 'stretch',
    minHeight: 20
  }
};

export { Spinner };
