import React from "react";
import {View,Image,TouchableOpacity} from "react-native";
import {styles} from "../constants/Styles";
import {getRandomPostUrl} from "../constants/DataGenerator";
import Layout from "../constants/Layout";

export const ExplorePosts = () => {
  return (
    <View style={[styles.flexRow,{width:Layout.window.width,height:Layout.window.width/3}]}>
      <TouchableOpacity style={[styles.flexed,styles.h33,styles.ebt1,styles.ebb1,styles.ebr1]}>
          <Image source={{uri:getRandomPostUrl()}} style={[styles.flexed]} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.flexed,styles.h33,styles.ebl1,styles.ebt1,styles.ebb1,styles.ebr1]}>
          <Image source={{uri:getRandomPostUrl()}} style={[styles.flexed]} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.flexed,styles.h33,styles.ebl1,styles.ebt1,styles.ebb1,styles.ebr1]}>
          <Image source={{uri:getRandomPostUrl()}} style={[styles.flexed]} />
      </TouchableOpacity>
    </View>
  )
};