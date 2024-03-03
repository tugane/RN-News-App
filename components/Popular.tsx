import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import useColors from "../hooks/useColors";
import HorizontalNewsList from "./HorizontalNewsList";

const Popular: React.FC = () => {
  const colors = useColors();
  return (
    <View
      style={{
        paddingVertical: Spacing.margin.lg,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: FontSize.lg,
            fontFamily: Font["poppins-bold"],
          }}
        >
          Popular
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: colors.secondary,
              fontFamily: Font["poppins-semiBold"],
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: Spacing.padding.base,
        }}
          >
              <HorizontalNewsList />
      </View>
    </View>
  );
};

export default Popular;
