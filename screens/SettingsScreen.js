import React from 'react';
import CameraExample from "../components/Camera";

export default function SettingsScreen() {
  return <CameraExample />;
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
