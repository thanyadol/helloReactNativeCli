import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

import { Picture, Head, Submit } from '../common';

import PropTypes from 'prop-types'
import { Actions } from 'react-native-router-flux';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = { albums:[] }
    };

  //request when mounth
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')

      //please use set state not this.state 
      .then(response => this.setState({ albums: response.data }));
  };

  onBack = function onBack() {
    //let alertText = "on back press handle"; //this.state.email;
    //alert(alertText);

    Actions.login();
  };

  renderList() {
    return this.state.albums.map(album =>
       <View key={album.title} >

        <View style={styles.containerStyle}>
       

                <View>
                <Image
                    style={styles.thumbnail}
                    source={{ uri: album.thumbnail_image }} /> 
                </View>
            
                <View style={styles.header}>
                    <Text>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>

      
        </View>

         <Image
            style={styles.coverStyle}
            source={{ uri: album.image }}
          />
      </View>
    );
  }

  render() {

    //const { title, artist, thumbnail } = album;

    return (    
        <ScrollView  style={styles.container} >

              {this.renderList()}
              <Submit text="Back" onPress={ this.onBack }/>       
        </ScrollView>
    );
  }
}

// List.propTypes = {
//     album: PropTypes.object.isRequired
//   };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 50,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  thumbnail: {
    height: 50,
    width: 50
  },

  coverStyle: {
    height: 300,
    flex: 1,
    width: null
  },

  header: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 10
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }

});


export default List;