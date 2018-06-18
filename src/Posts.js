import React, { Component } from 'react';
import { Text,View } from 'react-native';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/FetchActions';

class Post extends Component {

  componentWillMount() {
      this.props.fetchPosts();
  }  

  render() {
    console.log("Rendering");
    return (
      <View>
        <Text>Rendering {this.props.posts.length}</Text>
      </View>
    )
  }
};

function mapStateToProps (state) {
    console.log(state);
    return {
        posts: state.get.items
    }
}

export default connect(mapStateToProps,{ fetchPosts })(Post);


