import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FrictionModal from '../screens/FrictionModal';
import SettingsScreen from '../screens/CameraScreen';
import SearchScreen from "../screens/SearchScreen";
import {ExploreScreen} from "../screens/ExploreScreen";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    navigationOptions: {
      header: null
    }
  },
});

// STACK: Home
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);
HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};
HomeStack.path = '';

// STACK: Link
const NotificationsStack = createStackNavigator(
  {
    Links: FrictionModal,
  },
  config
);
NotificationsStack.navigationOptions = {
  showLabel: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} />
  ),
};
NotificationsStack.path = '';

// STACK: Settings
const ProfileStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);
ProfileStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};
ProfileStack.path = '';

// STACK: Search
const ExploreStack = createStackNavigator(
    {
      Home: ExploreScreen,
    },
    config
);

ExploreStack.navigationOptions = {
    header:null,
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
    ),
};

ExploreStack.path = '';

const AddMediaStack = createStackNavigator(
    {
        Settings: SearchScreen,
    },
    config
);

AddMediaStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'} />
    ),
};

AddMediaStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ExploreStack,
  AddMediaStack,
  NotificationsStack,
  SettingsStack: ProfileStack,
}, {
    tabBarOptions: {
        showLabel: false
    }
});
tabNavigator.path = '';

export default tabNavigator;
