'use strict';
import React, {
  AppRegistry,
  Navigator,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux';
import ArtistList from './components/artists/ArtistList';
import ArtistShow from './components/artists/ArtistShow';
import Player from './components/player/Player';

class RouterComponent extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Schema name="bottom" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Route name="artistList" component={ArtistList} initial={true} title="Artists"/>
        <Route name="artistShow" component={ArtistShow} title="The Beatles"/>
        <Route name="player" hideNavBar={true} schema="bottom" component={Player} title="Come Together"/>
      </Router>
    );
  }
}

module.exports = RouterComponent;

