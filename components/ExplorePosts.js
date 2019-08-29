import React from "react";
import {View,Image,TouchableOpacity} from "react-native";
import {styles} from "../constants/Styles";
import Layout from "../constants/Layout";

export const ExplorePosts = ({postUrls}) => {
  // Post urls is an array of 3 elements with three posts
  const [first,second,third,...rest] = postUrls;
  return (
    <View style={[styles.flexRow,{width:Layout.window.width,height:Layout.window.width/3}]}>
      <TouchableOpacity style={[styles.flexed,styles.h33,styles.ebt1,styles.ebb1,styles.ebr1]}>
          <Image source={{uri:first.imageUrl}} style={[styles.flexed]} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.flexed,styles.h33,styles.ebl1,styles.ebt1,styles.ebb1,styles.ebr1]}>
          <Image source={{uri:second.imageUrl}} style={[styles.flexed]} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.flexed,styles.h33,styles.ebl1,styles.ebt1,styles.ebb1,styles.ebr1]}>
          <Image source={{uri:third.imageUrl}} style={[styles.flexed]} />
      </TouchableOpacity>
    </View>
  )
};