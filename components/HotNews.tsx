import { View, Text } from "react-native";
import React from "react";
import HorizontalItems from "./HorizontalItems";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import { Channels } from "../data";

const HotNews: React.FC = () => {
  return (
    <View>
      <Text
        style={{
          fontFamily: Font["poppins-bold"],
          fontSize: FontSize.xl,
          marginBottom: Spacing.margin.base,
        }}
      >
        Hot News
      </Text>
      <HorizontalItems items={Channels} showAddButton />
    </View>
  );
};

export default HotNews;
