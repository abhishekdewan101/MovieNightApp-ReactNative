import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

import { fetchMovieList } from '../../../network/movielist/MovieListActions';

import { translateString } from '../../../utils/Translator';


class MovieList extends Component {
  componentWillMount() {
    this.props.fetchMovieList();
  }

  render() {
    console.log(translateString('test.welcome'));
    return (
        <View>
            <FlatList
                data={this.props.movieList}
                renderItem = {
                    ({item}) => <View style={styles.cardView}><Text style={styles.cardViewText}>{item.title}</Text></View>
                }/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
   cardView: {
       width: "auto",
       height: 200,
       backgroundColor: "#3a55ff",
       marginBottom: 20,
   },
   cardViewText: {
       color: "#FFFFFF"
   }
});

function mapStateToProps(state) {
    return {
        movieList : state.fetchMovieList.movieList
    }
}

export default connect(mapStateToProps,{ fetchMovieList })(MovieList);
