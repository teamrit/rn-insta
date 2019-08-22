import React from 'react';
import { PanResponder, Animated, View,Easing} from 'react-native';
import Layout from "../constants/Layout";
import {styles} from "../constants/Styles";
import Colors from "../constants/Colors";

class ExampleComponent extends React.Component {
  constructor(props) {

    super(props);

    this.topSpace = new Animated.Value(0);

    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}

        let currentValue = this.topSpace._value;
        let deltaY = gestureState.dy;


        console.log("C" + currentValue);
        console.log("Dy" + deltaY);

        if (this.topSpace._value !== Layout.window.height * 0.35) {
          this.topSpace.setValue(-1 * deltaY);
        } else if (gestureState.dy > 0) {
          console.log("Swipe down")
          this.topSpace.setValue(gestureState.dy);
        }


      },

      onPanResponderTerminationRequest: (evt, gestureState) => true,

      onPanResponderRelease: (evt, gestureState) => {

        const {dy} = gestureState;

        if (dy < -100) {
          // Animated.timing(this.topSpace, {
          //   toValue: ,
          //   easing: Easing.in,
          //   duration: 500,
          // }).start();
          Animated.spring(this.topSpace, {
            toValue: Layout.window.height * 0.35, // return to start
          }).start()
        } else {
          Animated.spring(this.topSpace, {
            toValue: 0, // return to start
          }).start()
        }
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  render() {
    const {height,width} = Layout.window;
    let _height = Animated.add(height * 0.65, this.topSpace);

    return <Animated.View
      style={[{width,height},styles.b1]}
      {...this._panResponder.panHandlers} >
      <View style={styles.flexGrow} />
      <Animated.View
        style={{
          height:_height,
          width:width,
          alignSelf: 'flex-end',
          backgroundColor: Colors.warningBackground}} />
    </Animated.View>;
  }
}

class GestureTester extends React.Component {
  render() {
    return (
      <View style={{width:Layout.window.width,height:Layout.window.height}}>
        <ExampleComponent
        />
      </View>
    );
  }
}

export default GestureTester;

GestureTester.navigationOptions = {
  title: 'Links',
};