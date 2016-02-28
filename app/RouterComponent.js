'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux';
import ArtistList from './components/artists/ArtistList';

class RouterComponent extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Route name="artistList" component={ArtistList} initial={true} wrapRouter={true} title="Artists"/>
      </Router>
    );
  }
}

module.exports = RouterComponent;

