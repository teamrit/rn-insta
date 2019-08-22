import React from "react";
import {Modal,TouchableHighlight,View,Alert,Text,TouchableWithoutFeedback} from "react-native";
import {styles} from "../constants/Styles";
import layout from "../constants/Layout";
import Colors from "../constants/Colors";

export const SharePost = ({isShareModalOpened,setModalVisibility}) => {
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
          <Text>Hello World!</Text>
          <TouchableHighlight
            onPress={()=>setModalVisibility(false)}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};