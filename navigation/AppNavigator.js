import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import CameraExample from "../components/Camera";

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    Camera: CameraExample
  })
);
