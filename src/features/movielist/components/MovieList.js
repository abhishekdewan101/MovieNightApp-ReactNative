import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text
} from 'react-native';

import { fetchMovieList } from '../../../network/movielist/MovieListActions';


class MovieList extends Component {
  componentWillMount() {
    this.props.fetchMovieList();
  }  

  render() {
    console.log(this.props);
    return (
        <View>
            <Text>This is a movie list with {this.props.movieList.length} movies</Text>
        </View>
    )
  }
};

function mapStateToProps(state) {
    return {
        movieList : state.fetchMovieList.movieList
    }
}

export default connect(mapStateToProps,{ fetchMovieList })(MovieList);