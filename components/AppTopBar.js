import React from "react";
import {View,Text,TouchableHighlight,TouchableOpacity} from "react-native";
import {styles} from "../constants/Styles";
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";

export const AppTopBar = () => {
  return (
      <View style={[styles.appTopBar,styles.shadow,styles.bgCloud,{flexDirection: 'row'}]}>
          <TouchableOpacity style={[styles.appBarIcon, {alignItems: 'center'}]}>
              <View style={[styles.appBarIcon, styles.centeredView]}>
                  <Ionicons
                      name={"ios-camera"}
                      size={30}
                      style={styles.centeredView}
                      color={Colors.tabIconSelected}
                  />
              </View>
          </TouchableOpacity>
          <Text style={{padding:5,height:50,fontSize:20}}>
              Instagram
          </Text>
          <View style={[{alignSelf: 'flex-end'},styles.flexRow,styles.appTopBar]}>
              <TouchableHighlight style={[styles.appBarIcon, {alignItems: 'center'}]}>
                  <View style={[styles.appBarIcon, {alignItems: 'center'}]}>
                      <Ionicons
                          name={"ios-jet"}
                          size={30}
                          color={Colors.tabIconSelected}
                      />
                  </View>
              </TouchableHighlight>
              <TouchableHighlight style={[styles.appBarIcon, {alignItems: 'center'}]}>
                  <View style={[styles.appBarIcon, {alignItems: 'center'}]}>
                      <Ionicons
                          name={"ios-jet"}
                          size={30}
                          color={Colors.tabIconSelected}
                      />
                  </View>
              </TouchableHighlight>
          </View>
      </View>
  )
};