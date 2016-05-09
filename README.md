# React Native Music Player

Ever since Facebook open-sourced React Native, I’ve wanted to try it out. 
This is why I created this demo app.

## This is how it looks:

![smallreactnativedemo3](https://cloud.githubusercontent.com/assets/623766/15112020/947b02f0-15eb-11e6-865c-d28abba62837.gif)

[Demo video with sound](http://jgnatch-dropshare.s3.amazonaws.com/Screen-Recording-2016-04-21-11-33-59.mp4)

## Things in scope that I wanted to learn:
- Practice React Native Layout and Styling.
- Practice Routing and how to present the flow and animation of different views.
- Use of Standard Native Components. (List, Images, Toolbar, etc)
- Use of third party React Native libraries ( In this case I used `parallax-scroll-view` and `react-native-video`
- I could have architected the app better using Redux but it wasn’t in the scope of this practice. 

## Interesting Things I learned

There aren’t a lot of good components to play audio. I started first with a library that only played local files.
I read the code of that library and noticed it used a Native Module called [AVPlayer](https://developer.apple.com/library/ios/documentation/AVFoundation/Reference/AVPlayer_Class/).
There I noticed it wasn’t going to be possible to play audios coming form the network . 
After some investigation I read that the appropiate native module to play network audios is [AVAudioPlayer](https://developer.apple.com/library/ios/documentation/AVFoundation/Reference/AVAudioPlayerClassReference/).

By looking at `react-native-video` code I discovered that `react-native-video` implemented this `AVAudioPlayer` 
so I decided to try out this library just using audio and it worked right of bat.

