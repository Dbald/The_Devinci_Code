import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-vector-icons/Entypo';

import HomeScreen from '../Components/Screens/Home/index';
import PodcastScreen from '../Components/Screens/Podcast/index';
import VideoScreen from '../Components/Screens/Videos/index';
import InquireScreen from '../Components/Screens/Inquire/index';

export const Tabs = createBottomTabNavigator ({
  Home: { screen: HomeScreen },
  Podcast: { screen: PodcastScreen },
  Videos: { screen: VideoScreen },
  Inquire: { screen: InquireScreen }
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `home${focused ? '' : '-outline'}`
      } else if (routeName === 'Podcast') {
        iconName = `radio${focused ? '' : '-outline'}`
      } else if (routeName === 'Videos') {
        iconName = `video${focused ? '' : '-outline'}`
      } else if (routeName === 'Inquire') {
        iconName = `help${focused ? '' : '-outline'}`
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  })},
{
    tabBarOptions: {
      activeTintColor: 'white',
      animationEnabled: true,
      inactiveTintColor: '#E0E0DF',
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: 100,
      },
      style: {
        backgroundColor: '#000326',
      },
      showIcon: true
    },
    tabBarPosition: "bottom"
});