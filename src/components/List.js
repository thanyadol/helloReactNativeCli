import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import axios from 'axios';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { albums:[] };

    // Toggle the state every second
   /* setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);*/
  };

  //request when mounth
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')

      //please use set state not this.state 
      .then(response => this.setState({ albums: response.data }));
  };


  renderAlbums() {
    return this.state.albums.map(album => <Text> {album.title} </Text>);
  }

  render() {
    // let display = this.state.allbum; // ? this.props.text : ' ';
    let dispaly = this.state.albums.map(album => <Text> {album.title} </Text>);
    return (
      <View>
          <Text> { this.props.title } </Text>
          {dispaly}
      </View>
    );
  }
}

export default List;