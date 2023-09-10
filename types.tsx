/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { News } from "./data";

export type RootStackType = {
  HomeTabs: undefined;
  Details: { news: News };
};

export type TabNavigatorType = {
  HomeNavigator: undefined;
  NewsNavigator: undefined;
  SettingsScreen: undefined;
};

export type HomeNavigatorType = {
  Home: undefined;
};

export type NewsNavigatorType = {
  News: undefined;
};
