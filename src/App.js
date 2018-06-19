import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  View,
  StatusBar
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
        <View>
          <MovieList/>
        </View>
      </Provider>
    );
  }
}