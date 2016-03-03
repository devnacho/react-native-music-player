'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class ArtistShow extends Component {
  render() {
    return (
      <ParallaxScrollView
        parallaxHeaderHeight={300}
        stickyHeaderHeight={ 50 }
        renderStickyHeader={() => (
          <View style={{ height: 50,  backgroundColor: '#000', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: "#FFF" }}>HEADER</Text>
          </View>
        )}
        renderForeground={() => (
          <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: "#FFF" }}>Hello World!</Text>
          </View>
        )}>
        <View style={{ height: 500 }}>
          <Text>Scroll me</Text>
        </View>
      </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
});

module.exports = ArtistShow;
