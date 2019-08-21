import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import { Animated } from 'react-native';
import { useState, useEffect } from 'react';

export const useFadeInOut = ({ doAnimation, duration }) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  // Heart Animation
  useEffect(() => {
    Animated.sequence([
      // Heart Zoom
      Animated.spring(animation, {
        toValue: doAnimation ? 1 : 0,
      }),
      // HEART Fade
      Animated.timing(animation, {
        toValue: 0,
        duration: 200
      }),
    ]).start();
  }, [doAnimation]);

  return animation;
};

export const useFadeInAnimation = ({ doAnimation, duration }) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  // Zoom Animation
  useEffect(() => {
      // Zoom In
      Animated.timing(animation, {
        toValue: doAnimation ? 1 : 0,
        duration: 200
      })
  }, [doAnimation]);

  return animation;
};

export const MediaHeart = (props) => {
  const {isLiked} = props;
  const animation = useFadeInOut({ doAnimation: isLiked, duration: 1000 });
  let opacity = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
  return (
    <Animated.View style={{
      position: 'absolute',
      transform: [
        {scale: opacity}
      ],
      zIndex:10,
      alignSelf:'center',
      top:Layout.window.width/2-50,
      opacity}}>
      <Ionicons
        name={"md-heart"}
        size={100}
        color={Colors.mediaHeart}
      />
    </Animated.View>

  )
};