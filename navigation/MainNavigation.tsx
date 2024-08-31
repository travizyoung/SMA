import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <ProfileTabs.Screen
        name="Tab1"
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle focused={focused} title=" Photos " />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name="Tab2"
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle focused={focused} title=" Videos " />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name="Tab3"
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle focused={focused} title=" Saved " />
          ),
        }}
        component={ProfileTabContent}
      />
    </ProfileTabs.Navigator>
  );
};

const noHeader = {header: () => null, headerShown: false};
const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={noHeader}>
      <Drawer.Screen name={Routes.Home} component={Home} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={noHeader} initialRouteName={Routes.Home}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
