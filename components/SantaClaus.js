import React from 'react';
import LottieView from 'lottie-react-native';
import {View, Image} from 'react-native';

export default class SantaAnimation extends React.Component {
  componentDidMount(){this.animation.play();}

  render() {
    return (
    //  <Image 
   //   source={require('../assets/BookSanta.svg')}
   //   style={{width:"60%"}}
   //    />
     
   <LottieView 
   ref={animation => { this.animation = animation; }} 
   source={require('../assets/39500-santa-claus')} />
    )
  }
}
