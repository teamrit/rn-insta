import React from 'react';
import { PanResponder, Animated, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Layout from "../constants/Layout";
import {styles} from "../constants/Styles";
import Colors from "../constants/Colors";

class FrictionModal extends React.Component {
  constructor(props) {
    super(props);
    this.topSpace = new Animated.Value(0);

    this.state = {
      modalExpanded: false
    };

    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      // onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => Math.abs(gestureState.dy) > 30,

      // TODO: Add velocity to consideration. It is an important part of "Force" of a swipe.

      onPanResponderMove: (evt, gestureState) => {

        let deltaY = gestureState.dy;

        // Modal Not Fully Expanded Yet
        if (!(this.state.modalExpanded)) {
          this.topSpace.setValue(-1 * deltaY);
        }
        else if (gestureState.dy > 0) {
          this.topSpace.setValue(Layout.window.height * 0.35 - deltaY);
        }
      },

      onPanResponderRelease: (evt, gestureState) => {

        const {dy} = gestureState;

        if (!(this.state.modalExpanded)) {
          // Enough force applied to expand to full height
          if (dy < -100) {
            Animated.spring(this.topSpace, {
              toValue: Layout.window.height * 0.35, // return to start
            }).start();
            this.setState({modalExpanded: true});
          } else if (dy > 100) {

            // Swipe Down with "force" to close modal

            props.onForcedDownSwipe && props.onForcedDownSwipe();

            Animated.spring(this.topSpace, {
              toValue: 0, // return to start
            }).start();
            this.setState({modalExpanded: false});
          } else {
          // Not pulled with enough "FORCE"
            Animated.spring(this.topSpace, {
              toValue: 0, // return to start
            }).start()
          }
        } else {
          if (dy > 100) {
            Animated.spring(this.topSpace, {
              toValue: 0, // return to start
            }).start();
            this.setState({modalExpanded: false});
          } else {
            // Not pulled with enough "FORCE"
            Animated.spring(this.topSpace, {
              toValue: Layout.window.height * 0.35, // return to start
            }).start()
          }
        }
      }
    });
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.expandFullModal,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  _keyboardDidHide = () => {
    Animated.spring(this.topSpace, {
      toValue: 0, // return to start
    }).start();
    this.setState({modalExpanded: false});
  };

  // An arrow function is used here so that "this" refers to the component, and not the Keyboard inner context of this
  expandFullModal = () => {
    Animated.spring(this.topSpace, {
      toValue: Layout.window.height * 0.35, // return to start
    }).start();
    this.setState({modalExpanded: true});
  };

  render() {
    const {height,width} = Layout.window;
    let _height = Animated.add(height * 0.65, this.topSpace);

    // Interpolate border radius of share item
    const borderRadius = this.topSpace.interpolate({
      inputRange: [0, height * 0.35],
      outputRange: [10, 0],
    });

    return <Animated.View
      style={[{width,height},styles.translucent]}
      {...this._panResponder.panHandlers} >
      <View style={[styles.flexGrow]} >
        <TouchableWithoutFeedback onPress={()=>this.props.onForcedDownSwipe()}>
          <View/>
        </TouchableWithoutFeedback>
      </View>
      <Animated.View
        style={{
          height:_height,
          width:width,
          alignSelf: 'flex-end',
          backgroundColor: Colors.errorText,
          borderRadius
        }} >
        {this.props.children}
      </Animated.View>
    </Animated.View>;
  }
}

export default FrictionModal;

FrictionModal.navigationOptions = {
  title: 'Links',
};