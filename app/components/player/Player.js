'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

const window = Dimensions.get('window');

class Player extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.header }>
          <Text style={ styles.headerText }>
            { this.props.artist.name }
          </Text>
        </View>
        <Text onPress={ Actions.pop } style={ styles.headerClose }>
          X
        </Text>
        <Image
          style={ styles.songImage }
          source={{uri: this.props.image,
                        width: window.width - 30,
                        height: 300}}/>
        <Text style={ styles.songTitle }>
          { this.props.song.title }
        </Text>
        <Text style={ styles.albumTitle }>
          { this.props.song.album }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  header: {
    marginTop: 17,
    marginBottom: 17,
    width: window.width,
  },
  headerClose: {
    color: '#FFF',
    position: 'absolute',
    top: 10,
    left: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: 'center',
  },
  songImage: {
  },
  songTitle: {
    color: "white",
    fontFamily: "Helvetica Neue",
    marginBottom: 10,
    marginTop: 13,
    fontSize: 19
  },
  albumTitle: {
    color: "#BBB",
    fontFamily: "Helvetica Neue",
    fontSize: 14,
    marginBottom: 20,
  },
});

module.exports = Player;
