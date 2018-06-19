import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    FlatList
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
            <FlatList
                data={this.props.movieList}
                renderItem = {
                    ({item}) => <Text>{item.title}</Text>
                }/>
        </View>
    )
  }
}

function mapStateToProps(state) {
    return {
        movieList : state.fetchMovieList.movieList
    }
}

export default connect(mapStateToProps,{ fetchMovieList })(MovieList);