import { View } from "react-native";
import React from "react";
import useColors from "../hooks/useColors";
import Spacing from "../constants/Spacing";

const Dot: React.FC = () => {
  const colors = useColors();
  return (
    <View
      style={{
        width: 5,
        height: 5,
        backgroundColor: colors.textGray,
        marginHorizontal: Spacing.margin.base,
        borderRadius: Spacing.borderRadius.base,
      }}
    />
  );
};

export default Dot;
