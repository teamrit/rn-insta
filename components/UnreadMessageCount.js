import React from 'react';
import {View,Text} from "react-native";
import Colors from "../constants/Colors";
import {getRandomInt} from "../constants/DataGenerator";
import {styles} from "../constants/Styles";

export default function () {
  return (
    <View style={[
      {
        position:'absolute',width:20,height:20,aspectRatio: 1,zIndex:10,
        backgroundColor:Colors.heartIcon,borderRadius:100,
        left:25, bottom:25
      },
      styles.centeredView
    ]}>
      <Text style={{color:Colors.white}}>{getRandomInt(1,9)}</Text>
    </View>
  );
}
