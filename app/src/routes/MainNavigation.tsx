import { NavigatorScreenParams } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import OrderDetail from '../screens/OrderDetail/OrderDetail';
import TabsNavigation, { TabsNavigationParamList } from './TabsNavigation';

export type MainNavigationParamList = {
  Home: NavigatorScreenParams<TabsNavigationParamList>;
  OrderDetail: undefined;
};

const Stack = createStackNavigator<MainNavigationParamList>();

export default function MainNavigation() {
  return (
    <>
      <StatusBar style={'light'} />
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
          presentation: 'modal',
        })}
      >
        <Stack.Screen name="Home" component={TabsNavigation} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
      </Stack.Navigator>
    </>
  );
}
