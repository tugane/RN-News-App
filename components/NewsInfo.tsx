import { View, Text } from "react-native";
import React from "react";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import useColors from "../hooks/useColors";
import Dot from "./Dot";

type Props = {
  leftText: string;
  rightText: string;
};

const NewsInfo: React.FC<Props> = ({ leftText, rightText }) => {
  const colors = useColors();
  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: Spacing.margin.base,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: FontSize.sm,
          color: colors.textGray,
        }}
      >
        {leftText}
      </Text>
      <Dot />
      <Text
        style={{
          fontSize: FontSize.sm,
          color: colors.textGray,
        }}
      >
        {rightText}
      </Text>
    </View>
  );
};

export default NewsInfo;
