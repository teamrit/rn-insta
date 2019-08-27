import React from "react";
import {View,Image,TouchableOpacity} from "react-native";
import {styles} from "../constants/Styles";
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import UnreadMessageCount from "./UnreadMessageCount";

export const AppTopBar = ({onCameraPress}) => {
  return (
      <View style={[styles.appTopBar,styles.shadow,styles.bgCloud,{flexDirection: 'row'}]}>
          <TouchableOpacity onPress={onCameraPress} style={[styles.appBarIcon, {alignItems: 'center'}]}>
              <View style={[styles.appBarIcon, styles.centeredView]}>
                  <Ionicons
                      name={"ios-camera"}
                      size={30}
                      style={styles.centeredView}
                      color={Colors.tabIconSelected}
                  />
              </View>
          </TouchableOpacity>
          <Image
            source={require("../assets/images/instagram-logo-cursive.jpg")}
            resizeMode="contain"
            style={[{padding:10,height:30,width:3.28 * 30,alignSelf:'center'}]} />
          <View style={styles.flexGrow}/>
          <TouchableOpacity style={[styles.appBarIcon, {alignItems: 'center'}]}>
            <View style={[styles.appBarIcon, styles.centeredView]}>
              <UnreadMessageCount/>
              <Ionicons
                name={"ios-paper-plane"}
                size={30}
                style={styles.centeredView}
                color={Colors.tabIconSelected}
              />
            </View>
          </TouchableOpacity>
      </View>
  )
};