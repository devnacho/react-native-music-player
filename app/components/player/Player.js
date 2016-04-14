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
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from 'react-native-slider';
import Sound from 'react-native-sound';

const window = Dimensions.get('window');

const whoosh = new Sound('song1.mp3', Sound.MAIN_BUNDLE, (error) => {});


class Player extends Component {
  constructor(props){
    super(props);
    whoosh.play();
    this.timeCallback = setInterval(this.getTime.bind(this), 30);
    this.state = {
      playing: true,
      songDuration: whoosh.getDuration(),
      currentTime: 0,
      songPercentage: 0,
      sliding: false,
    };
  }

  componentWillUnmount(){
    clearTimeout(this.timeCallback);
  }

  getTime() {
    if( !this.state.sliding ){
      whoosh.getCurrentTime((seconds) => {
        let songPercentage = seconds / this.state.songDuration;
        this.setState({
          currentTime: seconds,
          songPercentage: songPercentage,
        });
      });
    }

  }

  goBackward(){
    whoosh.setCurrentTime(0);
    this.setState({
      currentTime: 0,
      songPercentage: 0,
    });
  }

  togglePlay(){
    if(this.state.playing){
      this.setState({ playing: false });
      whoosh.pause();
    } else {
      this.setState({ playing: true });
      whoosh.play();
    }
  }

  //TODO: Move this to a Utils file
  withLeadingZero(amount){
    if (amount < 10 ){
      return `0${ amount }`;
    } else {
      return `${ amount }`;
    }
  }

  //TODO: Move this to a Utils file
  formattedTime( timeInSeconds ){
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds - minutes * 60;

    return(`${ this.withLeadingZero( minutes ) }:${ this.withLeadingZero( seconds.toFixed(0) ) }`);
  }


  onSlidingStart(){
    this.setState({ sliding: true });
  }

  onSlidingChange(value){
    let newPosition = value * this.state.songDuration;
    this.setState({ currentTime: newPosition, songPercentage: value });
//this.setState({ songPercentage: value });
  }

  onSlidingComplete(){
    whoosh.setCurrentTime(this.state.currentTime);
    this.setState({ sliding: false });
  }

  render() {
    let playButton;
    if( this.state.playing ){
      playButton = <Icon onPress={ this.togglePlay.bind(this) } style={ styles.play } name="ios-pause" size={70} color="#fff" />;
    } else {
      playButton = <Icon onPress={ this.togglePlay.bind(this) } style={ styles.play } name="ios-play" size={70} color="#fff" />;
    }


    return (
      <View style={styles.container}>
        <View style={ styles.header }>
          <Text style={ styles.headerText }>
            { this.props.artist.name }
          </Text>
        </View>
        <View style={ styles.headerClose }>
          <Icon onPress={ Actions.pop } name="chevron-down" size={15} color="#fff" />
        </View>
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
        <View style={ styles.sliderContainer }>
          <Slider
            onSlidingStart={ this.onSlidingStart.bind(this) }
            onSlidingComplete={ this.onSlidingComplete.bind(this) }
            onValueChange={ this.onSlidingChange.bind(this) }
            minimumTrackTintColor='#851c44'
            style={ styles.slider }
            trackStyle={ styles.sliderTrack }
            thumbStyle={ styles.sliderThumb }
            value={ this.state.songPercentage }/>

          <View style={ styles.timeInfo }>
            <Text style={ styles.time }>{ this.formattedTime(this.state.currentTime)  }</Text>
            <Text style={ styles.timeRight }>- { this.formattedTime( this.state.songDuration - this.state.currentTime ) }</Text>
          </View>
        </View>
        <View style={ styles.controls }>
          <Icon style={ styles.shuffle } name="ios-shuffle-strong" size={18} color="#fff" />
          <Icon onPress={ this.goBackward.bind(this) } style={ styles.back } name="ios-skipbackward" size={25} color="#fff" />
          { playButton }
          <Icon style={ styles.forward } name="ios-skipforward" size={25} color="#fff" />
          <Icon style={ styles.volume } name="volume-medium" size={18} color="#fff" />
        </View>
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
    marginBottom: 20,
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
  controls: {
    flexDirection: 'row',
    marginTop: 30,
  },
  back: {
    marginTop: 22,
    marginLeft: 45,
  },
  play: {
    marginLeft: 50,
    marginRight: 50,
  },
  forward: {
    marginTop: 22,
    marginRight: 45,
  },
  shuffle: {
    marginTop: 26,
  },
  volume: {
    marginTop: 26,
  },
  sliderContainer: {
    width: window.width - 40,
  },
  timeInfo: {
    flexDirection: 'row',
  },
  time: {
    color: '#FFF',
    flex: 1,
    fontSize: 10,
  },
  timeRight: {
    color: '#FFF',
    textAlign: 'right',
    flex: 1,
    fontSize: 10,
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 2,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 10,
    height: 10,
    backgroundColor: '#f62976',
    borderRadius: 10 / 2,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 1,
  }
});

var customSliderStyles = StyleSheet.create({
});

module.exports = Player;
