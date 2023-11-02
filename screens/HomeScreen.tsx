import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import Header from "../components/Header";
import Search from "../components/Search";
import HotNews from "../components/HotNews";
import Popular from "../components/Popular";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          padding: Spacing.padding.base,
        }}
      >
        <Header />
        <Search />
        <HotNews />
        <Popular />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
