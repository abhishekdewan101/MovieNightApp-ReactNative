import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native';

import AppStore from './model/AppStore';

import MovieList from './features/movielist/components/MovieList';


export default class App extends Component {

  componentWillMount() {
    StatusBar.setHidden(true);
  }

  componentWillUnmount() {
    StatusBar.setHidden(false);
  }

  render() {
    return (
      <Provider store={AppStore}>
        <View style={styles.container}>
          <MovieList></MovieList>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});