import React from "react";
import {Modal,TouchableHighlight,View,Text,TouchableWithoutFeedback} from "react-native";
import {styles} from "../constants/Styles";
import layout from "../constants/Layout";
import Colors from "../constants/Colors";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export const SharePost = ({isShareModalOpened,setModalVisibility}) => {

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isShareModalOpened}
      onRequestClose={() => setModalVisibility(false)}>
      <View style={styles.translucent}>
        <View style={[{height:layout.window.height * 0.3},styles.translucent]}>
          <TouchableWithoutFeedback style={styles.flexed}
            onPress={() => setModalVisibility(false)}
          >
            <View style={styles.flexed}/>
          </TouchableWithoutFeedback>
        </View>
        <View style={[
          {height:layout.window.height * 0.7,backgroundColor:Colors.errorText,padding:20},
          styles.roundedPretty
        ]}>
          <GestureRecognizer
            config={config}
            onSwipeUp={(evt) => console.log(evt)}
          >
            <Text>Hello World!</Text>
            <TouchableHighlight
              onPress={()=>setModalVisibility(false)}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </GestureRecognizer>

        </View>
      </View>
    </Modal>
  );
};