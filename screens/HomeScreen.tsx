import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackType } from "../types";

const HomeScreen: React.FC = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackType>>();

  return (
    <SafeAreaView>
      <Text style={{ margin: Spacing.margin.lg, fontSize: FontSize.lg }}>
        HomeScreen
      </Text>
      <TouchableOpacity
        onPress={() => navigate("Details", { news: {} })}
        style={{
          padding: Spacing.padding.base,
          backgroundColor: Colors.primary,
          margin: Spacing.margin.lg,
          borderRadius: Spacing.borderRadius.base,
        }}
      >
        <Text
          style={{
            color: Colors.onPrimary,
          }}
        >
          Details
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
