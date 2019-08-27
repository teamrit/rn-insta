import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FrictionModal from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CameraExample from "../components/Camera";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
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
const SettingsStack = createStackNavigator(
  {
    Settsings: SettingsScreen,
  },
  config
);
SettingsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};
SettingsStack.path = '';

// STACK: Search
const SearchStack = createStackNavigator(
    {
        Settings: SettingsScreen,
    },
    config
);

SearchStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
    ),
};

SearchStack.path = '';

const AddMediaStack = createStackNavigator(
    {
        Settings: SettingsScreen,
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
  SearchStack,
  AddMediaStack,
  NotificationsStack,
  SettingsStack,
}, {
    tabBarOptions: {
        showLabel: false
    }
});
tabNavigator.path = '';

export default tabNavigator;
