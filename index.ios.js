/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ArtistList from './app/components/artists/ArtistList';


import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux';

class mobileApp extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Route name="artistList" component={ArtistList} initial={true} wrapRouter={true} title="Artists"/>
      </Router>
    );
  }
}

AppRegistry.registerComponent('mobileApp', () => mobileApp);
