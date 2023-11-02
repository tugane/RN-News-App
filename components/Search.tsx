import { View, Text, TextInput } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import { Ionicons } from "@expo/vector-icons";
import FontSize from "../constants/FontSize";
import useColors from "../hooks/useColors";

const Search: React.FC = () => {
  const colors = useColors();
  return (
    <View
      style={{
        marginVertical: Spacing.margin.lg,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.lightBackground,
        padding: Spacing.padding.base,
        borderRadius: Spacing.borderRadius.base,
      }}
    >
      <Ionicons
        name='search-outline'
        size={FontSize.xl}
        color={colors.textGray}
      />
      <TextInput
        style={{
          fontSize: FontSize.lg,
          width: "85%",
          marginLeft: Spacing.margin.base,
        }}
        placeholder='Search'
        placeholderTextColor={colors.textGray}
      />
    </View>
  );
};

export default Search;
