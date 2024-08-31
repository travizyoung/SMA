import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>This is tab 1</Text>
    </View>
  );
};

const Tab2 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Tab2</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Tab3</Text>
    </View>
  );
};

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
        component={Tab1}
      />
      <ProfileTabs.Screen
        name="Tab2"
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle focused={focused} title=" Videos " />
          ),
        }}
        component={Tab2}
      />
      <ProfileTabs.Screen
        name="Tab3"
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle focused={focused} title=" Saved " />
          ),
        }}
        component={Tab3}
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
