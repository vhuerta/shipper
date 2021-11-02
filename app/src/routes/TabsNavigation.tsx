import { useTheme } from '@emotion/react';
import { Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import History from '../screens/History/History';
import Order from '../screens/Order/Order';

export type TabsNavigationParamList = {
  Order: undefined;
  'Shipped Orders': undefined;
};

const Tabs = createBottomTabNavigator<TabsNavigationParamList>();

export default function TabsNavigation() {
  const theme = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.text.secondary,
        tabBarInactiveTintColor: theme.text.default,
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: theme.background.default, borderTopWidth: 0 },
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Order':
              return <Octicons name={'package'} size={size} color={color} />;
            case 'Shipped Orders':
            default:
              return <Octicons name={'checklist'} size={size} color={color} />;
          }
        },
      })}
    >
      <Tabs.Screen name="Order" component={Order} />
      <Tabs.Screen name="Shipped Orders" component={History} />
    </Tabs.Navigator>
  );
}
