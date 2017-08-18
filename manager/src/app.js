import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Text, View } from 'react-native';
import firebase from 'firebase';

import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAT0FhQwS4iRS2kkvGFwCB2eGUjbOBoPmI',
      authDomain: 'react-manager-d5249.firebaseapp.com',
      databaseURL: 'https://react-manager-d5249.firebaseio.com',
      projectId: 'react-manager-d5249',
      storageBucket: '',
      messagingSenderId: '81830819087'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello !
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
