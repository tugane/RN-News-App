import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";

const NewsScreen = () => {
  return (
    <SafeAreaView>
      <Text style={{ margin: Spacing.margin.lg, fontSize: FontSize.lg }}>
        NewsScreen
      </Text>
    </SafeAreaView>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({});
