/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import DetailScreen from "../screens/DetailScreen";
import NewsScreen from "../screens/NewsScreen";
import HomeScreen from "../screens/HomeScreen";

import {
  HomeNavigatorType,
  NewsNavigatorType,
  RootStackType,
  TabNavigatorType,
} from "../types";
import SettingsScreen from "../screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons, Octicons } from "@expo/vector-icons";
import Spacing from "../constants/Spacing";
import { theme } from "../constants/Colors";
import useColors from "../hooks/useColors";
import { View } from "react-native";

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackType>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='HomeTabs' component={TabNavigator} />
      <Stack.Screen name='Details' component={DetailScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator<TabNavigatorType>();

function TabNavigator() {
  const colors = useColors();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ size, focused }) => {
          switch (route.name) {
            case "HomeNavigator":
              return (
                <Octicons
                  name='home'
                  size={size}
                  color={focused ? colors.onPrimary : colors.textGray}
                />
              );
            case "NewsNavigator":
              return (
                <FontAwesome5
                  name='list-alt'
                  size={size}
                  color={focused ? colors.onPrimary : colors.textGray}
                />
              );
            case "SettingsScreen":
              return (
                <Ionicons
                  name='settings-outline'
                  size={size}
                  color={focused ? colors.onPrimary : colors.textGray}
                />
              );
          }
        },
        tabBarStyle: {
          backgroundColor: colors.primary,
          marginBottom: Spacing.margin.xl,
          paddingBottom: 0,
          marginHorizontal: Spacing.margin.xl,
          borderRadius: Spacing.borderRadius.xxl,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name='HomeNavigator' component={HomeNavigator} />
      <Tab.Screen name='NewsNavigator' component={NewsNavigator} />
      <Tab.Screen name='SettingsScreen' component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const HomeStack = createNativeStackNavigator<HomeNavigatorType>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name='Home' component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const NewsStack = createNativeStackNavigator<NewsNavigatorType>();

function NewsNavigator() {
  return (
    <NewsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <NewsStack.Screen name='News' component={NewsScreen} />
    </NewsStack.Navigator>
  );
}
